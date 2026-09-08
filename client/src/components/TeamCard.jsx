import React from 'react'

/**
 * Reusable team member card with profile image, name,
 * designation and LinkedIn link.
 */
export default function TeamCard({ member }) {
  return (
    <div className="card card-hover flex flex-col items-center p-6 text-center">
      
      {/* Profile Image */}
      <div className="h-28 w-28 overflow-hidden rounded-full">
        <img
          src={member.image}
          alt={`${member.name} profile`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {member.name}
      </h3>

      {/* Designation */}
      <p className="text-sm font-semibold text-brand-600">
        {member.designation}
      </p>

      {/* LinkedIn */}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${member.name} on LinkedIn`}
          className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-brand-600 hover:text-white"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14H.2V8zM8 8h4.4v2h.1c.6-1.2 2.1-2.4 4.4-2.4 4.7 0 5.6 3.1 5.6 7.2V22h-4.6v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V22H8V8z" />
          </svg>
        </a>
      )}
    </div>
  )
}
