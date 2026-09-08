// server/controllers/mediaController.js
import Media from '../models/Media.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'

// Minimal read-only endpoint for the documented /api/media contract.
// The frontend does not currently consume media records.
export const listMedia = asyncHandler(async (req, res) => {
  const filter = { status: req.query.status || 'published' }
  if (req.query.type) filter.type = req.query.type

  const media = await Media.find(filter)
    .sort({ createdAt: -1 })
    .lean()

  res.json({ success: true, data: serialize(media) })
})