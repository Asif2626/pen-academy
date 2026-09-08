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
    <article className="bg-white text-slate-900">

      {/* Blog Header */}
      <section className="bg-white py-14">
        <div className="container-px mx-auto max-w-3xl">

          <nav
            className="text-sm text-slate-500"
            aria-label="Breadcrumb"
          >
            <Link
              to="/blogs"
              className="text-brand-700 hover:underline"
            >
              Blogs
            </Link>

            <span className="mx-2 text-slate-400">/</span>

            <span className="text-slate-700">
              {blog.title}
            </span>
          </nav>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            {blog.title}
          </h1>

          <p className="mt-4 text-slate-500">
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
              className="leading-relaxed text-slate-800"
            >
              {paragraph}
            </p>
          ))}
        </div>


        {/* PDF */}
        {blog.pdf && (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <h2 className="text-xl font-bold text-slate-900">
              Read the Full Article
            </h2>

            <p className="mt-2 text-slate-600">
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

              {/* Download PDF */}
              {/* <a
                href={blog.pdf}
                download
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                ⬇ Download PDF
              </a> */}

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
        <section className="bg-white py-12">
          <div className="container-px mx-auto max-w-7xl">

            <h2 className="text-xl font-bold text-slate-900">
              Related Posts
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">

              {related.map((b) => (
                <Link
                  key={b.slug}
                  to={`/blogs/${b.slug}`}
                  className="card card-hover block border border-slate-200 bg-white p-5"
                  aria-label={b.title}
                >
                  <h3 className="font-bold text-slate-900 hover:text-brand-700">
                    {b.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
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