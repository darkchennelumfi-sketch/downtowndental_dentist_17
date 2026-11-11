import rawTreatments from "./treatments.json";

export type ListItem = string | { label?: string; text: string };

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: ListItem[] };

export type TreatmentSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type RelatedArticle = {
  title: string;
  href: string;
  image: string;
  excerpt: string;
};

type RawTreatment = {
  slug: string;
  hero: { src: string; alt: string } | null;
  intro: ContentBlock[];
  sections: TreatmentSection[];
  articles: RelatedArticle[];
};

export type TreatmentCategory =
  | "Preventive"
  | "Restorative"
  | "Comfort & Function"
  | "Diagnostics"
  | "Emergency";

export type Treatment = RawTreatment & {
  title: string;
  shortTitle: string;
  teaser: string;
  description: string;
  category: TreatmentCategory;
  image: string;
  imageAlt: string;
  highlights: string[];
};

const raw = rawTreatments as RawTreatment[];

const details: Record<
  string,
  {
    title: string;
    shortTitle?: string;
    teaser: string;
    description: string;
    category: TreatmentCategory;
    image: string;
    imageAlt: string;
    highlights: string[];
  }
> = {
  "crowns-and-bridgework": {
    title: "Crowns & Bridgework",
    shortTitle: "Crowns & Bridges",
    teaser:
      "Same-day CEREC crowns, crafted and placed in one visit — plus bridges that restore what's missing.",
    description:
      "A crown protects a damaged, decayed, or vulnerable tooth. A bridge fills the space left by a missing tooth. Together, they bring strength, shape, and confidence back to your smile.",
    category: "Restorative",
    image: "/images/cerec.jpg",
    imageAlt: "CEREC same-day crown technology at Downtown Dental",
    highlights: [
      "Same-day crowns with our CEREC system",
      "No unpleasant impression material",
      "No temporary crown or follow-up appointment",
    ],
  },
  "dental-implants": {
    title: "Dental Implants",
    shortTitle: "Implants",
    teaser:
      "A permanent, natural-looking replacement for a missing tooth — and the bone that supports it.",
    description:
      "Dental implants replace the root of a missing tooth with a small titanium post, topped by a lifelike crown. It is one of the longest-lasting ways to restore a smile.",
    category: "Restorative",
    image: "/images/dental-implant-anatomy.jpg",
    imageAlt: "Illustration of a dental implant replacing a missing tooth",
    highlights: [
      "Replaces the tooth root, not just the crown",
      "Helps preserve supporting bone",
      "Options for one tooth, several teeth, or full arches",
    ],
  },
  "dental-sealants": {
    title: "Dental Sealants",
    shortTitle: "Sealants",
    teaser:
      "A quiet, painless shield for the grooves where cavities most often begin.",
    description:
      "The chewing surfaces of back teeth are full of tiny pits and fissures that trap food and bacteria. A sealant fills those grooves with a thin, protective resin.",
    category: "Preventive",
    image: "/images/toothbrush-cleaning-teeth.jpg",
    imageAlt: "A dental professional helping a child brush their teeth",
    highlights: [
      "Painless — no numbing required",
      "Designed for the chewing surfaces of back teeth",
      "Can last up to 10 years with good care",
    ],
  },
  "digital-x-rays": {
    title: "Digital X-Rays",
    shortTitle: "Digital X-Rays",
    teaser:
      "Sharper images, instant results, and up to 90% less radiation than traditional film.",
    description:
      "Digital radiography lets us see what the naked eye cannot — early decay, gum disease, abscesses, and other concerns — with greater comfort and far less waiting.",
    category: "Diagnostics",
    image: "/images/digital-x-rays.jpg",
    imageAlt: "A digital dental x-ray displayed on a computer screen",
    highlights: [
      "Up to 90% less radiation exposure",
      "Images appear instantly on screen",
      "Easier to enlarge, compare, share, and store",
    ],
  },
  fillings: {
    title: "Fillings",
    shortTitle: "Fillings",
    teaser:
      "When decay needs attention, we restore the tooth with a filling chosen for strength, fit, and a natural look.",
    description:
      "A filling seals the small hole left by decay and keeps the infection from spreading deeper into the tooth. We offer both metal and tooth-colored options.",
    category: "Restorative",
    image: "/images/cavity.jpg",
    imageAlt: "Illustration of tooth decay and a cavity",
    highlights: [
      "Metal and tooth-colored materials",
      "Local anesthesia for comfort",
      "A clear conversation about every option",
    ],
  },
  "intra-oral-camera": {
    title: "Intra-Oral Camera",
    shortTitle: "Intra-Oral Camera",
    teaser:
      "See what we see — a clear, magnified view of your smile, in real time.",
    description:
      "A small handheld camera lets us show you exactly what is happening inside your mouth. It turns a diagnosis into a conversation you can see and understand.",
    category: "Diagnostics",
    image: "/images/intra-oral-camera.jpg",
    imageAlt: "A dentist using an intra-oral camera during an exam",
    highlights: [
      "Up to 25× magnification",
      "A visual tour of your whole mouth",
      "Images saved for your patient file",
    ],
  },
  "oral-hygiene-for-kids": {
    title: "Oral Hygiene for Kids",
    shortTitle: "Kids' Oral Hygiene",
    teaser:
      "Gentle, practical guidance from the first tooth through the teenage years.",
    description:
      "Good habits start early. We help families build a simple routine that protects growing smiles — and makes dental visits feel normal, not scary.",
    category: "Preventive",
    image: "/images/oral-hygiene-for-kids.jpg",
    imageAlt: "A child learning healthy oral hygiene habits",
    highlights: [
      "Guidance for babies, children, and teens",
      "Fluoride and brushing advice by age",
      "A prevention-first approach",
    ],
  },
  "orthodontics-and-dental-hygiene": {
    title: "Orthodontics & Dental Hygiene",
    shortTitle: "Orthodontics & Hygiene",
    teaser:
      "How to keep braces, clear aligners, and retainers — and the teeth beneath them — beautifully clean.",
    description:
      "Orthodontic appliances do important work, but they also give food and plaque more places to hide. A little extra know-how makes caring for your teeth much easier.",
    category: "Preventive",
    image: "/images/healthy-vs-unhealthy.jpg",
    imageAlt: "Illustration comparing healthy teeth with unhealthy teeth",
    highlights: [
      "Diet guidance for braces and aligners",
      "Brushing tools for hard-to-reach areas",
      "Professional care that supports treatment",
    ],
  },
  "periodontal-gum-disease": {
    title: "Periodontal (Gum) Disease",
    shortTitle: "Gum Disease",
    teaser:
      "Protect the foundation of your smile with early detection and thoughtful care.",
    description:
      "Gum disease can begin quietly, often without obvious symptoms. Left untreated, it can affect not only your teeth but your overall health.",
    category: "Preventive",
    image: "/images/periodontal-disease.jpg",
    imageAlt: "Illustration of periodontal gum disease",
    highlights: [
      "Signs and symptoms to watch for",
      "Treatment options explained clearly",
      "The connection to your overall health",
    ],
  },
  "root-canal-treatment": {
    title: "Root Canal Treatment",
    shortTitle: "Root Canals",
    teaser:
      "Modern endodontics is far gentler than its reputation — and it can save your natural tooth.",
    description:
      "When the soft pulp inside a tooth becomes infected or inflamed, root canal treatment removes the problem and relieves the pain. In most cases, it feels no different from a filling.",
    category: "Restorative",
    image: "/images/healthy-tooth.jpg",
    imageAlt: "Illustration of a healthy tooth and its root",
    highlights: [
      "Relieves pain and infection",
      "Saves your natural tooth whenever possible",
      "Modern, comfortable technique",
    ],
  },
  "snoring-and-sleep-apnea": {
    title: "Snoring & Sleep Apnea",
    shortTitle: "Sleep & Snoring",
    teaser:
      "Custom oral appliances that help you breathe easier — and sleep more deeply.",
    description:
      "Snoring can be more than a nuisance. It may be a sign of obstructive sleep apnea. A custom oral appliance, fitted by our dentists, can help hold the jaw forward and keep the airway open.",
    category: "Comfort & Function",
    image: "/images/normal-anatomy.jpg",
    imageAlt: "Illustration of normal airway anatomy during sleep",
    highlights: [
      "Oral appliance therapy",
      "Fitted, adjusted, and monitored by a dentist",
      "Support for quieter, more restful sleep",
    ],
  },
  tmd: {
    title: "TMD (Jaw Pain)",
    shortTitle: "TMD",
    teaser:
      "Relief for jaw pain, clicking, and the tension that comes with it.",
    description:
      "Temporomandibular disorders affect the jaw joint and the muscles around it. Most cases improve with conservative care, and we will help you find the approach that fits.",
    category: "Comfort & Function",
    image: "/images/tmd.jpg",
    imageAlt: "Illustration of the temporomandibular joint",
    highlights: [
      "Causes and common symptoms",
      "Conservative remedies first",
      "A plan tailored to your jaw and habits",
    ],
  },
  "traumatic-dental-injuries": {
    title: "Traumatic Dental Injuries",
    shortTitle: "Dental Injuries",
    teaser:
      "What to do in the first few minutes — and how we can help after a dental injury.",
    description:
      "A chipped, broken, or knocked-out tooth can happen to anyone. Knowing what to do right away can make the difference between saving a tooth and losing it.",
    category: "Emergency",
    image: "/images/traumatic-injury.jpg",
    imageAlt: "A patient receiving care after a dental injury",
    highlights: [
      "Guidance for chipped and broken teeth",
      "Steps for a knocked-out tooth",
      "Call us immediately for urgent care",
    ],
  },
};

