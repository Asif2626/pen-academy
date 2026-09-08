import React from 'react'
import PageHero from '../components/PageHero'

export default function Games() {
  const games = [
    {
      title: "Sesame Street's Online Home",
      url: "https://www.sesamestreet.org/",
      description:
        "Fun educational games, activities, and resources for young children.",
    },
    {
      title: "TIME for Kids",
      url: "https://www.timeforkids.com/",
      description:
        "News, articles, and educational content created especially for kids.",
    },
    {
      title: "Coolmath Games",
      url: "https://www.coolmathgames.com/",
      description:
        "Fun math, logic, strategy, and puzzle games for kids and students.",
    },
    {
      title: "National Geographic Kids",
      url: "https://kids.nationalgeographic.com/",
      description:
        "Discover animals, science, nature, quizzes, videos, and more.",
    },
    {
      title: "How Stuff Works",
      url: "https://www.howstuffworks.com/",
      description:
        "Learn how science, technology, history, and everyday things work.",
    },
    {
      title: "Starfall",
      url: "https://www.starfall.com/",
      description:
        "Interactive learning activities for early learners and young students.",
    },
    {
      title: "FunBrain",
      url: "https://www.funbrain.com/",
      description:
        "Educational games, books, videos, and activities for kids.",
    },
    {
      title: "Nick Jr.",
      url: "https://www.nickjr.com/",
      description:
        "Games, videos, and activities featuring popular kids' characters.",
    },
    {
      title: "Learning Games for Kids",
      url: "https://www.learninggamesforkids.com/",
      description:
        "Educational games covering math, language, science, and other subjects.",
    },
    {
      title: "Old Farmer's Almanac for Kids",
      url: "https://www.almanac.com/kids",
      description:
        "Fun facts, nature, weather, activities, and educational resources.",
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="For Students"
        title="Free Online Learning Games"
        crumb="Learning Games"
        description="Discover fun and educational online games, activities and resources designed to make learning more enjoyable."
      />

      <section className="container-px mx-auto max-w-7xl py-16">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {games.map((game, index) => (
            <a
              key={game.title}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group block border border-slate-200 bg-white p-6"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span
                  className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand-700"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <h2 className="mt-5 text-lg font-bold text-slate-900 transition group-hover:text-brand-700">
                {game.title}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {game.description}
              </p>

              <div className="mt-5 text-sm font-semibold text-brand-700">
                Visit website →
              </div>
            </a>
          ))}
        </div>

      </section>
    </>
  )
}




/* import { useEffect, useState } from 'react'

export default function Games() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games')

        if (!response.ok) {
          throw new Error('Failed to fetch games')
        }

        const data = await response.json()
        setGames(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  if (loading) {
    return (
      <section className="container-px mx-auto max-w-7xl py-14">
        <h1 className="mb-6 text-3xl font-bold">
          Free Online Learning Games
        </h1>
        <p>Loading games...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="container-px mx-auto max-w-7xl py-14">
        <h1 className="mb-6 text-3xl font-bold">
          Free Online Learning Games
        </h1>
        <p className="text-red-500">{error}</p>
      </section>
    )
  }

  return (
    <section className="container-px mx-auto max-w-7xl py-14">
      <h1 className="mb-6 text-3xl font-bold">
        Free Online Learning Games
      </h1>

      <ul className="list-disc space-y-2 pl-6">
        {games.map((game) => (
          <li key={game.id || game.title}>
            <a
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              {game.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
} */

