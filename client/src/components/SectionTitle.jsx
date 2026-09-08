import React from 'react'

/**
 * Reusable section heading with an optional eyebrow label and description.
 */
export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const centered = align !== 'left'

  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-slate-600">{description}</p>}
    </div>
  )
}
