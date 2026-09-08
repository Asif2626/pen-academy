import React from 'react'

/**
 * Reusable achievement stat card (e.g. Subscribers, Videos, Views).
 */
export default function AchievementCard({ value, label, emoji, color = 'from-brand-600 to-brand-800' }) {
  return (
    <div className="card flex flex-col items-center p-6 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-2xl shadow-sm">
        <span aria-hidden="true">{emoji}</span>
      </span>
      <div className={`mt-4 bg-gradient-to-r ${color} bg-clip-text text-4xl font-extrabold text-transparent`}>
        {value}
      </div>
      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-500">{label}</p>
    </div>
  )
}
