// server/controllers/bookController.js
import Book from '../models/Book.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { serialize } from '../utils/serialize.js'

export const listBooks = asyncHandler(async (req, res) => {
  const filter = { status: req.query.status || 'published' }
  if (req.query.classId) filter.classId = req.query.classId
  if (req.query.subjectId) filter.subject = req.query.subjectId

  const books = await Book.find(filter)
    .sort({ className: 1, order: 1, title: 1 })
    .lean()

  res.json({ success: true, data: serialize(books) })
})