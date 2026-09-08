import React from 'react'
import LegalPage from '../components/LegalPage'

/**
 * Disclaimer page (/disclaimer).
 *
 * The legal copy is kept as plain data and rendered verbatim, so it can later
 * be replaced by API-driven content (e.g. GET /api/pages/disclaimer) without
 * any component changes.
 */

// The document's single paragraph, shown under the title.
const intro = [
  'The Website is provided as is. PEN Academy and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose, and non-infringement. Neither PEN nor its suppliers and licensors, make any warranty that the Website will be error-free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, the Website at your own discretion and risk.',
]

// The document contains no named sections.
const sections = []

export default function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      crumb="Disclaimer"
      intro={intro}
      sections={sections}
    />
  )
}
