import React, { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import EmptyState from '../components/EmptyState'
import { pastPaperGrades } from '../data/pastPapers'

// ============================================================
// Decorative icon per resource type. The type badge below always
// carries the readable type, so meaning never relies on the icon.
// ============================================================
const resourceTypeIcons = {
  Guidelines: '📋',
  MCQ: '📝',
  'Answer Key': '🔑',
  'Subjective Paper': '📄',
  'Objective Paper': '🗃️',
  Rubrics: '📊',
  PDF: '📄',
  Document: '📑',
  Video: '🎬',
  Other: '📎',
}

function ResourceIcon({ type }) {
  return (
    <span
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100 text-lg dark:bg-brand-500/15"
      aria-hidden="true"
    >
      {resourceTypeIcons[type] || resourceTypeIcons.Other}
    </span>
  )
}

function TypeBadge({ type }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-500">
      {type}
    </span>
  )
}

function YearBadge({ year }) {
  if (!year) return null
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
      {year}
    </span>
  )
}

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
      Coming Soon
    </span>
  )
}

// ============================================================
// Step 1 — one selectable card per grade/class
// ============================================================
function GradeCard({ grade, onSelect }) {
  const subjectCount = grade.subjects.length
  const resourceCount = grade.subjects.reduce((sum, subject) => sum + subject.resources.length, 0)

  return (
    <button
      type="button"
      onClick={() => onSelect(grade)}
      className="card card-hover group flex w-full flex-col items-start p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
      aria-label={`Select ${grade.name} — ${subjectCount} subjects`}
    >
      <span className="text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-brand-700 dark:text-slate-100 dark:group-hover:text-brand-500">
        {grade.name}
      </span>
      <span className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        {subjectCount} {subjectCount === 1 ? 'subject' : 'subjects'}
      </span>
      <span className="mt-2 text-xs font-semibold text-brand-700 dark:text-brand-500">
        {resourceCount > 0 ? `${resourceCount} resources listed` : 'Uploads coming soon'}
      </span>
    </button>
  )
}

// ============================================================
// Step 2 — one selectable card per subject of the selected grade
// ============================================================
function SubjectCard({ subject, onSelect }) {
  const count = subject.resources.length

  return (
    <button
      type="button"
      onClick={() => onSelect(subject)}
      className="card card-hover group flex w-full items-center justify-between gap-3 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
      aria-label={`Select ${subject.name} — ${count} resources`}
    >
      <span className="flex min-w-0 items-center gap-3">
        <span
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100 text-lg dark:bg-brand-500/15"
          aria-hidden="true"
        >
          {subject.icon || '📚'}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-semibold text-slate-900 transition-colors group-hover:text-brand-700 dark:text-slate-100 dark:group-hover:text-brand-500">
            {subject.name}
          </span>
          <span className="block text-xs text-slate-500 dark:text-slate-400">
            {count > 0 ? `${count} ${count === 1 ? 'resource' : 'resources'}` : 'Uploads coming soon'}
          </span>
        </span>
      </span>
    </button>
  )
}

