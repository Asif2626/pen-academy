import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Reusable empty-state card for sections that do not have real content yet
 * (linked to live API data in a later phase). Optional `action` renders a
 * button linking to an existing route (e.g. Courses / Books / Blogs).
 */
export default function EmptyState({
  emoji = '🚧',
  title = 'Coming Soon',
  description,
  action,
}) {
  return (
    <div className="card flex flex-col items-center p-10 text-center sm:p-12">
      <span
        className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-3xl"
        aria-hidden="true"
      >
        {emoji}
      </span>

      <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>

      {description && (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">{description}</p>
      )}

      {action && (
        <Link to={action.to} className="btn-outline mt-6">
          {action.label}
        </Link>
      )}
    </div>
  )
}