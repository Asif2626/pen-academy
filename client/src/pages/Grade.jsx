import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import SubjectCard from '../components/SubjectCard'
import BackButton from '../components/BackButton'
import { courses } from '../data/courses'
import NotFound from './NotFound'

export default function Grade() {
  const { grade } = useParams()
  const course = courses[grade]

  if (!course) {
    return <NotFound message={`No curriculum found for "${grade}".`} />
  }

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
            <span className="text-gray-900">{course.name}</span>
          </nav>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Subjects in {course.name}
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
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
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {course.subjects.map((subject, i) => (
            <SubjectCard key={subject.slug} gradeSlug={grade} subject={subject} index={i} />
          ))}
        </div>

        <div className="mt-8">
          <BackButton label="Previous Page" />
        </div>
      </section>
    </>
  )
}
