import generated from "./pages-generated.json";
import glossaryRaw from "./glossary.json";
import privacyRaw from "./privacy.json";
import type { ContentBlock } from "./treatments";

export type Section = { heading: string | null; blocks: ContentBlock[] };
export type RelatedArticle = {
  title: string;
  href: string;
  excerpt: string;
};

type GeneratedPages = {
  faq: { q: string; a: string }[];
  commonProblems: { title: string; text: string }[];
  emergencies: { title: string; text: string }[];
  brushing: Section[];
  firstVisit: ContentBlock[];
  officePolicies: Section[];
  financial: string[];
  toothDecay: Section[];
  toothDecayArticles: RelatedArticle[];
};

const generatedPages = generated as GeneratedPages;

export const faq = generatedPages.faq.map((item) => ({
  question: item.q,
  answer: item.a.replace(/^A\.\s*/, ""),
}));

export const commonProblems = generatedPages.commonProblems;
export const emergencyCare = generatedPages.emergencies;
export const brushingSections = generatedPages.brushing;
export const firstVisit = generatedPages.firstVisit;
export const officePolicies = generatedPages.officePolicies.map((section) =>
  section.heading === "Office Hours"
    ? {
        ...section,
        blocks: [
          {
            type: "p" as const,
            text: "Monday – Thursday: 8:00 a.m. – 5:00 p.m.",
          },
          { type: "p" as const, text: "Friday: 8:00 a.m. – 2:00 p.m." },
        ],
      }
    : section,
);
export const financial = generatedPages.financial;
export const toothDecay = generatedPages.toothDecay;
export const toothDecayArticles = generatedPages.toothDecayArticles;

export type GlossaryTerm = {
  letter: string;
  term: string;
  definition: string;
};

export const glossary = glossaryRaw as GlossaryTerm[];

export type PrivacyListItem = {
  text: string;
  children?: PrivacyBlock[];
};

export type PrivacyBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: PrivacyListItem[] };

export type PrivacySection = { heading: string | null; blocks: PrivacyBlock[] };
export const privacySections = privacyRaw as PrivacySection[];

export const relatedLinks = [
  {
    name: "American Dental Association",
    href: "https://www.ada.org/",
    description:
      "The ADA is the largest professional organization of dental professionals, and a great source of information on dental and oral health topics.",
    short: "ADA",
  },
  {
    name: "Academy of General Dentistry",
    href: "https://www.agd.org/",
    description:
      "The AGD is an organization of general dentists dedicated to continuing education and reliable consumer information.",
    short: "AGD",
  },
  {
    name: "American Academy of Implant Dentistry",
    href: "https://www.aaid-implant.org/",
    description:
      "The AAID has advanced the standard of care for comprehensive implant dentistry since 1951.",
    short: "AAID",
  },
  {
    name: "American Academy of Cosmetic Dentistry",
    href: "https://www.aacd.com/",
    description:
      "The AACD is the world's largest cosmetic dental membership organization.",
    short: "AACD",
  },
  {
    name: "CareCredit",
    href: "https://www.carecredit.com/",
    description:
      "CareCredit offers healthcare patient payment plans for treatments and procedures your insurance doesn't cover.",
    short: "CareCredit",
  },
  {
    name: "ADA Section 1557",
    href: "https://www.ada.org/",
    description:
      "ADA Section 1557 law mandates providers provide free interpreting services for non-English speaking patients.",
    short: "1557",
  },
] as const;

export const commonProblemIcons = [
  "ScanSearch",
  "Thermometer",
  "HeartPulse",
  "Wind",
  "CircleDot",
  "AlignHorizontalSpaceAround",
] as const;

export const careSteps = [
  {
    number: "01",
    title: "Paperwork, without the pressure",
    text: "When you arrive for your first visit, plan to complete insurance and health information forms so we can begin your dental treatment. If you'd like to fill them out beforehand, share your email address with us and we can send them over.",
  },
  {
    number: "02",
    title: "A one-hour conversation and exam",
    text: "Your initial exam lasts approximately one hour. It is a chance for us to get acquainted, learn about your goals, and take a close look at what is happening. Generally, X-rays are taken so your doctor can examine jaw structure, tooth position, and decay.",
  },
  {
    number: "03",
    title: "Clean, clear next steps",
    text: "Oral hygiene instructions are provided along with practical suggestions for caring for your teeth. In most cases we also clean your teeth during this visit and give you an evaluation outlining any existing problems and proposed treatment.",
  },
  {
    number: "04",
    title: "A partnership, not a pitch",
    text: "Good dental care begins with open communication. We promise to speak candidly about symptoms, our diagnosis, alternative treatments, and our recommendations — so you can make informed decisions with confidence.",
  },
] as const;
