import { ArrowLeft, Home } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center bg-ivory py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-orange uppercase">
          Page Not Found • 404
        </p>
        <h1 className="font-display mt-4 text-4xl font-semibold text-dark-green sm:text-5xl">
          We Could Not Find That Page.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          The page you are looking for may have moved or the address may contain
          a typo. You can return to the Notun Sokal homepage or reach out to us
          directly.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" variant="primary" size="lg">
            <Home className="h-4 w-4" aria-hidden="true" />
            <span>Return to Homepage</span>
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Contact Notun Sokal</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
