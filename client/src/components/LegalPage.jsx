import React from 'react'
import PageHero from './PageHero'

/**
 * Shared renderer for static legal pages (Terms and Conditions, Disclaimer,
 * Privacy Policy). Content is passed in as plain data so it can later be
 * replaced by API-driven content without any component changes.
 *
 * Props:
 *   eyebrow    small label shown in the page hero (e.g. "Legal")
 *   title      page title (hero + breadcrumb)
 *   crumb      breadcrumb label (falls back to title inside PageHero)
 *   intro      array of lead-in paragraphs rendered before the sections
 *   sections   array of { heading, paragraphs?, bullets? } content blocks
 */
export default function LegalPage({ eyebrow, title, crumb, intro = [], sections = [] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} crumb={crumb} />

      <section className="container-px mx-auto max-w-3xl py-14">
        {/* Lead-in paragraphs */}
        {intro.length > 0 && (
          <div className="space-y-5">
            {intro.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'text-base font-medium leading-relaxed text-slate-700'
                    : 'leading-relaxed text-slate-600'
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Named sections */}
        {sections.map((section) => (
          <div key={section.heading} className="mt-10">
            <h2 className="border-l-4 border-brand-600 pl-3 text-xl font-bold text-slate-900">
              {section.heading}
            </h2>

            <div className="mt-4 space-y-4">
              {(section.paragraphs || []).map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}

              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc space-y-2 pl-6">
                  {section.bullets.map((item, index) => (
                    <li key={index} className="leading-relaxed text-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
