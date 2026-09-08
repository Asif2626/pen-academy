import React from 'react'

/**
 * QuizQuestion
 *
 * Renders a single multiple-choice question with accessible option
 * buttons. Selection is a controlled radio group (name = questionId)
 * so users can change answers freely before navigating. No accidental
 * quiz submission — only Next/Previous/Submit buttons advance state.
 *
 * Props:
 *   question        { id, question, options, answer, explanation }
 *   currentIndex    0-based index of this question
 *   total           total number of questions
 *   selectedAnswer  the user's current answer (or null)
 *   onSelect        (option) => void   called when the user picks an option
 */
export default function QuizQuestion({ question, currentIndex, total, selectedAnswer, onSelect }) {
  const isCorrect = (option) =>
    selectedAnswer !== null && selectedAnswer === question.answer
  const optionClass = (option) => {
    let base =
      'mt-2 flex w-full items-center justify-between rounded-lg border-2 bg-white px-4 py-3 text-left text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
    if (selectedAnswer === option) {
      // selected
      return isCorrect(option)
        ? `${base} border-brand-600 bg-brand-50 text-brand-900`
        : `${base} border-orange-500 bg-orange-50 text-orange-900`
    }
    return `${base} border-slate-200 text-slate-700 hover:border-brand-600 hover:bg-brand-50`
  }

  return (
    <fieldset
      className="mb-6"
      aria-labelledby={`question-label-${question.id}`}
      aria-describedby="question-instructions"
    >
      <div className="mb-2 flex items-center justify-between">
        <legend
          id={`question-label-${question.id}`}
          className="text-lg font-bold text-slate-900 sm:text-xl"
        >
          {question.question}
        </legend>
        <span className="text-sm text-slate-600/80" aria-label={`Question ${currentIndex + 1} of ${total}`}>
          {currentIndex + 1}/{total}
        </span>
      </div>

      <span id="question-instructions" className="sr-only">
        Choose one of the options below, then press Next.
      </span>

      <div role="radiogroup" className="mt-3 space-y-2">
        {question.options.map((option, idx) => {
          const optionId = `q${question.id}-opt${idx}`
          return (
            <label
              key={optionId}
              htmlFor={optionId}
              className={optionClass(option)}
            >
              <span className="flex items-center gap-3">
                <input
                  type="radio"
                  id={optionId}
                  name={`answer-${question.id}`}
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => onSelect(option)}
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500"
                  aria-label={option}
                />
                <span>{option}</span>
              </span>

              {selectedAnswer !== null && selectedAnswer === question.answer && option === question.answer && (
                <svg
                  className="h-5 w-5 shrink-0 text-brand-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {selectedAnswer === option && option !== question.answer && (
                <svg
                  className="h-5 w-5 shrink-0 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0L4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