// ============================================================
// Step 3 — one row per paper/resource of the selected subject
// ============================================================
function ResourceCard({ resource }) {
  const hasFile = Boolean(resource.file)
  const isPdf = hasFile && resource.file.toLowerCase().endsWith('.pdf')

  return (
    <li className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4">
      <ResourceIcon type={resource.type} />

      <div className="min-w-0 flex-1">
        <p className="font-semibold leading-snug text-slate-900 dark:text-slate-100">{resource.title}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <TypeBadge type={resource.type} />
          <YearBadge year={resource.year} />
          {hasFile && (
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {isPdf ? 'PDF' : resource.file.split('.').pop().toUpperCase()}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-shrink-0 flex-wrap items-center gap-2">
        {hasFile ? (
          <>
            <a
              href={resource.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border-2 border-brand-600 px-3 py-1.5 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-brand-500 dark:text-brand-500 dark:hover:bg-brand-500/10 dark:focus-visible:ring-offset-slate-950"
              aria-label={`View ${resource.title}`}
            >
              {isPdf ? 'View PDF' : 'Open'} ↗
            </a>
            <a
              href={resource.file}
              download
              className="inline-flex items-center gap-1 rounded-md bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              aria-label={`Download ${resource.title}`}
            >
              Download
            </a>
          </>
        ) : (
          <ComingSoonBadge />
        )}
      </div>
    </li>
  )
}

// ============================================================
// Shared back navigation between the three steps
// ============================================================
function BackButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 rounded text-sm font-semibold text-brand-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:text-brand-500 dark:focus-visible:ring-offset-slate-950"
    >
      ← {label}
    </button>
  )
}

// ============================================================
// Past Papers page — Grade → Subject → Resources
// Fully data-driven via src/data/pastPapers.js
// ============================================================
export default function PastPapers() {
  const [selectedGradeId, setSelectedGradeId] = useState(null)
  const [selectedSubjectId, setSelectedSubjectId] = useState(null)
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')

  const selectedGrade = pastPaperGrades.find((grade) => grade.id === selectedGradeId) || null
  const selectedSubject = selectedGrade
    ? selectedGrade.subjects.find((subject) => subject.id === selectedSubjectId) || null
    : null

  const resourceTypes = selectedSubject
    ? [...new Set(selectedSubject.resources.map((resource) => resource.type))]
    : []

  const filteredResources = selectedSubject
    ? selectedSubject.resources.filter((resource) => {
        const query = search.trim().toLowerCase()
        const matchesType = typeFilter === 'All' || resource.type === typeFilter
        const matchesSearch = query === '' || resource.title.toLowerCase().includes(query)
        return matchesType && matchesSearch
      })
    : []

  const selectGrade = (grade) => {
    setSelectedGradeId(grade.id)
    setSelectedSubjectId(null)
    setSearch('')
    setTypeFilter('All')
  }

  const selectSubject = (subject) => {
    setSelectedSubjectId(subject.id)
    setSearch('')
    setTypeFilter('All')
  }

  const backToGrades = () => {
    setSelectedGradeId(null)
    setSelectedSubjectId(null)
    setSearch('')
    setTypeFilter('All')
  }

  const backToSubjects = () => {
    setSelectedSubjectId(null)
    setSearch('')
    setTypeFilter('All')
  }
  return (
    <>
      <PageHero
        eyebrow="Exam Preparation"
        title="Past Papers"
        crumb="Past Papers"
        description="Previous board and annual papers to help students prepare for examinations."
      />

      <section className="container-px mx-auto max-w-7xl py-14">
        {/* ======================================================
            Step 1 — Select a Grade/Class
        ====================================================== */}
        {!selectedGrade && (
          <>
            <SectionTitle
              align="left"
              eyebrow="Step 1"
              title="Select your Grade/Class"
              description="Choose a grade to see its subjects and the past papers and resources available for them."
            />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {pastPaperGrades.map((grade) => (
                <GradeCard key={grade.id} grade={grade} onSelect={selectGrade} />
              ))}
            </div>
          </>
        )}

        {/* ======================================================
            Step 2 — Select a Subject
        ====================================================== */}
        {selectedGrade && !selectedSubject && (
          <>
            <BackButton label="All Grades" onClick={backToGrades} />
            <SectionTitle
              align="left"
              eyebrow={`Step 2 · ${selectedGrade.name}`}
              title="Select a Subject"
              description={`Choose a subject to view the past papers and resources available for ${selectedGrade.name}.`}
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedGrade.subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} onSelect={selectSubject} />
              ))}
            </div>
          </>
        )}

        {/* ======================================================
            Step 3 — Resources for the selected grade + subject
        ====================================================== */}
        {selectedGrade && selectedSubject && (
          <>
            <BackButton label={`${selectedGrade.name} Subjects`} onClick={backToSubjects} />
            <SectionTitle
              align="left"
              eyebrow={`Step 3 · ${selectedGrade.name}`}
              title={selectedSubject.name}
              description={`Past papers, model papers and resources for ${selectedGrade.name} ${selectedSubject.name} are listed below.`}
            />

            {selectedSubject.resources.length > 0 ? (
              <>
                {/* Search + type filter */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="past-paper-search" className="sr-only">
                      Search resources
                    </label>
                    <input
                      id="past-paper-search"
                      type="search"
                      placeholder="Search resources…"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:placeholder:text-slate-400 dark:focus:ring-brand-500/20"
                    />
                  </div>

                  {resourceTypes.length > 1 && (
                    <div className="w-full sm:w-56">
                      <label htmlFor="past-paper-type" className="sr-only">
                        Filter by resource type
                      </label>
                      <select
                        id="past-paper-type"
                        value={typeFilter}
                        onChange={(event) => setTypeFilter(event.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-brand-500/20"
                      >
                        <option value="All">All types</option>
                        {resourceTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Resource list */}
                {filteredResources.length > 0 ? (
                  <ul className="mt-6 flex flex-col gap-4">
                    {filteredResources.map((resource, index) => (
                      <ResourceCard key={`${selectedSubject.id}-${index}`} resource={resource} />
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 rounded-lg bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                    No resources match your search. Try a different title or type.
                  </p>
                )}
              </>
            ) : (
              <div className="mt-8 max-w-3xl">
                <EmptyState
                  emoji="🗂️"
                  title="Resources Coming Soon"
                  description={`Past papers and resources for ${selectedGrade.name} ${selectedSubject.name} are being prepared and will be published here.`}
                />
              </div>
            )}
          </>
        )}

        {/* Divider above the general note — consistent with sibling pages */}
        <div className="mt-14 border-t border-slate-200 dark:border-slate-800" aria-hidden="true" />
      </section>

      {/* ==========================================================
          General exam preparation note (preserved from the original page)
      ========================================================== */}
      <section className="bg-brand-50 py-14 dark:bg-brand-500/5">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle
            title="Exam Preparation Material"
            description="Downloadable past papers, date sheets and marking guidelines will be listed here."
          />
          <div className="mx-auto mt-8 max-w-3xl">
            <EmptyState
              emoji="🗂️"
              title="More Papers Coming Soon"
              description="Past examination papers are being collected and organised by grade and subject. Uploaded files will appear under their grade and subject above."
              action={{ label: 'Browse Courses', to: '/courses' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
