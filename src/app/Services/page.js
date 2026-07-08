import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { ChevronRight, Hammer, Building2, Ruler } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Commercial Concrete Services Durham NC | Flatwork, Curbs, Slabs",
  description:
    "Chavez Concrete Work Inc. offers commercial concrete services in Durham, NC including sidewalks, curbs and gutters, slabs, drive-thrus, and stairs. Request a bid today.",
  alternates: {
    canonical: "https://chavezconcreteworkinc.com/Services",
  },
};

const services = [
  {
    title: "Sidewalks and Pathways",
    description:
      "We build commercial-grade sidewalks and pedestrian pathways that meet ADA compliance standards and withstand heavy foot traffic. Our team handles projects of every scale — from single-building walkways to multi-phase site developments across Durham, Raleigh, and the greater Triangle area.",
    icon: <Ruler className="h-8 w-8 mb-2 text-[#d69126]" />,
    items: ["Commercial sidewalks", "Pedestrian pathways", "Drive-thru pads", "ADA-compliant walkways"],
    image: "/Sidewalk.jpeg",
    alt: "Commercial concrete sidewalk installation by Chavez Concrete Work Inc. in Durham NC",
  },
  {
    title: "Curbs, Gutters, and Stairs",
    description:
      "Our curb and gutter work is trusted by general contractors across North Carolina for its precision and durability. We also build commercial concrete stairs, retaining walls, and structural elements that meet local building codes and engineering specifications.",
    icon: <Building2 className="h-8 w-8 mb-2 text-[#d69126]" />,
    items: ["Curbs and gutters", "Commercial stairs", "Retaining elements", "Site drainage solutions"],
    image: "/curb.jpeg",
    alt: "Concrete curb and gutter installation for commercial development in North Carolina",
  },
  {
    title: "Slabs and Flatwork",
    description:
      "Commercial flatwork is our core specialty. We pour concrete slabs for warehouses, retail centers, office buildings, and industrial facilities. Every pour is engineered for load-bearing capacity and long-term performance in North Carolina's climate.",
    icon: <Hammer className="h-8 w-8 mb-2 text-[#d69126]" />,
    items: ["Commercial slabs", "Warehouse floors", "Loading docks", "Foundation flatwork"],
    image: "/Gutter.jpg",
    alt: "Commercial concrete slab and flatwork pour in the Triangle area of North Carolina",
  },
];

const faqs = [
  {
    question: "What areas does Chavez Concrete Work Inc. serve?",
    answer:
      "We are based in Durham, NC and serve the entire Triangle region including Raleigh, Chapel Hill, Cary, Apex, and Morrisville. We also take on commercial projects across the greater North Carolina area — our service radius covers most of the state.",
  },
  {
    question: "What types of commercial concrete projects do you handle?",
    answer:
      "We specialize in commercial flatwork including sidewalks, curbs and gutters, concrete slabs, drive-thru pads, stairs, and loading docks. We work with general contractors on new construction, site development, and renovation projects.",
  },
  {
    question: "How long has Chavez Concrete been in business?",
    answer:
      "Chavez Concrete Work Inc. is a family-owned business that has been operating since 2003. We have over 20 years of experience in commercial concrete work across North Carolina.",
  },
  {
    question: "Do you work with general contractors?",
    answer:
      "Yes — the majority of our work is as a concrete subcontractor for general contractors on commercial projects. We have long-standing relationships with firms like Mills Construction Company and Neal Construction & Consulting, and we pride ourselves on showing up on time, staying on budget, and delivering quality results.",
  },
  {
    question: "How do I request a bid for a commercial concrete project?",
    answer:
      "You can request a bid by calling us at (919) 627-3839, emailing chavezconcreteworkinc@yahoo.com, or submitting a request through our online contact form. We typically respond within one business day.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "GeneralContractor",
        name: "Chavez Concrete Work Inc.",
        telephone: "+19196273839",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Durham",
          addressRegion: "NC",
          postalCode: "27712",
          addressCountry: "US",
        },
      },
      areaServed: {
        "@type": "State",
        name: "North Carolina",
      },
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://chavezconcreteworkinc.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://chavezconcreteworkinc.com/Services",
    },
  ],
};

const Services = () => {
  return (
    <div className="mx-auto py-24 md:py-24 lg:py-24 bg-white">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-24 px-4">
        <h1 className="text-3xl font-semibold tracking-tighter text-center sm:text-5xl xl:text-6xl/none text-[#134d67]">
          Commercial Concrete Services in Durham, NC
        </h1>
        <p className="max-w-[1000px] text-[#211f20] md:text-xl text-left mx-auto py-10">
          Chavez Concrete Work Inc. is a trusted commercial concrete subcontractor serving
          Durham, Raleigh, Chapel Hill, and the greater Triangle region of North Carolina.
          Since 2003, we have delivered high-quality flatwork, curbs, gutters, slabs, and
          stairs for general contractors and commercial developers. Our team brings over two
          decades of hands-on experience to every project — showing up on time, staying on
          budget, and building results that last.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-10 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center bg-gray-100 rounded-full w-16 h-16 mb-6 mx-auto">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                {service.title}
              </h2>
              <Image
                src={service.image}
                width={550}
                height={550}
                alt={service.alt}
                className="w-full h-64 object-cover rounded-md mb-6"
              />
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-gray-800"
                  >
                    <FaCheck className="mr-2 text-green-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="max-w-[1000px] mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold tracking-tighter text-center sm:text-4xl text-[#134d67] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#134d67] mb-3">
                {faq.question}
              </h3>
              <p className="text-[#211f20] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center py-8">
        <Link href="/Contact">
          <button className="outline-[#d69126] outline-double text-[#134d67] font-semibold py-4 px-8 text-lg hover:bg-[#d69126]/80 transition duration-300 rounded">
            Request a Bid
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
