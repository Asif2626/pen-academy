// src/services/transform.js
// Shared field-normalisation helpers used when mapping API responses into the
// shapes the existing components already expect. Tiny and dependency-free.
export const pick = (item, keys, fallback = '') => {
  if (item && typeof item === 'object') {
    for (const key of keys) {
      const value = item[key]
      if (value !== undefined && value !== null && value !== '') return value
    }
  }
  return fallback
}

export const idOf = (item) => {
  const value = item && (item.id ?? item._id)
  return value === undefined || value === null ? '' : String(value)
}

// Normalise API content (array of paragraphs or a string) into the array of
// paragraphs the blog/pages renderers expect.
export const toParagraphs = (content) => {
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

// "international-journals" -> "International journals"
export const humanize = (value) =>
  String(value || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase())