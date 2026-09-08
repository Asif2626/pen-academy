// src/data/publications.js
// PEN Academy publications grouped by category (from the reference).
import azerbaijanPdf from '/pdfs/Socioeconomic-Development-in-Azerbaijan-after-the-Armenian-War.pdf';

export const publications = {
  internationalJournals: [
    {
      id: 'ij-1',
      title: 'Design, Development, and Usability of a Virtual Environment on Moral, Social & Emotional Learning',
      authors: 'Paracha, S., Clawson, K., Mitsche, N., and Hall, L.',
      year: '2020',
      journal:
        'International Journal of Virtual and Personal Learning Environments (IJVPLE), Vol. 10(2), pp. 50–65, IGI Global',
      url: 'https://sure.sunderland.ac.uk/id/eprint/11195/',
    },
    {
      id: 'ij-2',
      title:
        'Co-design with Children: Using Participatory Design for Design Thinking and Social and Emotional Learning',
      authors:
        'Paracha, S., Clawson, K., Mitsche, N., Jehanzeb, S., and Hall, L.',
      year: '2019',
      journal:
        'Open Education Studies, Vol. 1(1), pp. 267–280, De Gruyter',
      url: 'https://sure.sunderland.ac.uk/id/eprint/12028/',
    },
    {
      id: 'ij-3',
      title: 'Why do projects crash & burn in fragile countries?',
      authors: 'Ahmadzai N., and Paracha, S.',
      year: '2016',
      journal:
        'Review of Integrative Business & Economics Research, Vol. 5(1), pp. 315–328',
      url: 'https://www.researchgate.net/publication/328465109_Tourist_Attraction_and_the_Uniqueness_of_Resources_on_Tourist_Destination_in_West_Java_Indonesia',
    },
    {
      id: 'ij-4',
      title: 'A Robust Interactive Narrative Framework for Edutainment',
      authors: 'Paracha, S., and Yoshie, O.',
      year: '2012',
      journal:
        'International Journal of Interactive Communication Systems and Technologies, Vol. 2, No. 1, pp. 18–35, IGI Global',
      url: 'https://www.igi-global.com/gateway/article/253834#pnlRecommendationForm',
    },
    {
      id: 'ij-5',
      title:
        'Exploring the Role of Drama and Storyboarding in Learner-Centered Scenario Generation',
      authors: 'Paracha, S., and Yoshie, O.',
      year: '2011',
      journal:
        'Intelligent Decision Technologies Journal, Vol. 5, No. 3, pp. 237–252, IOS Press',
      url: 'https://www.researchgate.net/publication/220467965_Exploring_the_role_of_drama_and_storyboarding_in_learner-centered_scenario_generation',
    },
    {
      id: 'ij-6',
      title: 'A Review of Basic Kanji Courseware',
      authors:
        'Paracha, S., Mohamad, M. H., Jehanzeb, S., and Yoshie, O.',
      year: '2009',
      journal:
        'IEEE Technology and Engineering Education (ITEE), Vol. 4, No. 1/2, pp. 24–30, IEEE Education Society Student Activities Committee',
      url: 'https://files.eric.ed.gov/fulltext/ED476959.pdf',
    },
    {
      id: 'ij-7',
      title: 'Promoting Autonomous Computer Assisted Language Learning',
      authors:
        'Paracha, S., Mohamad, M. H., Jehanzeb, S., and Yoshie, O.',
      year: '2009',
      journal:
        'Journal of Theoretical and Applied Information Technology, Vol. 5, No. 4, pp. 493–498, April 2009',
      url: 'http://researchers.waseda.jp/profile/ja.09556a436dad71fa13090912eeddb85f.html',
    },
    {
      id: 'ij-8',
      title: 'Combating Juvenile Delinquency with Empathic Agents',
      authors: 'Paracha, S., and Yoshie, O.',
      year: '2008',
      journal:
        'International Journal of Computer Science and Network Security, Vol. 8, No. 9, pp. 196–205',
      url: 'https://www.researchgate.net/publication/225226693_Examining_the_Theoretical_Schema_of_Shimpai_Muyou_Narrative_Learning_Environment',
    },
  ],
  unitedNationsPolicyReports: [
    {
      id: 'un-1',
      title: 'Digital Peacekeeping: Partnering to Enhance Technological Experimentation and Innovation within UN Peacekeeping',
      authors: 'Best, M., Paracha, S., and Bayor, A.',
      year: '2017',
      journal: 'UNU-CS 3 Pager, Pelikan Projects',
      url: 'http://i.unu.edu/media/pm.unu.edu/page/26/UNU-manual-on-project-management-and-Pelikan.pdf',
    },
    {
      id: 'un-2',
      title: 'Towards Values Centred Design for Peacekeeping',
      authors: 'Best, M., Paracha, S., Bayor, A., and Sehgal, S.',
      year: '2017',
      journal: 'UNU-CS, Pelikan Projects',
      url: 'http://i.unu.edu/media/pm.unu.edu/page/26/UNU-manual-on-project-management-and-Pelikan.pdf',
    },
  ],
  booksChapters: [
    {
      id: 'bc-1',
      title: 'Cultural Implications for Student Engagement in Online Learning',
      authors: 'Paracha, S., Takahara, S., and Jehanzeb, S.',
      year: '2018',
      journal: 'Optimizing Student Engagement in Online Learning Environments, Chapter 2: 28–58, IGI Global, USA',
      url: 'https://collections.unu.edu/view/UNU:6346',
    },
    {
      id: 'bc-2',
      title: 'Detecting Online Learners’ Reading Ability via Eye-Tracking',
      authors: 'Paracha, S., Inoue, A., and Jehanzeb, S.',
      year: '2018',
      journal: 'Optimizing Student Engagement in Online Learning Environments, Chapter 8: 163–185, IGI Global, USA',
      url: 'https://collections.unu.edu/view/UNU:6347',
    },
    {
      id: 'bc-3',
      title: 'Examining the Theoretical Schema of Shimpai Muyou! Narrative Learning Environment',
      authors: 'Paracha, S., Jehanzeb, S., and Yoshie, O.',
      year: '2009',
      journal: 'Recent Advances in Multimedia Signal Processing and Communications, SCI 231, Springer Verlag, Berlin Heidelberg, pp. 579–609',
      url: 'https://link.springer.com/chapter/10.1007/978-3-642-02900-4_22',
    },
  ],
  articles: [
    {
      id: 'ar-1',
      title: 'Socio-Economic Development in Azerbaijan after the Armenian War',
      year: '2023',
      url: azerbaijanPdf,
    },
  ],
}

export const publicationCategories = [
  { id: 'internationalJournals', label: 'International Journals' },
  { id: 'unitedNationsPolicyReports', label: 'United Nations Policy Reports' },
  { id: 'booksChapters', label: 'Books & Chapters' },
  { id: 'articles', label: 'Articles' },
]
