import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Car Buying Guides & Tips | MustGoDeals",
  description:
    "Expert guides to help Australian car buyers score the best demo and end-of-month deals. Tips on negotiation, what to inspect, and how to save thousands.",
  alternates: {
    canonical: "https://mustgodeals.com.au/blog",
  },
  openGraph: {
    title: "Car Buying Guides & Tips | MustGoDeals",
    description:
      "Expert guides to help Australian car buyers score the best demo and end-of-month deals. Tips on negotiation, what to inspect, and how to save thousands.",
    url: "https://mustgodeals.com.au/blog",
    siteName: "MustGoDeals",
    type: "website",
    images: [
      {
        url: "https://mustgodeals.com.au/images/news/ferrari-12cilindri-front.jpg",
        width: 1200,
        height: 800,
        alt: "Ferrari 12Cilindri — MustGoDeals automotive guides",
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
