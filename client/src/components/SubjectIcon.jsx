import React from 'react'

/**
 * SubjectIcon
 *
 * Maps a subject name to a short, friendly emoji/icon. Reused by the
 * SubjectSelector and QuizList so icons stay consistent. Unknown subjects
 * fall back to a generic book emoji.
 */
const iconMap = {
  English: '📖',
  Urdu: '🕌',
  Mathematics: '➕',
  Maths: '➕',
  Science: '🔬',
  GeneralKnowledge: '🌍',
  'General Knowledge': '🌍',
  Islamiat: '🕌',
  Computer: '💻',
  'Computer Science': '💻',
  PakistaniStudies: '🇵🇰',
  'Pakistan Studies': '🇵🇰',
  SocialStudies: '🏛️',
  'Social Studies': '🏛️',
  Physics: '⚛️',
  Chemistry: '🧪',
  Biology: '🧬',
  GeneralScience: '🔭',
  'General Science': '🔭',
}

export default function SubjectIcon({ subject, className = 'h-6 w-6' }) {
  const icon = iconMap[subject] || '📚'
  return (
    <span className={`inline-block text-center leading-none ${className}`} aria-hidden="true">
      {icon}
    </span>
  )
}
