import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  tone?: "mint" | "cream";
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  tone = "mint",
}: PageHeaderProps) {
  const bgClass = tone === "cream" ? "bg-cream" : "bg-mint-bg";

  return (
    <section
      className={`border-b border-border-soft ${bgClass} py-10 sm:py-16 lg:py-20`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted sm:text-sm">
            <li>
              <Link href="/" className="transition-colors hover:text-forest">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight
                  className="h-3.5 w-3.5 text-muted/70"
                  aria-hidden="true"
                />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-forest"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-dark-green" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-5 rounded-full bg-orange"
          />
          {eyebrow}
        </p>

        <h1 className="font-display max-w-3xl text-3xl leading-[1.14] font-semibold tracking-tight text-dark-green sm:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
