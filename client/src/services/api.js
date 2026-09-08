// src/services/api.js
// Central Axios configuration + typed helper methods for the PEN Academy API.
//
// Base URL resolution:
//   - Development: the Vite dev server proxies "/api" to the Express backend
//     (see vite.config.js), so the default relative "/api" works with no extra
//     config and no hardcoded production URL.
//   - Production: set VITE_API_URL to the deployed API origin
//     (see client/.env.example), e.g. VITE_API_URL=https://api.example.com/api
//
// This file is the single front-end API layer. Pages never call axios
// directly — they use the helpers below (optionally via the service modules in
// src/services/). Every endpoint wraps its payload in a { success, data }
// envelope; use `getData(...)` to unwrap it (see below).

import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

// A shared axios instance for API calls.
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// Unwrap the { success, data } envelope used by every endpoint: returns the
// payload `data` directly and throws a friendly error when the API reports
// `success: false` (network/HTTP errors still surface from the axios layer).
// Pass it an axios promise, e.g. `await getData(api.getClasses())`.
export async function getData(request) {
  const response = await request
  const body = response?.data
  if (body && body.success === false) {
    throw new Error(body.message || 'The request could not be completed.')
  }
  return body ? body.data : undefined
}

// --- Convenience helpers (single front-end API layer; contracts in README) ---
export const api = {
  getHealth: () => apiClient.get('/health'),

  // Classes / curriculum tree
  getClasses: (params) => apiClient.get('/classes', { params }),
  getClassBySlug: (slug, params) => apiClient.get(`/classes/slug/${slug}`, { params }),
  getCurriculumTree: (classSlug, params) =>
    apiClient.get(classSlug ? `/courses/tree/${classSlug}` : '/courses/tree', { params }),

  // Subjects / chapters / lectures
  getSubjects: (params) => apiClient.get('/subjects', { params }),
  getSubjectBySlug: (slug, params) => apiClient.get(`/subjects/slug/${slug}`, { params }),
  getChapters: (params) => apiClient.get('/chapters', { params }),
  getChapterBySlug: (slug, params) => apiClient.get(`/chapters/slug/${slug}`, { params }),
  getLectures: (params) => apiClient.get('/lectures', { params }),
  getLectureBySlug: (slug, params) => apiClient.get(`/lectures/slug/${slug}`, { params }),
  getLectureByCode: (code, params) => apiClient.get(`/lectures/code/${code}`, { params }),

  // Content
  getBlogs: (params) => apiClient.get('/blogs', { params }),
  getBlogBySlug: (slug, params) => apiClient.get(`/blogs/slug/${slug}`, { params }),
  getTeam: (params) => apiClient.get('/team', { params }),
  getPublications: (params) => apiClient.get('/publications', { params }),
  getBooks: (params) => apiClient.get('/books', { params }),
  getMedia: (params) => apiClient.get('/media', { params }),
}

export default apiClient
