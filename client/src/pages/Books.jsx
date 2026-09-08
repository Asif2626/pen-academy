import React from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import TextbookGradeCard from '../components/TextbookGradeCard'
import { textbooks, textbookOrder } from '../data/textbooks'

export default function CurriculumCompliance() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="Curriculum & Compliance"
        title="Curriculum Compliance"
        crumb="Curriculum Compliance"
        description="Access curriculum guidelines, compliance documents, syllabus information, and other official educational resources."
      />

      {/* Grade-wise Textbooks */}
      <section
        className="container-px mx-auto max-w-7xl py-16"
        aria-label="Grade-wise Textbooks"
      >
        <SectionTitle
          eyebrow="Textbooks"
          title="Grade-wise Textbooks"
          description="Select your class to view its textbooks. Every book opens as a PDF in a new browser tab."
        />

        {/* Responsive Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {textbookOrder.map((gradeKey) => (
            <TextbookGradeCard
              key={gradeKey}
              gradeKey={gradeKey}
              sections={textbooks[gradeKey]}
            />
          ))}
        </div>
      </section>
    </>
  )
}

