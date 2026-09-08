import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import NotFound from './NotFound'

// ============================================================
// Flatten all lectures into one lookup object
// ============================================================

const allLectures = Object.values(courses).reduce((acc, course) => {
  course.subjects.forEach((subject) => {
    ; (subject.chapters || []).forEach((chapter) => {
      ; (chapter.lectures || []).forEach((lec) => {
        acc[lec.id] = {
          ...lec,
          courseSlug: course.slug,
          courseName: course.name,
          subjectSlug: subject.slug,
          subjectName: subject.name,
          chapterSlug: chapter.slug,
          chapterName: chapter.name,
        }
      })
    })
  })

  return acc
}, {})

// ============================================================
// Convert YouTube URL to embed URL
// Supports:
// https://www.youtube.com/watch?v=VIDEO_ID
// https://youtu.be/VIDEO_ID
// https://www.youtube.com/embed/VIDEO_ID
// ============================================================

function getYouTubeEmbedUrl(url) {
  if (!url) return ''

  try {
    const parsedUrl = new URL(url)

    // youtube.com/watch?v=VIDEO_ID
    if (
      parsedUrl.hostname === 'www.youtube.com' ||
      parsedUrl.hostname === 'youtube.com'
    ) {
      if (parsedUrl.pathname === '/watch') {
        const videoId = parsedUrl.searchParams.get('v')

        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`
        }
      }

      // youtube.com/embed/VIDEO_ID
      if (parsedUrl.pathname.startsWith('/embed/')) {
        return url
      }
    }

    // youtu.be/VIDEO_ID
    if (parsedUrl.hostname === 'youtu.be') {
      const videoId = parsedUrl.pathname.split('/')[1]

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`
      }
    }
  } catch (error) {
    console.error('Invalid video URL:', url)
  }

  return ''
}

// ============================================================
// Lecture Page
// ============================================================

export default function Lecture() {
  const { id } = useParams()

  const lecture = allLectures[id]

  // ----------------------------------------------------------
  // Lecture not found
  // ----------------------------------------------------------

  if (!lecture) {
    return <NotFound message={`No lecture found with id "${id}".`} />
  }

  // ----------------------------------------------------------
  // Parent chapter of this lecture. The Back button (and the
  // breadcrumb) always point here, so it goes back exactly ONE
  // step in the curriculum hierarchy — not to browser history.
  // ----------------------------------------------------------

  const backUrl = `/courses/${lecture.courseSlug}/${lecture.subjectSlug}/${lecture.chapterSlug}`

  // ----------------------------------------------------------
  // YouTube embed URL
  // ----------------------------------------------------------

  const videoEmbedUrl = getYouTubeEmbedUrl(lecture.videoUrl)

  return (
    <>
      {/* ======================================================
          VIDEO HEADER
      ====================================================== */}

      <section className="bg-slate-900 py-10 text-white sm:py-14">
        <div className="container-px mx-auto max-w-5xl">

          {/* Breadcrumb */}
          <nav
            className="text-sm text-slate-400"
            aria-label="Breadcrumb"
          >
            <Link
              to="/courses"
              className="hover:text-white hover:underline"
            >
              Courses
            </Link>

            <span className="mx-2">/</span>

            <Link
              to={`/courses/${lecture.courseSlug}`}
              className="hover:text-white hover:underline"
            >
              {lecture.courseName}
            </Link>

            <span className="mx-2">/</span>

            <Link
              to={`/courses/${lecture.courseSlug}/${lecture.subjectSlug}`}
              className="hover:text-white hover:underline"
            >
              {lecture.subjectName}
            </Link>

            <span className="mx-2">/</span>

            <Link
              to={backUrl}
              className="hover:text-white hover:underline"
            >
              {lecture.chapterName}
            </Link>
          </nav>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            {lecture.title}
          </h1>

          {/* ==================================================
              VIDEO PLAYER
          ================================================== */}

          <div className="mt-8 overflow-hidden rounded-2xl bg-black shadow-2xl">

            {videoEmbedUrl ? (
              <div className="relative aspect-video w-full">
                <iframe
                  src={videoEmbedUrl}
                  title={lecture.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ) : (
              <div className="flex aspect-video items-center justify-center bg-slate-800">
                <div className="text-center">
                  <div className="text-5xl">🎬</div>

                  <p className="mt-3 text-sm text-slate-400">
                    Video is not available for this lecture.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Video information */}
          {videoEmbedUrl ? (
            <p className="mt-3 text-sm text-slate-400">
              Watch the complete video lecture above.
            </p>
          ) : (
            <p className="mt-3 text-sm text-slate-400">
              A video has not been added to this lecture yet.
            </p>
          )}

        </div>
      </section>

      {/* ======================================================
          LECTURE INFORMATION
      ====================================================== */}

      <section className="container-px mx-auto max-w-5xl py-12">

        {/* Tags */}
        <div className="flex flex-wrap gap-3 text-xs">

          <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
            Class: {lecture.courseName}
          </span>

          <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
            Subject: {lecture.subjectName}
          </span>

          <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
            Chapter: {lecture.chapterName}
          </span>

          {lecture.duration && (
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">
              Duration: {lecture.duration}
            </span>
          )}

        </div>

        {/* About */}
        <h2 className="mt-8 text-xl font-bold text-slate-900">
          About this Lecture
        </h2>

        <p className="mt-3 leading-relaxed text-slate-700">
          {lecture.description}
        </p>

        {/* Video URL - optional */}
        {lecture.videoUrl && (
          <div className="mt-6">
            <p className="text-sm text-slate-500">
              Video source:
            </p>

            <a
              href={lecture.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block break-all text-sm font-medium text-brand-600 hover:underline"
            >
              Open video on YouTube
            </a>
          </div>
        )}

        {/* Back — always to this lecture's parent chapter */}
        <div className="mt-8">
          <Link to={backUrl} className="btn-outline">
            ← Back to Chapter
          </Link>
        </div>

      </section>
    </>
  )
}
