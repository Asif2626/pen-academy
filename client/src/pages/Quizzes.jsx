import React, { useState, useMemo } from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import QuizCard from '../components/QuizCard'
import QuizRunner from '../components/QuizRunner'
import { quizGrades, quizzes, getSubjectsForGrade, getQuizzesForSubject, getQuizById } from '../data/quizzes'

/**
 * Quizzes
 *
 * Single, reusable page. Data-driven entirely from client/src/data/quizzes.js.
 *
 * Navigation state machine:
 *   grade  -> { selectedGrade }
 *  subject -> { selectedGrade, selectedSubject }
 *  quiz    -> { selectedQuizId }       <-- QuizRunner renders here
 *
 * Grades 6-12 have no quizzes yet: they appear in the class selector with a
 * "Coming Soon" badge. Adding a quiz to the data file makes the grade/subject
 * appear automatically — no component changes required.
 */

export default function Quizzes() {
  const [selectedGrade, setSelectedGrade] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedQuizId, setSelectedQuizId] = useState(null)

  // All grades that actually have at least one published quiz.
  const gradesWithContent = useMemo(() => {
    const set = new Set(quizzes.map((q) => q.grade))
    return quizGrades.map((g) => ({
      grade: g,
      hasContent: set.has(g),
    }))
  }, [])

  const selectGrade = (grade) => {
    setSelectedGrade(grade)
    setSelectedSubject(null)
    setSelectedQuizId(null)
  }
  const selectSubject = (subject) => {
    setSelectedSubject(subject)
    setSelectedQuizId(null)
  }
  const selectQuiz = (quizId) => setSelectedQuizId(quizId)

  // Derived lookups (data-driven)
  const subjectsForGrade = selectedGrade ? getSubjectsForGrade(selectedGrade) : []
  const quizzesForSubject =
    selectedGrade && selectedSubject
      ? getQuizzesForSubject(selectedGrade, selectedSubject)
      : []
  const selectedQuiz = selectedQuizId ? getQuizById(selectedQuizId) : null

  return (
    <>
      <PageHero
        eyebrow="Assessment"
        title="Quiz"
        crumb="Quizzes"
        description="Test your knowledge and improve your learning."
      />

      <section className="container-px mx-auto max-w-7xl py-14">
        {/* ===== GRADE SELECTOR ===== */}
        {!selectedGrade && (
          <>
            <SectionTitle
              align="center"
              eyebrow="Quiz Categories"
              title="Select a Class"
              description="Choose your class to start practising quizzes."
            />
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {gradesWithContent.map(({ grade, hasContent }) => (
                <QuizCard
                  key={grade}
                  title={grade}
                  questionCount={null}
                  badge={hasContent ? undefined : 'Coming Soon'}
                  badgeClass="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  onClick={() => selectGrade(grade)}
                  disabled={!hasContent}
                  aria-label={hasContent ? `Select ${grade}` : `${grade} — coming soon`}
                />
              ))}
            </div>
          </>
        )}

        {/* ===== SUBJECT SELECTOR ===== */}
        {selectedGrade && !selectedSubject && !selectedQuizId && (
          <>
            <SectionTitle
              align="left"
              eyebrow="Select Subject"
              title={`${selectedGrade} — Subjects`}
              description="Choose a subject to see available quizzes."
            />
            <div className="mt-8 mb-6">
              <button
                type="button"
                onClick={() => setSelectedGrade(null)}
                className="btn btn-outline btn-sm"
              >
                ← Back to Classes
              </button>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {subjectsForGrade.length > 0 ? (
                subjectsForGrade.map((subject) => (
                  <QuizCard
                    key={subject}
                    title={subject}
                    subject={subject}
                    grade={selectedGrade}
                    questionCount={null}
                    badge={null}
                    onClick={() => selectSubject(subject)}
                  />
                ))
              ) : (
                <p className="text-slate-600 dark:text-slate-400">No subjects available for this grade yet.</p>
              )}
            </div>
          </>
        )}

        {/* ===== QUIZ LIST ===== */}
        {selectedGrade && selectedSubject && !selectedQuizId && (
          <>
            <SectionTitle
              align="left"
              eyebrow="Select Quiz"
              title={`${selectedSubject} — ${selectedGrade}`}
              description="Choose a quiz to begin."
            />
            <div className="mt-8 mb-6 flex gap-3">
              <button
                type="button"
                onClick={() => setSelectedSubject(null)}
                className="btn btn-outline btn-sm"
              >
                ← Back to Subjects
              </button>
              <button type="button" onClick={() => setSelectedGrade(null)} className="btn btn-outline btn-sm">
                ← Back to Classes
              </button>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {quizzesForSubject.length > 0 ? (
                quizzesForSubject.map((q) => (
                  <QuizCard
                    key={q.id}
                    title={q.title}
                    subject={q.subject}
                    grade={q.grade}
                    description={q.description}
                    questionCount={q.questions?.length ?? 0}
                    badge={null}
                    onClick={() => selectQuiz(q.id)}
                  />
                ))
              ) : (
                <p className="text-slate-600 dark:text-slate-400">No quizzes available for this subject yet. Coming soon!</p>
              )}
            </div>
          </>
        )}

        {/* ===== QUIZ RUNNER ===== */}
        {selectedQuizId && selectedQuiz && (
          <QuizRunner
            quiz={selectedQuiz}
            onBackToQuizzes={() => {
              setSelectedQuizId(null)
              setSelectedSubject(null)
              setSelectedGrade(null)
            }}
          />
        )}
      </section>
    </>
  )
}
