// server/controllers/teamController.js
import TeamMember from '../models/TeamMember.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'

export const listTeam = asyncHandler(async (req, res) => {
  const members = await TeamMember.find({ status: req.query.status || 'published' })
    .sort({ order: 1, name: 1 })
    .lean()

  res.json({ success: true, data: serialize(members) })
})