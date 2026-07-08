import Image from 'next/image'
import Script from 'next/script'

export const metadata = {
  title: "Project Gallery | Commercial Concrete Work in North Carolina",
  description:
    "Browse completed commercial concrete projects by Chavez Concrete Work Inc. in Durham, NC and across North Carolina — sidewalks, curbs, slabs, and flatwork.",
  alternates: {
    canonical: "https://chavezconcreteworkinc.com/Gallery",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://chavezconcreteworkinc.com" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://chavezconcreteworkinc.com/Gallery" },
  ],
};

export default function Gallery() {
  //created an arraay of objects that hold images 
  const images = [
    { src: '/roll1.JPG', alt: 'Commercial concrete sidewalk installation in Durham NC' },
    { src: '/roll2.JPG', alt: 'Concrete curb and gutter work for commercial development in North Carolina' },
    { src: '/roll3.JPG', alt: 'Concrete flatwork pour for commercial project in the Triangle area NC' },
    { src: '/roll4.JPG', alt: 'Finished concrete slab for commercial building in Durham NC' },
    { src: '/roll5.JPG', alt: 'Concrete stairs construction for commercial site in North Carolina' },
    { src: '/IMG_2432.jpeg', alt: 'Commercial concrete drive-thru pad installation in NC' },
    { src: '/IMG_2427.jpeg', alt: 'Concrete gutter work by Chavez Concrete Work Inc. in Durham NC' },
    { src: '/IMG_2375.jpeg', alt: 'Commercial sidewalk and curb project in Raleigh NC area' },
    { src: '/IMG_2377.jpeg', alt: 'Concrete flatwork for commercial property in North Carolina' },
    { src: '/roll6.jpeg', alt: 'Freshly poured commercial concrete slab in Durham NC' },
    { src: '/roll7.jpeg', alt: 'Concrete curb installation for commercial development in NC' },
    { src: '/roll8.jpeg', alt: 'Commercial concrete work in progress by Chavez Concrete team' },
    { src: '/roll9.jpeg', alt: 'Finished concrete sidewalk for commercial site in North Carolina' },
    { src: '/roll10.jpeg', alt: 'Concrete flatwork project completed in the Durham NC area' },
  ]

  return (
    <div className=" mx-auto py-24 md:py-24 lg:py-24 bg-white">
      <Script
        id="breadcrumb-schema-gallery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1 className="text-[#134d67] rounded-md mb-12 py-24 text-3xl  tracking-tighter text-center sm:text-5xl xl:text-6xl/none font-semibold">Commercial Concrete Project Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
