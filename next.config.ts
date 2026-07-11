import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Dealer listing CDNs
      { protocol: "https", hostname: "edge.pxcrush.net" },
      { protocol: "https", hostname: "editorial.pxcrush.net" },
      { protocol: "https", hostname: "d2s8i866417m9.cloudfront.net" },
      // Press kit / editorial sources
      { protocol: "https", hostname: "media.drive.com.au" },
      { protocol: "https", hostname: "mediapool.bmwgroup.com" },
      { protocol: "https", hostname: "pressroom.toyota.com.au" },
      { protocol: "https", hostname: "www.kia.com" },
      { protocol: "https", hostname: "www.mazda.com.au" },
      { protocol: "https", hostname: "www.mynrma.com.au" },
      { protocol: "https", hostname: "www.topgear.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
