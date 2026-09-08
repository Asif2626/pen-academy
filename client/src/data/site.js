// src/data/site.js
// Central site-wide configuration. Keeping this data separate from the UI
// makes it trivial to replace with API values in a later MERN phase.

export const site = {
  name: 'PEN Academy',
  fullName: 'Progressive Education Network',
  tagline: 'Digital Classroom for a Better Future',
  shortDescription:
    'PEN Academy provides free digital video lectures, textbooks, quizzes and learning resources following the national curriculum.',
  email: 'penacademy7@gmail.com',
  //phone: '+92 51 000 0000',
  address: 'Lahore, Pakistan',
  youtubeUrl: 'https://www.youtube.com/@PENAcademypk/',
  facebookUrl: 'https://www.facebook.com/',
  twitterUrl: 'https://twitter.com/',
  instagramUrl: 'https://www.instagram.com/',
  copyright: `© ${new Date().getFullYear()} PEN Academy. All rights reserved.`,
}

export const footerLinks = {
  about: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Publications', to: '/publications' },
    { label: 'Blogs', to: '/blogs' },
  ],
  resources: [
    { label: 'Courses', to: '/courses' },
    { label: 'Text Books', to: '/books' },
    { label: 'Digital Classroom', to: '/about#digital-classroom' },
  ],
  legal: [
    { label: 'About Us', to: '/about' },
    { label: 'Disclaimer', to: '/disclaimer' },
    { label: 'Terms and Conditions', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy' },
  ],
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Our Team', to: '/team' },
  { label: 'Publications', to: '/publications' },
]
