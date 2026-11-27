import type {
  ApproachStage,
  CommunityProject,
  FocusArea,
  InitiativeCategory,
  InvolvementOption,
  OutreachPhoto,
  OutreachVideo,
} from "@/types";

export const missionVisionContent = {
  mission: {
    label: "Our Mission",
    statement:
      "To encourage positive social change by supporting individuals, strengthening communities, and promoting opportunities for a healthier, more educated, and empowered society.",
  },
  vision: {
    label: "Our Vision",
    statement:
      "A society where every individual has the opportunity to live with dignity, access meaningful opportunities, and contribute towards a brighter and more sustainable future.",
  },
} as const;

export const focusAreas: FocusArea[] = [
  {
    id: "community-support",
    slug: "community-support",
    title: "Community Support",
    shortTitle: "Community Support",
    summary:
      "Encouraging community participation, social inclusion, mutual support, and initiatives that strengthen local communities.",
    detailedDescription:
      "Strong neighbourhoods are built when people look out for one another. Through Community Support, Notun Sokal focuses on encouraging active civic participation, fostering social inclusion for vulnerable households, and building spaces for mutual aid and dialogue.",
    aspirationalGoals: [
      "Promote neighbourhood solidarity and inclusive community participation",
      "Encourage local mutual support networks for families facing hardship",
      "Create respectful platforms where residents can voice shared priorities",
    ],
    image: "/media/outreach/outreach-12.jpg",
    imageAlt:
      "Notun Sokal community outreach gathering with local children and families in North Bengal",
    iconName: "users",
    accentTone: "forest",
  },
  {
    id: "education-skill-development",
    slug: "education-skill-development",
    title: "Education & Skill Development",
    shortTitle: "Education & Skills",
    summary:
      "Promoting learning opportunities, knowledge sharing, and skills that can help individuals build a more independent future.",
    detailedDescription:
      "Access to foundational education and practical skills opens doors to lifelong self-reliance. Notun Sokal seeks to nurture curiosity among children, encourage youth skill-building, and support community-led learning environments by providing essential learning materials.",
    aspirationalGoals: [
      "Provide notebooks, pens, pencils, and foundational study materials to children in underserved areas",
      "Promote practical skill development that strengthens livelihood readiness",
      "Support mentoring and peer knowledge sharing across generations",
    ],
    image: "/media/outreach/outreach-05.jpg",
    imageAlt:
      "Notun Sokal volunteer handing notebooks and stationery supplies to young students during a field outreach drive",
    iconName: "book-open",
    accentTone: "orange",
  },
  {
    id: "health-wellbeing",
    slug: "health-wellbeing",
    title: "Health & Wellbeing",
    shortTitle: "Health & Wellbeing",
    summary:
      "Supporting awareness, healthy living, and initiatives that encourage the overall wellbeing of individuals and communities.",
    detailedDescription:
      "Wellbeing begins with accessible awareness and preventative care. Notun Sokal is committed to encouraging conversations around hygiene, nutrition, everyday preventive health, and community wellbeing.",
    aspirationalGoals: [
      "Raise accessible awareness around everyday hygiene, nutrition, and preventive care",
      "Encourage supportive community conversations around family and elder wellbeing",
      "Connect local awareness efforts with trusted public health guidance",
    ],
    iconName: "heart-pulse",
    accentTone: "natural",
  },
  {
    id: "sustainable-growth",
    slug: "sustainable-growth",
    title: "Sustainable Growth",
    shortTitle: "Sustainable Growth",
    summary:
      "Encouraging responsible development, environmental awareness, and community-led progress.",
    detailedDescription:
      "True progress endures only when it respects both people and the environment around them. Notun Sokal promotes environmental stewardship, mindful resource use, and thoughtful community-led development.",
    aspirationalGoals: [
      "Encourage neighbourhood greening, cleanliness, and environmental awareness",
      "Promote responsible, community-led stewardship of shared local spaces",
      "Support long-term thinking that balances social upliftment with ecological care",
    ],
    iconName: "sprout",
    accentTone: "saffron",
  },
];

