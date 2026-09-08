import React from 'react'
import SectionTitle from '../components/SectionTitle'
import TeamCard from '../components/TeamCard'
import { team } from '../data/team'

export default function Team() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16">
        <SectionTitle
          title="Our Team"
          description="The dedicated educators and specialists behind PEN Academy."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </>
  )
}
