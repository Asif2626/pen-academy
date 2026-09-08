import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogs } from '../data/blogs'
import NotFound from './NotFound'

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogDetails() {
  const { slug } = useParams()
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return <NotFound message={`No blog post found for "${slug}".`} />
  }

  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3)

  return (
    <article className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">

      {/* Blog Header */}
      <section className="bg-white py-14 dark:bg-slate-950">
        <div className="container-px mx-auto max-w-3xl">

          <nav
            className="text-sm text-slate-500 dark:text-slate-400"
            aria-label="Breadcrumb"
          >
            <Link
              to="/blogs"
              className="text-brand-700 hover:underline dark:text-brand-500"
            >
              Blogs
            </Link>

            <span className="mx-2 text-slate-400 dark:text-slate-500">/</span>

            <span className="text-slate-700 dark:text-slate-300">
              {blog.title}
            </span>
          </nav>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl dark:text-slate-100">
            {blog.title}
          </h1>

          <p className="mt-4 text-slate-500 dark:text-slate-400">
            {blog.author} ·{' '}
            <time dateTime={blog.date}>
              {formatDate(blog.date)}
            </time>
          </p>

        </div>
      </section>


      {/* Blog Content */}
      <section className="container-px mx-auto max-w-3xl py-12">

        {/* Blog Image */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="h-auto w-full rounded-2xl object-cover"
          />
        )}

        {/* Blog Text */}
        <div className="mt-8 space-y-5">
          {blog.content.map((paragraph, i) => (
            <p
              key={i}
              className="leading-relaxed text-slate-800 dark:text-slate-300"
            >
              {paragraph}
            </p>
          ))}
        </div>


        {/* PDF */}
        {blog.pdf && (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">

            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Read the Full Article
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              View or download the PDF version of this article.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              {/* View PDF */}
              <a
                href={blog.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-brand-700 px-5 py-3 font-semibold text-white transition hover:bg-brand-800"
              >
                📄 View PDF
              </a>

            </div>
          </div>
        )}


        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/blogs"
            className="btn-outline"
          >
            ← Back to All Blogs
          </Link>
        </div>

      </section>


      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-white py-12 dark:bg-slate-950">
          <div className="container-px mx-auto max-w-7xl">

            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Related Posts
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">

              {related.map((b) => (
                <Link
                  key={b.slug}
                  to={`/blogs/${b.slug}`}
                  className="card card-hover block border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                  aria-label={b.title}
                >
                  <h3 className="font-bold text-slate-900 hover:text-brand-700 dark:text-slate-100 dark:hover:text-brand-500">
                    {b.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {b.excerpt}
                  </p>
                </Link>
              ))}

            </div>
          </div>
        </section>
      )}

    </article>
  )
}