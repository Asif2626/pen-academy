import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png'
import { site, footerLinks } from '../data/site'

/**
 * Site footer with brand info, quick links and legal links.
 */
export default function Footer() {
  const columns = [
    { title: 'PEN Academy', links: footerLinks.about },
    { title: 'Resources', links: footerLinks.resources },
    { title: 'Legal', links: footerLinks.legal },
  ]

  return (
    <>
      <footer className="bg-white text-black dark:bg-slate-950 dark:text-slate-400">
        <div className="container-px mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="PEN Academy logo"
                className="h-16 w-20 rounded-xl dark:ring-1 dark:ring-slate-700/60"
              />
            </div>

            <p className="mt-4 text-sm text-black dark:text-slate-400">{site.shortDescription}</p>
            <p className="mt-4 text-sm text-black dark:text-slate-400">{site.email}</p>
            <p className="text-sm text-black dark:text-slate-400">{site.phone}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-black dark:text-slate-200">
                {col.title}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-black transition-colors hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800">
          <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 py-5 text-center text-sm text-black sm:flex-row sm:text-left dark:text-slate-400">
            <p>{site.copyright}</p>

            <p>
              <span className="font-semibold text-black dark:text-slate-200">{site.name}</span> — {site.fullName}
            </p>
          </div>
        </div>
      </footer>
    </>
  )

}
