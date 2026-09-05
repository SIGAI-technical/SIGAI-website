/**
 * Every fact on this site comes from https://www.djscesigai.tech/ — the About
 * and Vision copy is reproduced verbatim. Nothing here is invented: where the
 * source has no data (event dates, some member links), the field is simply
 * absent and the UI renders an honest empty state instead.
 */

export const ORG = {
  name: 'DJS ACM SIGAI',
  shortName: 'SIGAI',
  expansion: 'Special Interest Group on Artificial Intelligence',
  tagline: 'IF YOUR MIND CAN THINK, SO CAN MINE!',
  chapterLine: "DJSCE's Official Student Chapter",
  /** Lowercase form, for use mid-sentence. */
  chapterDescriptor: 'official student chapter',
  college: 'Dwarkadas J. Sanghvi College of Engineering',
  collegeFull: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
  department: 'Artificial Intelligence and Machine Learning (AI&ML)',
  parentBody: 'Association for Computing Machinery (ACM)',
  copyright: '© 2026 SIGAI. All rights reserved.',
} as const;

export const ABOUT = {
  heading: 'About Us',
  body: "DJS ACM SIGAI (Special Interest Group on Artificial Intelligence) is a new student chapter founded by Dwarkadas J. Sanghvi College of Engineering students in the Artificial Intelligence and Machine Learning (AI&ML) department. SIGAI is affiliated with the Association for Computing Machinery (ACM), a U.S.-based non-profit dedicated to education in the computing field. Our student chapter's mission is to promote and support the development and application of AI principles and techniques throughout the computing industry.",
} as const;

export const VISION = {
  heading: 'Our Vision',
  body: 'We strive to enable students to gain knowledge, skills and develop as a community by introducing them to the rapidly expanding and increasingly interdisciplinary field of Artificial Intelligence, Machine Learning and Deep Learning through a series of seminars, skill-building workshops, and other events spread out over the course of the year.',
} as const;

/**
 * Pulled from the terms the source site cycles through in its hero and team
 * headers. These are stated interests, not course offerings.
 */
export interface Area {
  term: string;
  notation: string;
  blurb: string;
}

export const AREAS: Area[] = [
  {
    term: 'Artificial Intelligence',
    notation: 'AI',
    blurb: 'The field the chapter exists to promote — AI principles and techniques across the computing industry.',
  },
  {
    term: 'Machine Learning',
    notation: 'ML',
    blurb: 'Named in the vision alongside AI and Deep Learning as a core strand of what SIGAI introduces students to.',
  },
  {
    term: 'Deep Learning',
    notation: 'DL',
    blurb: 'The third strand of the chapter’s stated focus, explored through seminars and skill-building workshops.',
  },
  {
    term: 'Neural Networks',
    notation: 'NEURAL NET',
    blurb: 'The architectures underneath modern AI, and a recurring theme across SIGAI’s technical material.',
  },
  {
    term: 'Transformers',
    notation: 'TRANSFORMER',
    blurb: 'The architecture behind current language and vision models, surfaced as a SIGAI area of interest.',
  },
  {
    term: 'Backpropagation',
    notation: '∂L/∂W',
    blurb: 'How networks actually learn — the gradient mechanics behind training, from first principles.',
  },
];

/** The glyph ticker the source site runs behind its hero. */
export const TICKER = [
  'NEURAL NET',
  'DEEP LEARNING',
  '∑ W·X + B',
  'BACKPROP',
  'TRANSFORMER',
  '∂L/∂W',
] as const;

export interface SigEvent {
  id: string;
  index: string;
  title: string;
  year: string;
  series: string;
  description: string;
}

/**
 * The source lists eight events across three academic years and gives no
 * calendar dates, so none are shown. Ordered newest year first.
 */
export const EVENTS: SigEvent[] = [
  {
    id: 'clockout-3',
    index: '01',
    title: 'Clockout 3.0',
    year: '2025-26',
    series: 'Clockout',
    description:
      'Shadows of Bhangarh: an immersive, story-driven event combining mystery, teamwork, and problem-solving. Featuring three dynamic rounds — The Initiation, The Investigation, and The Hunt — participants collaborated across years in AI-themed factions to solve puzzles, analyze clues, and compete in a campus-wide treasure hunt.',
  },
  {
    id: 'genesis-3',
    index: '02',
    title: 'Genesis 3.0',
    year: '2025-26',
    series: 'Genesis',
    description:
      'A strategic SIGAI orientation seminar featuring faculty mentors and senior leaders to roadmap AI/ML career success.',
  },
  {
    id: 'clockout-2',
    index: '02',
    title: 'Clockout 2.0',
    year: '2024-25',
    series: 'Clockout',
    description: 'A major event focusing on innovation and technology.',
  },
  {
    id: 'synergy-2',
    index: '03',
    title: 'Synergy 2.0',
    year: '2024-25',
    series: 'Synergy',
    description: 'An event that brings together diverse minds for collaboration.',
  },
  {
    id: 'genesis-1',
    index: '04',
    title: 'Genesis 1.0',
    year: '2024-25',
    series: 'Genesis',
    description: 'A seminar featuring industry experts and thought leaders.',
  },
  {
    id: 'clockout-1',
    index: '05',
    title: 'Clockout 1.0',
    year: '2023-24',
    series: 'Clockout',
    description: 'The inaugural event focusing on emerging technologies.',
  },
  {
    id: 'synergy-1',
    index: '06',
    title: 'Synergy 1.0',
    year: '2023-24',
    series: 'Synergy',
    description: 'The first synergy event aimed at fostering collaboration.',
  },
  {
    id: 'seminar',
    index: '07',
    title: 'Seminar',
    year: '2023-24',
    series: 'Seminar',
    description: 'A seminar that discusses the latest trends in the industry.',
  },
];

