// server/middleware/validateObjectIds.js
// Validates that named route/query parameters are valid MongoDB ObjectIds.
// Prevents malformed ids from reaching the database layer.
import mongoose from 'mongoose'
import { badRequest } from '../utils/httpErrors.js'

export const validateObjectIds =
  (...names) =>
  (req, res, next) => {
    for (const name of names) {
      const value = req.params[name] || req.query[name]
      if (value && !mongoose.Types.ObjectId.isValid(value)) {
        return next(badRequest(`Invalid ${name}: "${value}".`))
      }
    }
    next()
  }