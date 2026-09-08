// server/models/Media.js
// Media metadata. The frontend does not currently consume this collection, but
// GET /api/media is part of the documented API contract (README + api.js).
import mongoose from 'mongoose'

const mediaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    type: { type: String, default: 'video' },
    url: { type: String, default: '' },
    thumbnail: { type: String, default: '' },
    description: { type: String, default: '' },
    status: { type: String, enum: ['published', 'draft'], default: 'published' },
  },
  { timestamps: true },
)

mediaSchema.index({ status: 1, type: 1 })

export default mongoose.model('Media', mediaSchema)