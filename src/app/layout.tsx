import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { practice } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.downtowndental.biz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Downtown Dental | Family Dentistry in Jamestown, ND",
    template: "%s | Downtown Dental",
  },
  description:
    "Our experienced dentists, Dr. Alissa Hanson, Dr. Whitney Bruins, Dr. Kelly Odden and Dr. Kali Anderson provide top-notch dental care for families and people of all ages from Jamestown and surrounding North Dakota communities.",
  keywords: [
    "dentist Jamestown ND",
    "family dentist Jamestown",
    "Downtown Dental",
    "dental implants Jamestown",
    "same day crowns Jamestown",
    "dental care North Dakota",
  ],
  authors: [{ name: "Downtown Dental" }],
  creator: "Downtown Dental",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Downtown Dental",
    title: "Downtown Dental | Family Dentistry in Jamestown, ND",
    description:
      "Experienced dentists providing top-notch dental care for families and people of all ages from Jamestown and surrounding North Dakota communities.",
    images: [
      {
        url: "/images/team-2026.jpg",
        width: 1600,
        height: 1171,
        alt: "The Downtown Dental team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Downtown Dental | Family Dentistry in Jamestown, ND",
    description:
      "Family-friendly dentistry in Jamestown, North Dakota. Four dentists, one warm and welcoming practice.",
    images: ["/images/team-2026.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d2f31",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: practice.name,
  description:
    "Family-friendly dental practice in Jamestown, North Dakota, offering preventive, restorative, and comfort-focused dental care.",
  url: siteUrl,
  telephone: practice.phone,
  faxNumber: practice.fax,
  email: practice.email,
  image: `${siteUrl}/images/team-2026.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: practice.address.street,
    addressLocality: practice.address.city,
    addressRegion: practice.address.state,
    postalCode: practice.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: [practice.facebook],
  areaServed: "Jamestown, ND",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
