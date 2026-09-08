import React from 'react'
import { Link } from 'react-router-dom'
import SubjectIcon from './SubjectIcon'

/**
 * QuizCard
 *
 * Shared quiz summary card. Reused by QuizList for selectable quizzes
 * and by SubjectSelector for the subject view, so the design stays
 * identical across the whole quiz experience.
 *
 * Props:
 *   title         (required) quiz / subject / grade name
 *   description   short blurb
 *   subject       subject name (shows SubjectIcon + label)
 *   grade         grade label (subtitle)
 *   questionCount number badge (only for quiz cards)
 *   to            router link target (renders <Link>)
 *   onClick       click handler (renders <button> when provided)
 *   disabled      boolean for the button variant
 *   badge         optional trailing badge text
 *   badgeClass    optional badge classes (defaults to coming-soon styling)
 */
export default function QuizCard({
  title,
  description,
  subject,
  grade,
  questionCount,
  to,
  onClick,
  disabled,
  badge,
  badgeClass = 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
}) {
  const badgeNode = (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
      aria-label={badge}
    >
      {badge}
    </span>
  )

  const cardBody = (
    <>
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {subject && (
            <span className="text-2xl" aria-hidden="true">
              <SubjectIcon subject={subject} />
            </span>
          )}
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:bg-brand-500/10 dark:text-brand-500">
            Topic
          </span>
        </div>
        {badge && badgeNode}
      </div>

      <h3 className="mt-1 text-xl font-bold text-slate-900 group-hover:text-brand-700 dark:text-slate-100 dark:group-hover:text-brand-500 md:text-2xl">
        {title}
      </h3>

      {grade && <p className="mt-1 text-sm text-slate-600/80 dark:text-slate-400">{grade}</p>}
      {description && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
          {description}
        </p>
      )}
      {questionCount && (
        <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">{questionCount} Questions</p>
      )}

      <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 transition group-hover:translate-x-1 dark:text-brand-500">
        Start Quiz →
      </span>
    </>
  )

  const sharedClass = 'card card-hover group flex h-full flex-col p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950'
  const ariaLabel = `${title}${grade ? `, ${grade}` : ''}${questionCount ? `, ${questionCount} questions` : ''}`

  // Button variant: used for grade/subject/quiz selection (no router navigation)
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-label={disabled ? `${title} — not yet available` : ariaLabel}
        className={`${sharedClass} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      >
        {cardBody}
      </button>
    )
  }

  // Link variant: used by the original InfoCard consumers
  if (to) {
    return (
      <Link to={to} className={sharedClass} aria-label={ariaLabel}>
        {cardBody}
      </Link>
    )
  }

  return <div className={sharedClass}>{cardBody}</div>
}
