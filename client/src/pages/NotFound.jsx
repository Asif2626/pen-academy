import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound({ message = 'The page you are looking for could not be found.' }) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="container-px mx-auto max-w-xl text-center">
        <p className="text-6xl font-extrabold text-brand-200 dark:text-brand-500">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Page Not Found</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">{message}</p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
