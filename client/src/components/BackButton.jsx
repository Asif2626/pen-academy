import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackButton({ label = 'Previous Page' }) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-brand-500"
      aria-label={label}
    >
      <span className="text-lg leading-none">←</span>
      {label}
    </button>
  )
}
