// server/models/Lecture.js
// A single video lecture inside a chapter. `code` is a stable human-friendly
// unique key (e.g. lec-math9-001) used by permalink lookups.
import mongoose from 'mongoose'

const lectureSchema = new mongoose.Schema(
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
    chapterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapter',
      required: true,
      index: true,
    },
    code: { type: String, trim: true, unique: true, sparse: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    duration: { type: String, default: 'Video' },
    videoUrl: { type: String, default: '' },
    image: { type: String, default: '' },
    status: { type: String, enum: ['published', 'draft'], default: 'published' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

lectureSchema.index({ chapterId: 1, status: 1, order: 1 })

export default mongoose.model('Lecture', lectureSchema)