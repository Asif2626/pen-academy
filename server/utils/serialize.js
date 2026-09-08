// server/utils/serialize.js
// The README contract: every resource returned by slug lookups and the
// curriculum tree includes an `id` alias (string form of `_id`) alongside
// `_id`. This helper converts Mongoose docs / lean objects into that
// frontend-friendly shape and stringifies any ObjectId fields so the JSON
// payload is plain and predictable.
import mongoose from 'mongoose'

const isObjectId = (value) =>
  value instanceof mongoose.Types.ObjectId ||
  (value && typeof value === 'object' && typeof value.$oid === 'string')

function clean(value) {
  if (value === null || value === undefined) return value
  if (isObjectId(value)) return String(value)
  if (value instanceof Date) return value.toISOString()
  if (Array.isArray(value)) return value.map(clean)
  if (typeof value === 'object') {
    const out = {}
    for (const [key, item] of Object.entries(value)) {
      out[key] = clean(item)
    }
    return out
  }
  return value
}

export function serialize(doc) {
  if (Array.isArray(doc)) return doc.map((item) => serialize(item))
  if (!doc || typeof doc !== 'object') return doc

  const obj =
    typeof doc.toObject === 'function' ? doc.toObject() : { ...doc }
  const cleaned = clean(obj)

  if (cleaned._id !== undefined) {
    cleaned.id = String(cleaned._id)
  }
  delete cleaned.__v
  return cleaned
}