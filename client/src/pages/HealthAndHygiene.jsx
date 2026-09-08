import React from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import InfoCard from '../components/InfoCard'
import { healthTopics } from '../data/healthTopics'

export default function HealthAndHygiene() {
  return (
    <>
      <PageHero
        eyebrow="Well-being"
        title="Health and Hygiene"
        crumb="Health and Hygiene"
        description="Educational content promoting health, hygiene and well-being for children."
      />

      {/* ============================================================
          Health And Hygiene — awareness topics
          (same shared structure as Parent Pack and Teacher Pack)
      ============================================================ */}
      <section className="container-px mx-auto max-w-7xl py-14">
        <SectionTitle
          align="left"
          eyebrow="Health Topics"
          title="Health And Hygiene"
          description="Simple daily habits protect you and your family from illness. Pick a topic to learn more."
        />
        <div className="mt-8">
          {healthTopics.map((topic, index) => (
            <React.Fragment key={topic.id}>
              <InfoCard {...topic} />
              {index < healthTopics.length - 1 && (
                <div className="my-10 border-t-2 border-dotted border-slate-300" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Thin horizontal divider below the section */}
        <div className="mt-10 border-t border-slate-200" aria-hidden="true" />
      </section>

    </>
  )
}