export const approachStages: ApproachStage[] = [
  {
    step: "01",
    title: "Understand Community Needs.",
    description:
      "Listening closely to families, neighbourhoods, and local voices before shaping any response, ensuring efforts reflect real priorities.",
  },
  {
    step: "02",
    title: "Bring People and Resources Together.",
    description:
      "Connecting compassionate volunteers, supporters, skills, and community spaces so shared goodwill becomes coordinated capacity.",
  },
  {
    step: "03",
    title: "Encourage Participation and Action.",
    description:
      "Working alongside residents rather than speaking for them, fostering shared ownership, dignity, and collective responsibility.",
  },
  {
    step: "04",
    title: "Work Towards Sustainable Progress.",
    description:
      "Prioritising steady, lasting improvement over short-lived gestures so communities grow stronger and more self-reliant over time.",
  },
];

export const initiativeCategories: InitiativeCategory[] = [
  {
    id: "community-development",
    label: "Community Development",
    description:
      "Collaborative neighbourhood efforts focused on social inclusion, shared support, and local resilience.",
  },
  {
    id: "education-initiatives",
    label: "Education Initiatives",
    description:
      "Distributing notebooks and stationery, nurturing learning circles, and encouraging children's educational continuity.",
  },
  {
    id: "health-awareness",
    label: "Health Awareness",
    description:
      "Community conversations supporting preventive wellbeing, hygiene, nutrition, and healthy habits.",
  },
  {
    id: "social-welfare",
    label: "Social Welfare",
    description:
      "Compassionate outreach aimed at standing alongside individuals and families during times of need.",
  },
  {
    id: "environmental-responsibility",
    label: "Environmental Responsibility",
    description:
      "Greening awareness, clean neighbourhood habits, and mindful stewardship of shared surroundings.",
  },
];

export const outreachPhotos: OutreachPhoto[] = [
  {
    id: "photo-01",
    src: "/media/outreach/outreach-01.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Notun Sokal volunteer preparing stacks of notebooks for distribution in a tea-garden neighbourhood",
    caption: "Preparing bundles of notebooks ahead of distribution with local families.",
    category: "education-initiatives",
  },
  {
    id: "photo-02",
    src: "/media/outreach/outreach-02.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Children and mothers gathered beside stacks of notebooks during a Notun Sokal education drive",
    caption: "Students and mothers gathered for the community learning supplies drive.",
    category: "education-initiatives",
  },
  {
    id: "photo-03",
    src: "/media/outreach/outreach-03.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Young students standing together with parents and volunteers around stacks of exercise books",
    caption: "Community families and school-going children participating together.",
    category: "education-initiatives",
  },
  {
    id: "photo-04",
    src: "/media/outreach/outreach-04.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Wide view of local students, mothers, and volunteers with freshly unpacked notebook bundles",
    caption: "Unpacking fresh exercise books and stationery for local students.",
    category: "education-initiatives",
  },
  {
    id: "photo-05",
    src: "/media/outreach/outreach-05.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Volunteer handing notebooks directly to a young student with pencils and pens ready on the table",
    caption: "Handing notebooks, pens, and pencils directly to young learners.",
    category: "education-initiatives",
  },
  {
    id: "photo-06",
    src: "/media/outreach/outreach-06.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Volunteer distributing notebooks to children standing in an attentive queue",
    caption: "Volunteers distributing study materials to waiting students.",
    category: "education-initiatives",
  },
  {
    id: "photo-07",
    src: "/media/outreach/outreach-07.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Mothers in colourful sarees seated alongside children waiting for school supplies",
    caption: "Mothers and neighbours supporting children's education at the courtyard.",
    category: "community-development",
  },
  {
    id: "photo-08",
    src: "/media/outreach/outreach-08.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Community gathering of children and families prior to notebook distribution",
    caption: "Neighbourhood residents joining the stationery distribution programme.",
    category: "community-development",
  },
  {
    id: "photo-09",
    src: "/media/outreach/outreach-09.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Two Notun Sokal volunteers handing notebooks and blue pens to children in line",
    caption: "Volunteers distributing notebooks and writing supplies step by step.",
    category: "education-initiatives",
  },
  {
    id: "photo-10",
    src: "/media/outreach/outreach-10.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Group of children standing in front of the Notun Sokal outreach standee",
    caption: "Children gathered during a Notun Sokal community education outreach.",
    category: "community-development",
  },
  {
    id: "photo-11",
    src: "/media/outreach/outreach-11.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Volunteer addressing a circle of children during a morning community outreach",
    caption: "Engaging with local children and youth volunteers in the courtyard.",
    category: "community-development",
  },
  {
    id: "photo-12",
    src: "/media/outreach/outreach-12.jpg",
    width: 1280,
    height: 960,
    orientation: "landscape",
    alt: "Community children assembled in front of the Notun Sokal banner reading Humanity is the truest religion",
    caption: "Young participants gathered with the Notun Sokal outreach team.",
    category: "community-development",
  },
  {
    id: "photo-13",
    src: "/media/outreach/outreach-13.jpg",
    width: 960,
    height: 1280,
    orientation: "portrait",
    alt: "Youth volunteer presenting study notebooks to a young girl",
    caption: "Youth volunteers sharing learning materials with students.",
    category: "education-initiatives",
  },
  {
    id: "photo-14",
    src: "/media/outreach/outreach-14.jpg",
    width: 960,
    height: 1280,
    orientation: "portrait",
    alt: "Community volunteer gifting notebooks and pens to a young boy",
    caption: "Encouraging young learners with new notebooks and pens.",
    category: "education-initiatives",
  },
  {
    id: "photo-15",
    src: "/media/outreach/outreach-15.jpg",
    width: 960,
    height: 1280,
    orientation: "portrait",
    alt: "Notun Sokal representative kneeling warmly beside a smiling child holding books",
    caption: "Sharing smiles and study supplies during field outreach.",
    category: "community-development",
  },
  {
    id: "photo-16",
    src: "/media/outreach/outreach-16.jpg",
    width: 960,
    height: 1280,
    orientation: "portrait",
    alt: "Volunteer handing study books to a young girl during the outreach session",
    caption: "Supporting young girls' access to everyday study tools.",
    category: "education-initiatives",
  },
];

