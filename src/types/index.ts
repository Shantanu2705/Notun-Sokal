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
  image: string;
  imageAlt: string;
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

export interface CommunityProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  image: string;
  imageAlt: string;
  status: string;
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
