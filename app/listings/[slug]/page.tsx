import { notFound } from "next/navigation";
import { LISTINGS } from "../../data/listings";
import ListingDetail from "../../components/listings/ListingDetail";
import { JsonLd } from "../../components/JsonLd";

export function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = LISTINGS.find((l) => l.slug === slug);
  if (!listing) return notFound();

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
