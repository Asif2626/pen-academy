import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import EmptyState from '../components/EmptyState'

/**
 * Placeholder page for a single story category (e.g. /stories/moral).
 * Shows the category title, a cover image, a "coming soon" card and a link
 * back to the Stories page. A full story library will be added in a later
 * phase.
 */
export default function StoryCategory({ category }) {
  const { emoji, title, description, image } = category

  return (
    <>
      <PageHero eyebrow="Reading" title={title} crumb={title} description={description} />

      <section className="container-px mx-auto max-w-7xl py-14">
        <div className="mx-auto max-w-3xl">
          {image && (
            <img
              src={image}
              alt={title}
              className="mb-10 aspect-video w-full rounded-xl border border-slate-200 object-cover shadow-sm"
            />
          )}

          <SectionTitle
            eyebrow="Story Collections"
            title={title}
            description={`${description} Full stories will be added here soon.`}
          />

          <div className="mt-8">
            <EmptyState
              emoji={emoji}
              title={`${title} Coming Soon`}
              description={`A growing collection of ${title.toLowerCase()} will be published here.`}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="/stories" className="btn-outline">
              ← Back to Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}