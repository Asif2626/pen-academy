import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { publications, publicationCategories } from '../data/publications'

export default function Publications() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16">
        <SectionTitle
          title="Publications List"
        />

        <div className="mt-12 space-y-12">
          {publicationCategories.map((cat) => {
            const items = publications[cat.id] || []
            return (
              <div key={cat.id}>
                <h2 className="border-l-4 border-brand-600 pl-3 text-xl font-bold text-slate-900">
                  {cat.label}
                </h2>
                {items.length === 0 ? (
                  <p className="mt-4 text-sm text-slate-500">No publications in this category yet.</p>
                ) : (
                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                    {items.map((item) => (
                      <article key={item.id} className="card card-hover p-6">
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{item.authors}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                          <span className="rounded-full bg-brand-50 px-2 py-0.5 font-semibold text-brand-700">
                            {item.journal}
                          </span>
                          <span className="text-slate-500">{item.year}</span>
                        </div>
                        <a
                          href={item.url}
                          target="_blank"
                          className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700"
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
      </section>
    </>
  )
}
