// server/models/Blog.js
// Blog post. `content` is stored as an array of paragraphs (the shape the
// frontend normaliser produces via toParagraphs); a plain string is also
// accepted by the serializer path used in the controller.
import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, lowercase: true },
    excerpt: { type: String, default: '' },
    content: { type: mongoose.Schema.Types.Mixed, default: [] },
    category: { type: String, default: '' },
    date: { type: Date, default: () => new Date() },
    author: { type: String, default: 'PEN Academy' },
    image: { type: String, default: '' },
    pdf: { type: String, default: '' },
    color: { type: String, default: '' },
    status: { type: String, enum: ['published', 'draft'], default: 'published' },
  },
  { timestamps: true },
)

blogSchema.index({ slug: 1 }, { unique: true })
blogSchema.index({ status: 1, date: -1 })

export default mongoose.model('Blog', blogSchema)