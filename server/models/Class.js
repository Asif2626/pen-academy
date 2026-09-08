// server/models/Class.js
// A grade / class (e.g. "Grade 9", "Primer"). Top of the curriculum tree.
import mongoose from 'mongoose'

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, lowercase: true },
    shortName: { type: String, trim: true, default: '' },
    description: { type: String, default: '' },
    status: { type: String, enum: ['published', 'draft'], default: 'published' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

classSchema.index({ slug: 1 }, { unique: true })
classSchema.index({ status: 1, order: 1 })

export default mongoose.model('Class', classSchema)