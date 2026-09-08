import React from 'react'
import { Link } from 'react-router-dom'

import aboutEducation from '../assets/images/hero-banner.jpg'
import hblLogo from '../assets/images/hbl.jpg'
import jicaLogo from '../assets/images/jica.jpg'
import youtubeChannel from '../assets/images/youtube-channel.png'

import SectionTitle from '../components/SectionTitle'
import CategoryCard from '../components/CategoryCard'
import AchievementCard from '../components/AchievementCard'

import { categories } from '../data/categories'
import { site } from '../data/site'

const achievements = [
  {
    value: '23,610',
    label: 'Subscribers',
    emoji: '🧑‍🎓',
    color: 'from-brand-600 to-indigo-700',
  },
  {
    value: '2,010',
    label: 'Videos',
    emoji: '🎬',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    value: '3,119,893',
    label: 'Views',
    emoji: '👁️',
    color: 'from-amber-500 to-orange-700',
  },
]

const sponsors = [
  {
    name: 'HBL',
    logo: hblLogo,
  },
  {
    name: 'JICA',
    logo: jicaLogo,
  },
]


// ======================================================
// PUT YOUR REAL PEN DOCUMENTARY YOUTUBE LINK HERE
// ======================================================

const documentaryUrl =
  'https://www.youtube.com/watch?v=AzbJMPYcaV0'


// ======================================================
// Convert YouTube URL to embed URL
// ======================================================

function getYouTubeEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url)

    // Example:
    // https://www.youtube.com/watch?v=ABC123
    if (parsedUrl.hostname.includes('youtube.com')) {
      const videoId = parsedUrl.searchParams.get('v')

      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}`
      }
    }

    // Example:
    // https://youtu.be/ABC123
    if (parsedUrl.hostname === 'youtu.be') {
      const videoId = parsedUrl.pathname.substring(1)

      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}`
      }
    }

    return ''
  } catch {
    return ''
  }
}

export default function Home() {
  const documentaryEmbedUrl =
    getYouTubeEmbedUrl(documentaryUrl)

  return (
    <>
      {/* ==================================================
          Categories
      ================================================== */}

      <section className="container-px mx-auto max-w-7xl py-10 sm:py-12 lg:py-16">
        <SectionTitle
          title="Explore Educational Sections"
          titleClassName="text-green-600"
        />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </section>

      {/* 
      <section className="container-px mx-auto max-w-7xl py-16">
        <SectionTitle
          title="Explore Educational Sections"
          titleClassName="text-green-600"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </section> */}


      {/* ==================================================
          Achievements
      ================================================== */}

      <section className="bg-brand-50 py-16 dark:bg-brand-500/5">
        <div className="container-px mx-auto max-w-7xl">

          <SectionTitle
            title="Achievements of PEN Academy"
            description="Join thousands of learners benefiting from quality digital education."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {achievements.map((achievement) => (
              <AchievementCard
                key={achievement.label}
                {...achievement}
              />
            ))}
          </div>

        </div>
      </section>


      {/* ==================================================
          High Quality Education
      ================================================== */}

      <section className="container-px mx-auto max-w-7xl py-16">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          <img
            src={aboutEducation}
            alt="High quality education illustration"
            className="mx-auto w-full max-w-md rounded-2xl"
          />

          <div>

            <SectionTitle
              align="left"
              eyebrow="Why Choose Us"
              title="High Quality Education"
              description="PEN Academy is committed to delivering high quality education that is accessible, affordable and aligned with the national curriculum."
            />

            <ul className="mt-6 space-y-3">

              {[
                'Free video lectures for every subject and grade',
                'Chapter-wise learning with clear explanations',
                'Resources for students, teachers and parents',
                'Accessible on any device, anytime, anywhere',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                >
                  <span
                    className="mt-0.5 text-brand-600"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  {item}
                </li>
              ))}

            </ul>

            <div className="mt-7">
              <Link
                to="/courses"
                className="btn-primary"
              >
                Explore Our Courses
              </Link>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          PEN DOCUMENTARY
      ================================================== */}

      <section className="bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">

        <div className="container-px mx-auto max-w-4xl text-center">

          <SectionTitle
            title="PEN Documentary"
            description="PEN so far, has adopted 530 schools in Pakistan that are providing education to 90301 students with 1300 Certified Teachers."
          />

          {/* Actual YouTube video */}
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">

            {documentaryEmbedUrl ? (

              <iframe
                src={documentaryEmbedUrl}
                title="PEN Academy Documentary"
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            ) : (

              <div className="flex h-full items-center justify-center text-white">
                Documentary video is unavailable.
              </div>

            )}

          </div>

          {/* YouTube button */}
          <a
            href={documentaryUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-block rounded-md bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Watch on YouTube
          </a>

        </div>

      </section>


      {/* ==================================================
    Sponsors
================================================== */}

      <section className="container-px mx-auto max-w-7xl py-16">

        <SectionTitle
          title="Our Sponsors"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">

          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex h-28 w-44 items-center justify-center rounded-xl bg-white p-5 shadow-sm dark:ring-1 dark:ring-slate-800"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="max-h-70 max-w-[150px] object-contain"
              />
            </div>
          ))}

        </div>

      </section>



      {/* ==================================================
          YouTube Channel
      ================================================== */}

      <section className="bg-brand-50 py-16 dark:bg-brand-500/5">

        <div className="container-px mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <img
            src={youtubeChannel}
            alt="PEN Academy YouTube Channel"
            className="w-full rounded-2xl object-cover"
          />
          <div>

            <SectionTitle
              align="left"
              eyebrow="YouTube"
              title="Watch PEN Academy on YouTube"
              description="Follow our official channel for the latest video lectures, lessons and educational content for every grade."
            />

            <div className="mt-6 flex flex-wrap gap-3">

              <a
                href={site.youtubeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
              >
                Subscribe on YouTube
              </a>

              <Link
                to="/courses"
                className="btn-outline"
              >
                Browse Lectures
              </Link>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}
