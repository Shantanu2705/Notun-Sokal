import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-green bg-deep-pine text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Official Logo & Short Description */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 rounded-md focus-visible:outline-2 focus-visible:outline-saffron"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1">
                <Image
                  src={siteConfig.assets.logo.src}
                  alt={siteConfig.assets.logo.alt}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <span className="font-display block text-xl font-semibold text-white">
                  {siteConfig.name}
                </span>
                <span className="block text-xs tracking-wider text-saffron uppercase">
                  Siliguri • India
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">
              A social welfare organisation committed to nurturing hope,
              strengthening community support, promoting education and
              wellbeing, and encouraging sustainable progress.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-saffron uppercase">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.navigation
                .filter((item) => item.href !== "/contact")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/85 transition-colors hover:text-saffron"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="lg:col-span-4">
            <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-saffron uppercase">
              Get In Touch
            </h2>
            <ul className="mt-4 space-y-3.5 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-leaf"
                  aria-hidden="true"
                />
                <a
                  href={siteConfig.contact.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-leaf"
                  aria-hidden="true"
                />
                <a
                  href={siteConfig.contact.emailHref}
                  className="break-all transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-leaf"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed">
                  {siteConfig.contact.fullAddress}
                </address>
              </li>
            </ul>
          </div>

          {/* Column 4: Take Action */}
          <div className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-saffron uppercase">
              Take Action
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#donate"
                  className="text-white/85 transition-colors hover:text-saffron"
                >
                  Support Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#volunteer"
                  className="text-white/85 transition-colors hover:text-saffron"
                >
                  Volunteer With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?subject=Collaboration+Enquiry"
                  className="text-white/85 transition-colors hover:text-saffron"
                >
                  Collaborate With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/85 transition-colors hover:text-saffron"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {siteConfig.legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
