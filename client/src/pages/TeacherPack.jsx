import React from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import InfoCard from '../components/InfoCard'
import EmptyState from '../components/EmptyState'

// Teacher Pack topics — same shared InfoCard row design as Parent Pack and
// Health And Hygiene. Only this content/data differs per section.
//
// Video topics (1-5) use real YouTube thumbnails (all verified via the
// YouTube oEmbed API; every video publishes a maxresdefault frame):
//   - tq3J9p5yzCw  — "Teaching Skills" (PEN Academy)
//   - YC3qG-DHdcc  — "Motivational Skills" (PEN Academy)
//   - hLrFzkW9Fyk  — "Training Session on Motivation" (PEN Academy)
//   - 6kVMczzFaAw  — "Teacher's Training Session" (PEN Academy)
//   - VYO1mruo8Ic  — "UNESCO SDG4 campaign in Urdu" (rtepakistan)
//
// Topics 6-9 use the provided images in /images/teacher-pack.

const teacherTopics = [
  {
    id: 'teaching-skills',
    label: 'Topic',
    emoji: '🏫',
    title: 'Teaching Skills',
    description: 'Teaching philosophy • Feedback • Relationship',
    image: 'https://img.youtube.com/vi/tq3J9p5yzCw/maxresdefault.jpg',
    imageAlt: 'Teaching Skills — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/tq3J9p5yzCw',
    link: 'https://youtu.be/tq3J9p5yzCw',
  },
  {
    id: 'motivational-skills',
    label: 'Topic',
    emoji: '🌟',
    title: 'Motivational Skills',
    description: 'Motivation • Communication • Creativity',
    image: 'https://img.youtube.com/vi/YC3qG-DHdcc/maxresdefault.jpg',
    imageAlt: 'Motivational Skills — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/YC3qG-DHdcc',
    link: 'https://youtu.be/YC3qG-DHdcc',
  },
  {
    id: 'training-session-motivation',
    label: 'Topic',
    emoji: '💪',
    title: 'Teacher’s training session - Motivation',
    description: 'Motivation',
    image: 'https://img.youtube.com/vi/hLrFzkW9Fyk/maxresdefault.jpg',
    imageAlt: 'Teacher’s training session on Motivation — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/hLrFzkW9Fyk',
    link: 'https://youtu.be/hLrFzkW9Fyk',
  },
  {
    id: 'training-session-av-aids',
    label: 'Topic',
    emoji: '📽️',
    title: 'Teacher’s training session - Effective use of AV Aids',
    description: 'Effective use of AV Aids',
    image: 'https://img.youtube.com/vi/6kVMczzFaAw/maxresdefault.jpg',
    imageAlt: 'Teacher’s training session on the effective use of AV Aids — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/6kVMczzFaAw',
    link: 'https://youtu.be/6kVMczzFaAw',
  },
  {
    id: 'training-session-unesco',
    label: 'Topic',
    emoji: '🌍',
    title: 'Teacher’s training session - UNESCO',
    description: 'UNESCO',
    image: 'https://img.youtube.com/vi/VYO1mruo8Ic/maxresdefault.jpg',
    imageAlt: 'Teacher’s training session on UNESCO — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/VYO1mruo8Ic',
    link: 'https://youtu.be/VYO1mruo8Ic',
  },
  {
    id: 'classroom-management',
    label: 'Topic',
    emoji: '🏫',
    title: 'Classroom Management',
    description:
      'Classroom management refers to the way a teacher organizes and manages variables of the curriculum, including interactions with students.',
    image: '/images/teacher-pack/classroom-management.png',
    imageAlt: 'Classroom management and interactions with students',
  },
  {
    id: 'co-curricular-activities',
    label: 'Topic',
    emoji: '🎨',
    title: 'Co-Curricular Activities',
    description:
      'Co-curricular activities are meant to bring social skills, intellectual skills and moral values.',
    image: '/images/teacher-pack/co-curricular-activities.png',
    imageAlt: 'Students participating in co-curricular activities',
  },
  {
    id: 'student-safety-measures',
    label: 'Topic',
    emoji: '🛡️',
    title: 'طالبعلموں کے لیے حفاظتی اقدامات',
    image: '/images/teacher-pack/student-safety-measures.png',
    imageAlt: 'Students safety measures',
  },
  {
    id: 'early-educational-skills',
    label: 'Topic',
    emoji: '🧩',
    title: 'ابتدائی تعلیمی مہارتیں اور ذہنی نشوونما کی صلاحیتیں',
    image: '/images/teacher-pack/early-educational-skills.png',
    imageAlt: 'Early educational skills and mental development',
  },
]

export default function TeacherPack() {
  return (
    <>
      <PageHero
        eyebrow="For Teachers"
        title="Teacher Pack"
        crumb="Teacher Pack"
        description="Resources and lesson material to help teachers deliver effective digital lessons."
      />

      {/* ============================================================
          Training videos — same shared structure as Parent Pack and
          Health And Hygiene (InfoCard + SectionTitle + grid)
      ============================================================ */}
      <section className="container-px mx-auto max-w-7xl py-14">
        <SectionTitle
          align="left"
          eyebrow="Video Training"
          title="Class-wise and Subject-wise Training"
          description="Training videos will appear here organised by class and subject once the digital library is connected."
        />
        <div className="mt-8">
          {teacherTopics.map((item, index) => (
            <React.Fragment key={item.id}>
              <InfoCard {...item} />
              {index < teacherTopics.length - 1 && (
                <div className="my-10 border-t-2 border-dotted border-slate-300 dark:border-slate-700" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Thin horizontal divider below the section */}
        <div className="mt-10 border-t border-slate-200 dark:border-slate-800" aria-hidden="true" />
      </section>

      <section className="bg-brand-50 py-14 dark:bg-brand-500/5">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle
            title="Lesson Material"
            description="Lesson plans, worksheets and printable teaching resources for every subject."
          />
          <div className="mx-auto mt-8 max-w-3xl">
            <EmptyState
              emoji="📂"
              title="Teaching Resources Coming Soon"
              description="Worksheets, lesson plans and classroom activities are being prepared and will be published here."
              action={{ label: 'Browse Courses', to: '/courses' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}