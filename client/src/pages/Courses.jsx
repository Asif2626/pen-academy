import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import CourseCard from '../components/CourseCard'
import BackButton from '../components/BackButton'
import { courses, courseOrder } from '../data/courses'

export default function Courses() {
  const list = courseOrder.map((slug) => courses[slug]).filter(Boolean)

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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((course, i) => (
            <CourseCard key={course.slug} course={course} index={i} />
          ))}
        </div>

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