export const treatments: Treatment[] = raw.map((item) => {
  const detail = details[item.slug];
  if (!detail) {
    throw new Error(`Missing treatment details for ${item.slug}`);
  }
  return {
    ...item,
    title: detail.title,
    shortTitle: detail.shortTitle ?? detail.title,
    teaser: detail.teaser,
    description: detail.description,
    category: detail.category,
    image: detail.image,
    imageAlt: detail.imageAlt,
    highlights: detail.highlights,
  };
});

export const treatmentCategories: {
  label: TreatmentCategory;
  description: string;
}[] = [
  {
    label: "Preventive",
    description: "Everyday care that keeps small issues small.",
  },
  {
    label: "Restorative",
    description: "Repair, rebuild, and replace with a natural finish.",
  },
  {
    label: "Comfort & Function",
    description: "Care for jaw pain, sleep, and the way your smile works.",
  },
  {
    label: "Diagnostics",
    description: "A clearer look at what is happening beneath the surface.",
  },
  {
    label: "Emergency",
    description: "What to do when something needs attention now.",
  },
];

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function relatedTreatments(current: Treatment, limit = 3) {
  return treatments
    .filter(
      (treatment) =>
        treatment.slug !== current.slug &&
        treatment.category === current.category,
    )
    .concat(
      treatments.filter(
        (treatment) =>
          treatment.slug !== current.slug &&
          treatment.category !== current.category,
      ),
    )
    .slice(0, limit);
}
