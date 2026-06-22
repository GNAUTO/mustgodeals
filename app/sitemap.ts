import { MetadataRoute } from "next";

const BASE_URL = "https://mustgodeals.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/news/maserati-grecale-2027-australia`,
      lastModified: new Date("2026-06-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/news/maserati-grecale-2027-australia-ko`,
      lastModified: new Date("2026-06-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/news/porsche-taycan-e-shift-2027`,
      lastModified: new Date("2026-06-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/news/porsche-taycan-e-shift-2027-ko`,
      lastModified: new Date("2026-06-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/end-of-month-car-deals-explained`,
      lastModified: new Date("2026-06-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/wolmal-jadongcha-dil-jongni`,
      lastModified: new Date("2026-06-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
