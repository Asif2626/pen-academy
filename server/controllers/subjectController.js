// server/controllers/subjectController.js
import Subject from '../models/Subject.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'
import { notFound } from '../utils/httpErrors.js'

export const listSubjects = asyncHandler(async (req, res) => {
  const filter = { status: req.query.status || 'published' }
  if (req.query.classId) filter.classId = req.query.classId

  const subjects = await Subject.find(filter)
    .sort({ order: 1, name: 1 })
    .lean()

  res.json({ success: true, data: serialize(subjects) })
})

export const getSubjectBySlug = asyncHandler(async (req, res) => {
  const filter = {
    slug: req.params.slug,
    status: req.query.status || 'published',
  }
  if (req.query.classId) filter.classId = req.query.classId

  const subject = await Subject.findOne(filter).lean()
  if (!subject) {
    throw notFound(`No subject found with slug "${req.params.slug}".`)
  }
  res.json({ success: true, data: serialize(subject) })
})

export const getSubjectById = asyncHandler(async (req, res) => {
  const subject = await Subject.findById(req.params.id).lean()
  if (!subject) throw notFound(`No subject found with id "${req.params.id}".`)
  res.json({ success: true, data: serialize(subject) })
})