import React from 'react'

/**
 * QuizProgress
 *
 * A shared, accessible progress indicator used between the question text
 * and the answer options. It is deliberately simple so it can be dropped
 * into QuizRunner without any design changes.
 *
 * Props:
 *   current : 1-based index of the current question
 *   total   : number of questions
 */
export default function QuizProgress({ current, total }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="mb-4 flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
      <span>Question {current} of {total}</span>
      <span aria-label={`Progress ${pct}% of quiz complete`}>{pct}% complete</span>
    </div>
  )
}