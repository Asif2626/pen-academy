import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ChapterCard from '../components/ChapterCard'
import BackButton from '../components/BackButton'
import { courses } from '../data/courses'
import { books } from '../data/books'
import NotFound from './NotFound'

export default function Subject() {
  const { grade, subject } = useParams()
  const course = courses[grade]

  if (!course) {
    return <NotFound message={`No curriculum found for "${grade}".`} />
  }

  const subjectData = course.subjects.find((s) => s.slug === subject)

  if (!subjectData) {
    return <NotFound message={`No subject found for "${subject}".`} />
  }

  const chapters = subjectData.chapters || []
  const subjectBooks = books.filter((b) => b.subject.toLowerCase() === subjectData.name.toLowerCase())

  return (
    <>
      <section className="bg-white py-14 text-gray-900">
        <div className="container-px mx-auto max-w-5xl">

          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/courses" className="hover:underline">
              Courses
            </Link>
            <span className="mx-2">/</span>
            <Link to={`/courses/${grade}`} className="hover:underline">
              {course.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{subjectData.name}</span>
          </nav>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            {subjectData.name} — {course.name}
          </h1>

          {subjectData.description && (
            <p className="mt-3 max-w-2xl text-gray-600">
              {subjectData.description}
            </p>
          )}
        </div>
      </section>

      <section className="container-px mx-auto max-w-5xl py-16">
        <SectionTitle
          align="left"
          title="Chapters"
          description="Select a chapter to access all its video lectures."
        />
        <div className="mt-8 space-y-5">
          {chapters.map((chapter, i) => (
            <ChapterCard
              key={chapter.slug}
              gradeSlug={grade}
              subjectSlug={subject}
              chapter={chapter}
              index={i}
            />
          ))}
        </div>

        <div className="mt-8">
          <BackButton label="Previous Page" />
        </div>
      </section>


    </>
  )
}
