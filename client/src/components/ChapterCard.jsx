import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Reusable chapter card shown on a subject page.
 * Displays the chapter title and an "Access All Video Lectures" action.
 */
export default function ChapterCard({ gradeSlug, subjectSlug, chapter, index }) {
  const lectureCount = chapter.lectures ? chapter.lectures.length : 0

  return (
    <div className="card p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-lg font-bold text-white">
            {index + 1}
          </span>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{chapter.name}</h3>
            {chapter.description && (
              <p className="mt-1 text-sm text-slate-600">{chapter.description}</p>
            )}
            <p className="mt-1 text-xs font-medium text-slate-400">{lectureCount} video lectures</p>
          </div>
        </div>
        <Link
          to={`/courses/${gradeSlug}/${subjectSlug}/${chapter.slug}`}
          className="btn-primary shrink-0"
          aria-label={`Access all video lectures for ${chapter.name}`}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
          Access All Video Lectures
        </Link>
      </div>
    </div>
  )
}
