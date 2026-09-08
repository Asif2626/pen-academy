import React from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import InfoCard from '../components/InfoCard'
import StoryCard from '../components/StoryCard'
import { storyCollections, englishStories, urduStories } from '../data/stories'

export default function Stories() {
  return (
    <>
      <PageHero
        eyebrow="Reading"
        title="Stories For Kids"
        crumb="Stories"
        description="Inspiring and moral stories written for young learners."
      />

      {/* English & Urdu Stories — Two Columns */}
      <section className="container-px mx-auto max-w-7xl pb-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* English Stories */}
          <div>
            <SectionTitle
              align="left"
              eyebrow="English"
              title="English Stories"
              description="Enjoy engaging English stories designed to improve children's reading, listening, vocabulary, and understanding skills."
            />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {englishStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>

          {/* Urdu Stories */}
          <div>
            <SectionTitle
              align="left"
              eyebrow="Urdu"
              title="Urdu Stories"
              description="Explore enjoyable Urdu stories that help children develop language skills, comprehension, vocabulary, and a love for reading."
            />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {urduStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>

        </div>
      </section>


      <section className="container-px mx-auto max-w-7xl py-14">
        <SectionTitle
          align="left"
          eyebrow="Story Collections"
          title="A World of Imagination"
          description="Delightful stories that build reading skills and encourage good values."
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {storyCollections.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

    </>
  )
}

