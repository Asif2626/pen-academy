import React from 'react'
import LegalPage from '../components/LegalPage'

/**
 * Terms and Conditions page (/terms).
 *
 * The legal copy is kept as plain data and rendered through the shared
 * LegalPage component, so it can later be replaced by API-driven content
 * (e.g. GET /api/pages/terms) without any component changes.
 */

// The document below contains no lead-in paragraphs before the named sections.
const intro = []

// Named sections of the agreement.
const sections = [
  {
    heading: 'Responsibility of Website Visitors:',
    paragraphs: [
      'PEN Academy has not reviewed, and cannot review, all of the material, including computer software, posted to the Website, and cannot, therefore, be responsible for that material’s content, use, or effects. By operating the Website, PEN does not represent or imply that it endorses the material there posted, or that it believes such material to be accurate, useful, or non-harmful. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. The Website may contain content that is offensive, indecent, or otherwise objectionable, as well as content containing technical inaccuracies, typographical mistakes, and other errors. The Website may also contain material that violates the privacy or publicity rights or infringes the intellectual property and other proprietary rights, of third parties, or the downloading, copying or use of which is subject to additional terms and conditions, stated or unstated. PEN Academy disclaims any responsibility for any harm resulting from the use by visitors of the Website, or from any downloading by those visitors of content there posted.',
    ],
  },

  {
    heading: 'Content Posted on Other Websites:',
    paragraphs: [
      'We have not reviewed, and cannot review, all of the material, including computer software, made available through the websites and webpages to which pen.org.pk links, and that link to penacademy.pk PEN Academy does not have any control over these websites and webpages and is not responsible for their contents or their use. By linking to a PEN Academy website or webpage, PEN does not represent or imply that it endorses such website or webpage. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. PEN disclaims any responsibility for any harm resulting from your use of non-PEN websites and webpages.',
    ],
  },
]

export default function Terms() {
  return (
    <LegalPage
      title="Terms and Conditions"
      crumb="Terms and Conditions"
      intro={intro}
      sections={sections}
    />
  )
}

