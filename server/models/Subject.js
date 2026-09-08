// server/models/Subject.js
// A subject belongs to one class. Sits between class and chapter.
import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema(
  {
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
      index: true,
    },
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, lowercase: true },
    description: { type: String, default: '' },
    status: { type: String, enum: ['published', 'draft'], default: 'published' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

subjectSchema.index({ classId: 1, slug: 1 }, { unique: true })
subjectSchema.index({ classId: 1, status: 1, order: 1 })

export default mongoose.model('Subject', subjectSchema)