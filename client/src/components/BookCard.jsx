import React from 'react'

export default function BookCard({ book }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100">

        {book.image ? (
          <img
            src={book.image}
            alt={book.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-7xl">
              {book.emoji || '📚'}
            </span>
          </div>
        )}

        {/* Class Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow">
            {book.class}
          </span>
        </div>

        {/* Subject Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {book.subject}
          </span>
        </div>

      </div>

      {/* Book Details */}
      <div className="p-5">

        {/* Book Title */}
        <h3 className="text-xl font-bold text-slate-900">
          {book.title}
        </h3>

        {/* PDF Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-3">

          {/* VIEW PDF */}
          <a
            href={book.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            👁️ View
          </a>

          {/* DOWNLOAD PDF */}
          <a
            href={book.pdf}
            download
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            ⬇️ Download
          </a>

        </div>

      </div>
    </article>
  )
}
