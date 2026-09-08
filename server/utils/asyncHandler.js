// server/utils/asyncHandler.js
// Wraps an async Express controller so thrown errors are forwarded to the
// central error middleware (no try/catch boilerplate in every controller).

export const asyncHandler = (handler) => (req, res, next) =>
  Promise.resolve(handler(req, res, next)).catch(next)