

import Link from "next/link"
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
     
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Chavez Concrete Work, Inc</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-center">

Welcome to Chavez Concrete Work, inc where durability meets craftsmanship. With years of experience in the concrete industry, we specialize in providing top-quality concrete solutions tailored to your needs. From residential projects to large-scale commercial builds, our team is dedicated to delivering excellence with every pour. Trust us to lay the foundation for your success.
                  </p>
                </div>
              </div>
              <Image 
          src='/DSC01656.jpg' 
          width="550"
          height="550"
          className= "mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"></Image>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 py-12">
  <h1 className="text-4xl text-neutral-700 text-center font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
    Our Story
  </h1>
  <p className="max-w-3xl text-neutral-600 mt-6 mx-auto text-lg md:text-xl leading-relaxed text-center">
    Here at Chavez Concrete Work, Inc, our passion for concrete has been the foundation of our journey since 2003. 
    Nestled in the heart of North Carolina, our family-owned business is built on values of trust, integrity, and a relentless commitment to excellence.
  </p>
  <p className="max-w-3xl text-neutral-600 mt-6 mx-auto text-lg md:text-xl leading-relaxed text-center">
    Our story began with a simple mission: to create durable, high-quality concrete solutions that stand the test of time. 
    From our humble beginnings, we've grown into a pillar of the community, known for our unwavering dedication and exceptional craftsmanship.
  </p>
  <p className="max-w-3xl text-neutral-600 mt-6 mx-auto text-lg md:text-xl leading-relaxed text-center">
    At Chavez Concrete Work, Inc, every project is a testament to our hands-on approach and family values. 
    We treat each job, whether a cozy residential driveway or a sprawling commercial development, with the same level of care and attention. 
    Our team of skilled professionals brings innovation and expertise to every pour, ensuring your vision is brought to life with precision and pride.
  </p>
  <p className="max-w-3xl text-neutral-600 mt-6 mx-auto text-lg md:text-xl leading-relaxed text-center">
    Over the years, our commitment to staying at the forefront of industry advancements has kept us ahead of the curve. 
    We continuously evolve, embracing new techniques and technologies to deliver the best possible results for our clients.
  </p>
  <p className="max-w-3xl text-neutral-600 mt-6 mx-auto text-lg md:text-xl leading-relaxed text-center">
    Being based in North Carolina isn't just about our location; it's about our community. We take pride in building lasting relationships with our clients, partners, and neighbors. 
    We're more than just a concrete company—we're a trusted partner in your projects, dedicated to helping you lay strong foundations for the future.
  </p>
  <p className="max-w-3xl text-neutral-600 mt-6 mx-auto text-lg md:text-xl leading-relaxed text-center">
    Join us at Chavez Concrete Work, Inc as we continue to shape the landscape of North Carolina, one solid foundation at a time. Let's build something great together.
  </p>
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-12">
  <Image 
    src='/DSC01484.jpg' 
    width="400"
    height="400"
    className="rounded-xl object-cover w-full sm:w-auto"
  />
  <Image 
    src='/DSC01509.jpg' 
    width="400"
    height="400"
    className="rounded-xl object-cover w-full sm:w-auto"
  />
  <Image 
    src='/DSC01585.jpg' 
    width="400"
    height="400"
    className="rounded-xl object-cover w-full sm:w-auto"
  />
</div>

</div> 


        </section>


        

      </main>

    </div>
  )
}

