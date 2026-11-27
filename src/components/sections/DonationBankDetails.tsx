"use client";

import { useState } from "react";
import { Check, Copy, Landmark } from "lucide-react";
import { siteConfig } from "@/config/site";

export function DonationBankDetails() {
  const [copiedField, setCopiedField] = useState<"account" | "ifsc" | null>(
    null
  );

  const { accountNumber, ifscCode, supportedModes, note } =
    siteConfig.assets.bankTransfer;

  async function handleCopy(value: string, field: "account" | "ifsc") {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2000);
    } catch {
      // Clipboard API may be blocked in restricted contexts; value remains selectable.
    }
  }

  return (
    <div className="mt-6 rounded-lg border border-forest/25 bg-white p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-soft pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-mint-bg text-forest">
            <Landmark className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-dark-green">
              Direct Bank Transfer ({supportedModes})
            </h3>
            <p className="text-xs text-muted">
              Transfer directly via internet or mobile banking
            </p>
          </div>
        </div>
        <span className="rounded bg-mint-bg px-2.5 py-1 text-[11px] font-semibold tracking-wide text-forest uppercase">
          Bank Transfer
        </span>
      </div>

      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-md border border-border-soft bg-ivory/70 p-4">
          <dt className="text-xs font-semibold tracking-wider text-muted uppercase">
            Account Number
          </dt>
          <dd className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-base font-bold tracking-wide break-all text-dark-green sm:text-lg">
              {accountNumber}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(accountNumber, "account")}
              aria-label="Copy bank account number"
              className="inline-flex min-h-[36px] shrink-0 items-center gap-1 rounded border border-border-soft bg-white px-3 py-1.5 text-xs font-semibold text-forest transition-colors hover:border-forest hover:bg-mint-bg"
            >
              {copiedField === "account" ? (
                <>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </dd>
        </div>

        <div className="rounded-md border border-border-soft bg-ivory/70 p-4">
          <dt className="text-xs font-semibold tracking-wider text-muted uppercase">
            NEFT IFS Code
          </dt>
          <dd className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-base font-bold tracking-wide break-all text-dark-green sm:text-lg">
              {ifscCode}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(ifscCode, "ifsc")}
              aria-label="Copy NEFT IFSC code"
              className="inline-flex min-h-[36px] shrink-0 items-center gap-1 rounded border border-border-soft bg-white px-3 py-1.5 text-xs font-semibold text-forest transition-colors hover:border-forest hover:bg-mint-bg"
            >
              {copiedField === "ifsc" ? (
                <>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </dd>
        </div>
      </dl>

      <p className="mt-4 text-xs leading-relaxed text-muted">{note}</p>
    </div>
  );
}
