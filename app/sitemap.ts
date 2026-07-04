import { MetadataRoute } from "next";
import { BLOG_POSTS, NEWS_ITEMS } from "./data/posts";
import { LISTINGS } from "./data/listings";

const BASE_URL = "https://mustgodeals.com.au";

const STATIC_PAGES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "",               priority: 1.0, changeFrequency: "weekly"  },
  { path: "/news",          priority: 0.9, changeFrequency: "daily"   },
  { path: "/blog",          priority: 0.9, changeFrequency: "daily"   },
  { path: "/listings",      priority: 0.9, changeFrequency: "daily"   },
  { path: "/about",         priority: 0.5, changeFrequency: "yearly"  },
  { path: "/contact",       priority: 0.5, changeFrequency: "yearly"  },
  { path: "/privacy-policy",priority: 0.3, changeFrequency: "yearly"  },
];

function toDate(str: string): Date {
  const d = new Date(str);
  return isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
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

  return [...staticEntries, ...listingEntries, ...newsEntries, ...blogEntries];
}
