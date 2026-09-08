import React from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import TextbookGradeCard from '../components/TextbookGradeCard'
import EmptyState from '../components/EmptyState'
import LoadingCards from '../components/LoadingCards'
import ErrorState from '../components/ErrorState'
import { getBooks } from '../services/content'
import useAsync from '../services/useAsync'

export default function CurriculumCompliance() {
  const { loading, error, data, retry } = useAsync(() => getBooks(), [])

  const groups = data ? data.groups : {}
  const order = data ? data.order : []

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="Curriculum & Compliance"
        title="Curriculum Compliance"
        crumb="Curriculum Compliance"
        description="Access curriculum guidelines, compliance documents, syllabus information, and other official educational resources."
      />

      {/* Grade-wise Textbooks */}
      <section
        className="container-px mx-auto max-w-7xl py-16"
        aria-label="Grade-wise Textbooks"
      >
        <SectionTitle
          eyebrow="Textbooks"
          title="Grade-wise Textbooks"
          description="Select your class to view its textbooks. Every book opens as a PDF in a new browser tab."
        />

        {loading ? (
          <div className="mt-12">
            <LoadingCards count={6} cols="grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        ) : error ? (
          <div className="mx-auto mt-12 max-w-3xl">
            <ErrorState
              title="Could not load textbooks"
              message="We could not reach the book library. Check your connection and try again."
              onRetry={retry}
            />
          </div>
        ) : order.length === 0 ? (
          <div className="mx-auto mt-12 max-w-3xl">
            <EmptyState
              emoji="📚"
              title="No textbooks yet"
              description="Textbooks are being added and will be published here soon."
            />
          </div>
        ) : (
          /* Responsive Grid */
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {order.map((gradeKey) => {
              const books = groups[gradeKey] || []
              // Only link books that actually point at a file; the card falls
              // back to a safe '#' placeholder for missing PDFs (UI-safe).
              const compulsory = books
                .filter((book) => book.pdf)
                .map((book) => ({ name: book.title, pdf: book.pdf }))
              return (
                <TextbookGradeCard
                  key={gradeKey}
                  gradeKey={gradeKey}
                  sections={{ label: gradeKey, compulsory, optional: [] }}
                />
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}

