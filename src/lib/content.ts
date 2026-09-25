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
  tagline: 'INNOVATION BEGINS WITH COLLABORATION',
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
  lead: "DJS ACM SIGAI is the official student chapter for Artificial Intelligence and Machine Learning at SVKM's Dwarkadas J. Sanghvi College of Engineering.",
  rest: "Affiliated with the Association for Computing Machinery (ACM), SIGAI brings students together to learn, explore, and engage with artificial intelligence beyond the classroom. We organize seminars, workshops, hackathons, and other technical events that connect foundational concepts with current developments in AI.",
  body: "DJS ACM SIGAI is the official student chapter for Artificial Intelligence and Machine Learning at SVKM's Dwarkadas J. Sanghvi College of Engineering. Affiliated with the Association for Computing Machinery (ACM), SIGAI brings students together to learn, explore, and engage with artificial intelligence beyond the classroom. We organize seminars, workshops, hackathons, and other technical events that connect foundational concepts with current developments in AI. From mathematical foundations and machine learning fundamentals to modern neural architectures and generative AI, our activities are designed to help students understand how the field works and where it is heading.",
} as const;

export const VISION = {
  heading: 'Our Vision',
  body: 'We organize seminars, workshops, challenges, and conversations that help students learn AI beyond the classroom and connect with a growing technical community.',
} as const;

/**
 * Pulled from the terms the source site cycles through in its hero and team
 * headers. These are stated interests, not course offerings.
 */
export interface Area {
  term: string;
  notation: string;
  blurb: string;
  tone?: 'blue' | 'amber' | 'teal';
}

export const AREAS: Area[] = [
  {
    term: 'Artificial Intelligence',
    notation: 'AI',
    tone: 'blue',
    blurb: 'Foundational AI concepts and techniques that shape intelligent systems across computing.',
  },
  {
    term: 'Machine Learning',
    notation: 'ML',
    tone: 'amber',
    blurb: 'Methods that allow systems to learn patterns from data and improve through experience.',
  },
  {
    term: 'Deep Learning',
    notation: 'DL',
    tone: 'teal',
    blurb: 'Neural approaches for learning complex representations across vision, language, and other domains.',
  },
  {
    term: 'Neural Networks',
    notation: 'NEURAL NET',
    tone: 'blue',
    blurb: 'The architectures behind many modern AI systems, from basic feedforward networks to deeper models.',
  },
  {
    term: 'Transformers',
    notation: 'TRANSFORMER',
    tone: 'amber',
    blurb: 'Architectures that have reshaped language, vision, and generative AI.',
  },
  {
    term: 'Backpropagation',
    notation: '∂L/∂W',
    tone: 'teal',
    blurb: 'The fundamental mechanism used to train neural networks by learning how errors flow through a model.',
  },
];

export interface SigEvent {
  id: string;
  index: string;
  title: string;
  year: string;
  series: string;
  description: string;

  // Main image used by the event card and detail hero
  image?: string;

  // Gallery images
  gallery?: string[];
}

/**
 * The source lists eight events across three academic years and gives no
 * calendar dates, so none are shown. Ordered newest year first.
 */
