export const practice = {
  name: "Downtown Dental",
  tagline: "Family-friendly dentistry in Jamestown, North Dakota",
  address: {
    street: "815 1st Ave. S.",
    city: "Jamestown",
    state: "ND",
    zip: "58401",
    full: "815 1st Ave. S., Jamestown, ND 58401",
  },
  phone: "701-251-2240",
  phoneHref: "tel:+17012512240",
  fax: "701-952-9487",
  email: "office@downtowndental.biz",
  emailHref: "mailto:office@downtowndental.biz",
  hours: [
    { day: "Monday – Thursday", time: "8:00 a.m. – 5:00 p.m." },
    { day: "Friday", time: "8:00 a.m. – 2:00 p.m." },
    { day: "Saturday – Sunday", time: "Closed" },
  ],
  shortHours: "Mon–Thu 8–5 · Fri 8–2",
  facebook: "https://www.facebook.com/Downtown-Dental-162072693822892/?fref=ts",
  payOnline:
    "https://bestcardteam.com/Payments/?Profile=downtowndentalWEB",
  cherry:
    "https://pay.withcherry.com/downtown-dental-nd?utm_source=merchant&utm_medium=website",
  cherryInfo: "https://withcherry.com/consumers",
  careCredit: "https://www.carecredit.com/go/XFV475/",
  reviews:
    "https://www.google.com/search?q=downtown+dental+jamestown+nd&oq=downtown+dental&aqs=chrome.1.69i57j46i39i175i199j0i20i263i457j46i175i199j0j69i60l2j69i61.6955j0j4&sourceid=chrome&ie=UTF-8#lrd=0x52d013ea30136a05:0x1379004a372c4f02,1,,,",
  mapEmbed:
    "https://www.google.com/maps?q=815+1st+Ave+S,+Jamestown,+ND+58401&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=815+1st+Ave+S,+Jamestown,+ND+58401",
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const aboutLinks: NavLink[] = [
  {
    label: "About Our Doctors",
    href: "/office/about-our-doctors",
    description: "Four dentists, one shared approach to thoughtful care.",
  },
  {
    label: "Our Staff",
    href: "/office/our-staff",
    description: "The friendly faces who keep your visit running smoothly.",
  },
  {
    label: "Office Policies",
    href: "/office/office-policies",
    description: "Our mission, hours, appointment policy, and insurance notes.",
  },
  {
    label: "Financial",
    href: "/office/financial",
    description: "Payment options, insurance, and flexible financing.",
  },
  {
    label: "Map & Directions",
    href: "/office/map-and-directions",
    description: "Find us on 1st Avenue South in downtown Jamestown.",
  },
];

export const patientLinks: NavLink[] = [
  {
    label: "First Visit",
    href: "/patient/first-visit",
    description: "What to expect at your first appointment.",
  },
  {
    label: "FAQ",
    href: "/patient/faq",
    description: "Answers to the questions we hear most often.",
  },
  {
    label: "Common Problems",
    href: "/patient/common-problems",
    description: "Everyday dental concerns and how we can help.",
  },
  {
    label: "Emergencies",
    href: "/patient/emergencies",
    description: "What to do when a tooth needs attention right away.",
  },
  {
    label: "Brushing & Flossing",
    href: "/patient/brushing-and-flossing",
    description: "Simple habits that protect your smile every day.",
  },
  {
    label: "Tooth Decay Prevention",
    href: "/patient/tooth-decay-prevention",
    description: "A practical guide to keeping decay from taking hold.",
  },
  {
    label: "Payment Plans",
    href: "/contact-us/contact-us-copy-1",
    description: "Cherry and CareCredit financing options.",
  },
];

export const resourceLinks: NavLink[] = [
  {
    label: "Related Links",
    href: "/general-info/related-links",
    description: "Dental organizations and trusted resources.",
  },
  {
    label: "Glossary",
    href: "/general-info/glossary",
    description: "Plain-language definitions for dental terms.",
  },
  {
    label: "FAQ",
    href: "/patient/faq",
    description: "Quick answers before your visit.",
  },
];

export const contactLinks: NavLink[] = [
  {
    label: "Contact Us",
    href: "/contact-us/contact-us",
    description: "Call, email, or stop by the office.",
  },
  {
    label: "Appointment Request",
    href: "/contact-us/appointment-request",
    description: "Tell us a little about you and we will follow up.",
  },
];

export const doctors = [
  {
    name: "Dr. Alissa Hanson",
    initials: "AH",
    role: "General Dentist",
    joined: "2012",
    education: "University of Minnesota School of Dentistry",
    bio: [
      "Dr. Hanson joined our practice in 2012 following graduation from the University of Minnesota School of Dentistry. She is originally from Minot, North Dakota and attended Concordia College in Moorhead. She is a member of the North Dakota Dental Association, Academy of General Dentistry, the Christian Medical and Dental Association, and the Central District Dental Society.",
      "She is also active in the Jamestown Kiwanis Club, and served as president of the Optimist Club of Jamestown. In her free time, Dr. Hanson enjoys spending time with family and plays violin in her local church. She and her husband, Bjorn, have three children.",
      "Dr. Hanson is passionate about educating patients about their oral health, helping them to have a comfortable dental experience, and improving patients' self-esteem by combining art with science to create beautiful smiles.",
    ],
  },
  {
    name: "Dr. Whitney Bruins",
    initials: "WB",
    role: "General Dentist",
    joined: "",
    education: "UNMC College of Dentistry",
    bio: [
      "Dr. Whitney grew up on a farm near Windsor and attended school in Pingree-Buchanan. She is excited and thrilled to be practicing near her home town. She strives to provide excellent dental care for the wonderful community that shaped her into the person she is today.",
      "Dr. Whitney ran track and field at North Dakota State University and attended dental school at UNMC College of Dentistry in Lincoln, NE. She practiced general dentistry at a community health center in Turtle Lake, ND for two years prior to joining Downtown Dental. She is a member of the North Dakota Dental Association.",
      "Dr. Whitney and her husband, David, have four daughters, a few cats and a handful or more of chickens. She enjoys crocheting and knitting while David watches football, going to the lake in the summer, and helping coach track and field wherever she may be needed.",
    ],
  },
  {
    name: "Dr. Kelly Odden",
    initials: "KO",
    role: "General Dentist",
    joined: "2020",
    education: "University of Iowa College of Dentistry",
    bio: [
      "Dr. Kelly graduated from the University of Iowa College of Dentistry in 2020 and is excited to be back in her home state of ND. After growing up in Carrington, she attended Concordia College in Moorhead.",
      "Dr. Kelly and her husband, Jordan, have five children. She enjoys teaching health and fitness at Flex and Flow and long walks with her family. She is also an avid indoor cyclist and enjoys playing the piano.",
      "She is excited to offer dental care to the people of Jamestown and surrounding communities! She also emphasizes the importance of oral health as part of overall health to encourage healthy habits, while trying to provide a comfortable dental experience to patients.",
    ],
  },
  {
    name: "Dr. Kali Anderson",
    initials: "KA",
    role: "General Dentist",
    joined: "",
    education: "University of Colorado School of Dental Medicine",
    bio: [
      "Dr. Kali grew up on a farm near Sykeston, ND where she attended school until 7th grade and then graduated from Carrington High School. She attended the University of Mary in Bismarck and received her Doctorate of Dental Surgery degree from the University of Colorado School of Dental Medicine in Aurora, CO. She is part of the ND Dental Association and the American Dental Association.",
      "Dr. Kali and her husband, Brady, reside in Jamestown with their three sons and daughter. In their spare time, they like to camp, go to the lake, snow ski, and go for walks with their boys.",
      "Dr. Kali is excited to join the Downtown Dental team and offer dental care to the Jamestown and surrounding communities. She enjoys working with patients of all ages and helping them improve their oral health and self-esteem.",
    ],
  },
] as const;

export const teamGroups = [
  {
    title: "Business team",
    description:
      "The people who welcome you, coordinate scheduling, and help untangle insurance questions.",
    image: "/images/business-team.jpg",
    imageAlt: "The Downtown Dental business and front desk team",
    members: [
      { name: "Stacey", role: "Business Manager" },
      { name: "Kelli", role: "Insurance Coordinator" },
      { name: "Michelle", role: "Office Assistant" },
    ],
  },
  {
    title: "Hygiene team",
    description:
      "Skilled hygienists who make cleanings feel calm, thorough, and genuinely personal.",
    image: "/images/hygiene-team.jpg",
    imageAlt: "The Downtown Dental hygiene team",
    members: [
      { name: "LeAnn", role: "Hygienist" },
      { name: "Brittany", role: "Hygienist" },
      { name: "Megan", role: "Hygienist" },
      { name: "Megan", role: "Hygienist" },
    ],
  },
  {
    title: "Dental assistants",
    description:
      "The team beside your dentist — attentive, reassuring, and always one step ahead.",
    image: "/images/assistant-team.jpg",
    imageAlt: "The Downtown Dental assistant team",
    members: [
      { name: "Andrea", role: "Dental Assistant" },
      { name: "Wendy", role: "Dental Assistant" },
      { name: "Madi", role: "Dental Assistant" },
      { name: "Jessica", role: "Dental Assistant" },
      { name: "Izzy", role: "Dental Assistant" },
      { name: "Addison", role: "Dental Assistant" },
    ],
  },
] as const;

export const galleryImages = [
  {
    src: "/images/team-2026.jpg",
    alt: "The full Downtown Dental team gathered together in the office",
    caption: "Our team",
  },
  {
    src: "/images/doctors-indoor.jpg",
    alt: "The four Downtown Dental doctors laughing together indoors",
    caption: "The doctors",
  },
  {
    src: "/images/branding-1.jpg",
    alt: "A Downtown Dental team member smiling in the office",
    caption: "At the office",
  },
  {
    src: "/images/patient-sunglasses.jpg",
    alt: "A Downtown Dental patient relaxing in the dental chair in sunglasses",
    caption: "In the chair",
  },
  {
    src: "/images/branding-2.jpg",
    alt: "Downtown Dental team members together in the practice",
    caption: "Everyday care",
  },
  {
    src: "/images/branding-4.jpg",
    alt: "A bright, welcoming space inside Downtown Dental",
    caption: "Our place",
  },
  {
    src: "/images/doctors-2026.jpg",
    alt: "The Downtown Dental dentists smiling together",
    caption: "Four dentists",
  },
] as const;
