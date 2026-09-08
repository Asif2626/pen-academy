// server/controllers/classController.js
import Class from '../models/Class.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'
import { notFound } from '../utils/httpErrors.js'

const statusFilter = (query) => ({ status: query.status || 'published' })

export const listClasses = asyncHandler(async (req, res) => {
  const classes = await Class.find(statusFilter(req.query))
    .sort({ order: 1, name: 1 })
    .lean()
  res.json({ success: true, data: serialize(classes) })
})

export const getClassBySlug = asyncHandler(async (req, res) => {
  const cls = await Class.findOne({
    slug: req.params.slug,
    status: req.query.status || 'published',
  }).lean()

  if (!cls) throw notFound(`No class found with slug "${req.params.slug}".`)
  res.json({ success: true, data: serialize(cls) })
})

export const getClassById = asyncHandler(async (req, res) => {
  const cls = await Class.findById(req.params.id).lean()
  if (!cls) throw notFound(`No class found with id "${req.params.id}".`)
  res.json({ success: true, data: serialize(cls) })
})