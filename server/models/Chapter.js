// server/models/Chapter.js
// A chapter belongs to one subject (and transitively one class).
import mongoose from 'mongoose'

const chapterSchema = new mongoose.Schema(
  {
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
      index: true,
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
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

chapterSchema.index({ subjectId: 1, slug: 1 }, { unique: true })
chapterSchema.index({ subjectId: 1, status: 1, order: 1 })

export default mongoose.model('Chapter', chapterSchema)