// src/data/healthTopics.js
// Health And Hygiene awareness topics for the /health-and-hygiene page.
//
// Like Parent Pack and Teacher Pack, the page renders this data through the
// shared InfoCard component, so the section inherits the same card layout,
// image handling and responsive behaviour used across the site.
//
// All 7 topics link to official PEN Academy YouTube videos (verified via the
// YouTube oEmbed API). Each card uses the video's real YouTube thumbnail
// (img.youtube.com) so the shared media column shows the video preview with
// the play button and "Watch on YouTube" affordances. Videos without a
// maxresdefault frame fall back to hqdefault (both are 16:9).

export const healthTopics = [
  {
    id: 'dengue-awareness',
    label: 'Topic',
    emoji: '🦟',
    title: 'Dengue Awareness',
    description:
      'Dengue fever, also known as breakbone fever, is a mosquito-borne infection that can lead to a severe flu-like illness. It is caused by four different viruses and spread by Aedes mosquitoes. Symptoms range from mild to severe. Severe symptoms include dengue shock syndrome (DSS) and dengue hemorrhagic fever (DHF).',
    image: 'https://img.youtube.com/vi/ZRdKGe5sx4s/hqdefault.jpg',
    imageAlt: 'Dengue Awareness — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/ZRdKGe5sx4s',
    link: 'https://youtu.be/ZRdKGe5sx4s',
  },
  {
    id: 'covid-19-awareness',
    label: 'Topic',
    emoji: '🦠',
    title: 'COVID-19 Awareness',
    description:
      "'CO' stands for corona, 'VI' for virus, and 'D' for disease. Formerly, this disease was referred to as '2019 novel coronavirus' or '2019-nCoV.' The COVID-19 virus is a new virus linked to the same family of viruses as Severe Acute Respiratory Syndrome (SARS) and some types of common cold.",
    image: 'https://img.youtube.com/vi/rUeqbb8CV58/hqdefault.jpg',
    imageAlt: 'COVID-19 Awareness — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/rUeqbb8CV58',
    link: 'https://youtu.be/rUeqbb8CV58',
  },
  {
    id: 'introduction-health-hygiene',
    label: 'Topic',
    emoji: '🧼',
    title: 'Introduction to "Health & Hygiene"',
    description:
      'Good personal hygiene is one of the best ways to protect yourself from getting gastro or infectious diseases such as COVID-19, colds and flu. Washing your hands with soap removes germs that can make you ill. Maintaining good personal hygiene will also help prevent you from spreading diseases to other people.',
    image: 'https://img.youtube.com/vi/6bObsaEIVus/hqdefault.jpg',
    imageAlt: 'Introduction to Health and Hygiene — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/6bObsaEIVus',
    link: 'https://youtu.be/6bObsaEIVus',
  },
  {
    id: 'tuberculosis-awareness',
    label: 'Topic',
    emoji: '🫁',
    title: 'Tuberculosis Awareness',
    description:
      'Tuberculosis (TB) is a bacterial infection spread through inhaling tiny droplets from the coughs or sneezes of an infected person. It mainly affects the lungs, but it can affect any part of the body, including the tummy (abdomen), glands, bones and nervous system. Type of infectious agent: Pathogenic bacteria.',
    image: 'https://img.youtube.com/vi/j6vjYa5r9BQ/hqdefault.jpg',
    imageAlt: 'Tuberculosis Awareness — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/j6vjYa5r9BQ',
    link: 'https://youtu.be/j6vjYa5r9BQ',
  },
  {
    id: 'dental-hygiene',
    label: 'Topic',
    emoji: '🦷',
    title: 'Dental Hygiene - Taking care of your teeth - All the things you need to know',
    description:
      'BRUSH YOUR TEETH TWICE A DAY FOR TWO MINUTES EACH TIME. • FLOSS DAILY. • REPLACE YOUR TOOTHBRUSH AT THE SIGNS OF WEAR. • VISIT YOUR DENTIST EVERY SIX MONTHS. • MAINTAIN A HEALTHY DIET. • USE DENTAL HYGIENE PRODUCTS. • KEEP HYDRATED THROUGHOUT THE DAY. • DON’T SMOKE.',
    image: 'https://img.youtube.com/vi/RUBhZwbI9VI/hqdefault.jpg',
    imageAlt: 'Dental Hygiene — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/RUBhZwbI9VI',
    link: 'https://youtu.be/RUBhZwbI9VI',
  },
  {
    id: 'dengue-fever',
    label: 'Topic',
    emoji: '🦟',
    title: 'Dengue Fever',
    description:
      'Dengue (DENG-gey) fever is a mosquito-borne illness that occurs in tropical and subtropical areas of the world. Mild dengue fever causes a high fever and flu-like symptoms.',
    image: 'https://img.youtube.com/vi/ZZW50oqxCeM/maxresdefault.jpg',
    imageAlt: 'Dengue Fever — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/ZZW50oqxCeM',
    link: 'https://youtu.be/ZZW50oqxCeM',
  },
  {
    id: 'betel-nut-gutka-addiction',
    label: 'Topic',
    emoji: '🚭',
    title: 'Betel Nut (GUTKA) Addiction',
    description:
      'Betel nut is the seed of the fruit of the areca palm. It is also known as areca nut. The common names, preparations and specific ingredients vary by cultural group and individuals who use it. Betel nut is a stimulant drug, which means it speeds up the messages travelling between the brain and the body.',
    image: 'https://img.youtube.com/vi/Vly1yqT2ev0/maxresdefault.jpg',
    imageAlt: 'Betel Nut (GUTKA) Addiction — YouTube video thumbnail',
    videoUrl: 'https://youtu.be/Vly1yqT2ev0',
    link: 'https://youtu.be/Vly1yqT2ev0',
  },
]