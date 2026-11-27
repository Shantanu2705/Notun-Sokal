import type { NavItem } from "@/types";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://notunsokal.org"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Notun Sokal",
  tagline: "Community Welfare, Education & Sustainable Development",
  description:
    "Notun Sokal is a social welfare organisation based in Siliguri, India, dedicated to community support, education and skill development, health awareness, and sustainable growth.",
  locale: "en_IN",
  language: "en",
  contact: {
    phoneDisplay: "+91 80014 11222",
    phoneHref: "tel:+918001411222",
    email: "tenuramroy788@gmail.com",
    emailHref: "mailto:tenuramroy788@gmail.com",
    addressLine1: "Bhaghajatin Colony, Ward No. 45/2",
    addressLine2: "Pradhan Nagar, Siliguri, India, 734003",
    fullAddress:
      "Bhaghajatin Colony, Ward No. 45/2, Pradhan Nagar, Siliguri, India, 734003.",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Bhaghajatin+Colony,+Pradhan+Nagar,+Siliguri,+734003,+India&output=embed",
    mapDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bhaghajatin+Colony,+Ward+No.+45/2,+Pradhan+Nagar,+Siliguri,+India,+734003",
  },
  assets: {
    logo: {
      src: "/images/notun-sokal-logo.jpg",
      width: 1254,
      height: 1254,
      alt: "Notun Sokal official organisation emblem featuring a rising golden sun, sheltering green leaves, and two figures extending a helping hand",
    },
    donationQr: {
      src: "/images/donation-qr.jpg",
      width: 848,
      height: 824,
      alt: "UPI payment QR code provided for Notun Sokal donations. Verify the recipient name Tenu Roy in your UPI application before completing payment.",
      listedPayeeName: "Tenu Roy",
      isVerifiedOfficialAccount: false,
      verificationNotice:
        "Before confirming any UPI payment, verify the recipient name shown in your UPI app (currently listed as Tenu Roy). Please contact us directly at +91 80014 11222 or tenuramroy788@gmail.com if you would like to confirm payment routing prior to donating.",
    },
    bankTransfer: {
      accountNumber: "35740110008171",
      ifscCode: "UCBA0003574",
      supportedModes: "NEFT / IMPS / RTGS",
      note: "Please verify the Account Number and NEFT IFSC Code carefully before initiating a bank transfer, and reach out to us at +91 80014 11222 or tenuramroy788@gmail.com if you need receipt confirmation.",
    },
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Focus Areas", href: "/focus-areas" },
    { label: "Our Work", href: "/our-work" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Accessibility", href: "/privacy-policy#accessibility" },
  ] satisfies NavItem[],
  // Only add genuine, verified social profile URLs here when available.
  socialLinks: [] as { label: string; href: string }[],
} as const;
