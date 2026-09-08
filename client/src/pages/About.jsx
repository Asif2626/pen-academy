import React from 'react'

export default function About() {
  return (
    <div className="w-full bg-white px-6 py-0 text-black">

      {/* PEN Academy */}
      <section className="mx-auto max-w-6xl">
        <h2 className="mt-8 text-center text-2xl font-bold">
          PEN Academy
        </h2>

        <p className="mt-4 text-sm leading-5">
          The PEN Academy is a collective impact initiative of Progressive
          Education Network(PEN), aimed at improving K-12 student achievement
          from ” cradle to school and college” through the use of information
          Communication Technologies(ICTs) in Pakistan. The PEN Academy has a
          common goal and shared metrics of creating a set of ICT tools that
          helps educate children anytime and anywhere through short lessons in
          the form of videos, virtual reality and gaming contents that includes
          supplementary practice exercises and materials for educators. All
          online resources are freely available to the learners,teachers and
          parents throughout Pakistan.
        </p>
      </section>

      {/* Main Sections */}
      <section className="mx-auto mt-7 max-w-6xl">
        <h2 className="text-center text-2xl font-bold">
          Main Sections of the Portal
        </h2>

        <ul className="mt-8 list-disc pl-7 text-sm leading-5">
          <li>
            <strong>For Teachers:</strong> Training videos: Class-wise and
            Subject wise
          </li>

          <li>
            <strong>For Students:</strong> Primary: Educational videos,
            interactive web content,
          </li>

          <li>
            <strong>For Parents:</strong> Parental guidelines
          </li>

          <li>
            <strong>News:</strong> Upcoming exams, announcements, date sheets,
          </li>

          <li>
            <strong>Admissions:</strong> Scholarships, Admission deadlines,
          </li>

          <li>
            <strong>Results:</strong> Exam Results
          </li>

          <li>
            <strong>Exam Prep:</strong> Past papers, online tests, time
            management, etc.
          </li>
        </ul>
      </section>

      {/* Digital Classroom */}
      <section className="mx-auto mt-3 max-w-6xl">
        <h2 className="text-center text-2xl font-bold">
          Digital Classroom
        </h2>

        <p className="mt-3 text-sm leading-5">
          Pen Academy is working on a Digital Classroom, Where we can provide
          Videos for children’s for there better future. The COVID-19 has
          resulted in schools shut all across the world. Globally, over 1.2
          billion children are out of the classroom. therefor Digital classroom
          is best way for learner. As a result, education has changed
          dramatically, with the distinctive rise of e-learning, whereby
          teaching is undertaken remotely and on digital platforms. Research
          suggests that online learning has been shown to increase retention of
          information, and take less time, meaning the changes coronavirus have
          caused might be here to stay.
        </p>
      </section>
    </div>
  )
}
