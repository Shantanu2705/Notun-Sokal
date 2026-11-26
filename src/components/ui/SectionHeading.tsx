import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  children,
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`${isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase ${
            isDark ? "text-saffron" : "text-forest"
          }`}
        >
          <span
            aria-hidden="true"
            className={`inline-block h-1.5 w-5 rounded-full ${
              isDark ? "bg-saffron" : "bg-orange"
            }`}
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl leading-[1.18] font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          isDark ? "text-white" : "text-dark-green"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-white/85" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
