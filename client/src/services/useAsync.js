// src/services/useAsync.js
// Minimal async-state hook used by API-driven pages.
//   const { loading, error, data, retry } = useAsync(() => api.getBooks(), [])
//   - `loading` true while the loader runs (also on retry)
//   - `error`   the thrown error, or null
//   - `data`    the loader result, or null
//   - `retry`   re-runs the loader (same deps)
// The optional `deps` array mirrors useCallback/useEffect semantics so the
// loader is re-run when a route param (slug) changes.
import { useState, useCallback, useEffect } from 'react'

export default function useAsync(loader, deps = []) {
  const [state, setState] = useState({ loading: true, error: null, data: null })

  const run = useCallback(async () => {
    setState({ loading: true, error: null, data: null })
    try {
      const result = await loader()
      setState({ loading: false, error: null, data: result })
    } catch (error) {
      setState({ loading: false, error, data: null })
    }
  }, deps || [])

  useEffect(() => {
    void run()
  }, [run])

  return { ...state, retry: run }
}