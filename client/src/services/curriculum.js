// src/services/curriculum.js
// Loads the curriculum hierarchy from the backend API and normalises the
// response into the shape the existing course pages/components expect (the
// same shape that used to live in src/data/courses.js).
//
// The tree from GET /api/courses/tree is cached in memory so the
// Courses / Grade / Subject / Chapter / Lecture pages share a single request.
import { api, getData } from './api'
import { pick, idOf } from './transform'

let cachedTree = null
let treeRequest = null

// ------------------------------------------------------------------
// Normalisers  (API shape -> the old src/data/courses.js shape)
// ------------------------------------------------------------------
function normalizeLecture(rawLecture, { course, subject, chapter }) {
  return {
    id: idOf(rawLecture) || pick(rawLecture, ['code', 'slug']),
    slug: pick(rawLecture, ['slug']),
    code: pick(rawLecture, ['code']),
    title: pick(rawLecture, ['title']),
    description: pick(rawLecture, ['description']),
    duration: pick(rawLecture, ['duration'], 'Video'),
    videoUrl: pick(rawLecture, ['videoUrl', 'url']),
    image: pick(rawLecture, ['image', 'thumbnail']),
    emoji: '🎬',
    color: 'from-brand-600 to-brand-800',
    courseSlug: course.slug,
    courseName: course.name,
    subjectSlug: subject.slug,
    subjectName: subject.name,
    chapterSlug: chapter.slug,
    chapterName: chapter.name,
  }
}

function normalizeChapter(rawChapter, context) {
  const name = pick(rawChapter, ['name'])
  const slug = pick(rawChapter, ['slug'])
  const chapter = {
    slug,
    name,
    description: pick(rawChapter, ['description']),
    lectures: [],
  }
  chapter.lectures = (Array.isArray(rawChapter?.lectures) ? rawChapter.lectures : []).map(
    (rawLecture) => normalizeLecture(rawLecture, { ...context, chapter }),
  )
  return chapter
}

function normalizeSubject(rawSubject, course) {
  const name = pick(rawSubject, ['name'])
  const slug = pick(rawSubject, ['slug'])
  const subject = {
    slug,
    name,
    description: pick(rawSubject, ['description']),
    chapters: [],
  }
  subject.chapters = (Array.isArray(rawSubject?.chapters) ? rawSubject.chapters : []).map(
    (rawChapter) => normalizeChapter(rawChapter, { course, subject }),
  )
  return subject
}

function normalizeClass(rawClass) {
  const name = pick(rawClass, ['name'])
  const slug = pick(rawClass, ['slug'])
  const course = {
    slug,
    name,
    shortName: pick(rawClass, ['shortName'], name),
    description: pick(rawClass, ['description']),
    subjects: [],
    books: Array.isArray(rawClass?.books) ? rawClass.books : [],
  }
  course.subjects = (Array.isArray(rawClass?.subjects) ? rawClass.subjects : []).map(
    (rawSubject) => normalizeSubject(rawSubject, course),
  )
  return course
}

// ------------------------------------------------------------------
// Build the { courses, courseOrder } object used by the course pages.
// Accepts the tree payload whether it is a bare array of classes or
// wrapped in a container object.
// ------------------------------------------------------------------
function buildTree(payload) {
  let rawClasses = []
  if (Array.isArray(payload)) {
    rawClasses = payload
  } else if (payload && Array.isArray(payload.classes)) {
    rawClasses = payload.classes
  } else if (payload && Array.isArray(payload.data)) {
    rawClasses = payload.data
  }

  const courses = {}
  const courseOrder = []
  const seen = new Set()

  rawClasses.forEach((rawClass) => {
    const course = normalizeClass(rawClass)
    if (!course.slug) return
    if (seen.has(course.slug)) {
      // Defensive: merge duplicate slugs instead of overwriting.
      courses[course.slug].subjects.push(...course.subjects)
      if (course.books.length) courses[course.slug].books.push(...course.books)
      return
    }
    seen.add(course.slug)
    courses[course.slug] = course
    courseOrder.push(course.slug)
  })

  return { courses, courseOrder }
}

// ------------------------------------------------------------------
// Public API
// ------------------------------------------------------------------
export async function getCurriculum({ refresh = false } = {}) {
  if (cachedTree && !refresh) return cachedTree
  if (!refresh && treeRequest) return treeRequest

  const request = getData(api.getCurriculumTree())
    .then(buildTree)
    .then((result) => {
      cachedTree = result
      return result
    })
    .finally(() => {
      treeRequest = null
    })

  treeRequest = request
  return request
}

// Flatten every lecture across all courses into an id -> lecture lookup.
// Also indexes each lecture by its `code` so permalinks like /lecture/lec-* work.
export function flattenLectures({ courses = {} } = {}) {
  const lectures = {}
  Object.values(courses).forEach((course) => {
    ;(course.subjects || []).forEach((subject) => {
      ;(subject.chapters || []).forEach((chapter) => {
        ;(chapter.lectures || []).forEach((lec) => {
          if (lec.id) lectures[lec.id] = lec
          if (lec.code && !lectures[lec.code]) lectures[lec.code] = lec
        })
      })
    })
  })
  return lectures
}