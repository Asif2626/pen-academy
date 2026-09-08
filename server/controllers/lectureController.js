// server/controllers/lectureController.js
import Lecture from '../models/Lecture.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'
import { notFound } from '../utils/httpErrors.js'

export const listLectures = asyncHandler(async (req, res) => {
  const filter = { status: req.query.status || 'published' }
  if (req.query.chapterId) filter.chapterId = req.query.chapterId
  if (req.query.subjectId) filter.subjectId = req.query.subjectId
  if (req.query.classId) filter.classId = req.query.classId

  const lectures = await Lecture.find(filter)
    .sort({ order: 1, title: 1 })
    .lean()

  res.json({ success: true, data: serialize(lectures) })
})

export const getLectureBySlug = asyncHandler(async (req, res) => {
  const filter = {
    slug: req.params.slug,
    status: req.query.status || 'published',
  }
  if (req.query.chapterId) filter.chapterId = req.query.chapterId
  if (req.query.subjectId) filter.subjectId = req.query.subjectId
  if (req.query.classId) filter.classId = req.query.classId

  const lecture = await Lecture.findOne(filter).lean()
  if (!lecture) throw notFound(`No lecture found with slug "${req.params.slug}".`)
  res.json({ success: true, data: serialize(lecture) })
})

export const getLectureByCode = asyncHandler(async (req, res) => {
  const lecture = await Lecture.findOne({
    code: req.params.code,
    status: req.query.status || 'published',
  }).lean()

  if (!lecture) throw notFound(`No lecture found with code "${req.params.code}".`)
  res.json({ success: true, data: serialize(lecture) })
})

export const getLectureById = asyncHandler(async (req, res) => {
  const lecture = await Lecture.findById(req.params.id).lean()
  if (!lecture) throw notFound(`No lecture found with id "${req.params.id}".`)
  res.json({ success: true, data: serialize(lecture) })
})