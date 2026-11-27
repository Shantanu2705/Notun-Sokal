import { ArrowRight, Handshake } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CollaborationBanner() {
  return (
    <section className="border-b border-border-soft bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-7 rounded-lg border border-border-soft bg-mint-bg p-6 sm:gap-8 sm:p-12 lg:grid-cols-12 lg:p-14">
          <div className="lg:col-span-8">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-forest uppercase">
              <Handshake className="h-4 w-4 text-orange" aria-hidden="true" />
              <span>Shared Action &amp; Partnerships</span>
            </p>
            <h2 className="font-display text-3xl leading-[1.18] font-semibold text-dark-green sm:text-4xl">
              Together, We Can Make a Difference That Lasts.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink sm:text-lg">
              Positive change is never the effort of one person alone. We invite
              individuals, businesses, institutions, volunteers, and
              organisations to join hands with Notun Sokal. Whether through your
              time, expertise, resources, or partnership, your involvement can
              help turn shared compassion into meaningful action.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <ButtonLink
              href="/contact?subject=Collaboration+Enquiry"
              variant="primary"
              size="lg"
            >
              <span>Let&apos;s Collaborate</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
