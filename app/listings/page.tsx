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
        url: "https://mustgodeals.com.au/images/listings/demo-car-og.jpg",
        width: 1200,
        height: 800,
        alt: "Demo car listing — MustGoDeals",
      },
    ],
  },
};

export default function ListingsPage() {
  return <ListingsPageClient />;
}
