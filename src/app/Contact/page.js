import ContactContent from "./ContactContent"
import Script from "next/script"

export const metadata = {
  title: "Contact Chavez Concrete Work Inc. | Durham NC Concrete Contractor",
  description:
    "Contact Chavez Concrete Work Inc. for commercial concrete services in Durham, NC. Call (919) 627-3839 or submit a quote request online.",
  alternates: {
    canonical: "https://chavezconcreteworkinc.com/Contact",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://chavezconcreteworkinc.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://chavezconcreteworkinc.com/Contact" },
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
