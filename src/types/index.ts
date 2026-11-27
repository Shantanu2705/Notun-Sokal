export interface NavItem {
  label: string;
  href: string;
}

export interface FocusArea {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  detailedDescription: string;
  aspirationalGoals: string[];
  image?: string;
  imageAlt?: string;
  iconName: "users" | "book-open" | "heart-pulse" | "sprout";
  accentTone: "forest" | "orange" | "natural" | "saffron";
}

export interface ApproachStage {
  step: string;
  title: string;
  description: string;
}

export interface InitiativeCategory {
  id: string;
  label: string;
  description: string;
}

export interface OutreachPhoto {
  id: string;
  src: string;
  width: number;
  height: number;
  orientation: "landscape" | "portrait";
  alt: string;
  caption: string;
  category: "education-initiatives" | "community-development";
}

export interface OutreachVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  description: string;
  summaryNote: string;
  orientation: "landscape" | "portrait";
}

export interface CommunityProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  details: string[];
  image: string;
  imageAlt: string;
  status: string;
  galleryPhotoIds: string[];
  videoIds?: string[];
}

export interface InvolvementOption {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  iconName: "hand-helping" | "heart" | "handshake" | "lightbulb" | "megaphone" | "building";
}

export interface ContactSubmissionPayload {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType?: string;
  website?: string;
}
