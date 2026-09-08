// src/data/textbooks.js
// ============================================================
// Grade-wise textbooks (PRE-I through CLASS-XII).
//
// Each grade has:
//   - compulsory: required subject books
//   - optional:   extra / optional books (may be empty)
//
// Every book has a `pdf` field. If a real PDF is not available yet,
// use '#' as a placeholder and drop the file into client/public/books/
// later — no component changes needed.
//
// PDF paths reuse the existing book library (src/data/books.js):
//   - PRE-I points to the actual files in /books/kg/
//   - CLASS-I..VIII follow the existing /books/class-N/ convention
//   - CLASS-IX-X / CLASS-XI-XII use the combined /books/class-9-10/
//     and /books/class-11-12/ folders
// ============================================================

export const textbooks = {
  'PRE-I': {
    compulsory: [
      { name: 'Primer English', pdf: '/books/kg/english.pdf' },
      { name: 'Primer Urdu', pdf: '/books/kg/urdu.pdf' },
      { name: 'Primer Mathematics', pdf: '/books/kg/mathematics.pdf' },
    ],
    optional: [
      { name: 'Primer Urdu Qaida', pdf: '/books/kg/urdu-qaida.pdf' },
    ],
  },

  'CLASS-I': {
    compulsory: [
      { name: 'English', pdf: '/books/class-1/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-1/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-1/mathematics.pdf' },
      { name: 'General Knowledge', pdf: '/books/class-1/general-knowledge.pdf' },
    ],
    optional: [],
  },

  'CLASS-II': {
    compulsory: [
      { name: 'English', pdf: '/books/class-2/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-2/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-2/mathematics.pdf' },
      { name: 'General Knowledge', pdf: '/books/class-2/general-knowledge.pdf' },
    ],
    optional: [],
  },

  'CLASS-III': {
    compulsory: [
      { name: 'English', pdf: '/books/class-3/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-3/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-3/mathematics.pdf' },
      { name: 'Science', pdf: '/books/class-3/science.pdf' },
    ],
    optional: [],
  },

  'CLASS-IV': {
    compulsory: [
      { name: 'English', pdf: '/books/class-4/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-4/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-4/mathematics.pdf' },
      { name: 'Science', pdf: '/books/class-4/science.pdf' },
    ],
    optional: [],
  },

  'CLASS-V': {
    compulsory: [
      { name: 'English', pdf: '/books/class-5/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-5/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-5/mathematics.pdf' },
      { name: 'Science', pdf: '/books/class-5/science.pdf' },
    ],
    optional: [],
  },

  'CLASS-VI': {
    compulsory: [
      { name: 'English', pdf: '/books/class-6/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-6/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-6/mathematics.pdf' },
      { name: 'Science', pdf: '/books/class-6/science.pdf' },
    ],
    optional: [],
  },

  'CLASS-VII': {
    compulsory: [
      { name: 'English', pdf: '/books/class-7/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-7/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-7/mathematics.pdf' },
      { name: 'Science', pdf: '/books/class-7/science.pdf' },
    ],
    optional: [],
  },

  'CLASS-VIII': {
    compulsory: [
      { name: 'English', pdf: '/books/class-8/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-8/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-8/mathematics.pdf' },
      { name: 'Science', pdf: '/books/class-8/science.pdf' },
    ],
    optional: [],
  },

  'CLASS-IX': {
    label: 'CLASS IX',
    compulsory: [
      { name: 'English', pdf: '/books/class-9/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-9/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-9/mathematics.pdf' },
      { name: 'Physics', pdf: '/books/class-9/physics.pdf' },
      { name: 'Chemistry', pdf: '/books/class-9/chemistry.pdf' },
      { name: 'Biology', pdf: '/books/class-9/biology.pdf' },
    ],
    optional: [],
  },

  'CLASS-X': {
    label: 'CLASS X',
    compulsory: [
      { name: 'English', pdf: '/books/class-10/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-10/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-10/mathematics.pdf' },
      { name: 'Physics', pdf: '/books/class-10/physics.pdf' },
      { name: 'Chemistry', pdf: '/books/class-10/chemistry.pdf' },
      { name: 'Biology', pdf: '/books/class-10/biology.pdf' },
    ],
    optional: [],
  },

  'CLASS-IX-X': {
    label: 'CLASS IX-X',
    compulsory: [
      { name: 'English', pdf: '/books/class-9-10/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-9-10/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-9-10/mathematics.pdf' },
      { name: 'Physics', pdf: '/books/class-9-10/physics.pdf' },
      { name: 'Chemistry', pdf: '/books/class-9-10/chemistry.pdf' },
      { name: 'Biology', pdf: '/books/class-9-10/biology.pdf' },
    ],
    optional: [],
  },

  'CLASS-XI': {
    label: 'CLASS XI',
    compulsory: [
      { name: 'English', pdf: '/books/class-11/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-11/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-11/mathematics.pdf' },
      { name: 'Physics', pdf: '/books/class-11/physics.pdf' },
      { name: 'Chemistry', pdf: '/books/class-11/chemistry.pdf' },
      { name: 'Biology', pdf: '/books/class-11/biology.pdf' },
    ],
    optional: [],
  },

  'CLASS-XII': {
    label: 'CLASS XII',
    compulsory: [
      { name: 'English', pdf: '/books/class-12/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-12/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-12/mathematics.pdf' },
      { name: 'Physics', pdf: '/books/class-12/physics.pdf' },
      { name: 'Chemistry', pdf: '/books/class-12/chemistry.pdf' },
      { name: 'Biology', pdf: '/books/class-12/biology.pdf' },
    ],
    optional: [],
  },

  'CLASS-XI-XII': {
    label: 'CLASS XI-XII',
    compulsory: [
      { name: 'English', pdf: '/books/class-11-12/english.pdf' },
      { name: 'Urdu', pdf: '/books/class-11-12/urdu.pdf' },
      { name: 'Mathematics', pdf: '/books/class-11-12/mathematics.pdf' },
      { name: 'Physics', pdf: '/books/class-11-12/physics.pdf' },
      { name: 'Chemistry', pdf: '/books/class-11-12/chemistry.pdf' },
      { name: 'Biology', pdf: '/books/class-11-12/biology.pdf' },
    ],
    optional: [],
  },
}

// Display order for the grade cards (PRE-I → CLASS-XII, with
// Class 9 + 10 combined and Class 11 + 12 combined).
export const textbookOrder = [
  'PRE-I',
  'CLASS-I',
  'CLASS-II',
  'CLASS-III',
  'CLASS-IV',
  'CLASS-V',
  'CLASS-VI',
  'CLASS-VII',
  'CLASS-VIII',
  'CLASS-IX',
  'CLASS-X',
  'CLASS-IX-X',
  'CLASS-XI',
  'CLASS-XII',
  'CLASS-XI-XII',
]