export const EVENT_YEARS = ['2025-26', '2024-25', '2023-24'] as const;

export interface Member {
  name: string;
  role: string;
  instagram?: string;
  linkedin?: string;
}

export interface Core {
  year: string;
  faculty: Member[];
  committee: Member[];
}

export const CORES: Core[] = [
  {
    year: '2025-26',
    faculty: [
      { name: 'Dr. Aruna Gawade', role: 'Faculty Coordinator' },
      { name: 'Prof. Ragini Mishra', role: 'Faculty Coordinator' },
    ],
    committee: [
      {
        name: 'Amey Kulkarni',
        role: 'Chairperson',
        instagram: 'https://www.instagram.com/ameykulkarni_/',
        linkedin: 'https://www.linkedin.com/in/ameyyk/',
      },
      {
        name: 'Keerti Nayak',
        role: 'Co-Chairperson',
        instagram: 'https://www.instagram.com/keertinayak30/',
        linkedin: 'https://www.linkedin.com/in/keerti-nayak-a014852b5/',
      },
      {
        name: 'Siddhanth Chapade',
        role: 'Secretary',
        instagram: 'https://www.instagram.com/htnahddis',
        linkedin: 'https://www.linkedin.com/in/siddhanthchapade/',
      },
      {
        name: 'Rishi Yadav',
        role: 'Admin',
        instagram: 'https://www.instagram.com/rishiyadav2701',
        linkedin: 'https://www.linkedin.com/in/rishi-yadav-7ba7b8234/',
      },
      {
        name: 'Parth Pujare',
        role: 'VCP Finance',
        instagram: 'https://www.instagram.com/parthpujare16',
        linkedin: 'https://www.linkedin.com/in/parth-pujare-67a14a2bb',
      },
      {
        name: 'Sneha Bangera',
        role: 'VCP Technical',
        instagram: 'https://www.instagram.com/_snehaaaaaa.b_/',
        linkedin: 'https://www.linkedin.com/in/sneha-bangera-6ba99b2b5/',
      },
      {
        name: 'Kirtan Chitalia',
        role: 'VCP Technical',
        instagram: 'https://www.instagram.com/_kirtan_0707',
        linkedin: 'https://www.linkedin.com/in/kirtan-chitalia-01737028a/',
      },
      {
        name: 'Diti Solanki',
        role: 'VCP Technical',
        instagram: 'https://instagram.com/diti_4357/',
        linkedin: 'https://www.linkedin.com/in/diti-solanki-62550a28a/',
      },
      {
        name: 'Rishabh Mody',
        role: 'VCP Events',
        instagram: 'https://www.instagram.com/rishabh_mody',
        linkedin: 'https://in.linkedin.com/in/rishabh-mody-0b3a06283',
      },
      {
        name: 'Harsh Karakasia',
        role: 'VCP Events',
        instagram: 'https://www.instagram.com/harsh.karakasia',
        linkedin: 'https://www.linkedin.com/in/harsh-karakasia-662561354',
      },
      {
        name: 'Veer Gandhi',
        role: 'VCP Publicity',
        instagram: 'https://www.instagram.com/veer_gandhii',
      },
      {
        name: 'Aashi Palrecha',
        role: 'VCP Creatives',
        instagram: 'https://www.instagram.com/ashu_jain28',
        linkedin: 'https://www.linkedin.com/in/aashi-palrecha-409a8231a',
      },
      {
        name: 'Drashti Jaiswal',
        role: 'VCP Creatives',
        instagram: 'https://www.instagram.com/drashtijaiswal_',
        linkedin: 'https://www.linkedin.com/in/drashti-jaiswal',
      },
      {
        name: 'Midhat Ansari',
        role: 'VCP Creatives',
        linkedin: 'https://www.linkedin.com/in/midhat-ansari-97863022b',
      },
      {
        name: 'Saumya Shah',
        role: 'VCP Marketing',
        instagram: 'https://www.instagram.com/saumya.shah.28',
        linkedin: 'https://www.linkedin.com/in/saumya-shah-736002318',
      },
      {
        name: 'Vatsal Sindhavad',
        role: 'VCP Marketing',
        instagram: 'https://www.instagram.com/vatsal_sindhavad',
        linkedin: 'https://www.linkedin.com/in/vatsalsindhavad',
      },
      {
        name: 'Alan Saldhana',
        role: 'VCP Editorial',
        linkedin: 'https://www.linkedin.com/in/alan-s-41672128a/',
      },
      {
        name: 'Nashrah Ansari',
        role: 'VCP Editorial',
        instagram: 'https://www.instagram.com/itssnashrah',
        linkedin: 'https://www.linkedin.com/in/nashrah-ansari-172933246',
      },
      {
        name: 'Atharva Arekar',
        role: 'VCP Logistics',
        instagram: 'https://www.instagram.com/atharv_dilip_arekar_/',
        linkedin: 'https://www.linkedin.com/in/atharv-arekar-150505287',
      },
      {
        name: 'Jagdish Choudhary',
        role: 'VCP Logistics',
        instagram: 'https://www.instagram.com/jagdish_20_05',
        linkedin: 'https://www.linkedin.com/in/jagdish-choudhary-p2004',
      },
    ],
  },
  {
    year: '2024-25',
    faculty: [
      { name: 'Dr. Aruna Gawade', role: 'Faculty Coordinator' },
      { name: 'Prof. Ragini Mishra', role: 'Faculty Coordinator' },
    ],
    committee: [
      { name: 'Vinit Solanki', role: 'Chairperson' },
      { name: 'Meghansh Vora', role: 'Joint Chairperson' },
      { name: 'Aagam Ratadia', role: 'Admin' },
      { name: 'Divya Viradiya', role: 'Admin' },
      { name: 'Rasika Adiseshan', role: 'Secretary' },
      { name: 'Krish Bhimani', role: 'VCP Finance' },
      { name: 'Yash Loriya', role: 'VCP Technical' },
      { name: 'Yashvi Savla', role: 'VCP Creatives' },
      { name: 'Jinnal Raghwani', role: 'VCP Creatives' },
      { name: 'Prassidhi Agarwal', role: 'VCP Editorial' },
      { name: 'Rajvi Shah', role: 'VCP Events' },
      { name: 'Pradnesh Sawatkhedkar', role: 'VCP Logistics' },
      { name: 'Priyansh Tank', role: 'VCP Logistics' },
      { name: 'Ammaar Khan', role: 'VCP Marketing' },
      { name: 'Daksh Jain', role: 'VCP Marketing' },
      { name: 'Binita Chanpura', role: 'VCP Publicity' },
      { name: 'Nitika Jain', role: 'VCP Publicity' },
    ],
  },
  {
    year: '2023-24',
    faculty: [
      { name: 'Dr. Aruna Gawade', role: 'Faculty Coordinator' },
      { name: 'Komal Patil', role: 'Faculty Coordinator' },
      { name: 'Nilesh Rathod', role: 'Faculty Coordinator' },
    ],
    committee: [
      { name: 'Krish', role: 'Chairperson' },
      { name: 'Mahir', role: 'Co-Chairperson' },
      { name: 'Vividha', role: 'Admin' },
      { name: 'Neel', role: 'Secretary' },
      { name: 'Naman', role: 'Treasurer' },
      { name: 'Vallavi', role: 'VCP Creatives' },
      { name: 'Vedant', role: 'VCP Creatives' },
      { name: 'Ammar', role: 'VCP Marketing' },
      { name: 'Darshil', role: 'VCP Infotech Web/App' },
      { name: 'Devansh', role: 'VCP Technical' },
      { name: 'Shruti', role: 'VCP Publicity' },
      { name: 'Abhay', role: 'VCP Editorial' },
      { name: 'Jahaan', role: 'VCP Editorial' },
      { name: 'Parth', role: 'VCP Logistics' },
      { name: 'Shrenik', role: 'VCP Logistics' },
      { name: 'Lazeen', role: 'VCP Events' },
    ],
  },
];

export const CONTACT = {
  email: 'djs.sigai@gmail.com',
  phones: ['+91 9545629801', '+91 9867720041'],
  location: ORG.collegeFull,
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0090642576706!2d72.83453817459258!3d19.107258282103757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM\'s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1758569258615!5m2!1sen!2sin',
} as const;

export const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/djsce-acm-sigai-student-chapter/posts/?feedView=all',
  },
  { label: 'Instagram', href: 'https://www.instagram.com/djs.sigai/?hl=en' },
  { label: 'X', href: 'https://x.com/Sigai23713' },
] as const;

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#areas', label: 'AI' },
  { href: '#vision', label: 'Vision' },
  { href: '#events', label: 'Events' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
] as const;
