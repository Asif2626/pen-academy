import React from 'react'

/**
 * QuizResults
 *
 * Shows score / percentage / correct-vs-incorrect counts and an
 * encouraging message. Then renders an answer-by-answer review
 * with text (not just colour) distinguishing correct/incorrect.
 *
 * Props:
 *   quiz               { title, questions[] }
 *   answers            { [questionId]: selectedOption }
 *   onRestart          () => void
 *   onBackToQuizzes    () => void
 */

const messageFor = (pct) => {
  if (pct >= 90) return 'Excellent!'
  if (pct >= 70) return 'Great job!'
  if (pct >= 50) return 'Good effort!'
  return 'Keep practicing!'
}

// Inline SVG icons (avoids requiring @heroicons/react
const CheckIcon = () => (
  <svg className="h-5 w-5 shrink-0 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
)
const XIcon = () => (
  <svg className="h-5 w-5 shrink-0 text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0L4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
)

export default function QuizResults({ quiz, answers, onRestart, onBackToQuizzes }) {
  const questions = quiz?.questions || []
  const total = questions.length
  const correct = questions.filter(
    (q) => answers[q.id] != null && String(answers[q.id]) === String(q.answer)
  ).length
  const incorrect = total - correct
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100)
  const message = messageFor(pct)

  return (
    <section className="container-px mx-auto max-w-3xl py-10">
      {/* Header */}
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-slate-100">
          Quiz Completed
        </h2>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">You scored:</p>
      </header>

      {/* Score summary */}
      <div className="mb-10 rounded-xl bg-brand-50 p-8 text-center dark:bg-brand-500/10">
        <p className="text-5xl font-extrabold text-brand-700 dark:text-brand-400">{pct}%</p>
        <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
          {correct} / {total}
        </p>
        <p className="mt-3 text-xl font-semibold text-slate-700 dark:text-slate-300">
          {message}
        </p>
      </div>

      {/* Correct/incorrect breakdown */}
      <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-4 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{total}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Questions</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-2xl font-bold text-green-700 dark:text-green-400">{correct}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Correct</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">{incorrect}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Incorrect</p>
        </div>
      </div>

      {/* Answer review */}
      <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-slate-100">Answer Review</h3>
      <div className="space-y-4">
        {questions.map((q) => {
          const isCorrect =
            answers[q.id] != null &&
            String(answers[q.id]) === String(q.answer)
          const studentAnswer =
            answers[q.id] != null ? answers[q.id] : 'Not answered'
          return (
            <div
              key={q.id}
              className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-2 flex items-start gap-2.5">
                {isCorrect ? <CheckIcon /> : <XIcon />}
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{q.question}</p>
                  {q.explanation && (
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Explanation: {q.explanation}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <div className="rounded border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-800">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Your answer:</span>
                  <span className="ml-1 text-slate-900 dark:text-slate-100">{studentAnswer}</span>
                </div>
                <div className="rounded border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-800">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Correct answer:</span>
                  <span className="ml-1 text-slate-900 dark:text-slate-100">{q.answer}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onRestart}
          className="btn btn-primary"
        >
          Try Again
        </button>
        <button
          type="button"
          onClick={onBackToQuizzes}
          className="btn btn-outline"
        >
          Back to Quizzes
        </button>
      </div>
    </section>
  )
}
