import React from 'react'

/**
 * Reusable grade-wise textbook card.
 *
 * Visual style:
 *  - light gray card, thin border, soft shadow, rounded corners
 *  - orange gradient header with white bold uppercase grade name
 *  - COMPULSORY / OPTIONAL pill labels
 *  - book rows with an orange arrow, dark orange book text,
 *    dashed separators and a clickable PDF badge
 *
 * The whole row is a single <a> that opens the book PDF in a new tab.
 */

// One clickable book row. Opens the PDF in a new browser tab.
function BookRow({ book }) {
  const href = book.pdf && book.pdf.trim() !== '' ? book.pdf : '#'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${book.name} textbook PDF in a new tab`}
      className="
        group
        -mx-2
        flex
        items-center
        gap-3
        rounded-lg
        px-2
        py-2.5
        transition-colors
        duration-200
        hover:bg-orange-50
        dark:hover:bg-orange-500/10
      "
    >
      {/* Orange arrow */}
      <span
        className="
          text-base
          font-bold
          leading-none
          text-orange-600
          dark:text-orange-400
          transition-transform
          duration-200
          group-hover:translate-x-0.5
        "
        aria-hidden="true"
      >
        →
      </span>

      {/* Book name */}
      <span
        className="
          flex-1
          text-sm
          font-semibold
          text-orange-900
          dark:text-orange-300
          transition-colors
          duration-200
          group-hover:text-orange-700
          dark:group-hover:text-orange-200
        "
      >
        {book.name}
      </span>

      {/* PDF badge */}
      <span
        className="
          rounded
          bg-yellow-100
          px-1.5
          py-0.5
          text-[10px]
          font-bold
          uppercase
          tracking-wide
          text-yellow-800
          dark:bg-yellow-500/15
          dark:text-yellow-300
        "
      >
        PDF
      </span>
    </a>
  )
}

// COMPULSORY / OPTIONAL pill label.
function SectionPill({ children }) {
  return (
    <span
      className="
        inline-block
        rounded-full
        bg-orange-50
        px-3
        py-1
        text-xs
        font-semibold
        uppercase
        tracking-wide
        text-orange-700
        dark:bg-orange-500/10
        dark:text-orange-400
      "
    >
      {children}
    </span>
  )
}

export default function TextbookGradeCard({ gradeKey, sections }) {
  const compulsory = sections?.compulsory || []
  const optional = sections?.optional || []

  // Optional display label, e.g. "CLASS IX-X".
  const displayLabel = sections?.label || gradeKey

  return (
    <article
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-orange-100
        bg-slate-50
        shadow-sm
        transition-shadow
        duration-300
        hover:shadow-md
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {/* Card header */}
      <header
        className="
          bg-gradient-to-r
          from-orange-500
          to-orange-700
          px-5
          py-4
        "
      >
        <h3
          className="
            text-lg
            font-extrabold
            uppercase
            tracking-wide
            text-white
          "
        >
          {displayLabel}
        </h3>
      </header>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {compulsory.length > 0 && (
          <section aria-label={`${displayLabel} compulsory books`}>
            <SectionPill>Compulsory</SectionPill>

            <div className="mt-2 divide-y divide-dashed divide-slate-200 dark:divide-slate-800">
              {compulsory.map((book) => (
                <BookRow key={book.name} book={book} />
              ))}
            </div>
          </section>
        )}

        {optional.length > 0 && (
          <section
            aria-label={`${displayLabel} optional books`}
            className={compulsory.length > 0 ? 'mt-5' : ''}
          >
            <SectionPill>Optional</SectionPill>

            <div className="mt-2 divide-y divide-dashed divide-slate-200 dark:divide-slate-800">
              {optional.map((book) => (
                <BookRow key={book.name} book={book} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
