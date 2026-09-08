import React from 'react'
import SectionTitle from '../components/SectionTitle'
import EmptyState from '../components/EmptyState'
import LoadingState from '../components/LoadingState'
import ErrorState from '../components/ErrorState'
import { getPublications } from '../services/content'
import useAsync from '../services/useAsync'

export default function Publications() {
  const { loading, error, data, retry } = useAsync(() => getPublications(), [])

  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16">
        <SectionTitle
          title="Publications List"
        />

        {loading ? (
          <div className="py-10">
            <LoadingState label="Loading publications…" />
          </div>
        ) : error ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <ErrorState
              title="Could not load publications"
              message="We could not load the publications from the server. Check your connection and try again."
              onRetry={retry}
            />
          </div>
        ) : data.categories.length === 0 ? (
          <div className="mx-auto mt-12 max-w-3xl">
            <EmptyState
              emoji="📄"
              title="No publications yet"
              description="Publications are being added and will be listed here soon."
            />
          </div>
        ) : (
          <div className="mt-12 space-y-12">
            {data.categories.map((cat) => {
              const items = data.publications[cat.id] || []
              return (
                <div key={cat.id}>
                  <h2 className="border-l-4 border-brand-600 pl-3 text-xl font-bold text-slate-900 dark:text-slate-100">
                    {cat.label}
                  </h2>
                  {items.length === 0 ? (
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">No publications in this category yet.</p>
                  ) : (
                    <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                      {items.map((item) => (
                        <article key={item.id} className="card card-hover p-6">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.authors}</p>
                          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                            <span className="rounded-full bg-brand-50 px-2 py-0.5 font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-500">
                              {item.journal}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400">{item.year}</span>
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-500 dark:hover:text-brand-400"
                            aria-label={`Read ${item.title}`}
                          >
                            Read Publication
                            <svg
                              className="ml-1 h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}
