// server/seed/seed.js
// Populates the PEN Academy database with realistic demo data covering every
// frontend API flow:
//   1) Curriculum tree (classes -> subjects -> chapters -> lectures) with real
//      PEN Academy YouTube URLs where available and deliberately-empty video
//      fields to exercise the frontend "video unavailable" fallback.
//   2) Blogs (one without an image to test the frontend image fallback).
//   3) Team members (all without images — public copies do not exist, so the
//      frontend initial fallback is exercised).
//   4) Publications across all grouping categories.
//   5) Books referencing ONLY real PDF files already shipped in client/public;
//      books without a real file get an empty `pdf` field (no fake URLs).
//
// Run with: npm run seed   (from server/)
import 'dotenv/config'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { connectDB, disconnectDB } from '../config/db.js'

import Class from '../models/Class.js'
import Subject from '../models/Subject.js'
import Chapter from '../models/Chapter.js'
import Lecture from '../models/Lecture.js'
import Blog from '../models/Blog.js'
import TeamMember from '../models/TeamMember.js'
import Publication from '../models/Publication.js'
import Book from '../models/Book.js'
import Media from '../models/Media.js'

const MODELS = [Class, Subject, Chapter, Lecture, Blog, TeamMember, Publication, Book, Media]

async function clear() {
  for (const model of MODELS) {
    await model.deleteMany({})
  }
}