export const outreachVideos: OutreachVideo[] = [
  {
    id: "video-01",
    src: "/media/outreach/community-video-01.mp4",
    poster: "/media/outreach/outreach-11.jpg",
    title: "Voices from the Field — Reaching Remote Students",
    description:
      "A local community representative speaks with a youth volunteer during Notun Sokal's stationery distribution drive in a remote settlement.",
    summaryNote:
      "In this conversation, the local representative highlights how basic learning materials are among the greatest needs for children living in distant settlements, and expresses gratitude for volunteers who travel inward beyond main roads to encourage students.",
    orientation: "portrait",
  },
  {
    id: "video-02",
    src: "/media/outreach/community-video-02.mp4",
    poster: "/media/outreach/outreach-10.jpg",
    title: "Community Solidarity & Collaboration Message",
    description:
      "Community members and Notun Sokal representatives reflect on collaborative outreach and express appreciation to local partners (TGSF) and volunteers.",
    summaryNote:
      "Recorded alongside children and local residents, speakers share appreciation for collective effort in reaching underserved children with educational essentials and warmly welcome continued community partnerships.",
    orientation: "landscape",
  },
];

export const communityProjects: CommunityProject[] = [
  {
    id: "notebook-and-stationery-drive",
    slug: "notebook-and-stationery-distribution-drive",
    title: "Notebooks & Stationery Support for Young Learners",
    category: "education-initiatives",
    location: "Tea-Garden & Rural Neighbourhood Outreach",
    summary:
      "Volunteers distributed exercise books, pens, and pencils directly to school-going children while engaging mothers and families in a rural settlement.",
    details: [
      "Children in remote and tea-garden neighbourhoods frequently face barriers in accessing basic classroom essentials such as notebooks, pens, and pencils.",
      "During this field initiative, Notun Sokal volunteers brought bundled notebooks and writing supplies directly to families, encouraging students to stay engaged with their studies.",
      "Parents, mothers, and neighbours participated actively throughout the distribution, reinforcing shared community encouragement for every child's education.",
    ],
    image: "/media/outreach/outreach-05.jpg",
    imageAlt:
      "Notun Sokal volunteer handing notebooks to a young student with pencils and pens arranged on the table",
    status: "Documented Field Outreach",
    galleryPhotoIds: [
      "photo-01",
      "photo-02",
      "photo-03",
      "photo-04",
      "photo-05",
      "photo-06",
      "photo-09",
    ],
    videoIds: ["video-01"],
  },
  {
    id: "community-outreach-and-youth-collaboration",
    slug: "community-education-and-youth-collaboration",
    title: "Community Education Outreach & Youth Collaboration",
    category: "community-development",
    location: "Remote Settlement Community Courtyard",
    summary:
      "Notun Sokal members and local youth volunteers worked together with community representatives to distribute study supplies and hold an open conversation on children's learning needs.",
    details: [
      "Working alongside local representatives and youth volunteers, Notun Sokal visited a settlement situated away from main transit routes to connect with children and families.",
      "Students received notebooks and writing tools in person, while community speakers shared firsthand insights about the everyday importance of sustained educational encouragement.",
      "The gathering reflected Notun Sokal's guiding belief that lasting progress begins when local voices, youth energy, and community care come together.",
    ],
    image: "/media/outreach/outreach-12.jpg",
    imageAlt:
      "Children gathered with Notun Sokal team members in front of the outreach standee",
    status: "Documented Field Outreach",
    galleryPhotoIds: [
      "photo-07",
      "photo-08",
      "photo-10",
      "photo-11",
      "photo-12",
      "photo-13",
      "photo-14",
      "photo-15",
      "photo-16",
    ],
    videoIds: ["video-02"],
  },
];

