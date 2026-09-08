// server/controllers/blogController.js
import Blog from '../models/Blog.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'
import { notFound } from '../utils/httpErrors.js'
import { toParagraphs } from '../utils/seed-helpers.js'

// Normalise `content` into the array-of-paragraphs shape the frontend expects,
// whatever form it was saved in.
function normalizeContent(raw) {
  const content = raw.content === undefined ? raw.body : raw.content
  return toParagraphs(content)
}

export const listBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ status: req.query.status || 'published' })
    .sort({ date: -1 })
    .lean()

  res.json({
    success: true,
    data: serialize(blogs).map((blog) => ({
      ...blog,
      content: normalizeContent(blog),
    })),
  })
})

export const getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({
    slug: req.params.slug,
    status: req.query.status || 'published',
  }).lean()

  if (!blog) throw notFound(`No blog post found with slug "${req.params.slug}".`)
  const data = serialize(blog)
  data.content = normalizeContent(data)
  res.json({ success: true, data })
})