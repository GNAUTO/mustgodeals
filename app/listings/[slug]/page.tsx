import { notFound } from "next/navigation";
import { LISTINGS } from "../../data/listings";
import ListingDetail from "../../components/listings/ListingDetail";

export function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = LISTINGS.find((l) => l.slug === slug);
  if (!listing) return notFound();
  return <ListingDetail listing={listing} />;
}
