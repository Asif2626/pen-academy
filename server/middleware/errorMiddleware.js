// server/middleware/errorMiddleware.js
// Centralised error handling: 404 for unknown routes and a single JSON error
// envelope for everything else. Production responses never include stack
// traces or internal details.
import mongoose from 'mongoose'

export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  })
}

export function errorHandler(err, req, res, next) {
  let status = err.status || 500
  let message = err.message || 'Something went wrong'

  if (err instanceof mongoose.Error.ValidationError) {
    status = 400
  } else if (err instanceof mongoose.Error.CastError) {
    status = 400
    message = 'Invalid identifier provided.'
  } else if (err && err.code === 11000) {
    status = 409
    message = 'A record with that value already exists.'
  }

  if (status >= 500) {
    // Log internal details server-side only.
    console.error(`[${new Date().toISOString()}]`, err.stack || err)
    message = 'Something went wrong'
  }

  res.status(status).json({ success: false, message })
}