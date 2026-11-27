"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isHomeTop = pathname === "/" && !isScrolled && !mobileOpen;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        isHomeTop
          ? "border-b border-border-soft/60 bg-ivory/95 backdrop-blur-sm"
          : "border-b border-border-soft bg-white shadow-[0_2px_16px_rgba(6,75,42,0.06)]"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-dark-green focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex min-w-0 shrink-0 items-center gap-3 rounded-md py-1 focus-visible:outline-2 focus-visible:outline-orange sm:gap-3.5"
          aria-label="Notun Sokal — Return to homepage"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-xs ring-1 ring-border-soft sm:h-[72px] sm:w-[72px]">
            <Image
              src={siteConfig.assets.logo.src}
              alt={siteConfig.assets.logo.alt}
              width={72}
              height={72}
              quality={95}
              priority
              sizes="(max-width: 640px) 56px, 72px"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display truncate text-lg font-semibold tracking-tight text-dark-green sm:text-2xl">
              {siteConfig.name}
            </span>
            <span className="truncate text-[10px] font-medium tracking-wider text-muted uppercase sm:text-[11px]">
              Siliguri • Social Welfare
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {siteConfig.navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                  isActive
                    ? "bg-mint-bg font-semibold text-forest"
                    : "text-ink hover:bg-mint-bg/60 hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#donate"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-forest px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-sm transition-colors duration-150 hover:bg-dark-green"
          >
            <HeartHandshake className="h-4 w-4 text-saffron" aria-hidden="true" />
            <span>Support Our Mission</span>
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Link
            href="/#donate"
            onClick={() => setMobileOpen(false)}
            className="inline-flex min-h-[40px] items-center rounded-md bg-forest px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-dark-green sm:px-3.5"
          >
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border-soft bg-white text-dark-green transition-colors hover:bg-mint-bg"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border-soft bg-white px-4 pt-3 pb-6 shadow-md lg:hidden"
        >
          <ul className="space-y-1">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-[48px] items-center rounded-md px-3.5 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-mint-bg font-semibold text-forest"
                        : "text-ink hover:bg-mint-bg/60 hover:text-forest"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 border-t border-border-soft pt-4">
            <Link
              href="/#donate"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-forest px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-dark-green"
            >
              <HeartHandshake className="h-4 w-4 text-saffron" aria-hidden="true" />
              <span>Support Our Mission</span>
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
