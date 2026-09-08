import React from 'react'
import LegalPage from '../components/LegalPage'

/**
 * Privacy Policy page (/privacy).
 *
 * The legal copy is kept as plain data and rendered through the shared
 * LegalPage component, so it can later be replaced by API-driven content
 * (e.g. GET /api/pages/privacy) without any component changes.
 */

// Lead-in paragraphs shown under the title.
const intro = [
  'The following terms and conditions govern all use of the PEN Academy website (‘The Website’) and all content, services, and products available at or through the website. The Website is owned and operated by PEN Academy. The Website is offered subject to your acceptance without modification of all of the terms and conditions contained herein and all other operating rules, policies, and procedures that may be published from time to time on the website by Progressive Education Network (collectively, the “Agreement”).',

  'Please read this Agreement carefully before accessing or using the Website. By accessing or using any part of the website, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions of this agreement, then you may not access the Website or use any services. If these terms and conditions are considered an offer by PEN, acceptance is expressly limited to these terms.',
]

// The document contains no named sections.
const sections = []

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      crumb="Privacy Policy"
      intro={intro}
      sections={sections}
    />
  )
}

