import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline-light" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
}

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-forest text-white hover:bg-dark-green border border-forest shadow-sm",
  secondary:
    "bg-white text-dark-green border border-forest/25 hover:border-forest hover:bg-mint-bg",
  accent:
    "bg-orange text-white hover:bg-[#d96809] border border-orange shadow-sm",
  "outline-light":
    "bg-transparent text-white border border-white/50 hover:bg-white/10 hover:border-white",
  ghost:
    "bg-transparent text-forest hover:text-dark-green hover:bg-mint-bg border border-transparent",
};

const sizeClasses: Record<NonNullable<ButtonLinkProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