export const homeInvolvementOptions: InvolvementOption[] = [
  {
    id: "volunteer",
    title: "Volunteer with Us",
    description:
      "Offer your time, energy, and presence to help organise community outreach, learning support, and local awareness activities.",
    ctaLabel: "Join as a Volunteer",
    ctaHref: "/get-involved#volunteer",
    iconName: "hand-helping",
  },
  {
    id: "support-initiatives",
    title: "Support Our Initiatives",
    description:
      "Stand behind meaningful community welfare efforts with financial contributions or essential material support.",
    ctaLabel: "Support the Mission",
    ctaHref: "/#donate",
    iconName: "heart",
  },
  {
    id: "collaborate",
    title: "Collaborate With Us",
    description:
      "Partner with Notun Sokal as a civic group, institution, educator, or local organisation to broaden positive impact.",
    ctaLabel: "Explore Collaboration",
    ctaHref: "/contact?subject=Collaboration+Enquiry",
    iconName: "handshake",
  },
  {
    id: "share-skills",
    title: "Share Your Skills",
    description:
      "Contribute specialised knowledge in teaching, healthcare awareness, mentoring, design, or community organisation.",
    ctaLabel: "Offer Your Expertise",
    ctaHref: "/get-involved#share-skills",
    iconName: "lightbulb",
  },
  {
    id: "spread-awareness",
    title: "Spread Awareness",
    description:
      "Help share Notun Sokal's mission with neighbours, colleagues, and friends who care about building a stronger society.",
    ctaLabel: "Connect With Us",
    ctaHref: "/contact?subject=Awareness+%26+Community+Outreach",
    iconName: "megaphone",
  },
];

export const coreValues = [
  {
    title: "Human Dignity First",
    description:
      "Every person deserves to be met with respect, empathy, and genuine listening—never condescension.",
  },
  {
    title: "Integrity & Transparency",
    description:
      "We believe trust is earned through honesty, clear communication, and accurate representation of our work.",
  },
  {
    title: "Community Ownership",
    description:
      "Meaningful change endures when local residents participate as partners in shaping their own progress.",
  },
  {
    title: "Steady Stewardship",
    description:
      "We value consistent, thoughtful action and sustainable growth over fleeting publicity.",
  },
] as const;

export const aboutStoryContent = {
  // Replace or expand this section with verified organisational history when ready.
  hasVerifiedHistory: false,
  heading: "Our Story",
  placeholderNotice:
    "Verified organisational founding dates and governance records are being compiled for publication.",
  paragraphs: [
    "Notun Sokal—meaning a \"New Morning\"—takes its name from a simple, enduring conviction: every community deserves the promise of a fresh start rooted in dignity, mutual care, and shared opportunity.",
    "Operating from Bhaghajatin Colony in Pradhan Nagar, Siliguri, Notun Sokal brings together volunteers, families, and local collaborators to support young learners with study materials and encourage neighbourhood solidarity.",
    "As our documented records, community timelines, and field initiatives grow, we share genuine photographs, community conversations, and transparent updates across our website.",
  ],
} as const;
