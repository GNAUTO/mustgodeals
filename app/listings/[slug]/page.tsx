import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LISTINGS } from "../../data/listings";
import ListingDetail from "../../components/listings/ListingDetail";
import { JsonLd } from "../../components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LISTINGS.filter((l) => l.status !== "sold").map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = LISTINGS.find((l) => l.slug === slug);
  if (!listing) return {};

  const nameParts = listing.name.split(" ");
  const year = nameParts[0];
  const modelShort = nameParts.slice(1, 3).join(" ");

  const locParts = listing.location.split(", ");
  const lastPart = locParts[locParts.length - 1];
  const cityDisplay =
    lastPart.length <= 3 && lastPart === lastPart.toUpperCase()
      ? locParts[0]
      : lastPart;

  const savings = listing.savingsAmount.toLocaleString("en-AU");
  const price = listing.price.toLocaleString("en-AU");
  const km = listing.km.toLocaleString("en-AU");
  const statusLabel = listing.badge === "DEMO" ? "Demo" : listing.badge;

  const title = `${year} ${modelShort} Clearance ${cityDisplay} - $${savings} Off | MustGoDeals`;

  const feat1 = listing.features[0]?.name ?? "";
  const feat2 = listing.features[1]?.name ?? "";
  const base = `${statusLabel} ${modelShort}, ${km}km`;
  const tail = `$${price} — $${savings} below drive-away. ${listing.location}. Full manufacturer warranty.`;

  let description: string;
  if (feat1 && feat2) {
    const d2 = `${base}, ${feat1} & ${feat2}. ${tail}`;
    if (d2.length <= 155) {
      description = d2;
    } else {
      const d1 = `${base}, ${feat1}. ${tail}`;
      description = d1.length <= 155 ? d1 : `${base}. ${tail}`;
    }
  } else if (feat1) {
    const d1 = `${base}, ${feat1}. ${tail}`;
    description = d1.length <= 155 ? d1 : `${base}. ${tail}`;
  } else {
    description = `${base}. ${tail}`;
  }

  return {
    title,
    description,
    alternates: { canonical: `/listings/${slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "MustGoDeals",
      images: listing.images[0] ? [{ url: listing.images[0] }] : undefined,
    },
  };
}

export default async function ListingPage({ params }: Props) {
  const { slug } = await params;
  const listing = LISTINGS.find((l) => l.slug === slug);
  if (!listing || listing.status === "sold") return notFound();

  const year = listing.specs.find((s) => s.label === "Year")?.value ?? listing.name.split(" ")[0];
  const brand = listing.name.split(" ")[1] ?? "";

  const availabilityMap: Record<string, string> = {
    available:    "https://schema.org/InStock",
    coming_soon:  "https://schema.org/PreOrder",
    sold:         "https://schema.org/SoldOut",
  };

  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: listing.name,
    description: listing.dealerComment,
    image: listing.images.slice(0, 5),
    vehicleModelDate: year,
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: listing.km,
      unitCode: "KMT",
    },
    color: listing.colour,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "AUD",
      availability: availabilityMap[listing.status] ?? "https://schema.org/InStock",
      url: `https://mustgodeals.com.au/listings/${listing.slug}`,
      seller: {
        "@type": "AutoDealer",
        name: listing.dealer.name,
        address: listing.dealer.location,
      },
    },
  };

  return (
    <>
      <JsonLd data={vehicleSchema} />
      <ListingDetail listing={listing} />
    </>
  );
}
