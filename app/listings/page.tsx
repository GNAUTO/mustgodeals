import type { Metadata } from "next";
import ListingsPageClient from "./ListingsPageClient";

export const metadata: Metadata = {
  title: "Demo Car Listings | MustGoDeals",
  description:
    "Browse demo cars for sale at Australian dealerships. Low kilometres, full factory warranty, real savings. New listings added regularly.",
  alternates: {
    canonical: "https://mustgodeals.com.au/listings",
  },
  openGraph: {
    title: "Demo Car Listings | MustGoDeals",
    description:
      "Browse demo cars for sale at Australian dealerships. Low kilometres, full factory warranty, real savings. New listings added regularly.",
    url: "https://mustgodeals.com.au/listings",
    siteName: "MustGoDeals",
    type: "website",
    images: [
      {
        url: "https://d2s8i866417m9.cloudfront.net/photo/32860614/photo/medium-481b6aeb1760ebd3cb5b4fd57f60919b.jpg",
        width: 1000,
        height: 667,
        alt: "Demo car listing — MustGoDeals",
      },
    ],
  },
};

export default function ListingsPage() {
  return <ListingsPageClient />;
}
