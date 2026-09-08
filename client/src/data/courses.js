// src/data/courses.js
// ============================================================
// Curriculum data: Primer, Grades 1-10 and Quran.
// Each course -> subjects -> chapters -> lectures (video lectures).
//
// This is Phase 1 local frontend data. The exact same shape is designed to be
// replaced later by:
//   GET /api/classes
//   GET /api/subjects
//   GET /api/chapters
//   GET /api/lectures
// ============================================================


// ============================================================
// Lecture helper
// ============================================================

const lecture = (
  id,
  title,
  description,
  duration,
  videoUrl = '',
  image = ''
) => ({
  id,
  title,
  description,
  duration,
  videoUrl,
  image,
  emoji: '🎬',
  color: 'from-brand-600 to-brand-800',
})


// ============================================================
// Courses
// ============================================================

export const courses = {
  // ==========================================================
  // PRIMER
  // ==========================================================

  primer: {
    slug: 'primer',
    name: 'Primer – New Syllabus',
    shortName: 'Primer',
    description:
      'Introductory learning for early learners following the new syllabus — building letters, numbers and basic concepts through fun activities.',

    subjects: [
      // --------------------------------------------------------
      // Urdu
      // --------------------------------------------------------

      {
        slug: 'urdu',
        name: 'Urdu',
        description:
          'Foundational concepts to prepare children for formal schooling.',

        chapters: [
          {
            slug: 'letters-and-sounds',
            name: 'Letters and Sounds',
            description:
              'Recognising the alphabet letters and their sounds.',

            lectures: [
              lecture(
                'lec-primer-1',
                'Introduction to the Alphabet',
                'Learning the alphabet letters and their sounds with examples.',
                '05:20',
                'https://www.youtube.com/watch?v=le6G5gPManE'
              ),

              lecture(
                'lec-primer-2',
                'Vowels and Consonants',
                'Understanding vowels and consonants through simple words.',
                '06:10',
                'https://www.youtube.com/watch?v=YQKL6kr75n0'
              ),
            ],
          },

          {
            slug: 'animation',
            name: 'Animation',
            description: 'Animated educational lessons and stories.',

            lectures: [
              lecture(
                'lec-animation-1',
                'آؤ مل کر کام کریں',
                'Animation – Urdu lesson: آؤ مل کر کام کریں.',
                'Video',
                'https://youtu.be/D74gvUbrKtg'
              ),

              lecture(
                'lec-animation-2',
                'جائزہ 2',
                'Animation – Urdu lesson 8: جائزہ 2.',
                'Video',
                'https://youtu.be/XlOsb-Q3l-s'
              ),

              lecture(
                'lec-animation-3',
                'Aaj Kya Pakain?',
                'Animation – Urdu lesson 10: Aaj Kya Pakain?.',
                'Video',
                'https://youtu.be/joKJNkYSWqU'
              ),

              lecture(
                'lec-animation-4',
                'KIRAN KA GHARANA',
                'Animation – Urdu lesson 5: KIRAN KA GHARANA.',
                'Video',
                'https://youtu.be/NA1IgPjeG64'
              ),

              lecture(
                'lec-animation-5',
                'Baat Cheet Ke Aadab',
                'Animation – Urdu lesson 7: Baat Cheet Ke Aadab.',
                'Video',
                'https://youtu.be/ut-Tfyna3Jo'
              ),

              lecture(
                'lec-animation-6',
                'CHOWK MEIN LAGI BATTIYAN',
                'Animation – Urdu lesson 13: CHOWK MEIN LAGI BATTIYAN.',
                'Video',
                'https://youtu.be/YQKL6kr75n0'
              ),
            ],
          },
        ],
      },

      // --------------------------------------------------------
      // English
      // --------------------------------------------------------

      {
        slug: 'english',
        name: 'English',
        description:
          'Beginner English for the Primer level.',

        chapters: [
          {
            slug: 'first-words',
            name: 'First Words',
            description:
              'Building a first vocabulary of everyday words.',

            lectures: [
              lecture(
                'lec-primer-3',
                'Everyday Words',
                'Learning common words used in daily life.',
                '04:45',
                'https://www.youtube.com/watch?v=iL--egDjs2E'
              ),
            ],
          },
        ],
      },

      // --------------------------------------------------------
      // English Rhyme
      // --------------------------------------------------------

      {
        slug: 'english-rhyme',
        name: 'English Rhyme',
        description: 'Fun animated English rhymes for early learners.',

        chapters: [
          {
            slug: 'animation',
            name: 'Animation',
            description: 'Animated educational lessons and stories.',

            lectures: [
              lecture(
                'lec-animation-7',
                'My Day',
                'Animation – English rhyme: My Day.',
                'Video',
                'https://youtu.be/H_NHykU4K1E'
              ),

              lecture(
                'lec-animation-8',
                'Butterfly Butterfly!',
                'Animation – English rhyme: Butterfly Butterfly!.',
                'Video',
                'https://youtu.be/wsQDE84wJXM'
              ),

              lecture(
                'lec-animation-9',
                'Festival Rhyme Primer',
                'Animation – English rhyme: Festival Rhyme Primer.',
                'Video',
                'https://youtu.be/W8H6df1-yHk'
              ),

              lecture(
                'lec-animation-10',
                'Baby, Baby, Yes Mama?',
                'Animation – English rhyme: Baby, Baby, Yes Mama?.',
                'Video',
                'https://youtu.be/FzVfZZQZ_60'
              ),

              lecture(
                'lec-animation-11',
                'My Family Rhyme',
                'Animation – English rhyme: My Family Rhyme.',
                'Video',
                'https://youtu.be/t9Uya6gM2wk'
              ),

              lecture(
                'lec-animation-12',
                'Rain Rain, Take a Rest',
                'Animation – English rhyme: Rain Rain, Take a Rest.',
                'Video',
                'https://youtu.be/C5qP-eW9pLQ'
              ),

              lecture(
                'lec-animation-15',
                'Little Fish',
                'Animation – English rhyme: Little Fish.',
                'Video',
                'https://youtu.be/haEUnc8KRoQ'
              ),
            ],
          },
        ],
      },

      // --------------------------------------------------------
      // English Story
      // --------------------------------------------------------

      {
        slug: 'english-story',
        name: 'English Story',
        description: 'Animated English stories for young learners.',

        chapters: [
          {
            slug: 'animation',
            name: 'Animation',
            description: 'Animated educational lessons and stories.',

            lectures: [
              lecture(
                'lec-animation-13',
                'Loin and Mouse',
                'Animation – English story: Loin and Mouse.',
                'Video',
                'https://youtu.be/gV3svg7q_Vk'
              ),
            ],
          },
        ],
      },

      // --------------------------------------------------------
      // Urdu Story
      // --------------------------------------------------------

      {
        slug: 'urdu-story',
        name: 'Urdu Story',
        description: 'Animated Urdu stories for young learners.',

        chapters: [
          {
            slug: 'animation',
            name: 'Animation',
            description: 'Animated educational lessons and stories.',

            lectures: [
              lecture(
                'lec-animation-14',
                'Loin and Mouse',
                'Animation – Urdu story: Loin and Mouse.',
                'Video',
                'https://youtu.be/p5TlKtMFUfQ'
              ),

              lecture(
                'lec-animation-16',
                'The Ghost in the Library',
                'Animation – Urdu story: The Ghost in the Library.',
                'Video',
                'https://youtu.be/FDXNFQg9G48'
              ),
            ],
          },
        ],
      },
    ],
  },


  // ==========================================================
  // GRADE 1
  // ==========================================================

  'grade-1': {
    slug: 'grade-1',
    name: 'Grade 1',
    shortName: 'Grade 1',
    description:
      'Complete digital curriculum for Grade 1 following the national syllabus.',

    subjects: [
      // --------------------------------------------------------
      // English
      // --------------------------------------------------------

      {
        slug: 'english',
        name: 'English',
        description:
          'Grade 1 English covering reading, writing and vocabulary.',

        chapters: [
          {
            slug: 'greetings',
            name: 'Greetings',
            description:
              'Learning to greet and introduce yourself in English.',

            lectures: [
              lecture(
                'lec-g1-1',
                'Sharing is Caring',
                'How to greet people politely in English.',
                '04:30',
                'https://www.youtube.com/watch?v=BcAodpskfag'
              ),
            ],
          },
        ],
      },


      // --------------------------------------------------------
      // Mathematics
      // --------------------------------------------------------

      {
        slug: 'mathematics',
        name: 'Mathematics',
        description:
          'Grade 1 Mathematics focusing on numbers and counting.',

        chapters: [
          {
            slug: 'counting',
            name: 'Counting',
            description:
              'Counting numbers from 1 to 100.',

            lectures: [
              lecture(
                'lec-g1-2',
                'Table of 6',
                'Math lecture Table of 6.',
                '05:00',
                'https://www.youtube.com/watch?v=M3AksLm3WvA'
              ),
            ],
          },
        ],
      },


      // --------------------------------------------------------
      // Urdu
      // --------------------------------------------------------

      {
        slug: 'urdu',
        name: 'Urdu',
        description:
          'Grade 1 Urdu language skills.',

        chapters: [
          {
            slug: 'huruf',
            name: 'Urdu Alphabet',
            description:
              'Learning the basic letters of the Urdu alphabet.',

            lectures: [
              lecture(
                'lec-g1-3',
                'Hamad',
                'Grade 1 Urdu lesson — Hamad.',
                '05:15',
                'https://www.youtube.com/watch?v=le6G5gPManE'
              ),
            ],
          },
        ],
      },
    ],
  },


  // ==========================================================
  // GRADE 9 (NEW SYLLABUS) - BIOLOGY + CHEMISTRY
  // ==========================================================

  'grade-9': {
    slug: 'grade-9',
    name: 'Grade 9',
    shortName: 'Grade 9',
    description: 'Complete Grade 9 curriculum following the new syllabus.',

    subjects: [
      // --------------------------------------------------------
      // Biology
      // --------------------------------------------------------

      {
        slug: 'biology',
        name: 'Biology',
        description: 'Grade 9 Biology lectures covering the new syllabus.',

        chapters: [
          // ====================================================
          // CHAPTER 1 - THE SCIENCE OF BIOLOGY
          // ====================================================

          {
            slug: 'chapter-1-the-science-of-biology',
            name: 'Chapter 1 - The Science of Biology',
            description:
              'The science of biology — branches, scientific method and careers in the living world.',

            lectures: [
              lecture(
                'lec-g9-bio-1',
                'Introduction to Biology',
                'Class 9 Biology – Introduction to Biology.',
                'Video',
                'https://www.youtube.com/watch?v=9fB6kX_Vl2A'
              ),

              lecture(
                'lec-g9-bio-2',
                'Branches of Biology Part I',
                'Class 9 Biology – Branches of Biology Part I.',
                'Video',
                'https://www.youtube.com/watch?v=lRQpQa0yQaU'
              ),

              lecture(
                'lec-g9-bio-3',
                'Branches of Biology Part II',
                'Class 9 Biology – Branches of Biology Part II.',
                'Video',
                'https://www.youtube.com/watch?v=EZGEYqwg1RU'
              ),

              lecture(
                'lec-g9-bio-4',
                'Introduction to Biology Part III',
                'Class 9 Biology – Introduction to Biology Part III.',
                'Video',
                'https://www.youtube.com/watch?v=bPCAHkSSZT'
              ),

              lecture(
                'lec-g9-bio-5',
                'Relation of Biology with other Sciences',
                'Class 9 Biology – Relation of Biology with other Sciences.',
                'Video',
                'https://www.youtube.com/watch?v=tcNxZEp4JFQ'
              ),

              lecture(
                'lec-g9-bio-6',
                'Careers in Biology Part 1',
                'Class 9 Biology – Careers in Biology Part 1.',
                'Video',
                'https://www.youtube.com/watch?v=1fuGN4a9vlc'
              ),

              lecture(
                'lec-g9-bio-7',
                'Career in Biology Part 2',
                'Class 9 Biology – Career in Biology Part 2.',
                'Video',
                'https://www.youtube.com/watch?v=pVTY3XlYwqU'
              ),

              lecture(
                'lec-g9-bio-8',
                'Quranic Instructions to Reveal Study of Life',
                'Class 9 Biology – Quranic Instructions to Reveal Study of Life.',
                'Video',
                'https://www.youtube.com/watch?v=tJOSqlmWDXc'
              ),

              lecture(
                'lec-g9-bio-9',
                'Science as a Collaborative Field',
                'Class 9 Biology – Science as a Collaborative Field.',
                'Video',
                'https://www.youtube.com/watch?v=-lhReRlic2s'
              ),

              lecture(
                'lec-g9-bio-10',
                'Scientific Method Part 1',
                'Class 9 Biology – Scientific Method Part 1.',
                'Video',
                'https://www.youtube.com/watch?v=wFJr1uSS3rE'
              ),

              lecture(
                'lec-g9-bio-11',
                'Scientific Method Part 2',
                'Class 9 Biology – Scientific Method Part 2.',
                'Video',
                'https://www.youtube.com/watch?v=4uPa3QNIGhI'
              ),

              lecture(
                'lec-g9-bio-12',
                'Malaria (Biological Method)',
                'Class 9 Biology – Malaria (Biological Method).',
                'Video',
                'https://www.youtube.com/watch?v=B53JoHwgP3k'
              ),

              lecture(
                'lec-g9-bio-13',
                'Causes of Malaria',
                'Class 9 Biology – Causes of Malaria.',
                'Video',
                'https://www.youtube.com/watch?v=w-gI9Ptsxrk'
              ),

              lecture(
                'lec-g9-bio-14',
                'Entry of Plasmodium into Human Body',
                'Class 9 Biology – Entry of Plasmodium into Human Body.',
                'Video',
                'https://www.youtube.com/watch?v=15ajnogF_k4'
              ),

              lecture(
                'lec-g9-bio-15',
                'Overview of Chapter 1',
                'Class 9 Biology – Overview of Chapter 1.',
                'Video',
                'https://www.youtube.com/watch?v=ofOqFElx46o'
              ),
            ],
          },

          // ====================================================
          // CHAPTER 2 - BIODIVERSITY
          // ====================================================

          {
            slug: 'chapter-2-biodiversity',
            name: 'Chapter 2 - Biodiversity',
            description:
              'Biodiversity, classification systems and taxonomic ranks of living organisms.',

            lectures: [
              lecture(
                'lec-g9-bio-16',
                'Biodiversity',
                'Class 9 Biology – Biodiversity.',
                'Video',
                'https://www.youtube.com/watch?v=dktHubJDCBs'
              ),

              lecture(
                'lec-g9-bio-17',
                'Taxonomic Ranks',
                'Class 9 Biology – Taxonomic Ranks.',
                'Video',
                'https://www.youtube.com/watch?v=1x_vH_rkh54'
              ),

              lecture(
                'lec-g9-bio-18',
                'History of Classification',
                'Class 9 Biology – History of Classification.',
                'Video',
                'https://www.youtube.com/watch?v=GYp4OFeAa6E'
              ),

              lecture(
                'lec-g9-bio-19',
                'Two-Kingdom Classification System',
                'Class 9 Biology – Two-Kingdom Classification System.',
                'Video',
                'https://www.youtube.com/watch?v=Ug7RKBjVR8A'
              ),

              lecture(
                'lec-g9-bio-20',
                'Three-Kingdom Classification System',
                'Class 9 Biology – Three-Kingdom Classification System.',
                'Video',
                'https://www.youtube.com/watch?v=E6-zOhW_APU'
              ),

              lecture(
                'lec-g9-bio-21',
                'Three-Domain Classification System',
                'Class 9 Biology – Three-Domain Classification System.',
                'Video',
                'https://www.youtube.com/watch?v=e3vtjCNs8fU'
              ),

              lecture(
                'lec-g9-bio-22',
                'Domain Bacteria',
                'Class 9 Biology – Domain Bacteria.',
                'Video',
                'https://www.youtube.com/watch?v=ducWLY4_z2o'
              ),

              lecture(
                'lec-g9-bio-23',
                'Classification of Domain Eukarya',
                'Class 9 Biology – Classification of Domain Eukarya.',
                'Video',
                'https://www.youtube.com/watch?v=wmKNsm8F18o'
              ),

              lecture(
                'lec-g9-bio-24',
                'Kingdom Fungi, Kingdom Plantae, Kingdom Animalia',
                'Class 9 Biology – Kingdom Fungi, Kingdom Plantae, Kingdom Animalia.',
                'Video',
                'https://www.youtube.com/watch?v=3fCKAPmyDS8'
              ),

              lecture(
                'lec-g9-bio-25',
                'Characteristics of Domain and Kingdom of Life',
                'Class 9 Biology – Characteristics of Domain and Kingdom of Life.',
                'Video',
                'https://www.youtube.com/watch?v=UOY8PIEoM6U'
              ),

              lecture(
                'lec-g9-bio-26',
                'Corona Virus',
                'Class 9 Biology – Corona Virus.',
                'Video',
                'https://www.youtube.com/watch?v=eN9TTWFPdNk'
              ),

              lecture(
                'lec-g9-bio-27',
                'Binomial Nomenclature',
                'Class 9 Biology – Binomial Nomenclature.',
                'Video',
                'https://www.youtube.com/watch?v=tV7owsl2wzg'
              ),

              lecture(
                'lec-g9-bio-28',
                'Key Points',
                'Class 9 Biology – Key Points.',
                'Video',
                'https://www.youtube.com/watch?v=WSF_TS0_iDU'
              ),

              lecture(
                'lec-g9-bio-29',
                'Exercise',
                'Class 9 Biology – Exercise.',
                'Video',
                'https://www.youtube.com/watch?v=iKhMQcOmQ20'
              ),
            ],
          },

          // ====================================================
          // CHAPTER 3 - THE CELL
          // ====================================================

          {
            slug: 'chapter-3-the-cell',
            name: 'Chapter 3 - The Cell',
            description:
              'Structure of the cell, its organelles and comparison between plant and animal cells.',

            lectures: [
              lecture(
                'lec-g9-bio-30',
                'The Cell',
                'Class 9 Biology – The Cell.',
                'Video',
                'https://www.youtube.com/watch?v=mwFp1gNu0_0'
              ),

              lecture(
                'lec-g9-bio-31',
                'The Cell Cellular Structure',
                'Class 9 Biology – The Cell Cellular Structure.',
                'Video',
                'https://www.youtube.com/watch?v=N0PuiXuIJ9E'
              ),

              lecture(
                'lec-g9-bio-32',
                'Cell Membrane',
                'Class 9 Biology – Cell Membrane.',
                'Video',
                'https://www.youtube.com/watch?v=tQGe616kd5A'
              ),

              lecture(
                'lec-g9-bio-33',
                'Cytoplasm',
                'Class 9 Biology – Cytoplasm.',
                'Video',
                'https://www.youtube.com/watch?v=zNXQ8cdAQdo'
              ),

              lecture(
                'lec-g9-bio-34',
                'Organelle',
                'Class 9 Biology – Organelle.',
                'Video',
                'https://www.youtube.com/watch?v=uyLpawY9zDM'
              ),

              lecture(
                'lec-g9-bio-35',
                'Ribosome',
                'Class 9 Biology – Ribosome.',
                'Video',
                'https://www.youtube.com/watch?v=1kH_KNuSiT0'
              ),

              lecture(
                'lec-g9-bio-36',
                'Endoplasmic Reticulum',
                'Class 9 Biology – Endoplasmic Reticulum.',
                'Video',
                'https://www.youtube.com/watch?v=KmMyhuhWPBQ'
              ),

              lecture(
                'lec-g9-bio-37',
                'Lysosomes',
                'Class 9 Biology – Lysosomes.',
                'Video',
                'https://www.youtube.com/watch?v=oTAjd6E5aLA'
              ),

              lecture(
                'lec-g9-bio-38',
                'Mitochondria',
                'Class 9 Biology – Mitochondria.',
                'Video',
                'https://www.youtube.com/watch?v=NtSSyTti-VQ'
              ),

              lecture(
                'lec-g9-bio-39',
                'Vacuoles',
                'Class 9 Biology – Vacuoles.',
                'Video',
                'https://www.youtube.com/watch?v=0iMsApZ3N20'
              ),

              lecture(
                'lec-g9-bio-40',
                'Centriols',
                'Class 9 Biology – Centriols.',
                'Video',
                'https://www.youtube.com/watch?v=Q8UHXkfsw_o'
              ),

              lecture(
                'lec-g9-bio-41',
                'Plastids',
                'Class 9 Biology – Plastids.',
                'Video',
                'https://www.youtube.com/watch?v=4jaS-2jnafo'
              ),

              lecture(
                'lec-g9-bio-42',
                'Brief Comparison between Plant and Animal Cells',
                'Class 9 Biology – Brief Comparison between Plant and Animal Cells.',
                'Video',
                'https://www.youtube.com/watch?v=0p7e_bm2Ywc'
              ),

              lecture(
                'lec-g9-bio-43',
                'Structural Advantages of Plant and Animal Cells',
                'Class 9 Biology – Structural Advantages of Plant and Animal Cells.',
                'Video',
                'https://www.youtube.com/watch?v=EydmBVRZ8Ps'
              ),

              lecture(
                'lec-g9-bio-44',
                'Cell Specialization',
                'Class 9 Biology – Cell Specialization.',
                'Video',
                'https://www.youtube.com/watch?v=PzmySVewKVo'
              ),

              lecture(
                'lec-g9-bio-45',
                'Muscle Cells',
                'Class 9 Biology – Muscle Cells.',
                'Video',
                'https://www.youtube.com/watch?v=drmmmD7vsQQ'
              ),

              lecture(
                'lec-g9-bio-46',
                'Division of Labour within and across Cells',
                'Class 9 Biology – Division of Labour within and across Cells.',
                'Video',
                'https://www.youtube.com/watch?v=WpBAD9jkI3g'
              ),

              lecture(
                'lec-g9-bio-47',
                'Stem Cells',
                'Class 9 Biology – Stem Cells.',
                'Video',
                'https://www.youtube.com/watch?v=VoiQmZDm0aI'
              ),

              lecture(
                'lec-g9-bio-48',
                'Exercise',
                'Class 9 Biology – Exercise.',
                'Video',
                'https://www.youtube.com/watch?v=E7P28WbTC04'
              ),
            ],
          },

          // ====================================================
          // CHAPTER 4 - CELL CYCLE
          // ====================================================

          {
            slug: 'chapter-4-cell-cycle',
            name: 'Chapter 4 - Cell Cycle',
            description:
              'Phases of the cell cycle, mitosis, meiosis and their significance.',

            lectures: [
              lecture(
                'lec-g9-bio-49',
                'Phases of Cell Cycle',
                'Class 9 Biology – Phases of Cell Cycle.',
                'Video',
                'https://www.youtube.com/watch?v=5kTxVd46vxk'
              ),

              lecture(
                'lec-g9-bio-50',
                'Mitosis',
                'Class 9 Biology – Mitosis.',
                'Video',
                'https://www.youtube.com/watch?v=Aea-o82Txqk'
              ),

              lecture(
                'lec-g9-bio-51',
                'Cytokinesis',
                'Class 9 Biology – Cytokinesis.',
                'Video',
                'https://www.youtube.com/watch?v=FKngEUqg0IA'
              ),

              lecture(
                'lec-g9-bio-52',
                'Significance of Meiosis',
                'Class 9 Biology – Significance of Meiosis.',
                'Video',
                'https://www.youtube.com/watch?v=tuZp13N3LEA'
              ),

              lecture(
                'lec-g9-bio-53',
                'Difference between Meiosis and Mitosis',
                'Class 9 Biology – Difference between Meiosis and Mitosis.',
                'Video',
                'https://www.youtube.com/watch?v=exKAyXhXghA'
              ),

              lecture(
                'lec-g9-bio-54',
                'Mitosis vs Meiosis | Errors in Meiosis',
                'Class 9 Biology – Mitosis vs Meiosis | Errors in Meiosis.',
                'Video',
                'https://www.youtube.com/watch?v=XFSzPm2k6x0'
              ),

              lecture(
                'lec-g9-bio-55',
                'Exercise',
                'Class 9 Biology – Exercise.',
                'Video',
                'https://www.youtube.com/watch?v=foGWKsu2JUs'
              ),
            ],
          },
        ],
      },

      // --------------------------------------------------------
      // Chemistry
      // --------------------------------------------------------

      {
        slug: 'chemistry',
        name: 'Chemistry',
        description: 'Grade 9 Chemistry lectures covering the new syllabus.',

        chapters: [
          {
            slug: 'chapter-1-states-of-matter-and-phase-changes',
            name: 'Chapter 1 - States of Matter and Phase Changes',
            description: 'States of matter, mixtures, solutions and phase changes.',

            lectures: [
              lecture(
                'lec-g9-chem-1',
                'Branches of Chemistry Part I',
                'A first look at the main branches of chemistry and their scope.',
                'Video',
                'https://www.youtube.com/watch?v=qgxKrkcjO7Y'
              ),

              lecture(
                'lec-g9-chem-2',
                'Branches of Chemistry Part II',
                'Continuing the study of the branches of chemistry with more examples.',
                'Video',
                'https://www.youtube.com/watch?v=5UjC4Dfp5GM'
              ),

              lecture(
                'lec-g9-chem-3',
                'Branches of Chemistry Part III',
                'More specialised branches of chemistry and their applications.',
                'Video',
                'https://www.youtube.com/watch?v=bE4lsQNO8nU'
              ),

              lecture(
                'lec-g9-chem-4',
                'States of Matter',
                'The states of matter and the changes between them.',
                'Video',
                'https://www.youtube.com/watch?v=55SC8sQKS3A'
              ),

              lecture(
                'lec-g9-chem-5',
                'Elements, Mixture and Compound',
                'How elements, mixtures and compounds are defined and distinguished.',
                'Video',
                'https://www.youtube.com/watch?v=wvVMm6IxqS8'
              ),

              lecture(
                'lec-g9-chem-6',
                'Allotropic Forms of Elements',
                'Allotropy and the different forms of the same element.',
                'Video',
                'https://www.youtube.com/watch?v=tZJFL1-XgP8'
              ),

              lecture(
                'lec-g9-chem-7',
                'Solution, Colloidal Solution and Suspension',
                'Differences between true solutions, colloids and suspensions.',
                'Video',
                'https://www.youtube.com/watch?v=nLJyDceEw5Q'
              ),

              lecture(
                'lec-g9-chem-8',
                'Formation of Saturated and Unsaturated Solutions',
                'How saturated and unsaturated solutions are formed.',
                'Video',
                'https://www.youtube.com/watch?v=PJKgyd_sQ6Y'
              ),

              lecture(
                'lec-g9-chem-9',
                'Effects of Temperature on the Solubility of Solutions',
                'How temperature affects the solubility of solutions.',
                'Video',
                'https://www.youtube.com/watch?v=nQHXRIpDPdU'
              ),

              lecture(
                'lec-g9-chem-10',
                'Questions for Short Answers',
                'Short questions covering the key ideas of this chapter.',
                'Video',
                'https://www.youtube.com/watch?v=Z_pR-yvbrgQ'
              ),
            ],
          },

          {
            slug: 'chapter-2-atomic-structure',
            name: 'Chapter 2 - Atomic Structure',
            description: 'Atomic model, sub-atomic particles, isotopes and atomic mass.',

            lectures: [
              lecture(
                'lec-g9-chem-11',
                'Structure of Atom',
                'The structure of the atom, its sub-atomic particles and their arrangement.',
                'Video',
                'https://www.youtube.com/watch?v=iStS9NYAFeY'
              ),

              lecture(
                'lec-g9-chem-12',
                'Discovery of Proton',
                'How the proton was discovered and its characteristics.',
                'Video',
                'https://www.youtube.com/watch?v=t27pAD2OJ98'
              ),

              lecture(
                'lec-g9-chem-13',
                'Discovery of Electrons',
                'How electrons were discovered and their characteristics.',
                'Video',
                'https://www.youtube.com/watch?v=rubMGksrY5g'
              ),

              lecture(
                'lec-g9-chem-14',
                'Discovery of Neutron',
                'How the neutron was discovered and its characteristics.',
                'Video',
                'https://www.youtube.com/watch?v=RC8cy7eyMSQ'
              ),

              lecture(
                'lec-g9-chem-15',
                'Rutherford Model',
                'Rutherford\'s gold foil experiment and his atomic model.',
                'Video',
                'https://www.youtube.com/watch?v=UTxZTJHkPiE'
              ),

              lecture(
                'lec-g9-chem-16',
                'Atomic Number and Mass Number',
                'Atomic number and mass number and how they define an element.',
                'Video',
                'https://www.youtube.com/watch?v=IkdQTC-GibA'
              ),

              lecture(
                'lec-g9-chem-17',
                'Isotopes and Their Masses',
                'Isotopes of elements and the calculation of their masses.',
                'Video',
                'https://www.youtube.com/watch?v=Mwi-LyWwD5o'
              ),

              lecture(
                'lec-g9-chem-18',
                'Relative Atomic Mass',
                'The concept of relative atomic mass and its average.',
                'Video',
                'https://www.youtube.com/watch?v=EyICuXRkwFs'
              ),

              lecture(
                'lec-g9-chem-19',
                'Review Chapter 2',
                'A review of the key concepts of atomic structure.',
                'Video',
                'https://www.youtube.com/watch?v=QrsumBil6bE'
              ),
            ],
          },

          {
            slug: 'chapter-3-chemical-bonding',
            name: 'Chapter 3 - Chemical Bonding',
            description: 'Chemical bonds and the forces that hold atoms together.',

            lectures: [
              lecture(
                'lec-g9-chem-20',
                'Chemical Bonding',
                'Why atoms combine and how chemical bonds are formed.',
                'Video',
                'https://www.youtube.com/watch?v=EDnMSTMQZ0Q'
              ),

              lecture(
                'lec-g9-chem-21',
                'Ionic Bond',
                'Ionic bonding and the transfer of electrons between atoms.',
                'Video',
                'https://www.youtube.com/watch?v=hfd019JzxE0'
              ),

              lecture(
                'lec-g9-chem-22',
                'Covalent Bond',
                'Covalent bonding and the sharing of electrons.',
                'Video',
                'https://www.youtube.com/watch?v=1lHFpOB9DZI'
              ),

              lecture(
                'lec-g9-chem-23',
                'Polar and Non Polar Covalent Bond',
                'Distinguishing polar and non-polar covalent bonds.',
                'Video',
                'https://www.youtube.com/watch?v=hXMKSzbJ4Ag'
              ),

              lecture(
                'lec-g9-chem-24',
                'Metallic Bond',
                'Metallic bonding and the properties it gives to metals.',
                'Video',
                'https://www.youtube.com/watch?v=Wal-wh5WwsE'
              ),

              lecture(
                'lec-g9-chem-25',
                'Electropositive Character of Metals',
                'Why metals readily lose electrons to form positive ions.',
                'Video',
                'https://www.youtube.com/watch?v=FiLglomkdoE'
              ),

              lecture(
                'lec-g9-chem-26',
                'Intermolecular Forces of Attraction',
                'Forces of attraction that operate between molecules.',
                'Video',
                'https://www.youtube.com/watch?v=iImiV5tdUlM'
              ),

              lecture(
                'lec-g9-chem-27',
                'Review of Chapter 3 Exercise',
                'Exercise review of the bonding concepts covered in this chapter.',
                'Video',
                'https://www.youtube.com/watch?v=oVm8TgZyHbc'
              ),
            ],
          },

          {
            slug: 'chapter-4-stoichiometry',
            name: 'Chapter 4 - Stoichiometry',
            description: 'Quantitative relationships in chemical reactions.',

            lectures: [
              lecture(
                'lec-g9-chem-28',
                'Stoichiometry',
                'The study of quantitative relationships in chemical reactions.',
                'Video',
                'https://www.youtube.com/watch?v=MC9U8TmFZ6Q'
              ),

              lecture(
                'lec-g9-chem-29',
                'Empirical Formula',
                'How the empirical formula of a compound is determined.',
                'Video',
                'https://www.youtube.com/watch?v=hotyEJXUE9Q'
              ),

              lecture(
                'lec-g9-chem-30',
                'Chemical Formulas of Compounds',
                'Writing and interpreting the chemical formulas of compounds.',
                'Video',
                'https://www.youtube.com/watch?v=j2C3e4GZSmg'
              ),

              lecture(
                'lec-g9-chem-31',
                'Avogadro\'s Number (Na)',
                'Avogadro\'s number and the concept of the mole.',
                'Video',
                'https://www.youtube.com/watch?v=lSy7Kf0Mdr8'
              ),

              lecture(
                'lec-g9-chem-32',
                'Chemical Equation & Chemical Reactions',
                'Representing and balancing chemical equations for reactions.',
                'Video',
                'https://www.youtube.com/watch?v=W3Q130F-u3s'
              ),

              lecture(
                'lec-g9-chem-33',
                'Questions for Short Answers',
                'Short questions covering the key ideas of this chapter.',
                'Video',
                'https://www.youtube.com/watch?v=Y8ibqx1NoXo'
              ),
            ],
          },

          {
            slug: 'chapter-5-energetics',
            name: 'Chapter 5 - Energetics',
            description: 'Energy changes that accompany chemical reactions.',

            lectures: [
              lecture(
                'lec-g9-chem-34',
                'Chemical Energetics',
                'Energy changes that accompany chemical reactions.',
                'Video',
                'https://www.youtube.com/watch?v=cSjk2TwweWk'
              ),

              lecture(
                'lec-g9-chem-35',
                'Exothermic and Endothermic Reactions',
                'How energy is released or absorbed during reactions.',
                'Video',
                'https://www.youtube.com/watch?v=QgQ_0_lqSh8'
              ),

              lecture(
                'lec-g9-chem-36',
                'How Does a Reaction Take Place?',
                'The collision theory and how chemical reactions occur.',
                'Video',
                'https://www.youtube.com/watch?v=DKy9MkjH_nc'
              ),

              lecture(
                'lec-g9-chem-37',
                'Questions for Short Answers',
                'Short questions covering the key ideas of this chapter.',
                'Video',
                'https://www.youtube.com/watch?v=I-x_hrWARdU'
              ),
            ],
          },

          {
            slug: 'chapter-6-equilibria',
            name: 'Chapter 6 - Equilibria',
            description: 'Chemical equilibrium and the factors that affect it.',

            lectures: [
              lecture(
                'lec-g9-chem-38',
                'Equilibria',
                'Chemical equilibrium and the conditions that affect it.',
                'Video',
                'https://www.youtube.com/watch?v=yEUmLuXlHRk'
              ),

              lecture(
                'lec-g9-chem-39',
                'Changing Physical Conditions of a Chemical Reaction',
                'How temperature, pressure and concentration affect equilibrium.',
                'Video',
                'https://www.youtube.com/watch?v=97_CWN4xJKI'
              ),

              lecture(
                'lec-g9-chem-40',
                'Questions for Short Answers',
                'Short questions covering the key ideas of this chapter.',
                'Video',
                'https://www.youtube.com/watch?v=MdqWJsREg6g'
              ),
            ],
          },

          {
            slug: 'chapter-7-acid-base-chemistry',
            name: 'Chapter 7 - Acid Base Chemistry',
            description: 'The concepts used to define acids and bases.',

            lectures: [
              lecture(
                'lec-g9-chem-41',
                'Acids and Bases',
                'Introduction to acids and bases and their general properties.',
                'Video',
                'https://www.youtube.com/watch?v=Sz7Bl_6MUxU'
              ),

              lecture(
                'lec-g9-chem-42',
                'Arrhenius Acids and Bases Concept',
                'The Arrhenius definition of acids and bases.',
                'Video',
                'https://www.youtube.com/watch?v=7BbhK3XB-2g'
              ),

              lecture(
                'lec-g9-chem-43',
                'Bronsted Lowry Concepts of Acids and Bases',
                'Bronsted-Lowry acids and bases as proton donors and acceptors.',
                'Video',
                'https://www.youtube.com/watch?v=wHZzwi_V_NA'
              ),

              lecture(
                'lec-g9-chem-44',
                'Properties of Acids and Bases',
                'Common properties of acids and bases and their uses.',
                'Video',
                'https://www.youtube.com/watch?v=0wW3gYOwxQ0'
              ),

              lecture(
                'lec-g9-chem-45',
                'Questions for Short Answers',
                'Short questions covering the key ideas of this chapter.',
                'Video',
                'https://www.youtube.com/watch?v=3PrFdmm1LEw'
              ),
            ],
          },

          {
            slug: 'chapter-8-periodic-table-and-periodicity',
            name: 'Chapter 8 - Periodic Table and Periodicity',
            description: 'The periodic table and trends in the properties of elements.',

            lectures: [
              lecture(
                'lec-g9-chem-46',
                'Periodic Table and Periodicity',
                'The periodic table and trends in the properties of elements.',
                'Video',
                'https://www.youtube.com/watch?v=oWbb42AaiME'
              ),

              lecture(
                'lec-g9-chem-47',
                'Similarities in the Chemical Properties of Elements in the Same Group',
                'How elements in the same group share similar chemical properties.',
                'Video',
                'https://www.youtube.com/watch?v=9cXPYaL8CrM'
              ),

              lecture(
                'lec-g9-chem-48',
                'Variation of Periodic Properties in Periods and Groups',
                'How periodic properties vary across periods and down groups.',
                'Video',
                'https://www.youtube.com/watch?v=dbBUXwOerWk'
              ),

              lecture(
                'lec-g9-chem-49',
                'Electron Affinity & Electronegativity',
                'Electron affinity and electronegativity trends across the table.',
                'Video',
                'https://www.youtube.com/watch?v=bKYJ6xfsWYM'
              ),

              lecture(
                'lec-g9-chem-50',
                'Answers',
                'Answers to the exercises of this chapter.',
                'Video',
                'https://www.youtube.com/watch?v=B3RmebViWxI'
              ),
            ],
          },

          {
            slug: 'chapter-9-group-properties-and-elements',
            name: 'Chapter 9 - Group Properties and Elements',
            description: 'Properties of group 1, group 17 and transition elements.',

            lectures: [
              lecture(
                'lec-g9-chem-51',
                'Properties of Group 1 Elements',
                'The characteristic properties of the alkali metals.',
                'Video',
                'https://www.youtube.com/watch?v=T5v7RSlUNWo'
              ),

              lecture(
                'lec-g9-chem-52',
                'Properties of Group 17 Elements',
                'The characteristic properties of the halogens.',
                'Video',
                'https://www.youtube.com/watch?v=IhAFM-CAYaE'
              ),

              lecture(
                'lec-g9-chem-53',
                'Group Properties of Transition Elements',
                'The properties shared by the transition elements.',
                'Video',
                'https://www.youtube.com/watch?v=2WAzAVz_TSw'
              ),

              lecture(
                'lec-g9-chem-54',
                'Answers',
                'Answers to the exercises of this chapter.',
                'Video',
                'https://www.youtube.com/watch?v=A_ibcN7xuOw'
              ),
            ],
          },

          {
            slug: 'chapter-10-environmental-chemistry',
            name: 'Chapter 10 - Environmental Chemistry',
            description: 'Environmental issues such as pollution and its effects.',

            lectures: [
              lecture(
                'lec-g9-chem-55',
                'Environmental Chemistry',
                'The chemistry of the environment and natural cycles.',
                'Video',
                'https://www.youtube.com/watch?v=hInacufdGUI'
              ),

              lecture(
                'lec-g9-chem-56',
                'Pollutant and Their Harmful Effects',
                'Pollutants and the harmful effects they cause.',
                'Video',
                'https://www.youtube.com/watch?v=pcgZ6hfbVo4'
              ),

              lecture(
                'lec-g9-chem-57',
                'Questions for Short Answers',
                'Short questions covering the key ideas of this chapter.',
                'Video',
                'https://www.youtube.com/watch?v=XU0dFUpJi4Y'
              ),
            ],
          },

          {
            slug: 'chapter-11-hydrocarbons',
            name: 'Chapter 11 - Hydrocarbons',
            description: 'Introduction to hydrocarbons and their structures.',

            lectures: [
              lecture(
                'lec-g9-chem-58',
                'Hydrocarbons',
                'Hydrocarbons and the classification of organic compounds.',
                'Video',
                'https://www.youtube.com/watch?v=vNhiUEM7kZc'
              ),

              lecture(
                'lec-g9-chem-59',
                'Electron Cross and Dot Structures of Alkanes',
                'Cross and dot electron structures of alkane molecules.',
                'Video',
                'https://www.youtube.com/watch?v=H8ac9soVTJY'
              ),
            ],
          },

          {
            slug: 'smart-syllabus-2026',
            name: 'Smart Syllabus 2026',
            description: 'Smart syllabus overview for the current academic year.',

            lectures: [
              lecture(
                'lec-g9-chem-60',
                'Smart Syllabus 2026',
                'Overview of the smart syllabus for the current academic year.',
                'Video',
                'https://www.youtube.com/watch?v=ehtIJj-lgPo'
              ),
            ],
          },
        ],
      },
    ],
  },
}


// ============================================================
// Attach hierarchy info to every lecture.
// Each lecture object gets courseSlug / subjectSlug / chapterSlug so
// pages (e.g. the Lecture page) always know the lecture's parent
// course, subject and chapter — without relying on browser history.
// ============================================================

Object.values(courses).forEach((course) => {
  course.subjects.forEach((subject) => {
    ;(subject.chapters || []).forEach((chapter) => {
      ;(chapter.lectures || []).forEach((lec) => {
        lec.courseSlug = course.slug
        lec.subjectSlug = subject.slug
        lec.chapterSlug = chapter.slug
      })
    })
  })
})


// ============================================================
// Course display order
// ============================================================

export const courseOrder = [
  'primer',
  'grade-1',
  'grade-9',
]
