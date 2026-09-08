import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo/logo.png'
import { navLinks } from '../data/site'
import ThemeToggle from './ThemeToggle'

/**
 * Responsive site header: logo on the left, navigation + theme toggle on the
 * right on desktop and a hamburger menu on mobile (theme toggle stays visible).
 */
export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
      isActive
        ? 'text-brand-700 dark:text-brand-500'
        : 'text-slate-700 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-500'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="PEN Academy home">
          <img
            src={logo}
            alt="PEN Academy logo"
            className="h-16 w-20 rounded-xl dark:ring-1 dark:ring-slate-700/60"
          />
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Light/Dark theme toggle — visible on desktop and mobile */}
          <ThemeToggle />

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 dark:border-slate-800 dark:bg-slate-950 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="block rounded-md px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-brand-500"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
