// server/controllers/chapterController.js
import Chapter from '../models/Chapter.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'
import { notFound } from '../utils/httpErrors.js'

export const listChapters = asyncHandler(async (req, res) => {
  const filter = { status: req.query.status || 'published' }
  if (req.query.classId) filter.classId = req.query.classId
  if (req.query.subjectId) filter.subjectId = req.query.subjectId

  const chapters = await Chapter.find(filter)
    .sort({ order: 1, name: 1 })
    .lean()

  res.json({ success: true, data: serialize(chapters) })
})

export const getChapterBySlug = asyncHandler(async (req, res) => {
  const filter = {
    slug: req.params.slug,
    status: req.query.status || 'published',
  }
  if (req.query.classId) filter.classId = req.query.classId
  if (req.query.subjectId) filter.subjectId = req.query.subjectId

  const chapter = await Chapter.findOne(filter).lean()
  if (!chapter) throw notFound(`No chapter found with slug "${req.params.slug}".`)
  res.json({ success: true, data: serialize(chapter) })
})

export const getChapterById = asyncHandler(async (req, res) => {
  const chapter = await Chapter.findById(req.params.id).lean()
  if (!chapter) throw notFound(`No chapter found with id "${req.params.id}".`)
  res.json({ success: true, data: serialize(chapter) })
})