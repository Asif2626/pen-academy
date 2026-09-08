import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

/**
 * Light/Dark theme provider.
 *
 * - Persists the choice in localStorage under the `pen-theme` key.
 * - Applies/removes the `dark` class on the root <html> element.
 * - Defaults to Light when no preference has been saved (matches the
 *   inline script in index.html that prevents a flash of the wrong theme).
 */
const THEME_STORAGE_KEY = 'pen-theme'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

function readStoredTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch (e) {
    /* localStorage unavailable — fall back to the default Light theme. */
  }
  return 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch (e) {
      /* Ignore write failures (private mode etc.) — the UI still switches. */
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}