import React, { useEffect, useState, useRef } from 'react'
import QuizProgress from './QuizProgress'
import QuizQuestion from './QuizQuestion'
import QuizResults from './QuizResults'
import SubjectIcon from './SubjectIcon'

/**
 * QuizRunner
 *
 * The single, shared quiz engine. Renders the question sequence for any
 * quiz and computes results. The whole quiz engine is state-driven off
 * `answers` (an object keyed by question.id), so:
 *
 *   - selection never submits accidentally
 *   - "Previous/Next" keeps your answers
 *   - "Try Again" rebuilds the answers object from scratch
 *   - results + answer-review are derived from `answers` + `quiz.questions`
 *
 * Props:
 *   quiz   the quiz object from data/quizzes.js
 *   onBackToQuizzes  () => void
 */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

export default function QuizRunner({ quiz, onBackToQuizzes }) {
  const [answers, setAnswers] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const questionRefs = useRef([])

  // When a new quiz is loaded, reset everything. Comparing by quiz.id
  // avoids a flash of the previous quiz's questions.
  useEffect(() => {
    setAnswers({})
    setCurrentIndex(0)
    setShowResults(false)
  }, [quiz?.id])

  const questions = quiz?.questions || []
  const total = questions.length

  const handleSelect = (option) => {
    setAnswers((prev) => ({ ...prev, [questions[currentIndex].id]: option }))
  }

  const goToNext = () => {
    if (questions[currentIndex].id in answers) {
      setCurrentIndex((i) => clamp(i + 1, 0, total - 1))
    }
  }
  const goToPrev = () => setCurrentIndex((i) => clamp(i - 1, 0, total - 1))

  const canSubmit = () =>
    questions.every((q) => q.id in answers) || currentIndex === total - 1

  const handleRestart = () => {
    setAnswers({})
    setCurrentIndex(0)
    setShowResults(false)
  }

  // Keyboard navigation (left / right)
  useEffect(() => {
    const onKey = (e) => {
      if (showResults) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (questions[currentIndex].id in answers) {
          setCurrentIndex((i) => clamp(i + 1, 0, total - 1))
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentIndex((i) => clamp(i - 1, 0, total - 1))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [currentIndex, total, showResults, questions])

  // A11y: focus the new question when navigating
  useEffect(() => {
    if (questionRefs.current[currentIndex]) {
      questionRefs.current[currentIndex].focus()
    }
  }, [currentIndex])

  if (!quiz || total === 0) {
    return null
  }

  if (showResults) {
    return <QuizResults quiz={quiz} answers={answers} onRestart={handleRestart} onBackToQuizzes={onBackToQuizzes} />
  }

      return (
    <section className="container-px mx-auto max-w-3xl py-10">
      {/* Back button */}
      <div className="mb-6">
        <button type="button" onClick={onBackToQuizzes} className="btn btn-outline btn-sm">
          ← Back to Quizzes
        </button>
      </div>

      {/* Quiz header */}
      <header className="mb-8 flex items-center gap-3">
        {quiz.subject && (
          <span className="text-2xl" aria-hidden="true">
            <SubjectIcon subject={quiz.subject} />
          </span>
        )}
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {quiz.title}
        </h2>
      </header>

      {/* Progress */}
      <QuizProgress current={currentIndex + 1} total={total} />

      {/* Question */}
      <div
        ref={(el) => (questionRefs.current[currentIndex] = el)}
        tabIndex={-1}
        className="focus:outline-none"
      >
        <QuizQuestion
          question={questions[currentIndex]}
          currentIndex={currentIndex}
          total={total}
          selectedAnswer={answers[questions[currentIndex].id] ?? null}
          onSelect={handleSelect}
        />
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="btn btn-outline disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        {currentIndex < total - 1 ? (
          <button
            type="button"
            onClick={goToNext}
            disabled={!(questions[currentIndex].id in answers)}
            className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowResults(true)}
            disabled={!canSubmit()}
            className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit Quiz
          </button>
        )}
      </div>
    </section>
  )
}
