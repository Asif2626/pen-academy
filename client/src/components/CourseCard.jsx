import React from 'react'
import { Link } from 'react-router-dom'

const gradeColors = [
  'from-brand-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-purple-500 to-fuchsia-600',
  'from-cyan-500 to-sky-600',
]

/**
 * Reusable card for a course / grade shown on the /courses page.
 */
export default function CourseCard({ course, index }) {
  const color = gradeColors[index % gradeColors.length]
  const subjectCount = course.subjects ? course.subjects.length : 0

  return (
    <Link
      to={`/courses/${course.slug}`}
      className="card card-hover flex flex-col p-6"
      aria-label={`${course.name} — ${subjectCount} subjects`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-2xl font-extrabold text-white shadow-sm`}
      >
        {course.shortName.replace(/\D/g, '') || 'P'}
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{course.name}</h3>
      {course.description && <p className="mt-2 flex-1 text-sm text-slate-600">{course.description}</p>}
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-500">{subjectCount} subjects</span>
        <span className="font-semibold text-brand-600">View Curriculum</span>
      </div>
    </Link>
  )
}
