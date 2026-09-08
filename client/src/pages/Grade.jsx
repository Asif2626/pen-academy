import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import SubjectCard from '../components/SubjectCard'
import BackButton from '../components/BackButton'
import EmptyState from '../components/EmptyState'
import LoadingState from '../components/LoadingState'
import ErrorState from '../components/ErrorState'
import { getCurriculum } from '../services/curriculum'
import useAsync from '../services/useAsync'
import NotFound from './NotFound'

export default function Grade() {
  const { grade } = useParams()
  const { loading, error, data, retry } = useAsync(() => getCurriculum(), [grade])

  if (loading) {
    return (
      <section className="container-px mx-auto max-w-5xl py-16">
        <LoadingState label="Loading subjects…" />
      </section>
    )
  }

  if (error || !data) {
    return (
      <section className="container-px mx-auto max-w-5xl py-16">
        <ErrorState
          title="Could not load this class"
          message="We could not load the curriculum from the server. Check your connection and try again."
          onRetry={retry}
        />
      </section>
    )
  }

  const course = data.courses[grade]

  if (!course) {
    return <NotFound message={`No curriculum found for "${grade}".`} />
  }

  return (
    <>
      <section className="bg-white py-14 text-gray-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="container-px mx-auto max-w-5xl">

          <nav className="text-sm text-gray-500 dark:text-slate-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/courses" className="hover:underline">
              Courses
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-slate-100">{course.name}</span>
          </nav>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Subjects in {course.name}
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600 dark:text-slate-400">
            {course.description}
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-5xl py-16">
        <SectionTitle
          align="left"
          title="Select a Subject"
          description="Choose a subject to view its chapters and video lectures."
        />

        {course.subjects.length === 0 ? (
          <div className="mx-auto mt-8 max-w-3xl">
            <EmptyState
              emoji="📚"
              title="No subjects yet"
              description="Subjects for this class are being prepared and will be published here soon."
            />
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {course.subjects.map((subject, i) => (
              <SubjectCard key={subject.slug} gradeSlug={grade} subject={subject} index={i} />
            ))}
          </div>
        )}

        <div className="mt-8">
          <BackButton label="Previous Page" />
        </div>
      </section>
    </>
  )
}
