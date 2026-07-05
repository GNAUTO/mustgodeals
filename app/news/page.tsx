import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "Australian Automotive News | MustGoDeals",
  description:
    "Latest Australian car news, new model launches, industry updates and road law changes. Curated for Australian drivers and car enthusiasts.",
  alternates: {
    canonical: "https://mustgodeals.com.au/news",
  },
  openGraph: {
    title: "Australian Automotive News | MustGoDeals",
    description:
      "Latest Australian car news, new model launches, industry updates and road law changes. Curated for Australian drivers and car enthusiasts.",
    url: "https://mustgodeals.com.au/news",
    siteName: "MustGoDeals",
    type: "website",
    images: [
      {
        url: "https://mustgodeals.com.au/images/news/australia-speed-sign-60kmh.jpg",
        width: 1200,
        height: 630,
        alt: "Australian road sign",
      },
    ],
  },
};

export default function NewsPage() {
  return <NewsPageClient />;
}
