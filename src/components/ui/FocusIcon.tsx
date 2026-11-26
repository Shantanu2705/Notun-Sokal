import {
  BookOpen,
  Building2,
  HandHelping,
  Handshake,
  Heart,
  HeartPulse,
  Lightbulb,
  Megaphone,
  Sprout,
  Users,
} from "lucide-react";

type IconKey =
  | "users"
  | "book-open"
  | "heart-pulse"
  | "sprout"
  | "hand-helping"
  | "heart"
  | "handshake"
  | "lightbulb"
  | "megaphone"
  | "building";

const iconMap = {
  users: Users,
  "book-open": BookOpen,
  "heart-pulse": HeartPulse,
  sprout: Sprout,
  "hand-helping": HandHelping,
  heart: Heart,
  handshake: Handshake,
  lightbulb: Lightbulb,
  megaphone: Megaphone,
  building: Building2,
} as const;

export function FocusIcon({
  name,
  className = "h-5 w-5",
}: {
  name: IconKey;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} aria-hidden="true" />;
}