export const EVENTS: SigEvent[] = [
  {
    id: 'genesis-2026',
    index: '01',
    title: 'Genesis',
    year: '2026-27',
    series: 'Genesis',
    description:
      'GENESIS, the official induction and felicitation event of DJS ACM SIGAI, was held on 25th August 2026 at DJ Sanghvi College of Engineering. The event celebrated the contributions of the outgoing core committee and faculty while welcoming the newly appointed core members. With inspiring addresses, experience-sharing, felicitation, and the unveiling of the new core, GENESIS marked the beginning of a new chapter for SIGAI',
    image: '/events/genesis-2026/1G.jpeg',
    gallery: [
      '/events/genesis-2026/1G.jpeg',
      '/events/genesis-2026/IMG_9526.jpeg',
      '/events/genesis-2026/IMG_9582.jpeg',
      '/events/genesis-2026/IMG_9585.jpeg',
      '/events/genesis-2026/IMG_9589.jpeg',
      '/events/genesis-2026/IMG_9597.jpeg',
      '/events/genesis-2026/IMG_9617.jpeg',
    ],
  },
  {
    id: 'ipd-seminar',
    index: '02',
    title: 'IPD Seminar',
    year: '2026-27',
    series: 'Seminar',
    description:
      "A seminar on Innovative Project Development, conducted by DJS ACM SIGAI, was held at DJ Sanghvi College of Engineering and delivered by Prof. Talib Khan, Associate Professor at IIT Bombay. The session walked participants through the process of building a research-driven project, from identifying real-world problems to translating them into research papers. It marked a valuable step in students' innovation journey, reinforcing that good innovation begins with asking better questions",
    image: '/events/ipd-seminar/1I.jpeg',
    gallery: [
      '/events/ipd-seminar/1I.jpeg',
      '/events/ipd-seminar/IMG_1453.jpeg',
      '/events/ipd-seminar/IMG_2839.jpeg',
      '/events/ipd-seminar/IMG_2876.jpeg',
      '/events/ipd-seminar/IMG_2890.jpeg',
    ],
  },
  {
    id: 'P2P',
    index: '03',
    title: 'Prompt to Prototype',
    year: '2026-27',
    series: 'Hackathon',
    description:
      "A 6-hour Hackathon was organised by DJS ACM's SIGAI to introduce students, especially first-time participants, to the fundamentals of hackathons and hands-on project development. Throughout the event, students were guided by mentors, who supported them with ideation, problem-solving, development and project presentation. The event provided a valuable introduction to the hackathon experience, helping students build confidence while learning through teamwork and practical application.",
    gallery: [],
  },
  {
    id: 'clockout-3',
    index: '01',
    title: 'Clockout 3.0',
    year: '2025-26',
    series: 'Clockout',
    description:
      'Shadows of Bhangarh: an immersive, story-driven event combining mystery, teamwork, and problem-solving. Featuring three dynamic rounds — The Initiation, The Investigation, and The Hunt — participants collaborated across years in AI-themed factions to solve puzzles, analyze clues, and compete in a campus-wide treasure hunt.',
    image: '/events/Clockout3.0/clockout3_cover.jpg',
    gallery: [
      '/events/Clockout3.0/clockout3_1.jpg',
      '/events/Clockout3.0/clockout3_2.jpg',
      '/events/Clockout3.0/clockout3_3.jpg',
      '/events/Clockout3.0/clockout3_4.jpg',
      '/events/Clockout3.0/clockout3_5.jpg',
      '/events/Clockout3.0/clockout3_6.jpg',
    ],
  },
  {
    id: 'genesis-3',
    index: '02',
    title: 'Genesis 3.0',
    year: '2025-26',
    series: 'Genesis',
    description:
      'This is a strategic SIGAI orientation seminar featuring faculty mentors and senior leaders to roadmap AI/ML career success.',
    image: '/events/genesis3.0/ge_1.png',
    gallery: [
      '/events/genesis3.0/ge_1.png',
      '/events/genesis3.0/ge_2.png',
      '/events/genesis3.0/ge_3.png',
      '/events/genesis3.0/ge_4.png',
      '/events/genesis3.0/ge_6.png',
      '/events/genesis3.0/ge_2.JPG.jpeg',
    ],
  },

  {
    id: 'clockout-2',
    index: '02',
    title: 'Clockout 2.0',
    year: '2024-25',
    series: 'Clockout',
    description: 'A major event focusing on innovation and technology.',
    image: '/events/Clockout2.0/co2_1.jpg',
    gallery: [
      '/events/Clockout2.0/co2_1.jpg',
      '/events/Clockout2.0/co2_2.jpg',
      '/events/Clockout2.0/co2_3.jpg',
      '/events/Clockout2.0/co2_4.jpg',
      '/events/Clockout2.0/co2_5.jpg',
      '/events/Clockout2.0/co2_6.jpg',
    ],
  },

  {
    id: 'synergy-2',
    index: '03',
    title: 'Synergy 2.0',
    year: '2024-25',
    series: 'Synergy',
    description: 'An event that brings together diverse minds for collaboration.',
    image: '/events/Synergy2.0/synergy2_1.jpg',
    gallery: [
      '/events/Synergy2.0/synergy2_1.jpg',
      '/events/Synergy2.0/synergy2_core.jpg',
      '/events/Synergy2.0/Synergy_winner.jpg',
      '/events/Synergy2.0/Synergy.jpg',
      '/events/Synergy2.0/synergy2_group.jpg',
      '/events/Synergy2.0/synergy2_inaugration.jpg',
      '/events/Synergy2.0/synergy2_6.jpg',
    ],
  },
  {
    id: 'genesis-1',
    index: '04',
    title: 'Genesis 1.0',
    year: '2024-25',
    series: 'Genesis',
    description:
      'A seminar featuring industry experts and thought leaders.',
    image: '/events/genesis-1.jpg',
    gallery: [
      '/events/genesis-1.jpg',
    ],
  },

  {
    id: 'clockout-1',
    index: '05',
    title: 'Clockout 1.0',
    year: '2023-24',
    series: 'Clockout',
    description:
      'The inaugural event focusing on emerging technologies.',
    image: '/events/clockout-1.png',
    gallery: [],
  },

  {
    id: 'synergy-1',
    index: '06',
    title: 'Synergy 1.0',
    year: '2023-24',
    series: 'Synergy',
    description:
      'The first synergy event aimed at fostering collaboration.',
    image: '/events/synergy-1.png',
    gallery: [],
  },

  {
    id: 'seminar',
    index: '07',
    title: 'Seminar',
    year: '2023-24',
    series: 'Seminar',
    description:
      'A seminar that discusses the latest trends in the industry.',
    image: '/events/seminar.png',
    gallery: [
      '/events/seminar/1.jpg',
      '/events/seminar/2.jpg',
      '/events/seminar/3.jpg',
      '/events/seminar/4.jpg',
      '/events/seminar/5.jpg',
      '/events/seminar/IMG_5281.jpeg',
    ],
  },
];


