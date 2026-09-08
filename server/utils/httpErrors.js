// server/utils/httpErrors.js
// Small typed-error helpers so controllers can signal HTTP status codes that
// the central error middleware turns into { success: false, message }.

export class HttpError extends Error {
  constructor(status, message) {
    super(message)
    this.status = status
    this.name = 'HttpError'
  }
}

export const notFound = (message) => new HttpError(404, message)
export const badRequest = (message) => new HttpError(400, message)