// server/utils/seed-helpers.js
// Shared helpers used by the seed script and controllers to normalise content
// into the frontend-friendly paragraph-array shape.

export function toParagraphs(content) {
  if (Array.isArray(content)) {
    return content.map((part) => String(part).trim()).filter(Boolean)
  }
  if (typeof content === 'string' && content.trim()) {
    return content
      .split(/\r?\n\s*\r?\n|\r?\n/)
      .map((part) => part.trim())
      .filter(Boolean)
  }
  return []
}