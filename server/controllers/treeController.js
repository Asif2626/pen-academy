// server/controllers/treeController.js
// Builds the curriculum tree consumed by the frontend course flow:
//   /api/courses/tree            -> all classes -> subjects -> chapters -> lectures (+ books)
//   /api/courses/tree/:classSlug -> the same shape for a single class
//
// The frontend normaliser (services/curriculum.js) accepts either a bare
// array of classes or a container object, and every node includes an `id`
// alias via serialize().
import Class from '../models/Class.js'
import Subject from '../models/Subject.js'
import Chapter from '../models/Chapter.js'
import Lecture from '../models/Lecture.js'
import Book from '../models/Book.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'
import { notFound } from '../utils/httpErrors.js'

const PUBLISHED = { status: 'published' }

function groupBy(items, field) {
  const groups = new Map()
  items.forEach((item) => {
    const key = String(item[field])
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(item)
  })
  return groups
}

async function buildTree(classSlug) {
  const classes = await Class.find(classSlug ? { slug: classSlug, ...PUBLISHED } : PUBLISHED)
    .sort({ order: 1, name: 1 })
    .lean()

  if (classSlug && classes.length === 0) {
    throw notFound(`No class found with slug "${classSlug}".`)
  }

  const classIds = classes.map((c) => c._id)
  const subjects = await Subject.find({ classId: { $in: classIds }, ...PUBLISHED })
    .sort({ order: 1, name: 1 })
    .lean()
  const subjectIds = subjects.map((s) => s._id)
  const chapters = await Chapter.find({ subjectId: { $in: subjectIds }, ...PUBLISHED })
    .sort({ order: 1, name: 1 })
    .lean()
  const chapterIds = chapters.map((c) => c._id)
  const lectures = await Lecture.find({ chapterId: { $in: chapterIds }, ...PUBLISHED })
    .sort({ order: 1, title: 1 })
    .lean()
  const books = await Book.find({ classId: { $in: classIds }, ...PUBLISHED })
    .sort({ order: 1, title: 1 })
    .lean()

  const lecturesByChapter = groupBy(lectures, 'chapterId')
  const chaptersBySubject = groupBy(chapters, 'subjectId')
  const subjectsByClass = groupBy(subjects, 'classId')
  const booksByClass = groupBy(books, 'classId')

  return classes.map((cls) => ({
    ...serialize(cls),
    subjects: (subjectsByClass.get(String(cls._id)) || []).map((subject) => ({
      ...serialize(subject),
      chapters: (chaptersBySubject.get(String(subject._id)) || []).map((chapter) => ({
        ...serialize(chapter),
        lectures: (lecturesByChapter.get(String(chapter._id)) || []).map(serialize),
      })),
    })),
    books: (booksByClass.get(String(cls._id)) || []).map(serialize),
  }))
}

export const getCurriculumTree = asyncHandler(async (req, res) => {
  const tree = await buildTree(undefined)
  res.json({ success: true, data: tree })
})

export const getCurriculumTreeBySlug = asyncHandler(async (req, res) => {
  const tree = await buildTree(req.params.classSlug)
  res.json({ success: true, data: tree })
})