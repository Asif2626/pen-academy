import React from 'react'

/**
 * Skeleton grid shown while API-driven lists are loading.
 * Mirrors the card grids used across the site (no flashy animation).
 */
export default function LoadingCards({ count = 6, cols = 'grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' }) {
  return (
    <div className={`grid ${cols}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="h-28 bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-2 p-5">
            <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
      ))}
    </div>
  )
}