import { ArrowRight, HeartHandshake } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-dark-green py-20 text-white lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-leaf via-saffron to-orange"
      />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] text-saffron uppercase">
          <HeartHandshake className="h-4 w-4" aria-hidden="true" />
          <span>Walk With Notun Sokal</span>
        </p>
        <h2 className="font-display text-3xl leading-[1.16] font-semibold text-white sm:text-4xl lg:text-5xl">
          Be the Reason Someone Believes in Tomorrow.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          One act of kindness can inspire another. Join Notun Sokal in building
          a more supportive, empowered, and hopeful community.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/#donate" variant="accent" size="lg">
            <span>Support Our Mission</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline-light" size="lg">
            <span>Contact Us</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
