
# PEN Academy — MERN Application

Full-stack application for PEN Academy (Progressive Education Network).

- **Phase 1:** Public website frontend (React + Vite + Tailwind + React Router).
- **Phase 2:** Backend REST API (Node.js + Express + MongoDB + Mongoose).

## Project Structure

```
pen-academy/
├── client/              # React + Vite frontend (Phase 1)
│   ├── src/             # React source (pages, components, layouts, data)
│   ├── public/          # Static public assets (favicon, images, pdfs)
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── server/              # Express + MongoDB backend (Phase 2)
│   ├── config/          # db.js (MongoDB connection)
│   ├── controllers/     # API controllers
│   ├── middleware/      # errorMiddleware.js
│   ├── models/          # Mongoose models
│   ├── routes/          # API route files
│   ├── utils/           # seed.js, httpErrors, validateObjectId
│   ├── server.js        # Express entry point
│   ├── .env
│   └── package.json
├── .gitignore
└── README.md
```

---

## Frontend (Phase 1)

```bash
cd client
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
```

See the Phase 1 notes in the original README section below for routes and design.

---

## Backend (Phase 2)

### Requirements

- Node.js 18+
- MongoDB (local or MongoDB Atlas)

### Setup

```bash
# 1. Install server dependencies
cd server
npm install

# 2. Configure environment — copy server/.env.example to server/.env and fill MONGO_URI
#    (already done if server/.env exists)

# 3. Start the server (dev with nodemon)
npm run dev        # http://localhost:5000
```

### Environment variables (server `.env`)

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/pen_academy
CLIENT_URL=http://localhost:5173
```

### How to start MongoDB (local)

If MongoDB is installed as a service:

```bash
net start MongoDB
# or
sc start MongoDB
```

Or run `mongod` directly (data directory must exist):

```bash
mongod --dbpath C:\data\db
```

Then verify connectivity:

```bash
mongosh --eval "db.runCommand({ ping: 1 })"
```

### Seed data

Insert clearly-labelled sample/demo data (Grade 9 → Mathematics → Real Numbers → Lecture 1,
plus one book, blog, team member and publication):

```bash
cd server
npm run seed
```

NOTE: The seed script clears the demo collections first and inserts sample data only.

### API endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/api/health` | Health check |
| GET | `/api/courses/tree` | Curriculum tree (all classes → subjects → chapters → lectures + books) |
| GET | `/api/courses/tree/:classSlug` | Curriculum tree for one class |
| GET/POST | `/api/classes` | List / create classes |
| GET | `/api/classes/slug/:slug` | Get class by slug |
| GET/PUT/DELETE | `/api/classes/:id` | One class CRUD |
| GET/POST | `/api/subjects` | List (filter `?classId=`) / create subjects |
| GET | `/api/subjects/slug/:slug` | Get subject by slug (optional `?classId=`) |
| GET/PUT/DELETE | `/api/subjects/:id` | One subject CRUD |
| GET/POST | `/api/chapters` | List (filter `?classId=&subjectId=`) / create chapters |
| GET | `/api/chapters/slug/:slug` | Get chapter by slug (optional `?classId=&subjectId=`) |
| GET/PUT/DELETE | `/api/chapters/:id` | One chapter CRUD |
| GET/POST | `/api/lectures` | List (filter `?chapterId=&subjectId=&classId=`) / create lectures |
| GET | `/api/lectures/slug/:slug` | Get lecture by slug (optional `?classId=&subjectId=&chapterId=`) |
| GET | `/api/lectures/code/:code` | Get lecture by unique code (e.g. `lec-math9-001`) |
| GET/PUT/DELETE | `/api/lectures/:id` | One lecture CRUD |
| GET/POST | `/api/books` | List (filter `?classId=&subjectId=`) / create books |
| GET/PUT/DELETE | `/api/books/:id` | One book CRUD |
| GET/POST | `/api/blogs` | List / create blogs |
| GET | `/api/blogs/slug/:slug` | Get blog by slug |
| GET/PUT/DELETE | `/api/blogs/:id` | One blog CRUD |
| GET/POST | `/api/team` | List / create team members |
| GET/PUT/DELETE | `/api/team/:id` | One team member CRUD |
| GET/POST | `/api/publications` | List (filter `?category=`) / create publications |
| GET/PUT/DELETE | `/api/publications/:id` | One publication CRUD |
| GET/POST | `/api/media` | List / create media metadata |
| GET/PUT/DELETE | `/api/media/:id` | One media CRUD |

Relationship hierarchy: **Class → Subject → Chapter → Lecture** and **Class → Subject → Book**.

### Testing the API

With the server running, test with curl / Postman / a REST client:

```bash
# Health
curl http://localhost:5000/api/health

# List published classes
curl http://localhost:5000/api/classes

# Filter subjects by class
curl "http://localhost:5000/api/subjects?classId=CLassID"

# Create a class (201)
curl -X POST http://localhost:5000/api/classes \
  -H "Content-Type: application/json" \
  -d '{"name":"Grade 9","slug":"grade-9"}'
```

Published-only behavior: list and slug-lookup endpoints return `status: "published"` by default.
Pass `?status=draft` to see drafts explicitly.

Slug lookups and the curriculum tree return a frontend-friendly shape: every resource
includes an `id` alias (string form of `_id`) alongside `_id` (see `server/utils/serialize.js`).

For local development the Vite dev server proxies `/api` to the Express backend
(`client/vite.config.js`), so the frontend uses a relative API base URL. Set
`VITE_API_URL` to override (default `/api` — see `client/.env.example`). The server
environment template is `server/.env.example` (copy to `.env`).

---

## Phase 1 — Public Website (Original Notes)

Routes: `/`, `/about`, `/blogs`, `/blogs/:slug`, `/team`, `/publications`, `/courses`,
`/courses/:grade`, `/courses/:grade/:subject`, `/courses/:grade/:subject/:chapter`,
`/lecture/:id`, `/books`. Data lives in `src/data/` (to be replaced by the Phase 2 API in a
later phase). The central Axios client is at `src/services/api.js` (base URL from
`VITE_API_URL`, default `/api`, proxied to the backend in development), with
typed helper methods — currently unused by components until Phase 4.

