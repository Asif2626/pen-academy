import React from 'react'

/**
 * Reusable card for a single story in the Stories library.
 *
 * The entire card (image + title) is wrapped in a semantic `<a>` element that
 * opens the story's external page in a new tab. The image itself is clickable —
 * there is no separate "Read more" button.
 */
export default function StoryCard({ story }) {
  const { title, language, image, url } = story

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover group flex flex-col overflow-hidden"
      aria-label={`${title} — ${language} story (opens in a new tab)`}
    >
      {/* Story image (clickable, with a subtle hover zoom) */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle external-link indicator on hover */}
        <span
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden="true"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5h5v5M19 5L10 14M19 14v5H5V5h4"
            />
          </svg>
        </span>
      </div>

      {/* Story title + language */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">
          {title}
        </h3>

        <span className="mt-3 inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          {language}
        </span>
      </div>
    </a>
  )
}