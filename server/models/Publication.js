// server/models/Publication.js
// Academic / policy publication. `category` uses the labels the frontend
// publication normaliser groups by ("International Journal", "United Nations
// Policy Report", "Books & Chapters", "Article").
import mongoose from 'mongoose'

const publicationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    authors: { type: String, default: '' },
    year: { type: String, default: '' },
    journal: { type: String, default: '' },
    url: { type: String, default: '' },
    category: { type: String, default: 'Article' },
    status: { type: String, enum: ['published', 'draft'], default: 'published' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

publicationSchema.index({ status: 1, order: 1 })
publicationSchema.index({ category: 1, status: 1 })

export default mongoose.model('Publication', publicationSchema)