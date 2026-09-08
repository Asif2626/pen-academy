import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  return (
    <Link
      to={category.href}
      className="card card-hover group block h-full p-5 sm:p-6"
      aria-label={`${category.title} — ${category.description}`}
    >
      {/* Center Image */}
      <div className="flex justify-center">
        <div
          className={`
            flex h-21 w-21
            items-center justify-center
            overflow-hidden
            rounded-xl
            bg-gradient-to-br ${category.color}
            shadow-sm
          `}
        >
          <img
            src={category.image}
            alt={category.title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-center text-lg font-bold text-slate-900 group-hover:text-brand-700 dark:text-slate-100 dark:group-hover:text-brand-500">
        {category.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-center text-sm leading-6 text-slate-600 dark:text-slate-400">
        {category.description}
      </p>

      {/* Explore */}
      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center text-sm font-semibold text-brand-600 dark:text-brand-500">
          Explore

          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  )
}
