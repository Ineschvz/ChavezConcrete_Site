

import Image from "next/image"
// import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About ",
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-black">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl xl:text-6xl/none">
                    About Chavez Concrete Work, Inc
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-center mx-auto">
                    Welcome to Chavez Concrete Work, Inc where durability meets craftsmanship. With years of experience in the concrete industry, we specialize in providing top-quality concrete solutions tailored to your needs. From residential projects to large-scale commercial builds, our team is dedicated to delivering excellence with every pour. Trust us to lay the foundation for your success.
                  </p>
                </div>
                <div className="flex justify-center">
                  <button asChild>
                    <a  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"href="#our-story">Learn Our Story</a>
                  </button>
                </div>
              </div>
              <Image 
                src="/GroupPhoto.jpg" 
                alt="Chavez Concrete Work team"
                width={550}
                height={550}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="our-story" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 py-12 text-black">
            <h2 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl xl:text-6xl mb-8 ">
              Our Story
            </h2>
            {[
              "Here at Chavez Concrete Work, Inc, our passion for concrete has been the foundation of our journey since 2003. Nestled in the heart of North Carolina, our family-owned business is built on values of trust, integrity, and a relentless commitment to excellence.",
              "Our story began with a simple mission: to create durable, high-quality concrete solutions that stand the test of time. From our humble beginnings, we've grown into a pillar of the community, known for our unwavering dedication and exceptional craftsmanship.",
              "At Chavez Concrete Work, Inc, every project is a testament to our hands-on approach and family values. We treat each job, whether a cozy residential driveway or a sprawling commercial development, with the same level of care and attention. Our team of skilled professionals brings innovation and expertise to every pour, ensuring your vision is brought to life with precision and pride.",
              "Over the years, our commitment to staying at the forefront of industry advancements has kept us ahead of the curve. We continuously evolve, embracing new techniques and technologies to deliver the best possible results for our clients.",
              "Being based in North Carolina isn't just about our location; it's about our community. We take pride in building lasting relationships with our clients, partners, and neighbors. We're more than just a concrete company—we're a trusted partner in your projects, dedicated to helping you lay strong foundations for the future.",
              "Join us at Chavez Concrete Work, Inc as we continue to shape the landscape of North Carolina, one solid foundation at a time. Let's build something great together."
            ].map((paragraph, index) => (
              <p key={index} className="max-w-3xl text-muted-foreground mt-6 mx-auto text-lg md:text-xl leading-relaxed text-center">
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-12">
              {[
                { src: '/DSC01484.jpg', alt: 'Concrete work example 1' },
                { src: '/DSC01509.jpg', alt: 'Concrete work example 2' },
                { src: '/DSC01585.jpg', alt: 'Concrete work example 3' }
              ].map((image, index) => (
                <Image 
                  key={index}
                  src={image.src} 
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="rounded-xl object-cover w-full h-[300px]"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}