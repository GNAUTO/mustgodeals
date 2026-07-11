import { MetadataRoute } from "next";
import { BLOG_POSTS, NEWS_ITEMS } from "./data/posts";
import { LISTINGS } from "./data/listings";
import { getAllRecallSlugs, getAllBrands } from "./data/recallsDb";

const BASE_URL = "https://mustgodeals.com.au";

const STATIC_PAGES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "",               priority: 1.0, changeFrequency: "weekly"  },
  { path: "/news",          priority: 0.9, changeFrequency: "daily"   },
  { path: "/blog",          priority: 0.9, changeFrequency: "daily"   },
  { path: "/listings",      priority: 0.9, changeFrequency: "daily"   },
  { path: "/about",         priority: 0.5, changeFrequency: "yearly"  },
  { path: "/contact",       priority: 0.5, changeFrequency: "yearly"  },
  { path: "/privacy-policy",             priority: 0.3, changeFrequency: "yearly"  },
  { path: "/tools",                           priority: 0.8, changeFrequency: "monthly" },
  { path: "/tools/stamp-duty-calculator",    priority: 0.9, changeFrequency: "monthly" },
  { path: "/tools/stamp-duty-calculator-ko", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tools/rego-calculator",          priority: 0.9, changeFrequency: "monthly" },
  { path: "/recalls",                        priority: 0.9, changeFrequency: "daily"   },
];

const KO_MONTHS: Record<string, number> = {
  "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5,
  "7": 6, "8": 7, "9": 8, "10": 9, "11": 10, "12": 11,
};

function toDate(str: string): Date {
  // Korean format: "2026년 7월 4일"
  const ko = str.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (ko) {
    const [, y, m, d] = ko;
    return new Date(Date.UTC(Number(y), KO_MONTHS[m], Number(d)));
  }
  const d = new Date(str);
  return isNaN(d.getTime()) ? new Date() : d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = STATIC_PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const newsEntries = NEWS_ITEMS.map((item) => ({
    url: `${BASE_URL}/news/${item.slug}`,
    lastModified: toDate(item.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogEntries = BLOG_POSTS.map((item) => ({
    url: `${BASE_URL}/blog/${item.slug}`,
    lastModified: toDate(item.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const listingEntries = LISTINGS.map((item) => ({
    url: `${BASE_URL}/listings/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const [recallSlugs, recallBrands] = await Promise.all([
    getAllRecallSlugs().catch(() => []),
    getAllBrands().catch(() => []),
  ]);

  const recallDetailEntries = recallSlugs.map(r => ({
    url: `${BASE_URL}/recalls/${r.slug}`,
    lastModified: r.announced_date ? toDate(r.announced_date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const recallBrandEntries = recallBrands.map(b => ({
    url: `${BASE_URL}/recalls/brand/${b.brand.toLowerCase().replace(/\s+/g, "")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...listingEntries, ...newsEntries, ...blogEntries, ...recallDetailEntries, ...recallBrandEntries];
}
