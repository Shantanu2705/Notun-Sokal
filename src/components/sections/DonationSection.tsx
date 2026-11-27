import Image from "next/image";
import { Mail, Phone, QrCode, ShieldAlert, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DonationBankDetails } from "@/components/sections/DonationBankDetails";

export function DonationSection() {
  return (
    <section
      id="donate"
      aria-labelledby="donation-heading"
      className="scroll-mt-24 border-y border-border-soft bg-cream py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Copy, Bank Transfer & Verification Details */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Support Our Mission"
              title="Your Kindness Can Help Build Someone's Tomorrow."
            />
            <p id="donation-heading" className="sr-only">
              Donate to support Notun Sokal
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink sm:text-lg">
              Every meaningful change begins with someone who chooses to care.
              Your contribution, whether big or small, can help create
              opportunities, strengthen communities, and bring hope to
              individuals who need support. Stand with Notun Sokal and become a
              part of a future built on compassion, dignity, and collective
              progress.
            </p>

            {/* Direct Bank Transfer Card (NEFT / IMPS / RTGS) */}
            <DonationBankDetails />

            {/* Step-by-step UPI Instructions */}
            <div className="mt-6 rounded-lg border border-border-soft bg-white p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-dark-green">
                How to Contribute via UPI QR Code
              </h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-ink sm:text-base">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-bg text-xs font-bold text-forest">
                    1
                  </span>
                  <span>
                    Open any UPI-enabled payment app on your smartphone (Google
                    Pay, PhonePe, Paytm, BHIM, or your bank&apos;s UPI app).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-bg text-xs font-bold text-forest">
                    2
                  </span>
                  <span>
                    Scan the payment QR code displayed on this page without
                    cropping or altering the code.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-bg text-xs font-bold text-forest">
                    3
                  </span>
                  <span>
                    <strong>Verify the recipient details</strong> shown inside
                    your UPI app before entering an amount or approving the
                    transfer.
                  </span>
                </li>
              </ol>

              {/* Mandatory Recipient Verification Notice */}
              <div
                role="note"
                className="mt-6 flex items-start gap-3 rounded-md border border-saffron/60 bg-cream p-4 text-sm leading-relaxed text-ink"
              >
                <ShieldAlert
                  className="mt-0.5 h-5 w-5 shrink-0 text-orange"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-dark-green">
                    Payment Recipient Verification Notice
                  </p>
                  <p className="mt-1 text-muted">
                    {siteConfig.assets.donationQr.verificationNotice}
                  </p>
                </div>
              </div>
            </div>

            {/* Queries & Alternative Collaboration */}
            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5 text-sm">
                <p className="font-semibold text-dark-green">
                  Questions before contributing?
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-muted">
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="inline-flex items-center gap-1.5 font-medium text-forest hover:underline"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={siteConfig.contact.emailHref}
                    className="inline-flex items-center gap-1.5 font-medium text-forest hover:underline"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>
              </div>

              <ButtonLink
                href="/contact?subject=Collaboration+and+Partnership+Enquiry"
                variant="secondary"
              >
                <span>Collaborate Instead</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>

          {/* Official QR Card */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-border-soft bg-white p-6 shadow-[0_10px_30px_rgba(6,75,42,0.07)] sm:p-8">
              <div className="flex items-center justify-between border-b border-border-soft pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-mint-bg text-forest">
                    <QrCode className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-dark-green">
                      Scan to Contribute via UPI
                    </p>
                    <p className="text-xs text-muted">
                      Verify recipient before paying
                    </p>
                  </div>
                </div>
                <span className="rounded bg-mint-bg px-2.5 py-1 text-[11px] font-semibold tracking-wide text-forest uppercase">
                  UPI QR
                </span>
              </div>

              {/* Generous quiet zone around the exact uncropped, unedited QR image */}
              <div className="mt-6 flex justify-center rounded-md border border-border-soft bg-white p-5 sm:p-6">
                <div className="w-full max-w-[272px]">
                  <Image
                    src={siteConfig.assets.donationQr.src}
                    alt={siteConfig.assets.donationQr.alt}
                    width={siteConfig.assets.donationQr.width}
                    height={siteConfig.assets.donationQr.height}
                    unoptimized
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-md bg-ivory p-4 text-center text-xs leading-relaxed text-muted">
                <p>
                  UPI Payee Name in QR:{" "}
                  <strong className="font-semibold text-dark-green">
                    {siteConfig.assets.donationQr.listedPayeeName}
                  </strong>
                </p>
                <p className="mt-1">
                  Confirm the recipient name in your payment app before sending
                  funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
