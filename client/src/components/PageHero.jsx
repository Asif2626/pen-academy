import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Reusable page hero with a Home breadcrumb, optional eyebrow label,
 * title and description. Matches the header style of the course pages.
 */
export default function PageHero({ eyebrow, title, description, crumb }) {
  const breadcrumb = crumb || title

  return (
    <section className="bg-white py-14 text-gray-900">
      <div className="container-px mx-auto max-w-5xl">
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{breadcrumb}</span>
        </nav>

        {eyebrow && (
          <span className="mt-6 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h1>

        {description && (
          <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">{description}</p>
        )}
      </div>
    </section>
  )
}