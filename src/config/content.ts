import type {
  ApproachStage,
  CommunityProject,
  FocusArea,
  InitiativeCategory,
  InvolvementOption,
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
    image: "/images/focus-community.jpg",
    imageAlt:
      "Illustrative photograph of local neighbours and volunteers gathered outdoors in conversation for community participation",
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
      "Access to foundational education and practical skills opens doors to lifelong self-reliance. Notun Sokal seeks to nurture curiosity among children, encourage youth skill-building, and support community-led learning environments.",
    aspirationalGoals: [
      "Encourage foundational literacy, study support, and learning continuity",
      "Promote practical skill development that strengthens livelihood readiness",
      "Support mentoring and peer knowledge sharing across generations",
    ],
    image: "/images/focus-education.jpg",
    imageAlt:
      "Illustrative photograph of learners and a mentor sharing books and practical skills in a sunlit community room",
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
    image: "/images/focus-health.jpg",
    imageAlt:
      "Illustrative photograph of an outdoor community health and hygiene awareness conversation in morning light",
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
    image: "/images/focus-sustainability.jpg",
    imageAlt:
      "Illustrative photograph of community volunteers planting young green saplings together in morning sunlight",
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
      "Learning circles, study encouragement, and practical skill-sharing opportunities for young people and adults.",
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

/**
 * Verified project records should be added here as documented activities
 * and authentic field photography become available. Leave empty until verified
 * records are provided—never populate with fictional projects or metrics.
 */
export const communityProjects: CommunityProject[] = [];

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
    "Verified organisational founding details and milestone records are being compiled for publication.",
  paragraphs: [
    "Notun Sokal—meaning a \"New Morning\"—takes its name from a simple, enduring conviction: every community deserves the promise of a fresh start rooted in dignity, mutual care, and shared opportunity.",
    "Operating from Bhaghajatin Colony in Pradhan Nagar, Siliguri, Notun Sokal is shaped around four interconnected pillars: Community Support, Education & Skill Development, Health & Wellbeing, and Sustainable Growth.",
    "As our documented records, community timelines, and field initiatives are formally archived, this space will be updated with verified milestones, partner stories, and transparent progress reports.",
  ],
} as const;
