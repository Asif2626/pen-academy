import React from 'react'

/**
 * User-facing error state for failed API requests.
 * Shows a clear message (never a raw axios stack trace) and an optional
 * "Try Again" retry action. Styled with the existing card/brand language.
 */
export default function ErrorState({
  title = 'Something went wrong',
  message = 'We could not load this content. Please check your connection and try again.',
  onRetry,
  className = '',
}) {
  return (
    <div
      role="alert"
      className={`card flex flex-col items-center p-8 text-center sm:p-10 ${className}`}
    >
      <span
        className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-3xl dark:bg-brand-500/10"
        aria-hidden="true"
      >
        ⚠️
      </span>

      <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h3>

      {message && (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {message}
        </p>
      )}

      {onRetry && (
        <button type="button" onClick={onRetry} className="btn-primary mt-6">
          Try Again
        </button>
      )}
    </div>
  )
}