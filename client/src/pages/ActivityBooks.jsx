import React from 'react'
import PageHero from '../components/PageHero'

const activityBooks = [
  // KG
  {
    id: 'english-kg',
    class: 'KG',
    title: 'English Class-KG',
    image: '/images/activity-books/english-class-kg.png',
    pdf: '/pdfs/activity-books/english-class-kg.pdf',
  },
  {
    id: 'urdu-kg',
    class: 'KG',
    title: 'Urdu Class-KG',
    image: '/images/activity-books/urdu-class-kg.png',
    pdf: '/pdfs/activity-books/urdu-class-kg.pdf',
  },
  {
    id: 'math-kg',
    class: 'KG',
    title: 'Math Class-KG',
    image: '/images/activity-books/math-class-kg.png',
    pdf: '/pdfs/activity-books/math-class-kg.pdf',
  },

  // Grade 1
  {
    id: 'english-1',
    class: 'Grade 1',
    title: 'English Class-1',
    image: '/images/activity-books/english-class-1.png',
    pdf: '/pdfs/activity-books/english-class-1.pdf',
  },
  {
    id: 'urdu-1',
    class: 'Grade 1',
    title: 'Urdu Class-1',
    image: '/images/activity-books/urdu-class-1.png',
    pdf: '/pdfs/activity-books/urdu-class-1.pdf',
  },
  {
    id: 'general-knowledge-1',
    class: 'Grade 1',
    title: 'General Knowledge Class-1',
    image: '/images/activity-books/general-knowledge-class-1.png',
    pdf: '/pdfs/activity-books/general-knowledge-class-1.pdf',
  },
  {
    id: 'islamiyat-1',
    class: 'Grade 1',
    title: 'Islamiyat Class-1',
    image: '/images/activity-books/islamiyat-class-1.png',
    pdf: '/pdfs/activity-books/islamiyat-class-1.pdf',
  },
  {
    id: 'math-1',
    class: 'Grade 1',
    title: 'Math Class-1',
    image: '/images/activity-books/math-class-1.jpg',
    pdf: '/pdfs/activity-books/math-class-1.pdf',
  },

  // Grade 2
  {
    id: 'english-2',
    class: 'Grade 2',
    title: 'English Class-2',
    image: '/images/activity-books/english-class-2.png',
    pdf: '/pdfs/activity-books/english-class-2.pdf',
  },
  {
    id: 'urdu-2',
    class: 'Grade 2',
    title: 'Urdu Class-2',
    image: '/images/activity-books/urdu-class-2.png',
    pdf: '/pdfs/activity-books/urdu-class-2.pdf',
  },
  {
    id: 'general-knowledge-2',
    class: 'Grade 2',
    title: 'General Knowledge Class-2',
    image: '/images/activity-books/general-knowledge-class-2.png',
    pdf: '/pdfs/activity-books/general-knowledge-class-2.pdf',
  },
  {
    id: 'islamiyat-2',
    class: 'Grade 2',
    title: 'Islamiyat Class-2',
    image: '/images/activity-books/islamiyat-class-2.png',
    pdf: '/pdfs/activity-books/islamiyat-class-2.pdf',
  },
  {
    id: 'math-2',
    class: 'Grade 2',
    title: 'Math Class-2',
    image: '/images/activity-books/math-class-2.jpg',
    pdf: '/pdfs/activity-books/math-class-2.pdf',
  },

  // Grade 3
  {
    id: 'english-3',
    class: 'Grade 3',
    title: 'English Class-3',
    image: '/images/activity-books/english-class-3.png',
    pdf: '/pdfs/activity-books/english-class-3.pdf',
  },
  {
    id: 'urdu-3',
    class: 'Grade 3',
    title: 'Urdu Class-3',
    image: '/images/activity-books/urdu-class-3.png',
    pdf: '/pdfs/activity-books/urdu-class-3.pdf',
  },
  {
    id: 'general-knowledge-3',
    class: 'Grade 3',
    title: 'General Knowledge Class-3',
    image: '/images/activity-books/general-knowledge-class-3.png',
    pdf: '/pdfs/activity-books/general-knowledge-class-3.pdf',
  },
  {
    id: 'math-3',
    class: 'Grade 3',
    title: 'Math Class-3',
    image: '/images/activity-books/math-class-3.jpg',
    pdf: '/pdfs/activity-books/math-class-3.pdf',
  },
  {
    id: 'islamiyat-3',
    class: 'Grade 3',
    title: 'Islamiyat Class-3',
    image: '/images/activity-books/islamiyat-class-3.png',
    pdf: '/pdfs/activity-books/islamiyat-class-3.pdf',
  },

  // Grade 4
  {
    id: 'english-4',
    class: 'Grade 4',
    title: 'English Class-4',
    image: '/images/activity-books/english-class-4.jpg',
    pdf: '/pdfs/activity-books/english-class-4.pdf',
  },
  {
    id: 'urdu-4',
    class: 'Grade 4',
    title: 'Urdu Class-4',
    image: '/images/activity-books/urdu-class-4.jpg',
    pdf: '/pdfs/activity-books/urdu-class-4.pdf',
  },
  {
    id: 'social-study-4',
    class: 'Grade 4',
    title: 'Social Study Class-4',
    image: '/images/activity-books/social-study-class-4.jpg',
    pdf: '/pdfs/activity-books/social-study-class-4.pdf',
  },
  {
    id: 'math-4',
    class: 'Grade 4',
    title: 'Math Class-4',
    image: '/images/activity-books/math-class-4.jpg',
    pdf: '/pdfs/activity-books/math-class-4.pdf',
  },
  {
    id: 'science-4',
    class: 'Grade 4',
    title: 'Science Class-4',
    image: '/images/activity-books/science-class-4.jpg',
    pdf: '/pdfs/activity-books/science-class-4.pdf',
  },
  {
    id: 'islamiyat-4',
    class: 'Grade 4',
    title: 'Islamiyat Class-4',
    image: '/images/activity-books/islamiyat-class-4.jpg',
    pdf: '/pdfs/activity-books/islamiyat-class-4.pdf',
  },

  // Grade 5
  {
    id: 'english-5',
    class: 'Grade 5',
    title: 'English Class-5',
    image: '/images/activity-books/english-class-5.jpg',
    pdf: '/pdfs/activity-books/english-class-5.pdf',
  },
  {
    id: 'urdu-5',
    class: 'Grade 5',
    title: 'Urdu Class-5',
    image: '/images/activity-books/urdu-class-5.jpg',
    pdf: '/pdfs/activity-books/urdu-class-5.pdf',
  },
  {
    id: 'social-study-5',
    class: 'Grade 5',
    title: 'Social Study Class-5',
    image: '/images/activity-books/social-study-class-5.jpg',
    pdf: '/pdfs/activity-books/social-study-class-5.pdf',
  },
  {
    id: 'math-5',
    class: 'Grade 5',
    title: 'Math Class-5',
    image: '/images/activity-books/math-class-5.jpg',
    pdf: '/pdfs/activity-books/math-class-5.pdf',
  },
  {
    id: 'science-5',
    class: 'Grade 5',
    title: 'Science Class-5',
    image: '/images/activity-books/science-class-5.jpg',
    pdf: '/pdfs/activity-books/science-class-5.pdf',
  },
  {
    id: 'islamiyat-5',
    class: 'Grade 5',
    title: 'Islamiyat Class-5',
    image: '/images/activity-books/islamiyat-class-5.jpg',
    pdf: '/pdfs/activity-books/islamiyat-class-5.pdf',
  },
]


