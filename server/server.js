// server/server.js
// PEN Academy REST API entry point.
//
// Expected frontend contract (see client/src/services/api.js):
//   every endpoint returns { success: true|false, data?, message? }
//   resources include an `id` alias alongside `_id`.
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { connectDB } from './config/db.js'
import { notFoundHandler, errorHandler } from './middleware/errorMiddleware.js'

import classRoutes from './routes/classRoutes.js'
import subjectRoutes from './routes/subjectRoutes.js'
import chapterRoutes from './routes/chapterRoutes.js'
import lectureRoutes from './routes/lectureRoutes.js'
import treeRoutes from './routes/treeRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import teamRoutes from './routes/teamRoutes.js'
import publicationRoutes from './routes/publicationRoutes.js'
import bookRoutes from './routes/bookRoutes.js'
import mediaRoutes from './routes/mediaRoutes.js'

const PORT = process.env.PORT || 5000
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map((origin) => origin.trim()).filter(Boolean)
  : 'http://localhost:5173'

const app = express()

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
)
app.use(express.json({ limit: '1mb' }))

// Health check — used to confirm the API is reachable.
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    data: {
      status: 'ok',
      service: 'pen-academy-api',
      time: new Date().toISOString(),
    },
  })
})

// API routes (mount order matters: /code and /slug before /:id in each file).
app.use('/api/courses/tree', treeRoutes)
app.use('/api/classes', classRoutes)
app.use('/api/subjects', subjectRoutes)
app.use('/api/chapters', chapterRoutes)
app.use('/api/lectures', lectureRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/team', teamRoutes)
app.use('/api/publications', publicationRoutes)
app.use('/api/books', bookRoutes)
app.use('/api/media', mediaRoutes)

// 404 + central error handling.
app.use(notFoundHandler)
app.use(errorHandler)

async function start() {
  const connection = await connectDB()
  const server = app.listen(PORT, () => {
    console.log(`PEN Academy API listening on http://localhost:${PORT}`)
  })

  const shutdown = async (signal) => {
    console.log(`\n${signal} received — shutting down...`)
    server.close(async () => {
      await connection.close()
      process.exit(0)
    })
  }
  process.on('SIGINT', () => shutdown('SIGINT'))
  process.on('SIGTERM', () => shutdown('SIGTERM'))
}

start().catch((err) => {
  console.error('Failed to start server:', err && err.message)
  process.exit(1)
})