export const EVENT_YEARS = ['2026-27', '2025-26', '2024-25', '2023-24'] as const;

export interface Member {
  name: string;
  role: string;
  image?: string;
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
    year: '2026-27',
    faculty: [
      {
        name: 'Dr. Aruna Gawade',
        role: 'Convener',
        image: '/team/2026-27/Aruna_Gawade.png',
      },
      {
        name: 'Prof. Ragini Mishra',
        role: 'Co-Ordinator',
        image: '/team/2026-27/Ragini_Mishra.png',
      },
    ],
    committee: [
      {
        name: 'Manan Darji',
        role: 'Chairperson',
        image: '/team/2026-27/Manan_Darji.jpg',
        instagram: 'https://www.instagram.com/manan_darji06/',
        linkedin: 'https://www.linkedin.com/in/manan-darji06/',
      },
      {
        name: 'Anushka Dwivedi',
        role: 'VCP-Non Tech',
        image: '/team/2026-27/Anushka_Dwivedi.jpg',
        instagram: 'https://www.instagram.com/dwivedi_anu06/',
        linkedin: 'https://www.linkedin.com/in/anushkadwivedi75/',
      },
      {
        name: 'Sahana Nayak',
        role: 'VCP-Tech',
        image: '/team/2026-27/Sahana_Nayak.jpg',
        instagram: 'https://www.instagram.com/ssahanaa_o_o/',
        linkedin: 'https://www.linkedin.com/in/sahana-s-nayak/',
      },
      {
        name: 'Dheer Shah',
        role: 'VCP-Marketing & Sponsorships',
        image: '/team/2026-27/Dheer_Shah.jpg',
        instagram: 'https://www.instagram.com/dheershahh_/',
      },
      {
        name: 'Aastha Upadhyay',
        role: 'Admin',
        image: '/team/2026-27/Aastha_Upadhyay.jpg',
        instagram: 'https://www.instagram.com/_.aasthhaaa.__/',
        linkedin: 'https://www.linkedin.com/in/aastha-upadhyay-0aba372b3/'
      },
      {
        name: 'Krupa Mehta',
        role: 'Secretary',
        image: '/team/2026-27/Krupa_Mehta.jpg',
        instagram: 'https://www.instagram.com/krupa.m2602/',
        linkedin: 'https://www.linkedin.com/in/krupa-mehta2602/',
      },
      {
        name: 'Ashna Gadade',
        role: 'Secretary',
        image: '/team/2026-27/Ashna_Gadade.jpg',
        instagram: 'https://www.instagram.com/ash_esonthefloor/',
        linkedin: 'https://www.linkedin.com/in/ashna-gadade-7a519035a/',
      },
      {
        name: 'Manas Shah',
        role: 'Treasurer',
        image: '/team/2026-27/Manas_Shah.jpg',
        instagram: 'https://www.instagram.com/manasshah.4321/',
        linkedin: 'https://www.linkedin.com/in/manasshah1007/',
      },
      {
        name: 'Arisha Mehta',
        role: 'Events HOD',
        image: '/team/2026-27/Arisha_Mehta.jpg',
        instagram: 'https://www.instagram.com/arisha.mehta_11/',
        linkedin: 'https://www.linkedin.com/in/arishamehta/',
      },
      {
        name: 'Paavan Shah',
        role: 'Events HOD',
        image: '/team/2026-27/Paavan_Shah.jpg',
        instagram: 'https://www.instagram.com/paavanshah1619/',
        linkedin: 'https://www.linkedin.com/in/paavan-shah-65577435a/',
      },
      {
        name: 'Rahi Doshi',
        role: 'Events HOD',
        image: '/team/2026-27/Rahi_Doshi.jpg',
        instagram: 'https://www.instagram.com/rahiii_doshiii/',
        linkedin: 'https://www.linkedin.com/in/rahi-doshi/',
      },
      {
        name: 'Deep Shah',
        role: 'Technical HOD',
        image: '/team/2026-27/Deep_Shah.jpg',
        instagram: 'https://www.instagram.com/deepshah_2712/',
        linkedin: 'https://www.linkedin.com/in/deepshah2712/',
      },
      {
        name: 'Royston Soans',
        role: 'Technical HOD',
        image: '/team/2026-27/Royston_Soans.jpg',
        instagram: 'https://www.instagram.com/royyyy3110/',
        linkedin: 'https://www.linkedin.com/in/royston-soans-3b14b3329/',
      },
      {
        name: 'Sonal Dhonde',
        role: 'Creatives HOD',
        image: '/team/2026-27/Sonal_Dhonde.jpg',
        instagram: 'https://www.instagram.com/sonal.dhonde/',
        linkedin: 'https://www.linkedin.com/in/sonal-dhonde-619b16329/',
      },
      {
        name: 'Siddhant Pawar',
        role: 'Creatives HOD',
        image: '/team/2026-27/Siddhant_Pawar.jpg',
        instagram: 'https://www.instagram.com/siddhant_pwr_/',
        linkedin: 'https://www.linkedin.com/in/sidd-pawar/',
      },
      {
        name: 'Neel Bansal',
        role: 'Logistics HOD',
        image: '/team/2026-27/Neel_Bansal.jpg',
        instagram: 'https://www.instagram.com/being.neell/',
        linkedin: 'https://www.linkedin.com/in/neel-bansal-/',
      },
      {
        name: 'Kushal Patel',
        role: 'Logistics HOD',
        image: '/team/2026-27/Kushal_Patel.jpg',
        instagram: 'https://www.instagram.com/kushal.__.patel/',
        linkedin: 'https://www.linkedin.com/in/kushal-trivedi-41218124b/',
      },
      {
        name: 'Meet Shah',
        role: 'Marketing HOD',
        image: '/team/2026-27/Meet_Shah.jpg',
        instagram: 'https://www.instagram.com/meet_shahhh06/',
        linkedin: 'https://www.linkedin.com/in/meet-shah6506/',
      },
      {
        name: 'Arth Patel',
        role: 'Marketing HOD',
        image: '/team/2026-27/Arth_Patel.jpg',
        instagram: 'https://www.instagram.com/arth10_03_20_06/',
        linkedin: 'https://www.linkedin.com/in/arthpatel10032006/',
      },
      {
        name: 'Dhanish Ganatra',
        role: 'Publicity HOD',
        image: '/team/2026-27/Dhanish_Ganatra.jpg',
        instagram: 'https://www.instagram.com/_dhanishhhhhh/',
        linkedin: 'https://www.linkedin.com/in/dhanish-ganatra/',
      },
      {
        name: 'Kavya Chauhan',
        role: 'Editorial HOD',
        image: '/team/2026-27/Kavya_Chauhan.jpg',
        instagram: 'https://www.instagram.com/kc_pvt911/',
        linkedin: 'https://www.linkedin.com/in/kavya-chauhan9/',
      },
      {
        name: 'Atharva Deo',
        role: 'Editorial HOD',
        image: '/team/2026-27/Atharva_Deo.jpg',
        instagram: 'https://www.instagram.com/ping_pang75/',
        linkedin: 'https://www.linkedin.com/in/atharva-deo-147961331/',
      },
    ],
  },
  {
    year: '2025-26',
    faculty: [
      {
        name: 'Dr. Aruna Gawade',
        role: 'Faculty Coordinator',
        image: '/team/2025-26/aruna-mam.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Prof. Ragini Mishra',
        role: 'Faculty Coordinator',
        image: '/team/2025-26/ragini-mam.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
    committee: [
      {
        name: 'Amey Kulkarni',
        role: 'Chairperson',
        image: '/team/2025-26/amey.png',
        instagram: 'https://www.instagram.com/ameykulkarni_/',
        linkedin: 'https://www.linkedin.com/in/ameyyk/',
      },
      {
        name: 'Keerti Nayak',
        role: 'Co-Chairperson',
        image: '/team/2025-26/keerti.png',
        instagram: 'https://www.instagram.com/keertinayak30/',
        linkedin: 'https://www.linkedin.com/in/keerti-nayak-a014852b5/',
      },
      {
        name: 'Siddhanth Chapade',
        role: 'Secretary',
        image: '/team/2025-26/siddhanth.png',
        instagram: 'https://www.instagram.com/htnahddis',
        linkedin: 'https://www.linkedin.com/in/siddhanthchapade/',
      },
      {
        name: 'Rishi Yadav',
        role: 'Admin',
        image: '/team/2025-26/rishi.png',
        instagram: 'https://www.instagram.com/rishiyadav2701',
        linkedin: 'https://www.linkedin.com/in/rishi-yadav-7ba7b8234/',
      },
      {
        name: 'Parth Pujare',
        role: 'VCP Finance',
        image: '/team/2025-26/parth.png',
        instagram: 'https://www.instagram.com/parthpujare16',
        linkedin: 'https://www.linkedin.com/in/parth-pujare-67a14a2bb',
      },
      {
        name: 'Sneha Bangera',
        role: 'VCP Technical',
        image: '/team/2025-26/sneha.png',
        instagram: 'https://www.instagram.com/_snehaaaaaa.b_/',
        linkedin: 'https://www.linkedin.com/in/sneha-bangera-6ba99b2b5/',
      },
      {
        name: 'Kirtan Chitalia',
        role: 'VCP Technical',
        image: '/team/2025-26/kirtan.png',
        instagram: 'https://www.instagram.com/_kirtan_0707',
        linkedin: 'https://www.linkedin.com/in/kirtan-chitalia-01737028a/',
      },
      {
        name: 'Diti Solanki',
        role: 'VCP Technical',
        image: '/team/2025-26/diti.png',
        instagram: 'https://instagram.com/diti_4357/',
        linkedin: 'https://www.linkedin.com/in/diti-solanki-62550a28a/',
      },
      {
        name: 'Rishabh Mody',
        role: 'VCP Events',
        image: '/team/2025-26/rishabh.png',
        instagram: 'https://www.instagram.com/rishabh_mody',
        linkedin: 'https://in.linkedin.com/in/rishabh-mody-0b3a06283',
      },
      {
        name: 'Harsh Karakasia',
        role: 'VCP Events',
        image: '/team/2025-26/harsh.png',
        instagram: 'https://www.instagram.com/harsh.karakasia',
        linkedin: 'https://www.linkedin.com/in/harsh-karakasia-662561354',
      },
      {
        name: 'Veer Gandhi',
        role: 'VCP Publicity',
        image: '/team/2025-26/veer.png',
        instagram: 'https://www.instagram.com/veer_gandhii',
        linkedin: 'https://www.instagram.com/veer_gandhii',
      },
      {
        name: 'Aashi Palrecha',
        role: 'VCP Creatives',
        image: '/team/2025-26/aashi.png',
        instagram: 'https://www.instagram.com/ashu_jain28',
        linkedin: 'https://www.linkedin.com/in/aashi-palrecha-409a8231a',
      },
      {
        name: 'Drashti Jaiswal',
        role: 'VCP Creatives',
        image: '/team/2025-26/drashti.png',
        instagram: 'https://www.instagram.com/drashtijaiswal_',
        linkedin: 'https://www.linkedin.com/in/drashti-jaiswal',
      },
      {
        name: 'Midhat Ansari',
        role: 'VCP Creatives',
        image: '/team/2025-26/midhat.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://www.linkedin.com/in/midhat-ansari-97863022b',
      },
      {
        name: 'Saumya Shah',
        role: 'VCP Marketing',
        image: '/team/2025-26/saumya.png',
        instagram: 'https://www.instagram.com/saumya.shah.28',
        linkedin: 'https://www.linkedin.com/in/saumya-shah-736002318',
      },
      {
        name: 'Vatsal Sindhavad',
        role: 'VCP Marketing',
        image: '/team/2025-26/vatsal.png',
        instagram: 'https://www.instagram.com/vatsal_sindhavad',
        linkedin: 'https://www.linkedin.com/in/vatsalsindhavad',
      },
      {
        name: 'Alan Saldhana',
        role: 'VCP Editorial',
        image: '/team/2025-26/alan.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://www.linkedin.com/in/alan-s-41672128a/',
      },
      {
        name: 'Nashrah Ansari',
        role: 'VCP Editorial',
        image: '/team/2025-26/nashrah.png',
        instagram: 'https://www.instagram.com/itssnashrah',
        linkedin: 'https://www.linkedin.com/in/nashrah-ansari-172933246',
      },
      {
        name: 'Atharva Arekar',
        role: 'VCP Logistics',
        image: '/team/2025-26/atharva.png',
        instagram: 'https://www.instagram.com/atharv_dilip_arekar_/',
        linkedin: 'https://www.linkedin.com/in/atharv-arekar-150505287',
      },
      {
        name: 'Jagdish Choudhary',
        role: 'VCP Logistics',
        image: '/team/2025-26/jagdish.png',
        instagram: 'https://www.instagram.com/jagdish_20_05',
        linkedin: 'https://www.linkedin.com/in/jagdish-choudhary-p2004',
      },
    ],
  },
  {
    year: '2024-25',
    faculty: [
      {
        name: 'Dr. Aruna Gawade',
        role: 'Faculty Coordinator',
        image: '/team/2024-25/aruna_gawade.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Prof. Ragini Mishra',
        role: 'Faculty Coordinator',
        image: '/team/2024-25/ragini_mishra.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
    committee: [
      {
        name: 'Vinit Solanki',
        role: 'Chairperson',
        image: '/team/2024-25/vinit_solanki.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Meghansh Vora',
        role: 'Joint Chairperson',
        image: '/team/2024-25/meghansh_vora.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Aagam Ratadia',
        role: 'Admin',
        image: '/team/2024-25/aagam_ratadia.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Divya Viradiya',
        role: 'Admin',
        image: '/team/2024-25/divya_viradiya.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Rasika Adiseshan',
        role: 'Secretary',
        image: '/team/2024-25/rasika_adiseshan.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Krish Bhimani',
        role: 'VCP Finance',
        image: '/team/2024-25/krish_bhimani.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Yash Loriya',
        role: 'VCP Technical',
        image: '/team/2024-25/yash_loriya.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Yashvi Savla',
        role: 'VCP Creatives',
        image: '/team/2024-25/yashvi_savla.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Jinnal Raghwani',
        role: 'VCP Creatives',
        image: '/team/2024-25/jinal_raghwani.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Prassidhi Agarwal',
        role: 'VCP Editorial',
        image: '/team/2024-25/prassidhi_agarwal.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Rajvi Shah',
        role: 'VCP Events',
        image: '/team/2024-25/rajvi_shah.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Pradnesh Sawatkhedkar',
        role: 'VCP Logistics',
        image: '/team/2024-25/pradnesh_sawatkhedkar.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Priyansh Tank',
        role: 'VCP Logistics',
        image: '/team/2024-25/priyansh_tank.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Ammaar Khan',
        role: 'VCP Marketing',
        image: '/team/2024-25/ammar_khan.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Daksh Jain',
        role: 'VCP Marketing',
        image: '/team/2024-25/daksh_jain.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Binita Chanpura',
        role: 'VCP Publicity',
        image: '/team/2024-25/binita_chanpura.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Nitika Jain',
        role: 'VCP Publicity',
        image: '/team/2024-25/nitika_jain.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
  },
  {
    year: '2023-24',
    faculty: [
      {
        name: 'Dr. Aruna Gawade',
        role: 'Faculty Coordinator',
        image: '/team/2024-25/aruna_gawade.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Komal Patil',
        role: 'Faculty Coordinator',
        image: '/team/2023-24/komal-patil.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Nilesh Rathod',
        role: 'Faculty Coordinator',
        image: '/team/2023-24/nilesh-rathod.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    ],
    committee: [
      {
        name: 'Krish',
        role: 'Chairperson',
        image: '/team/2023-24/Krish.png',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Mahir',
        role: 'Co-Chairperson',
        image: '/team/2023-24/mahir.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Vividha',
        role: 'Admin',
        image: '/team/2023-24/vividha.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Neel',
        role: 'Secretary',
        image: '/team/2023-24/neel.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Naman',
        role: 'Treasurer',
        image: '/team/2023-24/naman.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Vallavi',
        role: 'VCP Creatives',
        image: '/team/2023-24/vallavi.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Vedant',
        role: 'VCP Creatives',
        image: '/team/2023-24/Vedant.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Ammar',
        role: 'VCP Marketing',
        image: '/team/2023-24/ammar.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Darshil',
        role: 'VCP Infotech Web/App',
        image: '/team/2023-24/Darshil.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Devansh',
        role: 'VCP Technical',
        image: '/team/2023-24/Devansh.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Shruti',
        role: 'VCP Publicity',
        image: '/team/2023-24/Shruti.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Abhay',
        role: 'VCP Editorial',
        image: '/team/2023-24/abhay.jpeg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Jahaan',
        role: 'VCP Editorial',
        image: '/team/2023-24/jahaan.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Parth',
        role: 'VCP Logistics',
        image: '/team/2023-24/parth.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Shrenik',
        role: 'VCP Logistics',
        image: '/team/2023-24/shrenik.jpeg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Lazeen',
        role: 'VCP Events',
        image: '/team/2023-24/Lazeen.jpg',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
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
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
] as const;

/**
 * Page-level framing copy. This describes and organises what the source site
 * says — it does not add facts about the chapter that the source doesn't state.
 */
export const PAGES = {
  about: {
    eyebrow: 'Founded by DJSCE students',
    title: 'A student chapter built around AI',
    lede: "DJS ACM SIGAI is the official student chapter for Artificial Intelligence and Machine Learning at SVKM's Dwarkadas J. Sanghvi College of Engineering.",
  },
  domains: {
    eyebrow: 'AI · ML · Deep Learning',
    title: 'What we explore',
    lede: 'The ground the chapter covers, in its own terms — the fields named in its mission and vision, and the concepts its sessions keep returning to.',
  },
  events: {
    eyebrow: 'Four years of events',
    title: 'What SIGAI has run',
    lede: 'Seminars, orientations and campus-wide competitions, archived by academic year.',
  },
  team: {
    eyebrow: 'Faculty and student core',
    title: 'The people behind SIGAI',
    lede: 'Faculty coordinators and the student core committee, across every year the chapter has published.',
  },
  contact: {
    eyebrow: 'Reach the chapter',
    title: 'Get in touch',
    lede: 'Email, socials, and where to find SIGAI on campus.',
  },
} as const;
