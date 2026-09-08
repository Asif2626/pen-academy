import React from 'react'
import SectionTitle from '../components/SectionTitle'
import TeamCard from '../components/TeamCard'
import EmptyState from '../components/EmptyState'
import LoadingCards from '../components/LoadingCards'
import ErrorState from '../components/ErrorState'
import { getTeam } from '../services/content'
import useAsync from '../services/useAsync'

export default function Team() {
  const { loading, error, data, retry } = useAsync(() => getTeam(), [])

  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16">
        <SectionTitle
          title="Our Team"
          description="The dedicated educators and specialists behind PEN Academy."
        />

        {loading ? (
          <div className="mt-10">
            <LoadingCards count={4} cols="grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        ) : error ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <ErrorState
              title="Could not load the team"
              message="We could not load the team from the server. Check your connection and try again."
              onRetry={retry}
            />
          </div>
        ) : data.length === 0 ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <EmptyState
              emoji="👩‍🏫"
              title="Team profiles coming soon"
              description="Team member profiles are being prepared and will be published here."
            />
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
