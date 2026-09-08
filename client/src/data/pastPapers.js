// src/data/pastPapers.js
// Data-driven Past Papers system for PEN Academy.
//
// STRUCTURE
//   pastPaperGrades[]              → one entry per grade/class
//     ├── id, grade, name
//     └── subjects[]               → subjects offered in that grade
//           ├── id, name, icon
//           └── resources[]        → papers & documents for that subject
//                 ├── title        display name
//                 ├── type         Guidelines | MCQ | Answer Key | Subjective Paper |
//                 │                Objective Paper | Rubrics | PDF | Document | Video | Other
//                 ├── year         optional — only set when the year is known
//                 ├── file         optional — public path to the uploaded file,
//                 │                e.g. '/past-papers/grade-5/english/mcq-model-paper.pdf'.
//                 │                Omitted while the file has not been uploaded;
//                 │                the UI then shows a "Coming Soon" state.
//                 └── url          optional — external link instead of a local file
//
// HOW TO ADD A PAPER LATER (data only — no component changes required):
//   1. Drop the file into  client/public/past-papers/<grade>/<subject>/
//   2. Add `file: '/past-papers/<grade>/<subject>/<name>.pdf'` (and `year` if
//      known) to the matching resource entry below — or add a new entry.
//
// NOTE: no files have been uploaded yet, so no resource below carries a
// `file` (and no file paths are invented). Every entry is upload-ready.

// Decorative icon per subject (used by the subject cards).
const subjectIcons = {
  English: '🔤',
  Urdu: '📘',
  Maths: '➗',
  Science: '🔬',
  Islamiat: '🕌',
  Nazra: '📖',
}

// Standard subject list (English, Urdu, Maths, Science, Islamiat, Nazra).
// Used by Grades 9-12, which start empty and are ready for uploads.
// Add or remove subjects freely — the page is fully data-driven.
function standardSubjects() {
  return ['English', 'Urdu', 'Maths', 'Science', 'Islamiat', 'Nazra'].map((name) => ({
    id: name.toLowerCase(),
    name,
    icon: subjectIcons[name],
    resources: [],
  }))
}

export const pastPaperGrades = [
  // ----------------------------------------------------------------
  // Grade 5 — model papers, PEC past papers and rubrics per subject
  // ----------------------------------------------------------------
  {
    id: 'grade-5',
    grade: 5,
    name: 'Grade 5',
    subjects: [
      {
        id: 'english',
        name: 'English',
        icon: '🔤',
        resources: [
          { title: 'Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ', type: 'Answer Key' },
          { title: 'Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class ENGLISH Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class ENGLISH Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class ENGLISH Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class ENGLISH Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      {
        id: 'urdu',
        name: 'Urdu',
        icon: '📘',
        resources: [
          { title: 'Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ', type: 'Answer Key' },
          { title: 'Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class Urdu Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class Urdu Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class Urdu Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class Urdu Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      {
        id: 'science',
        name: 'Science',
        icon: '🔬',
        resources: [
          { title: 'Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ', type: 'Answer Key' },
          { title: 'Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class Science Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class Science Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class Science Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class Science Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      {
        id: 'maths',
        name: 'Maths',
        icon: '➗',
        resources: [
          { title: 'Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ', type: 'Answer Key' },
          { title: 'Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class MATHS Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class MATHS Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class MATHS Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class MATHS Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      {
        id: 'islamiat',
        name: 'Islamiat',
        icon: '🕌',
        resources: [
          { title: 'Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ', type: 'Answer Key' },
          { title: 'Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class Islamiat Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class Islamiat Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'PEC 5TH Class Islamiat Past Paper (Objective Type)', type: 'Objective Paper' },
          { title: 'PEC 5TH Class Islamiat Past Paper (Subjective Type)', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      // Nazra — category ready for uploads (no documents invented).
      { id: 'nazra', name: 'Nazra', icon: '📖', resources: [] },
    ],
  },

  // ----------------------------------------------------------------
  // Grade 8 — test descriptions, model papers and rubrics per subject
  // ----------------------------------------------------------------
  {
    id: 'grade-8',
    grade: 8,
    name: 'Grade 8',
    subjects: [
      {
        id: 'english',
        name: 'English',
        icon: '🔤',
        resources: [
          { title: 'English – Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'English MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ Model Paper', type: 'Answer Key' },
          { title: 'English Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      {
        id: 'urdu',
        name: 'Urdu',
        icon: '📘',
        resources: [
          { title: 'Urdu – Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'Urdu MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ Model Paper', type: 'Answer Key' },
          { title: 'Urdu Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      {
        id: 'maths',
        name: 'Maths',
        icon: '➗',
        resources: [
          { title: 'Maths – Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'Maths MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ Model Paper', type: 'Answer Key' },
          { title: 'Maths Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      {
        id: 'science',
        name: 'Science',
        icon: '🔬',
        resources: [
          { title: 'Science – Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'Science MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ Model Paper', type: 'Answer Key' },
          { title: 'Science Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      {
        id: 'islamiat',
        name: 'Islamiat',
        icon: '🕌',
        resources: [
          { title: 'Islamiat – Test Description & Guidelines for Teachers', type: 'Guidelines' },
          { title: 'Islamiat MCQ Model Paper', type: 'MCQ' },
          { title: 'Key MCQ Model Paper', type: 'Answer Key' },
          { title: 'Islamiat Subjective Model Paper', type: 'Subjective Paper' },
          { title: 'Rubrics Model Paper', type: 'Rubrics' },
        ],
      },
      // Nazra — category ready for uploads (no documents invented).
      { id: 'nazra', name: 'Nazra', icon: '📖', resources: [] },
    ],
  },

  // ----------------------------------------------------------------
  // Grades 9-12 — same reusable structure, subjects ready for uploads.
  // Add subjects/resources directly in the arrays below as files become
  // available — no component changes are needed.
  // ----------------------------------------------------------------
  {
    id: 'grade-9',
    grade: 9,
    name: 'Grade 9',
    subjects: standardSubjects(),
  },
  {
    id: 'grade-10',
    grade: 10,
    name: 'Grade 10',
    subjects: standardSubjects(),
  },
  {
    id: 'grade-11',
    grade: 11,
    name: 'Grade 11',
    // Grade 11 subject combinations can differ — edit the array freely.
    subjects: standardSubjects(),
  },
  {
    id: 'grade-12',
    grade: 12,
    name: 'Grade 12',
    subjects: standardSubjects(),
  },
]