function ActivityBookCard({ book }) {
  return (
    <a
      href={book.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-brand-300
        hover:shadow-lg
        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-brand-500/50
      "
      title={`Open ${book.title} PDF`}
    >
      {/* Book Image */}
      <div className="flex aspect-[3/4] items-center justify-center bg-slate-50 p-4 dark:bg-slate-800">
        <img
          src={book.image}
          alt={book.title}
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
          loading="lazy"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col border-t border-slate-100 p-4 dark:border-slate-800">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {book.title}
        </h3>

        <div className="mt-auto pt-3">
          <span className="text-xs font-medium text-brand-600">
            View PDF →
          </span>
        </div>
      </div>
    </a>
  )
}


export default function ActivityBooks() {

  // Classes appear in this exact order
  const classOrder = [
    'KG',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
  ]

  // Group books by class
  const booksByClass = activityBooks.reduce((groups, book) => {
    if (!groups[book.class]) {
      groups[book.class] = []
    }

    groups[book.class].push(book)

    return groups
  }, {})

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="For Students"
        title="Activity Books"
        crumb="Activity Books"
        description="Explore activity books designed to make learning engaging, practical, and fun for students."
      />

      <section className="container-px mx-auto max-w-7xl py-16">

        {/* Class Sections */}
        <div className="mt-12 space-y-16">

          {classOrder.map((className) => {
            const classBooks = booksByClass[className]

            // Don't show classes without books
            if (!classBooks || classBooks.length === 0) {
              return null
            }

            // KG stays KG, Grade 1 becomes Class 1
            const displayClass =
              className === 'KG'
                ? 'KG'
                : className.replace('Grade ', 'Class ')

            return (
              <section key={className}>

                {/* Class Heading */}
                <div className="mb-8 flex items-center gap-4">

                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                      {displayClass}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {classBooks.length}{' '}
                      {classBooks.length === 1
                        ? 'book available'
                        : 'books available'}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

                </div>

                {/* Books Grid */}
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                  "
                >
                  {classBooks.map((book) => (
                    <ActivityBookCard
                      key={book.id}
                      book={book}
                    />
                  ))}
                </div>

              </section>
            )
          })}

        </div>
      </section>
    </>
  )
}

