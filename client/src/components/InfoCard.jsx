import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Right-facing play triangle used by the video affordances.
 */
function PlayIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 4L8 20L20 12Z" />
    </svg>
  )
}

/**
 * YouTube affordances layered over the media column: centred red play button,
 * "Watch on YouTube" pill and the external-link icon.
 */
function VideoOverlay({ videoUrl }) {
  if (!videoUrl) return null

  return (
    <>
      {/* Centred red YouTube play button */}
      <span
        className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-800 text-white shadow-lg ring-4 ring-white/90 transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      >
        <PlayIcon className="ml-0.5 h-6 w-6" />
      </span>

      {/* "Watch on YouTube" pill — bottom-right */}
      <span
        className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm"
        aria-hidden="true"
      >
        <PlayIcon className="h-3 w-3" />
        Watch on YouTube
      </span>

      {/* External link icon — bottom-left */}
      <span
        className="absolute bottom-2 left-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-sm"
        aria-hidden="true"
      >
        <span className="text-sm leading-none">↗</span>
      </span>
    </>
  )
}

/**
 * Shared InfoCard — one topic = one full-width row.
 *
 * When a topic has an `image` (or YouTube thumbnail), it renders a full-width
 * two-column row:
 *
 *   Desktop:  TEXT (50%)  |  MEDIA (50%)
 *   Mobile :  TEXT (100%) then IMAGE/VIDEO (100%)
 *
 * Topics without an image keep the original compact card layout (used by
 * Past Papers, Quizzes, Results and Stories), so those pages stay untouched.
 */
export default function InfoCard({
  emoji,
  title,
  description,
  badge,
  image,
  imageAlt,
  label,
  to,
  link,
  videoUrl,
}) {
  const [imageError, setImageError] = useState(false)
  const showImage = Boolean(image) && !imageError

  // ------------------------------------------------------------------
  // Full-width text + media row (one topic = one row)
  // ------------------------------------------------------------------
  const rowBody = (
    <>
      {/* TEXT COLUMN — left on desktop, first (top) on mobile */}
      <div className="min-w-0">
        {label && (
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            {label}
          </span>
        )}

        <h3 className={`${label ? 'mt-3' : ''} text-xl font-bold text-slate-900 group-hover:text-brand-700 md:text-2xl`}>
          {emoji && (
            <span className="mr-2" aria-hidden="true">
              {emoji}
            </span>
          )}
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            {description}
          </p>
        )}

        {(to || link) && (
          <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 transition group-hover:translate-x-1">
            {badge || (videoUrl ? 'Watch on YouTube' : 'Read More')} →
          </span>
        )}
      </div>

      {/* MEDIA COLUMN — right on desktop, second (bottom) on mobile */}
      <div className="relative aspect-video w-full max-w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={imageAlt || title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={() => setImageError(true)}
        />
        <VideoOverlay videoUrl={videoUrl} />
      </div>
    </>
  )

  if (showImage) {
    const rowClass =
      'group grid grid-cols-1 items-center gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 md:grid-cols-2 md:gap-10'

    const ariaLabel = videoUrl
      ? `Watch ${title} on YouTube — ${description || 'Open video'}`
      : `${title} — ${description || 'Open'}`

    if (to) {
      return (
        <Link to={to} target="_blank" rel="noopener noreferrer" className={rowClass} aria-label={ariaLabel}>
          {rowBody}
        </Link>
      )
    }

    if (link) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={rowClass} aria-label={ariaLabel}>
          {rowBody}
        </a>
      )
    }

    return <div className={rowClass}>{rowBody}</div>
  }

  // ------------------------------------------------------------------
  // Original compact card (emoji-only topics without an image)
  // ------------------------------------------------------------------
  const cardBody = (
    <>
      <span
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-2xl"
        aria-hidden="true"
      >
        {emoji}
      </span>

      {label && (
        <span className="mt-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
          {label}
        </span>
      )}

      <h3 className={`${label ? 'mt-3' : 'mt-4'} text-lg font-bold text-slate-900 group-hover:text-brand-700`}>
        {title}
      </h3>

      {description && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      )}

      {(to || link) && (
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 transition group-hover:translate-x-1">
          {badge || (videoUrl ? 'Watch on YouTube' : 'Read More')} →
        </span>
      )}
    </>
  )

  const cardClass =
    'card card-hover group flex h-full flex-col p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2'

  if (to) {
    return (
      <Link to={to} target="_blank" rel="noopener noreferrer" className={cardClass} aria-label={`${title} — ${description || 'Explore'}`}>
        {cardBody}
      </Link>
    )
  }

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
        aria-label={videoUrl ? `Watch ${title} on YouTube — ${description || 'Open video'}` : `${title} — ${description || 'Open'}`}
      >
        {cardBody}
      </a>
    )
  }

  return (
    <div className="card card-hover flex h-full flex-col p-6">
      {cardBody}
    </div>
  )
}