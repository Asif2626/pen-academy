// server/models/TeamMember.js
// Team member profile shown on the /team page.
import mongoose from 'mongoose'

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    designation: { type: String, default: '' },
    image: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    bio: { type: String, default: '' },
    status: { type: String, enum: ['published', 'draft'], default: 'published' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

teamMemberSchema.index({ status: 1, order: 1 })

export default mongoose.model('TeamMember', teamMemberSchema)