// server/models/Book.js
// Textbook / book record. `pdf` references a real downloadable file when one
// exists and is left empty otherwise (the frontend hides books without a file).
// `classId` links to the curriculum tree; `className` is the denormalised
// display label used by the Books page grouping (e.g. "KG", "Grade 1").
import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      default: null,
      index: true,
    },
    className: { type: String, trim: true, default: '' },
    title: { type: String, required: true, trim: true },
    subject: { type: String, trim: true, default: '' },
    image: { type: String, default: '' },
    pdf: { type: String, default: '' },
    status: { type: String, enum: ['published', 'draft'], default: 'published' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

bookSchema.index({ status: 1, className: 1, order: 1 })

export default mongoose.model('Book', bookSchema)