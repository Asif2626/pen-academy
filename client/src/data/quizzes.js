// src/data/quizzes.js
// Data-driven Quiz system for PEN Academy.
//
// STRUCTURE
//   quizGrades   -> ordered list shown in the class selector
//   quizzes      -> every quiz; grade/subject are derived from this array
//
//   {
//     id: "kg-english-alphabet",
//     grade: "KG",                      // must match a value in quizGrades
//     subject: "English",
//     title: "Alphabet Quiz",
//     description: "Learn your A-B-Cs.",
//     questions: [
//       {
//         id: 1,
//         question: "Which letter comes after A?",
//         options: ["B", "C", "D", "E"],
//         answer: "B",                    // must be one of the options
//         explanation: "B follows A in the alphabet."
//       }
//     ]
//   }
//
// ADDING A LATER QUIZ (data only -- no component changes):
//   append an object to the quizzes array below. The grade, subject and
//   quiz then appear automatically in the selectors.
//
// Grades 6-12 start empty and show a "Coming Soon" state until quizzes are
// added. To add a grade's first quiz, just push an object whose `grade`
// matches the entry in quizGrades.

export const quizGrades = [
  'KG',
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12',
]

export const quizzes = [
  // ============================================================
  // KG
  // ============================================================
  {
    id: 'kg-english-alphabet',
    grade: 'KG',
    subject: 'English',
    title: 'Alphabet Quiz',
    description: 'Learn your A-B-Cs.',
    questions: [
      {
        id: 1,
        question: 'Which letter comes after A?',
        options: ['B', 'C', 'D', 'E'],
        answer: 'B',
        explanation: 'B follows A in the alphabet.',
      },
      {
        id: 2,
        question: 'What is the first letter of the word "Apple"?',
        options: ['A', 'B', 'C', 'D'],
        answer: 'A',
        explanation: 'Apple starts with the letter A.',
      },
      {
        id: 3,
        question: 'Which letter makes the "buh" sound?',
        options: ['A', 'B', 'C', 'D'],
        answer: 'B',
        explanation: 'The letter B makes the "buh" sound.',
      },
      {
        id: 4,
        question: 'How many letters are in the English alphabet?',
        options: ['24', '25', '26', '27'],
        answer: '26',
        explanation: 'There are 26 letters from A to Z.',
      },
    ],
  },
  {
    id: 'kg-maths-counting',
    grade: 'KG',
    subject: 'Mathematics',
    title: 'Counting Quiz',
    description: 'Practice counting from 1 to 10.',
    questions: [
      {
        id: 1,
        question: 'What number comes after 2?',
        options: ['1', '2', '3', '4'],
        answer: '3',
        explanation: '3 comes right after 2 when counting.',
      },
      {
        id: 2,
        question: 'How many fingers are on one hand?',
        options: ['3', '4', '5', '6'],
        answer: '5',
        explanation: 'One hand has 5 fingers.',
      },
      {
        id: 3,
        question: 'What is 1 + 1?',
        options: ['1', '2', '3', '4'],
        answer: '2',
        explanation: '1 plus 1 equals 2.',
      },
      {
        id: 4,
        question: 'Count the apples: 🍎🍎🍎. How many?',
        options: ['2', '3', '4', '5'],
        answer: '3',
        explanation: 'There are 3 apples.',
      },
    ],
  },
  {
    id: 'kg-gk-colors-shapes',
    grade: 'KG',
    subject: 'General Knowledge',
    title: 'Colors and Shapes Quiz',
    description: 'Recognize colors and shapes.',
    questions: [
      {
        id: 1,
        question: 'What color is the sky on a clear day?',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        answer: 'Blue',
        explanation: 'The sky looks blue on a clear day.',
      },
      {
        id: 2,
        question: 'What shape is a ball?',
        options: ['Square', 'Triangle', 'Circle', 'Rectangle'],
        answer: 'Circle',
        explanation: 'A ball is round like a circle.',
      },
      {
        id: 3,
        question: 'What color are bananas?',
        options: ['Red', 'Blue', 'Yellow', 'Purple'],
        answer: 'Yellow',
        explanation: 'Bananas are yellow.',
      },
      {
        id: 4,
        question: 'How many sides does a triangle have?',
        options: ['2', '3', '4', '5'],
        answer: '3',
                explanation: 'A triangle has 3 sides.',
      },
    ],
  },

  // ============================================================
  // Grade 1
  // ============================================================
  {
    id: 'grade-1-english',
    grade: 'Grade 1',
    subject: 'English',
    title: 'Vocabulary Quiz',
    description: 'Words every Grade 1 student should know.',
    questions: [
      {
        id: 1,
        question: 'Which word means a color?',
        options: ['Run', 'Blue', 'Jump', 'Fast'],
        answer: 'Blue',
        explanation: 'Blue is a color.',
      },
      {
        id: 2,
        question: 'Pick the correct spelling.',
        options: ['Kat', 'Catt', 'Cat', 'Caat'],
        answer: 'Cat',
        explanation: 'The correct spelling is C-a-t.',
      },
      {
        id: 3,
        question: 'Which is an animal?',
        options: ['Table', 'Dog', 'Chair', 'Book'],
        answer: 'Dog',
        explanation: 'A dog is an animal.',
      },
    ],
  },
  {
    id: 'grade-1-maths',
    grade: 'Grade 1',
    subject: 'Mathematics',
    title: 'Addition Quiz',
    description: 'Simple addition up to 10.',
    questions: [
      {
        id: 1,
        question: 'What is 3 + 2?',
        options: ['4', '5', '6', '7'],
        answer: '5',
        explanation: '3 + 2 = 5.',
      },
      {
        id: 2,
        question: 'What is 4 + 4?',
        options: ['6', '7', '8', '9'],
        answer: '8',
        explanation: '4 + 4 = 8.',
      },
      {
        id: 3,
        question: 'What is 5 + 3?',
        options: ['7', '8', '9', '10'],
        answer: '8',
        explanation: '5 + 3 = 8.',
      },
    ],
  },
  {
    id: 'grade-1-gk',
    grade: 'Grade 1',
    subject: 'General Knowledge',
    title: 'Our World Quiz',
    description: 'Learn about the world around you.',
    questions: [
      {
        id: 1,
        question: 'Which animal is known as the King of the Jungle?',
        options: ['Lion', 'Elephant', 'Tiger', 'Monkey'],
        answer: 'Lion',
        explanation: 'The lion is called the King of the Jungle.',
      },
      {
        id: 2,
        question: 'What do plants need to grow?',
        options: ['Water', 'Ice', 'Stone', 'Plastic'],
        answer: 'Water',
        explanation: 'Plants need water, sunlight and soil to grow.',
      },
      {
        id: 3,
        question: 'How many days are in a week?',
        options: ['5', '6', '7', '8'],
        answer: '7',
        explanation: 'There are 7 days in a week.',
      },
    ],
  },

  // ============================================================
  // Grade 2
  // ============================================================
  {
    id: 'grade-2-english',
    grade: 'Grade 2',
    subject: 'English',
    title: 'Grammar Quiz',
    description: 'Basic grammar for Grade 2.',
    questions: [
      {
        id: 1,
        question: 'Which is a noun?',
        options: ['Run', 'Happy', 'School', 'Quickly'],
        answer: 'School',
        explanation: 'A noun is a person, place or thing. School is a place.',
      },
      {
        id: 2,
        question: 'Fill in the blank: "She ___ happy."',
        options: ['is', 'are', 'am', 'be'],
        answer: 'is',
        explanation: 'We use "is" with she/he/it.',
      },
      {
        id: 3,
        question: 'Which word is a verb?',
        options: ['Book', 'Tall', 'Sing', 'Blue'],
        answer: 'Sing',
        explanation: 'A verb is an action word. Sing is an action.',
      },
    ],
  },
  {
    id: 'grade-2-maths',
    grade: 'Grade 2',
    subject: 'Mathematics',
    title: 'Subtraction Quiz',
    description: 'Simple subtraction practice.',
    questions: [
      {
        id: 1,
        question: 'What is 10 - 4?',
        options: ['5', '6', '7', '8'],
        answer: '6',
        explanation: '10 - 4 = 6.',
      },
      {
        id: 2,
        question: 'What is 8 - 3?',
        options: ['4', '5', '6', '7'],
        answer: '5',
        explanation: '8 - 3 = 5.',
      },
      {
        id: 3,
        question: 'What is 15 - 7?',
        options: ['6', '7', '8', '9'],
        answer: '8',
        explanation: '15 - 7 = 8.',
      },
    ],
  },
  {
    id: 'grade-2-science',
    grade: 'Grade 2',
    subject: 'Science',
    title: 'Living Things Quiz',
    description: 'Learn about living and non-living things.',
    questions: [
      {
        id: 1,
        question: 'Which of these is a living thing?',
        options: ['Rock', 'Water', 'Tree', 'Chair'],
        answer: 'Tree',
        explanation: 'A tree grows and needs food and water, so it is living.',
      },
      {
        id: 2,
        question: 'What do living things need to survive?',
        options: ['Nothing', 'Food', 'Plastic', 'Glass'],
        answer: 'Food',
        explanation: 'Living things need food, water and air to survive.',
      },
      {
        id: 3,
        question: 'Which animal lives in water?',
        options: ['Cat', 'Dog', 'Fish', 'Cow'],
        answer: 'Fish',
        explanation: 'Fish live in water.',
      },
    ],
  },

  // ============================================================
  // Grade 3
  // ============================================================
  {
    id: 'grade-3-english',
    grade: 'Grade 3',
    subject: 'English',
    title: 'Parts of Speech Quiz',
    description: 'Nouns, verbs and adjectives.',
    questions: [
      {
        id: 1,
        question: 'Which word is an adjective?',
        options: ['Quickly', 'Beautiful', 'Run', 'Cat'],
        answer: 'Beautiful',
        explanation: 'An adjective describes a noun. Beautiful describes something.',
      },
      {
        id: 2,
        question: '"The cat sat on the ___." Which word fits best?',
        options: ['Mat', 'Run', 'Blue', 'Slowly'],
        answer: 'Mat',
        explanation: 'A mat is a thing the cat can sit on.',
      },
      {
        id: 3,
        question: 'Which sentence is correct?',
        options: ['He go to school.', 'He goes to school.', 'He going to school.', 'He gone to school.'],
        answer: 'He goes to school.',
        explanation: 'With "he" we use "goes".',
      },
    ],
  },
  {
    id: 'grade-3-maths',
    grade: 'Grade 3',
    subject: 'Mathematics',
    title: 'Multiplication Quiz',
    description: 'Learn your times tables.',
    questions: [
      {
        id: 1,
        question: 'What is 3 x 4?',
        options: ['9', '10', '12', '14'],
        answer: '12',
        explanation: '3 x 4 = 12.',
      },
      {
        id: 2,
        question: 'What is 5 x 5?',
        options: ['20', '25', '30', '35'],
        answer: '25',
        explanation: '5 x 5 = 25.',
      },
      {
        id: 3,
        question: 'What is 7 x 6?',
        options: ['40', '42', '44', '48'],
        answer: '42',
        explanation: '7 x 6 = 42.',
      },
    ],
  },
  {
    id: 'grade-3-science',
    grade: 'Grade 3',
    subject: 'Science',
    title: 'States of Matter Quiz',
    description: 'Solid, liquid and gas.',
    questions: [
      {
        id: 1,
        question: 'What state of matter is water when it is ice?',
        options: ['Liquid', 'Gas', 'Solid', 'Air'],
        answer: 'Solid',
        explanation: 'Ice is frozen water, which is a solid.',
      },
      {
        id: 2,
        question: 'Which of these is a gas?',
        options: ['Wood', 'Milk', 'Steam', 'Stone'],
        answer: 'Steam',
        explanation: 'Steam is water in gas form.',
      },
             {
        id: 3,
        question: 'What happens when you heat water?',
        options: ['It freezes', 'It evaporates', 'It melts', 'It disappears'],
        answer: 'It evaporates',
        explanation: 'Heating water turns it into steam (gas).',
      },
    ],
  },
]

/**
 * Grades 6-12 are data-driven too: because quizGrades lists them, they
 * appear in the class selector. Until a quiz is pushed with
 * grade: 'Grade 6' (etc.), the selector shows a Coming Soon state.
 */

/**
 * Returns the list of subjects that actually have at least one quiz
 * for the given grade. Derived from the quizzes array, so adding a new
 * grade's first quiz (data only) automatically makes its subjects appear.
 */
export function getSubjectsForGrade(grade) {
  const subjects = []
  const seen = new Set()
  for (const q of quizzes) {
    if (q.grade === grade) {
      if (!seen.has(q.subject)) {
        seen.add(q.subject)
        subjects.push(q.subject)
      }
    }
  }
  return subjects
}

/**
 * Returns the quizzes for a given grade + subject.
 */
export function getQuizzesForSubject(grade, subject) {
  return quizzes.filter((q) => q.grade === grade && q.subject === subject)
}

/**
 * Returns a single quiz by id.
 */
export function getQuizById(id) {
  return quizzes.find((q) => q.id === id)
}

export function getQuizzesForGrade(grade) {
  return quizzes.filter((q) => q.grade === grade)
}