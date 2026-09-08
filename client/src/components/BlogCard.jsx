import React from 'react'
import { Link } from 'react-router-dom'

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogCard({ blog }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

      {/* Blog Image */}
      {blog.image ? (
        <Link to={`/blogs/${blog.slug}`}>
          <img
            src={blog.image}
            alt={blog.title}
            className="h-52 w-full object-cover"
          />
        </Link>
      ) : (
        <div className="flex h-52 w-full items-center justify-center bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          No image available
        </div>
      )}

      {/* Content */}
      <div className="p-6">

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {blog.author} · {formatDate(blog.date)}
        </p>

        <h2 className="mt-2 text-xl font-bold leading-tight text-slate-900 dark:text-slate-100">
          {blog.title}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {blog.excerpt}
        </p>

        <Link
          to={`/blogs/${blog.slug}`}
          className="mt-5 inline-flex font-semibold text-brand-700 hover:text-brand-800 hover:underline dark:text-brand-500 dark:hover:text-brand-400"
        >
          Read More →
        </Link>

      </div>
    </article>
  )
}
