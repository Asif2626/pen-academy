// src/services/content.js
// Content collections from the backend API, normalised into the shapes the
// existing pages/components expect. Each collection has a light in-memory
// cache so list + detail pages share requests.
import { api, getData } from './api'
import { pick, idOf, toParagraphs, humanize } from './transform'

// ------------------------------------------------------------------
// Blogs
// ------------------------------------------------------------------
let cachedBlogs = null
let blogsRequest = null

function normalizeBlog(raw) {
  if (!raw) return null
  const content = toParagraphs(raw.content || raw.body)
  const excerpt = pick(raw, ['excerpt', 'summary']) || content[0]?.slice(0, 220) || ''
  return {
    id: idOf(raw),
    slug: pick(raw, ['slug']) || idOf(raw),
    title: pick(raw, ['title']),
    date: pick(raw, ['date', 'publishedAt', 'createdAt']),
    author: pick(raw, ['author'], 'PEN Academy'),
    category: pick(raw, ['category']),
    image: pick(raw, ['image', 'coverImage', 'thumbnail']),
    pdf: pick(raw, ['pdf', 'pdfUrl', 'fileUrl']),
    color: pick(raw, ['color']),
    excerpt,
    content,
  }
}

export async function getBlogs({ refresh = false } = {}) {
  if (cachedBlogs && !refresh) return cachedBlogs
  if (!refresh && blogsRequest) return blogsRequest

  const request = getData(api.getBlogs())
    .then((payload) => {
      let list = []
      if (Array.isArray(payload)) list = payload
      else if (payload && Array.isArray(payload.blogs)) list = payload.blogs
      else if (payload && Array.isArray(payload.data)) list = payload.data
      cachedBlogs = list.map(normalizeBlog).filter(Boolean)
      return cachedBlogs
    })
    .finally(() => {
      blogsRequest = null
    })

  blogsRequest = request
  return request
}

export async function getBlogBySlug(slug, { refresh = false } = {}) {
  // Serve from the cached list when possible (fast + keeps related posts
  // consistent without a second request).
  if (cachedBlogs && !refresh) {
    const found = cachedBlogs.find((blog) => blog.slug === slug)
    if (found) return found
  }

  const raw = await getData(api.getBlogBySlug(slug))
  const blog = raw?.blog ?? raw?.data ?? raw
  return normalizeBlog(blog)
}

// ------------------------------------------------------------------
// Team
// ------------------------------------------------------------------
export async function getTeam({ refresh = false } = {}) {
  const payload = await getData(api.getTeam())
  let list = []
  if (Array.isArray(payload)) list = payload
  else if (payload && Array.isArray(payload.team)) list = payload.team
  else if (payload && Array.isArray(payload.data)) list = payload.data

  return list
    .map((raw) => ({
      id: idOf(raw) || pick(raw, ['slug']),
      name: pick(raw, ['name']),
      designation: pick(raw, ['designation', 'role']),
      image: pick(raw, ['image', 'photo', 'avatar', 'picture']),
      linkedin: pick(raw, ['linkedin', 'linkedIn', 'linkedinUrl']),
    }))
    .filter((member) => member.name)
}

// ------------------------------------------------------------------
// Publications
// ------------------------------------------------------------------
const PUBLICATION_CATEGORIES = [
  { id: 'international-journals', label: 'International Journals', match: /international/i },
  { id: 'united-nations-policy-reports', label: 'United Nations Policy Reports', match: /united nations/i },
  { id: 'books-chapters', label: 'Books & Chapters', match: /book/i },
  { id: 'articles', label: 'Articles', match: /article/i },
]

export async function getPublications({ refresh = false } = {}) {
  const payload = await getData(api.getPublications())

  // Accept either a flat array or a grouped { categoryId: [items] } object.
  let items = []
  if (Array.isArray(payload)) {
    items = payload
  } else if (payload && typeof payload === 'object') {
    if (Array.isArray(payload.publications)) items = payload.publications
    else if (Array.isArray(payload.data)) items = payload.data
    else if (Array.isArray(payload.results)) items = payload.results
    else items = Object.values(payload).flatMap((value) => (Array.isArray(value) ? value : []))
  }

  const groups = {}
  items.forEach((raw) => {
    const item = {
      id: idOf(raw) || pick(raw, ['slug', 'title']),
      title: pick(raw, ['title']),
      authors: pick(raw, ['authors', 'author']),
      year: pick(raw, ['year']),
      journal: pick(raw, ['journal', 'publisher', 'publication']),
      url: pick(raw, ['url', 'link', 'pdf']),
    }
    if (!item.title) return

    const rawCategory = pick(raw, ['category', 'categorySlug'])
    let key = ''
    if (rawCategory) {
      const meta = PUBLICATION_CATEGORIES.find((cat) => cat.match.test(String(rawCategory)))
      key = meta ? meta.id : String(rawCategory)
    }
    if (!key) key = 'articles'
    if (!groups[key]) groups[key] = []
    groups[key].push(item)
  })

  const categories = []
  Object.keys(groups).forEach((key) => {
    const meta = PUBLICATION_CATEGORIES.find((cat) => cat.id === key)
    categories.push({ id: key, label: meta ? meta.label : humanize(key) })
  })

  return { publications: groups, categories }
}

// ------------------------------------------------------------------
// Books
// ------------------------------------------------------------------
function normalizeBook(raw) {
  if (!raw) return null
  return {
    id: idOf(raw),
    title: pick(raw, ['title']),
    className: pick(raw, ['className', 'class', 'grade', 'gradeName']),
    subject: pick(raw, ['subject']),
    image: pick(raw, ['image', 'coverImage', 'thumbnail']),
    pdf: pick(raw, ['pdf', 'pdfUrl', 'file', 'fileUrl']),
  }
}

export async function getBooks({ refresh = false } = {}) {
  const payload = await getData(api.getBooks())
  let list = []
  if (Array.isArray(payload)) list = payload
  else if (payload && Array.isArray(payload.books)) list = payload.books
  else if (payload && Array.isArray(payload.data)) list = payload.data

  const books = list.map(normalizeBook).filter(Boolean)

  // Group by class name (display order = first-seen API order).
  const groups = {}
  books.forEach((book) => {
    const key = book.className || 'Books'
    if (!groups[key]) groups[key] = []
    groups[key].push(book)
  })

  return { books, groups, order: Object.keys(groups) }
}