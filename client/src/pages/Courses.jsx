import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import CourseCard from '../components/CourseCard'
import BackButton from '../components/BackButton'
import EmptyState from '../components/EmptyState'
import LoadingCards from '../components/LoadingCards'
import ErrorState from '../components/ErrorState'
import { getCurriculum } from '../services/curriculum'
import useAsync from '../services/useAsync'

export default function Courses() {
  const { loading, error, data, retry } = useAsync(() => getCurriculum(), [])

  const list =
    data ? data.courseOrder.map((slug) => data.courses[slug]).filter(Boolean) : []

  return (
    <>
      <PageHero
        eyebrow="For Students"
        title="Student Pack"
        crumb="Student Pack"
        description="Explore resources and lesson materials designed to help students learn effectively through digital lessons."
      />

      <section className="container-px mx-auto max-w-7xl py-16">
        <SectionTitle
          title="Courses & Curriculum"
          description="Choose your class to explore subjects, chapters and video lectures following the national syllabus."
        />

        {loading ? (
          <div className="mt-10">
            <LoadingCards count={8} />
          </div>
        ) : error ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <ErrorState
              title="Could not load courses"
              message="We could not reach the course catalogue. Check your connection and try again."
              onRetry={retry}
            />
          </div>
        ) : list.length === 0 ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <EmptyState
              emoji="📚"
              title="No courses yet"
              description="Courses are being prepared and will be published here soon."
            />
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </div>
        )}

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Looking for textbooks?{' '}
          <Link to="/books" className="font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-500 dark:hover:text-brand-400">
            Browse our Text Books
          </Link>
          .
        </p>

        <div className="mt-5">
          <BackButton label="Previous Page" />
        </div>

      </section>
    </>
  )
}
