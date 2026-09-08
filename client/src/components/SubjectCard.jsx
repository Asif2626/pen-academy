import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Reusable subject card used on a grade page. Links to the subject page
 * which lists its chapters.
 */
export default function SubjectCard({ gradeSlug, subject, index }) {
  const chapterCount = subject.chapters ? subject.chapters.length : 0

  return (
    <Link
      to={`/courses/${gradeSlug}/${subject.slug}`}
      className="card card-hover block p-5"
      aria-label={`${subject.name} — ${chapterCount} chapters`}
    >
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.25c2.5-1.5 5-1.8 8-1.5v11.8c-3-.3-5.5 0-8 1.5-2.5-1.5-5-1.8-8-1.5V4.75c3-.3 5.5 0 8 1.5zM12 6.25v11.8"
            />
          </svg>
        </span>
        <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{subject.name}</h3>
      {subject.description && <p className="mt-2 text-sm text-slate-600">{subject.description}</p>}
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-500">{chapterCount} chapters</span>
        <span className="font-semibold text-brand-600">View Subjects</span>
      </div>
    </Link>
  )
}