async function seed() {
  console.log('Connecting to MongoDB...')
  await connectDB()

  console.log('Clearing existing collections...')
  await clear()

  // ------------------------------------------------------------------
  // Primer (KG) class + Urdu subject + chapters must exist BEFORE the
  // Primer/Urdu section below references them.
  // ------------------------------------------------------------------
  const primer = await Class.create({
    name: 'Primer / KG',
    code: 'KG',
    slug: 'kg',
    level: 0,
    order: 0,
  })

  const primerUrdu = await Subject.create({
    classId: primer._id,
    name: 'Urdu',
    slug: 'urdu',
    description:
      'Foundational Urdu concepts prepared for early learners before formal schooling.',
    order: 0,
  })

  const primerLetters = await Chapter.create({
    classId: primer._id,
    subjectId: primerUrdu._id,
    name: 'Letters and Sounds',
    slug: 'letters-and-sounds',
    description: 'Recognising the alphabet letters and their sounds.',
    order: 0,
  })
  await Lecture.insertMany([
    {
      classId: primer._id,
      subjectId: primerUrdu._id,
      chapterId: primerLetters._id,
      code: 'lec-primer-1',
      title: 'Introduction to the Alphabet',
      description: 'Learning the alphabet letters and their sounds with examples.',
      duration: '05:20',
      videoUrl: 'https://www.youtube.com/watch?v=le6G5gPManE',
      order: 0,
    },
    {
      classId: primer._id,
      subjectId: primerUrdu._id,
      chapterId: primerLetters._id,
      code: 'lec-primer-2',
      title: 'Vowels and Consonants',
      description: 'Understanding vowels and consonants through simple words.',
      duration: '06:10',
      videoUrl: 'https://www.youtube.com/watch?v=YQKL6kr75n0',
      order: 1,
    },
  ])
  const primerAnimation = await Chapter.create({
    classId: primer._id,
    subjectId: primerUrdu._id,
    name: 'Animation',
    slug: 'animation',
    description: 'Animated educational lessons and stories.',
    order: 1,
  })
  await Lecture.insertMany([
    {
      classId: primer._id,
      subjectId: primerUrdu._id,
      chapterId: primerAnimation._id,
      code: 'lec-animation-1',
      title: '\u0622\u0648\u0645\u0644\u06A9\u0631\u0643\u0627\u0645\u0643\u0631\u064A\u0646',
      description: 'Animation \u2013 Urdu lesson: \u0622\u0648\u0645\u0644\u06A9\u0631\u0643\u0627\u0645\u0643\u0631\u064A\u0646.',
      duration: 'Video',
      videoUrl: 'https://youtu.be/D74gvUbrKtg',
      order: 0,
    },
    {
      classId: primer._id,
      subjectId: primerUrdu._id,
      chapterId: primerAnimation._id,
      code: 'lec-animation-2',
      title: '\u062c\u0627\u0626\u0632\u0647\u0627 2',
      description: 'Animation \u2013 Urdu lesson 8: \u062c\u0627\u0626\u0632\u0647\u0627 2.',
      duration: 'Video',
      videoUrl: 'https://youtu.be/XlOsb-Q3l-s',
      order: 1,
    },
  ])
  console.log('  ✓ Primer animation lectures inserted')

  // ------------------------------------------------------------------
  // Grade 1
  // ------------------------------------------------------------------
  const grade1 = await Class.create({
    name: 'Grade 1',
    code: 'GR1',
    slug: 'grade-1',
    level: 1,
    order: 1,
  })
  const grade1English = await Subject.create({
    classId: grade1._id,
    name: 'English',
    slug: 'english',
    description: 'Grade 1 English: reading and writing basics.',
    order: 0,
  })
  const grade1EnglishChapter = await Chapter.create({
    classId: grade1._id,
    subjectId: grade1English._id,
    name: 'The Alphabet',
    slug: 'the-alphabet',
    description: 'Recap of letters and their sounds.',
    order: 0,
  })
  await Lecture.insertMany([
    {
      classId: grade1._id,
      subjectId: grade1English._id,
      chapterId: grade1EnglishChapter._id,
      code: 'lec-g1-eng-1',
      title: 'Letters and Sounds',
      description: 'A quick review of the alphabet for Grade 1 learners.',
      duration: 'Video',
      videoUrl: '',
      order: 0,
    },
  ])

  console.log('  ✓ Grade 1 English lectures inserted')

  // ------------------------------------------------------------------
  // Grade 5
  // ------------------------------------------------------------------
  const grade5 = await Class.create({
    name: 'Grade 5',
    code: 'GR5',
    slug: 'grade-5',
    level: 5,
    order: 5,
  })

  // ------------------------------------------------------------------
  // Grade 9
  // ------------------------------------------------------------------
  const grade9 = await Class.create({
    name: 'Grade 9',
    code: 'GR9',
    slug: 'grade-9',
    level: 9,
    order: 9,
  })
  // ------------------------------------------------------------------
  // Grade 5 -> General Science
  // ------------------------------------------------------------------
  const grade5Science = await Subject.create({
    classId: grade5._id,
    name: 'General Science',
    slug: 'general-science',
    description: 'Science topics for Grade 5 learners.',
    order: 0,
  })
  const grade5ScienceChapter = await Chapter.create({
    classId: grade5._id,
    subjectId: grade5Science._id,
    name: 'Living Things',
    slug: 'living-things',
    description: 'Plants, animals and their habitats.',
    order: 0,
  })
  await Lecture.insertMany([
    {
      classId: grade5._id,
      subjectId: grade5Science._id,
      chapterId: grade5ScienceChapter._id,
      code: 'lec-g5-sc-1',
      title: 'Plants around us',
      description: 'Parts of a plant and how plants grow.',
      duration: 'Video',
      videoUrl: '',
      order: 0,
    },
    {
      classId: grade5._id,
      subjectId: grade5Science._id,
      chapterId: grade5ScienceChapter._id,
      code: 'lec-g5-sc-2',
      title: 'Animals and their habitats',
      description: 'How animals are adapted to where they live.',
      duration: 'Video',
      videoUrl: '',
      order: 1,
    },
  ])

  console.log('  ✓ Grade 5 Science lectures inserted')

  // ------------------------------------------------------------------
  // Grade 9 -> Mathematics, Physics, Chemistry
  // ------------------------------------------------------------------
  const grade9Math = await Subject.create({
    classId: grade9._id,
    name: 'Mathematics',
    slug: 'mathematics',
    description: 'Grade 9 mathematics aligned with the national syllabus.',
    order: 0,
  })
  const grade9MathChapter = await Chapter.create({
    classId: grade9._id,
    subjectId: grade9Math._id,
    name: 'Real Numbers',
    slug: 'real-numbers',
    description: 'Properties and representation of real numbers.',
    order: 0,
  })
  await Lecture.insertMany([
    {
      classId: grade9._id,
      subjectId: grade9Math._id,
      chapterId: grade9MathChapter._id,
      code: 'lec-math9-001',
      title: 'Real Numbers',
      description: 'Introduction to real numbers and the number line.',
      duration: 'Video',
      videoUrl: '',
      order: 0,
    },
    {
      classId: grade9._id,
      subjectId: grade9Math._id,
      chapterId: grade9MathChapter._id,
      code: 'lec-math9-002',
      title: 'Properties of Real Numbers',
      description: 'Commutative, associative and distributive properties.',
      duration: 'Video',
      videoUrl: '',
      order: 1,
    },
  ])

  const grade9Physics = await Subject.create({
    classId: grade9._id,
    name: 'Physics',
    slug: 'physics',
    description: 'Grade 9 physics: physical quantities and measurement.',
    order: 1,
  })
  const grade9PhysicsChapter = await Chapter.create({
    classId: grade9._id,
    subjectId: grade9Physics._id,
    name: 'Physical Quantities and Measurement',
    slug: 'physical-quantities-and-measurement',
    description: 'Base quantities, derived quantities and units.',
    order: 0,
  })
  await Lecture.create({
    classId: grade9._id,
    subjectId: grade9Physics._id,
    chapterId: grade9PhysicsChapter._id,
    code: 'lec-g9-phy-1',
    title: 'Introduction to Physics',
    description: 'What physics studies and why it matters.',
    duration: 'Video',
    videoUrl: '',
    order: 0,
  })
  console.log('  ✓ Grade 9 Physics lecture inserted')

  const grade9Chemistry = await Subject.create({
    classId: grade9._id,
    name: 'Chemistry',
    slug: 'chemistry',
    description: 'Grade 9 chemistry: bonding and structure.',
    order: 2,
  })
  const grade9ChemistryChapter = await Chapter.create({
    classId: grade9._id,
    subjectId: grade9Chemistry._id,
    name: 'Chemical Bonding',
    slug: 'chemical-bonding',
    description: 'Ionic and covalent bonding, and intermolecular forces.',
    order: 0,
  })
  await Lecture.insertMany([
    {
      classId: grade9._id,
      subjectId: grade9Chemistry._id,
      chapterId: grade9ChemistryChapter._id,
      code: 'lec-g9-chem-23',
      title: 'Polar and Non Polar Covalent Bond',
      description: 'Distinguishing polar and non-polar covalent bonds.',
      duration: 'Video',
      videoUrl: 'https://www.youtube.com/watch?v=hXMKSzbJ4Ag',
      order: 0,
    },
    {
      classId: grade9._id,
      subjectId: grade9Chemistry._id,
      chapterId: grade9ChemistryChapter._id,
      code: 'lec-g9-chem-24',
      title: 'Metallic Bond',
      description: 'Metallic bonding and the properties it gives to metals.',
      duration: 'Video',
      videoUrl: 'https://www.youtube.com/watch?v=Wal-wh5WwsE',
      order: 1,
    },
    {
      classId: grade9._id,
      subjectId: grade9Chemistry._id,
      chapterId: grade9ChemistryChapter._id,
      code: 'lec-g9-chem-26',
      title: 'Intermolecular Forces of Attraction',
      description: 'Forces of attraction that operate between molecules.',
      duration: 'Video',
      videoUrl: 'https://www.youtube.com/watch?v=iImiV5tdUlM',
      order: 2,
    },
  ])
  console.log('  ✓ Grade 9 Chemistry lectures inserted')

  // ------------------------------------------------------------------
  // Blogs (one without an image to exercise the frontend fallback)
  // ------------------------------------------------------------------
  await Blog.insertMany([
    {
      title: 'The Future of Education: Trends in Digital Learning',
      slug: 'future-of-education-trends-in-digital-learning',
      author: 'PEN Academy',
      category: 'Digital Learning',
      date: new Date('2024-11-25'),
      image: '/images/blogs/future-of-education.png',
      pdf: '/pdfs/future-of-education.pdf',
      excerpt:
        'Explore how technology is reshaping classrooms and what the next generation of learners can expect from digital education.',
      content: [
        'Digital learning is no longer a supplement to the traditional classroom — it is becoming the backbone of modern education. From interactive video lectures to adaptive quizzes, technology is giving every student a personalised path to understanding.',
        'One of the most important trends is the rise of the digital classroom, where recorded video lessons allow students to learn at their own pace and revisit difficult topics as often as needed. This is especially valuable in regions where trained teachers are scarce.',
        'Artificial intelligence and data are also transforming how educators track progress. By understanding which concepts students find difficult, teachers can focus their efforts where they matter most.',
        'For PEN Academy, the goal is simple: to make high quality education accessible to every child, regardless of location or background. The future of learning is digital, and it is already here.',
      ],
    },
    {
      title: 'Why Digital Education Is Essential in Today’s World',
      slug: 'why-digital-education-is-essential-in-todays-world',
      author: 'PEN Academy',
      category: 'Education',
      date: new Date('2024-05-02'),
      image: '/images/blogs/digital-education.png',
      pdf: '',
      excerpt:
        'In today’s rapidly evolving digital landscape, digital education has become essential for accessibility, lifelong learning, skills development, global collaboration, and innovation.',
      content: [
        'In today’s rapidly evolving digital landscape, the importance of digital education cannot be overstated. With advancements in technology reshaping every aspect of our lives, digital education has become an essential component of lifelong learning.',
        'Accessibility: Digital education breaks down barriers to learning by providing access to educational resources and opportunities regardless of geographical location or socioeconomic status.',
        'Flexibility: Unlike traditional classroom-based education, digital education offers flexibility and customization, allowing learners to pace their learning according to their individual needs and preferences.',
        'Lifelong Learning: Digital education fosters a culture of lifelong learning by providing continuous access to a vast array of learning resources and opportunities.',
      ],
    },
    {
      title: 'Learning Without Walls: The Digital Classroom Journey',
      slug: 'learning-without-walls-digital-classroom-journey',
      author: 'PEN Academy',
      category: 'Announcements',
      date: new Date('2023-08-15'),
      image: '',
      pdf: '',
      excerpt:
        'How PEN Academy is bringing the classroom to every home in Pakistan through short, effective video lessons.',
      content: [
        'Every child deserves access to quality education, no matter where they live. PEN Academy was created to close that gap with short, focused video lessons that follow the national curriculum.',
        'Teachers, parents and students can all use the platform together — watching lessons, downloading textbooks and practising quizzes at their own pace.',
        'More announcements, new grades and fresh learning resources will be added throughout the year. Stay tuned!',
      ],
    },
  ])

// ------------------------------------------------------------------
  // Team
  // ------------------------------------------------------------------
  await TeamMember.insertMany([
    {
      name: 'Dr. Samiullah Paracha',
      designation: 'Technical Advisor',
      image: '',
      linkedin: 'https://www.linkedin.com/',
      order: 0,
    },
    {
      name: 'Abdul Rasheed',
      designation: 'Technical Lead',
      image: '',
      linkedin: 'https://www.linkedin.com/',
      order: 1,
    },
    {
      name: 'Nida Idrees',
      designation: 'Academic Lead',
      image: '',
      linkedin: 'https://www.linkedin.com/',
      order: 2,
    },
    {
      name: 'Ali Hassan',
      designation: 'Video Editor & Animator',
      image: '',
      linkedin: 'https://www.linkedin.com/',
      order: 3,
    },
    {
      name: 'Asif Ali',
      designation: 'Web Developer',
      image: '',
      linkedin: 'https://www.linkedin.com/',
      order: 4,
    },
  ])
// ------------------------------------------------------------------
  // Publications
  // ------------------------------------------------------------------
  await Publication.insertMany([
    {
      title:
        'Design, Development, and Usability of a Virtual Environment on Moral, Social & Emotional Learning',
      authors: 'Paracha, S., Clawson, K., Mitsche, N., and Hall, L.',
      year: '2020',
      journal:
        'International Journal of Virtual and Personal Learning Environments (IJVPLE), Vol. 10(2), pp. 50–65, IGI Global',
      url: 'https://sure.sunderland.ac.uk/id/eprint/11195/',
      category: 'International Journal',
      order: 0,
    },
    {
      title:
        'Co-design with Children: Using Participatory Design for Design Thinking and Social and Emotional Learning',
      authors:
        'Paracha, S., Clawson, K., Mitsche, N., Jehanzeb, S., and Hall, L.',
      year: '2019',
      journal: 'Open Education Studies, Vol. 1(1), pp. 267–280, De Gruyter',
      url: 'https://sure.sunderland.ac.uk/id/eprint/12028/',
      category: 'International Journal',
      order: 1,
    },
    {
      title:
        'Digital Peacekeeping: Partnering to Enhance Technological Experimentation and Innovation within UN Peacekeeping',
      authors: 'Best, M., Paracha, S., and Bayor, A.',
      year: '2017',
      journal: 'UNU-CS 3 Pager, Pelikan Projects',
      url: 'http://i.unu.edu/media/pm.unu.edu/page/26/UNU-manual-on-project-management-and-Pelikan.pdf',
      category: 'United Nations Policy Report',
      order: 0,
    },
    {
      title: 'Cultural Implications for Student Engagement in Online Learning',
      authors: 'Paracha, S., Takahara, S., and Jehanzeb, S.',
      year: '2018',
      journal:
        'Optimizing Student Engagement in Online Learning Environments, Chapter 2: 28–58, IGI Global, USA',
      url: 'https://collections.unu.edu/view/UNU:6346',
      category: 'Books & Chapters',
      order: 0,
    },
    {
      title: 'Socio-Economic Development in Azerbaijan after the Armenian War',
      authors: '',
      year: '2023',
      journal: '',
      url: '/pdfs/Socioeconomic-Development-in-Azerbaijan-after-the-Armenian-War.pdf',
      category: 'Article',
      order: 0,
    },
  ])
// ------------------------------------------------------------------
  // Books — ONLY real files that already exist in client/public/books are
  // referenced. Books without a real file keep an empty `pdf` (honest).
  // ------------------------------------------------------------------
  await Book.insertMany([
    // KG
    {
      classId: null,
      className: 'KG',
      title: 'English Book',
      subject: 'English',
      pdf: '/books/kg/english.pdf',
      order: 0,
    },
    {
      classId: null,
      className: 'KG',
      title: 'Urdu Book',
      subject: 'Urdu',
      pdf: '/books/kg/urdu.pdf',
      order: 1,
    },
    {
      classId: null,
      className: 'KG',
      title: 'Mathematics Book',
      subject: 'Mathematics',
      pdf: '/books/kg/mathematics.pdf',
      order: 2,
    },
    {
      classId: null,
      className: 'KG',
      title: 'Urdu Qaida',
      subject: 'Urdu Qaida',
      pdf: '/books/kg/urdu-qaida.pdf',
      order: 3,
    },
    {
      classId: null,
      className: 'KG',
      title: 'General Knowledge Book',
      subject: 'General Knowledge',
      pdf: '',
      order: 4,
    },
    // Grade 1
    {
      classId: grade1._id,
      className: 'Grade 1',
      title: 'English Book',
      subject: 'English',
      pdf: '',
      order: 0,
    },
    {
      classId: grade1._id,
      className: 'Grade 1',
      title: 'Urdu Book',
      subject: 'Urdu',
      pdf: '/books/class-1/Urdu.pdf',
      order: 1,
    },
    {
      classId: grade1._id,
      className: 'Grade 1',
      title: 'Tajwedi Qaida',
      subject: 'Urdu Qaida',
      pdf: '/books/class-1/tajwedi qaida.pdf',
      order: 2,
    },
    // Grade 5
    {
      classId: grade5._id,
      className: 'Grade 5',
      title: 'General Science Book',
      subject: 'General Science',
      pdf: '',
      order: 0,
    },
    // Grade 9
    {
      classId: grade9._id,
      className: 'Grade 9',
      title: 'Chemistry Book',
      subject: 'Chemistry',
      pdf: '',
      order: 0,
    },
  ])

  // ------------------------------------------------------------------
  // Media (real assets already shipped in client/public/images/media)
  // Note: the frontend does not currently consume /api/media, but the
  // endpoint is implemented to satisfy the documented contract and the
  // seed keeps the collection consistent with the rest of the system.
  // ------------------------------------------------------------------
  await Media.insertMany([
    // LMS preview image
    {
      title: 'PEN Academy LMS Preview',
      type: 'image',
      url: '/images/media/lms-preview.png',
      thumbnail: '',
      description:
        'A preview image representing the PEN Academy learning interface.',
      status: 'published',
    },
    // Standalone video thumbnails
    {
      title: 'Mathematics Lesson Thumbnail',
      type: 'video',
      url: '/videos/math/lesson-1.mp4',
      thumbnail: '/images/media/thumbnails/math-thumbnail.jpg',
      description: 'A short mathematics lesson for early learners.',
      status: 'published',
    },
    // Grouped lesson thumbnails — Mathematics
    {
      title: 'Mathematics — Lesson 1',
      type: 'video',
      url: '/videos/math/lesson-1.mp4',
      thumbnail: '/images/media/grouped/math/lesson-1-thumb.jpg',
      description: 'Introduction to basic arithmetic.',
      status: 'published',
    },
    {
      title: 'Mathematics — Lesson 2',
      type: 'video',
      url: '/videos/math/lesson-2.mp4',
      thumbnail: '/images/media/grouped/math/lesson-2-thumb.jpg',
      description: 'Practising addition and subtraction.',
      status: 'published',
    },
    // Grouped lesson thumbnails — English
    {
      title: 'English — Lesson 1',
      type: 'video',
      url: '/videos/english/lesson-1.mp4',
      thumbnail: '/images/media/grouped/english/lesson-1-thumb.jpg',
      description: 'Introduction to reading and writing.',
      status: 'published',
    },
  ])

  const counts = {}
  for (const model of MODELS) {
    counts[model.modelName] = await model.countDocuments()
  }

  console.log(
    `Seeded: ${counts.Class} classes, ${
      counts.Subject
    } subjects, ${counts.Chapter} chapters, ${
      counts.Lecture
    } lectures, ${counts.Blog} blogs, ${
      counts.TeamMember
    } team members, ${counts.Publication} publications, ${
      counts.Book
    } books, ${counts.Media} media items.`
  )
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seed()
    .then(() => disconnectDB())
    .catch((err) => {
      console.error('Seed failed:', err)
      disconnectDB()
      process.exit(1)
    })
}
