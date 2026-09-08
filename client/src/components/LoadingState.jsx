import React from 'react'

/**
 * Centered loading spinner with an optional label.
 * Uses the site's existing visual language (brand spinner + muted text).
 */
export default function LoadingState({ label = 'Loading…', className = '' }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-3 py-10 ${className}`}
    >
      <span
        className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent"
        aria-hidden="true"
      />
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  )
}