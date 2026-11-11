import type { MetadataRoute } from "next";
import { treatments } from "@/data/treatments";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.downtowndental.biz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/treatments", priority: 0.9, changeFrequency: "monthly" },
    { path: "/office/about-our-doctors", priority: 0.8, changeFrequency: "yearly" },
    { path: "/office/our-staff", priority: 0.7, changeFrequency: "yearly" },
    { path: "/office/office-policies", priority: 0.6, changeFrequency: "yearly" },
    { path: "/office/financial", priority: 0.7, changeFrequency: "yearly" },
    { path: "/office/map-and-directions", priority: 0.8, changeFrequency: "yearly" },
    { path: "/patient/first-visit", priority: 0.8, changeFrequency: "yearly" },
    { path: "/patient/faq", priority: 0.7, changeFrequency: "yearly" },
    { path: "/patient/common-problems", priority: 0.7, changeFrequency: "yearly" },
    { path: "/patient/emergencies", priority: 0.8, changeFrequency: "yearly" },
    {
      path: "/patient/brushing-and-flossing",
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      path: "/patient/tooth-decay-prevention",
      priority: 0.6,
      changeFrequency: "yearly",
    },
    { path: "/general-info/related-links", priority: 0.5, changeFrequency: "yearly" },
    { path: "/general-info/glossary", priority: 0.5, changeFrequency: "yearly" },
    { path: "/resources", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact-us/contact-us", priority: 0.9, changeFrequency: "yearly" },
    {
      path: "/contact-us/appointment-request",
      priority: 0.9,
      changeFrequency: "yearly",
    },
    {
      path: "/contact-us/contact-us-copy-1",
      priority: 0.6,
      changeFrequency: "yearly",
    },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const treatmentRoutes: MetadataRoute.Sitemap = treatments.map((treatment) => ({
    url: `${siteUrl}/treatment/${treatment.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
