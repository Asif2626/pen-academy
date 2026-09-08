import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import BackButton from '../components/BackButton'
import LoadingState from '../components/LoadingState'
import ErrorState from '../components/ErrorState'
import EmptyState from '../components/EmptyState'
import { getCurriculum } from '../services/curriculum'
import useAsync from '../services/useAsync'
import NotFound from './NotFound'

// Get YouTube video ID from different YouTube URL formats.
function getYouTubeVideoId(url) {
  if (!url) return null

  try {
    const parsedUrl = new URL(url)

    // https://youtu.be/VIDEO_ID
    if (parsedUrl.hostname === 'youtu.be') {
      return parsedUrl.pathname.slice(1)
    }

    // https://www.youtube.com/watch?v=VIDEO_ID
    if (
      parsedUrl.hostname.includes('youtube.com') ||
      parsedUrl.hostname.includes('youtube-nocookie.com')
    ) {
      // Normal watch URL
      const videoId = parsedUrl.searchParams.get('v')
      if (videoId) return videoId

      // /embed/VIDEO_ID
      if (parsedUrl.pathname.startsWith('/embed/')) {
        return parsedUrl.pathname.split('/embed/')[1]
      }

      // /shorts/VIDEO_ID
      if (parsedUrl.pathname.startsWith('/shorts/')) {
        return parsedUrl.pathname.split('/shorts/')[1]
      }
    }
  } catch {
    return null
  }

  return null
}

// Real YouTube thumbnail generated from the existing video URL.
// hqdefault.jpg is always available for valid video IDs.
function getYouTubeThumbnail(url) {
  const videoId = getYouTubeVideoId(url)

  if (!videoId) return null

  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

export default function Chapter() {
  const { grade, subject, chapter } = useParams()
  const { loading, error, data, retry } = useAsync(
    () => getCurriculum(),
    [grade, subject, chapter],
  )

  if (loading) {
    return (
      <section className="container-px mx-auto max-w-5xl py-16">
        <LoadingState label="Loading chapter…" />
      </section>
    )
  }

  if (error || !data) {
    return (
      <section className="container-px mx-auto max-w-5xl py-16">
        <ErrorState
          title="Could not load this chapter"
          message="We could not load the curriculum from the server. Check your connection and try again."
          onRetry={retry}
        />
      </section>
    )
  }

  const course = data.courses[grade]

  if (!course) {
    return <NotFound message={`No curriculum found for "${grade}".`} />
  }

  const subjectData = course.subjects.find(
    (s) => s.slug === subject
  )

  if (!subjectData) {
    return <NotFound message={`No subject found for "${subject}".`} />
  }

  const chapterData = subjectData.chapters.find(
    (c) => c.slug === chapter
  )

  if (!chapterData) {
    return <NotFound message={`No chapter found for "${chapter}".`} />
  }

  const lectures = chapterData.lectures || []

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}
      <section className="bg-white py-14 text-gray-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="container-px mx-auto max-w-5xl">

          <nav
            className="text-sm text-gray-500 dark:text-slate-400"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link to="/courses" className="hover:underline">
              Courses
            </Link>

            <span className="mx-2">/</span>

            <Link
              to={`/courses/${grade}`}
              className="hover:underline"
            >
              {course.name}
            </Link>

            <span className="mx-2">/</span>

            <Link
              to={`/courses/${grade}/${subject}`}
              className="hover:underline"
            >
              {subjectData.name}
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900 dark:text-slate-100">
              {chapterData.name}
            </span>
          </nav>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            {chapterData.name}
          </h1>

          {chapterData.description && (
            <p className="mt-3 max-w-2xl text-gray-600 dark:text-slate-400">
              {chapterData.description}
            </p>
          )}
        </div>
      </section>

      {/* =====================================================
          VIDEO LECTURES
      ===================================================== */}
      <section className="container-px mx-auto max-w-5xl py-16">
        <h2 className="border-l-4 border-brand-600 pl-3 text-xl font-bold text-slate-900 dark:text-slate-100">
          Video Lectures ({lectures.length})
        </h2>

        {lectures.length === 0 ? (
          <div className="mx-auto mt-8 max-w-3xl">
            <EmptyState
              emoji="🎬"
              title="No lectures yet"
              description="Video lectures for this chapter are being prepared and will be published here."
            />
          </div>
        ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lectures.map((lec, i) => {
            // Extract the YouTube video ID from videoUrl to build the
            // real YouTube thumbnail URL.
            const videoId = getYouTubeVideoId(lec.videoUrl)
            const thumbnail = getYouTubeThumbnail(lec.videoUrl)

            return (
              <Link
                key={lec.id}
                to={`/lecture/${lec.id}`}
                className="group card card-hover flex flex-col overflow-hidden"
                aria-label={`Watch ${lec.title}`}
              >
                {/* =================================================
                    YOUTUBE THUMBNAIL (real thumbnail from videoUrl)
                ================================================= */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={`${lec.title} thumbnail`}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // Hide a broken thumbnail (e.g. video removed)
                        // so the grey backdrop and badges stay clean.
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : (
                    <PlaceholderImage
                      emoji={lec.emoji || '🎬'}
                      color={lec.color || 'from-brand-600 to-brand-800'}
                      label={`${lec.title} video`}
                      className="w-full"
                    />
                  )}

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                  {/* Play button */}
                  {thumbnail && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <svg
                          className="ml-1 h-7 w-7"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </div>
                  )}

                  {/* Lecture number */}
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                    Lecture {i + 1}
                  </span>

                  {/* Duration */}
                  {lec.duration && (
                    <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs font-semibold text-white">
                      ⏱ {lec.duration}
                    </span>
                  )}
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold text-slate-900 transition-colors group-hover:text-brand-600 dark:text-slate-100 dark:group-hover:text-brand-500">
                    {lec.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                    {lec.description}
                  </p>

                  <div className="mt-4 text-sm font-semibold text-brand-600 dark:text-brand-500">
                    Watch Lecture →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        )}

        <div className="mt-8">
          <BackButton label="Previous Page" />
        </div>

      </section>
    </>
  )
}
