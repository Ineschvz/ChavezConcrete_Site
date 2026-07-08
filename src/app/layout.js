import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

const dmsans = localFont({
  src: "/fonts/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-dmsans",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://chavezconcreteworkinc.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Commercial Concrete Contractor Durham NC | Chavez Concrete Work Inc.",
    template: "%s | Chavez Concrete Work Inc.",
  },
  description:
    "Chavez Concrete Work Inc. is a commercial concrete contractor in Durham, NC specializing in flatwork, sidewalks, curbs, gutters, slabs, and stairs. Serving North Carolina since 2003.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Chavez Concrete Work Inc.",
    title: "Commercial Concrete Contractor Durham NC | Chavez Concrete Work Inc.",
    description:
      "Family-owned commercial concrete contractor in Durham, NC. Specializing in flatwork, sidewalks, curbs, gutters, slabs, and stairs since 2003.",
    images: [
      {
        url: "/DSC01671.jpg",
        width: 1200,
        height: 630,
        alt: "Chavez Concrete Work Inc. commercial concrete project in North Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Concrete Contractor Durham NC | Chavez Concrete Work Inc.",
    description:
      "Family-owned commercial concrete contractor in Durham, NC. Specializing in flatwork, sidewalks, curbs, gutters, slabs, and stairs since 2003.",
    images: ["/DSC01671.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Chavez Concrete Work Inc.",
  url: siteUrl,
  logo: `${siteUrl}/Badge Logo@300x.png`,
  image: `${siteUrl}/DSC01671.jpg`,
  description:
    "Commercial concrete contractor in Durham, NC specializing in flatwork, sidewalks, curbs, gutters, slabs, and stairs. Family-owned and operated since 2003.",
  foundingDate: "2003",
  telephone: "+19196273839",
  email: "chavezconcreteworkinc@yahoo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7223 Russell Rd",
    addressLocality: "Durham",
    addressRegion: "NC",
    postalCode: "27712",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.07315,
    longitude: -78.92747,
  },
  areaServed: [
    {
      "@type": "State",
      name: "North Carolina",
    },
    {
      "@type": "City",
      name: "Durham",
      containedInPlace: { "@type": "State", name: "North Carolina" },
    },
    {
      "@type": "City",
      name: "Raleigh",
      containedInPlace: { "@type": "State", name: "North Carolina" },
    },
    {
      "@type": "City",
      name: "Chapel Hill",
      containedInPlace: { "@type": "State", name: "North Carolina" },
    },
  ],
  sameAs: [
    "https://www.facebook.com/people/Chavez-Concrete-Work-Inc/61560458476532/",
    "https://www.instagram.com/chavezconcreteworkinc/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Concrete Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sidewalks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Curbs and Gutters" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Slabs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drive-Thrus" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Flatwork" } },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmsans.variable} bg-black text-white`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <Navbar />

        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}

