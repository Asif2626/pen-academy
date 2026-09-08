// server/controllers/publicationController.js
import Publication from '../models/Publication.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'

export const listPublications = asyncHandler(async (req, res) => {
  const filter = { status: req.query.status || 'published' }
  if (req.query.category) filter.category = req.query.category

  const publications = await Publication.find(filter)
    .sort({ order: 1, year: -1 })
    .lean()

  res.json({ success: true, data: serialize(publications) })
})