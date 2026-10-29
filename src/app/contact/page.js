import ContactContent from "./ContactContent"
import Script from "next/script"

export const metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from Chavez Concrete Work Inc., a commercial concrete contractor in Durham, NC.",
  alternates: {
    canonical: "/contact",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://chavezconcreteworkinc.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://chavezconcreteworkinc.com/contact" },
  ],
}

export default function ContactPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactContent />
    </>
  )
}
