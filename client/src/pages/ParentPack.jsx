import React from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import InfoCard from '../components/InfoCard'

// Parent Pack topics — same shared InfoCard design as Teacher Pack and
// Health And Hygiene. Only this content/data differs per section.
//
// YouTube topics (1 & 2) use real YouTube thumbnails so they keep the shared
// "Watch on YouTube" affordance:
//   - rPdutGLAHTg — "Hygiene Habits for Kids" (PEN Academy, verified)
//   - rUeqbb8CV58 — "COVID-19 AWARENESS I PEN Academy" (PEN Academy, verified)
//
// Topics 3-8 use the provided images in /images/parent-pack.

const guides = [
  {
    emoji: '🧼',
    label: 'Topic',
    title: 'Teaching your child good hygiene habits',
    description:
      'Teach your child to wash hands when they look dirty, before eating or preparing food, after touching raw meats (including chicken and beef), after touching body fluids like blood, urine or vomit, after touching animals, after blowing their nose, sneezing or coughing, and after going to the toilet. Encourage covering their mouth when they cough and having regular baths or showers.',
    image: 'https://img.youtube.com/vi/rPdutGLAHTg/maxresdefault.jpg',
    imageAlt: 'Hygiene Habits for Kids — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/rPdutGLAHTg',
    link: 'https://youtu.be/rPdutGLAHTg',
  },
  {
    emoji: '🛡️',
    label: 'Topic',
    title: 'Protecting children from the Negative Impacts of COVID-19',
    description:
      'COVID-19 has changed everyday life for children. This video from PEN Academy helps families understand the negative impacts of the pandemic and how parents can help protect and support their children.',
    image: 'https://img.youtube.com/vi/rUeqbb8CV58/hqdefault.jpg',
    imageAlt: 'COVID-19 Awareness video by PEN Academy',
    videoUrl: 'https://youtu.be/rUeqbb8CV58',
    link: 'https://youtu.be/rUeqbb8CV58',
  },
  {
    emoji: '🤝',
    label: 'Topic',
    title: 'Parents/Teachers Partnership',
    description:
      'A strong partnership between parents and teachers is built on trust, two-way communication and cooperation at home and in school.',
    image: '/images/parent-pack/parents-teachers-partnership.png',
    imageAlt: 'Parents and teachers working in partnership',
  },
  {
    emoji: '🏫',
    label: 'Topic',
    title: 'School Bullying',
    description:
      'Prevent School Bullying by having a clear definition of bullying, rewarding positive behaviour, and engaging parents in shaping a safe school culture.',
    image: '/images/parent-pack/school-bullying.png',
    imageAlt: 'School Bullying prevention illustration',
  },
  {
    emoji: '🎓',
    label: 'Topic',
    title: 'Country Program of Cooperation',
    description:
      'UNICEF Pakistan: the Country Program of Cooperation helps every child build knowledge, develop skills, discover themselves and pursue their dreams.',
    image: '/images/parent-pack/country-program-of-cooperation.png',
    imageAlt: 'UNICEF Pakistan Country Program of Cooperation',
  },
  {
    emoji: '📚',
    label: 'Topic',
    title: 'Every Child Learns',
    description:
      'UNICEF Pakistan: every child learns. Preschool is a great option for many families; learning is active and social and is enhanced by collaboration and interaction. Encourage students at every step.',
    image: '/images/parent-pack/every-child-learns.jpg',
    imageAlt: 'Every Child Learns — UNICEF Pakistan',
  },
  {
    emoji: '🏠',
    label: 'Topic',
    title: 'Every Child Lives in Safe Environment',
    description:
      'UNICEF Pakistan: children need environments that help them feel secure. Keep a clean and orderly classroom, and create a list of guidelines that are “law” — for example, no name-calling or bullying.',
    image: '/images/parent-pack/every-child-safe-environment.jpg',
    imageAlt: 'Safe environment for every child — UNICEF Pakistan',
  },
  {
    emoji: '🛡️',
    label: 'Topic',
    title: 'Child Protection',
    description:
      'UNICEF Pakistan: every child has the right to be born well, and to be cared for and raised well, and to live with a family that loves, cares and teaches good morals.',
    image: '/images/parent-pack/child-protection.jpg',
    imageAlt: 'Child Protection — UNICEF illustration',
  },
]

export default function ParentPack() {
  return (
    <>
      <PageHero
        eyebrow="For Parents"
        title="Parent Pack"
        crumb="Parent Pack"
        description="Guides and tools to help parents support their children in the digital classroom."
      />

      {/* ============================================================
          Guides — same shared structure as Teacher Pack and
          Health And Hygiene (PageHero + SectionTitle + InfoCard grid)
      ============================================================ */}
      <section className="container-px mx-auto max-w-7xl py-14">
        <SectionTitle
          align="left"
          eyebrow="Parental Guidelines"
          title="Guides for Every Family"
          description="Practical guidance to help parents accompany their children through digital learning."
        />
        <div className="mt-8">
          {guides.map((item, index) => (
            <React.Fragment key={item.title}>
              <InfoCard {...item} />
              {index < guides.length - 1 && (
                <div className="my-10 border-t-2 border-dotted border-slate-300 dark:border-slate-700" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Thin horizontal divider below the section */}
        <div className="mt-10 border-t border-slate-200 dark:border-slate-800" aria-hidden="true" />
      </section>

    </>
  )
}