

import Image from "next/image"
// import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About ",
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 relative">
      <section className="w-full pt-24 md:pt-24 lg:pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 mt-20">
        {[
          { src: '/DSC01484.jpg', alt: 'Concrete work example 1' },
          { src: '/DSC01509.jpg', alt: 'Concrete work example 2' },
          { src: '/DSC01585.jpg', alt: 'Concrete work example 3' }
        ].map((image, index) => (
          <div key={index} className="relative w-full h-[500px] outline-[#d69126] outline-4 rounded-lg shadow-lg">
          {index === 0 && (
            <div>
            <div className='line absolute top-16 left-0 w-96 h-1 bg-[#d69126] z-30'></div>
            <h2 className="absolute top-20 z-20 text-white font-bold px-4 py-2 text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
              About Chavez Concrete Work, Inc
            </h2>
            </div>
          )}
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          </div>
        ))}
        </div>

        <div className="pt-20 px-10 text-[#134d67]">
        <h1 className="text-3xl font-semibold tracking-tighter text-center sm:text-5xl xl:text-6xl/none">
          Our Mission
        </h1>
        <p className="max-w-[1000px] text-[#211f20] md:text-xl text-left mx-auto py-10">
          At Chavez Concrete, we’re here to raise the standard in concrete work. Our mission is to deliver dependable, high-quality results while making the process smooth and stress-free for our clients. We believe great work speaks for itself — but it’s how we treat people that really sets us apart. From start to finish, we show up with integrity, skill, and a commitment to getting the job done right, every time.
        </p>
        </div>
      </section>

      <section className="py-20 bg-[#f7f7f7]">
        <h1 className="py-5 px-10 text-[#134d67] text-3xl font-semibold tracking-tighter text-center sm:text-5xl xl:text-6xl/none">Our Core Values</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Integrity", src: '/integrityvalue.svg', description: "We believe in honesty and transparency in all our dealings. Our clients can trust us to deliver what we promise." },
          { title: "Quality", src: '/qualitywork.svg', description: "We are committed to providing the highest quality concrete work, ensuring durability and longevity in every project." },
          { title: "Customer Satisfaction", src: '/customersatisfaction.svg', description: "Our clients are at the heart of everything we do. We strive to exceed their expectations and build lasting relationships." },
          { title: "Teamwork", src: '/teamwork.svg', description: "We believe in the power of collaboration. Our skilled team works together to achieve the best results for our clients." },
        ].map((value, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4">
          <Image
            key={index}
            src={value.src}
            alt={value.title}
            width={100}
            height={100}
            className="mx-auto"
          />
          <p className="mt-2 text-lg font-medium text-[#134d67] text-center">{value.title}</p>
          </div>
        ))}
        </div>
      </section>

      <section id="our-story" className="w-full py-20 md:py-20 lg:py-20">
        <div className="container mx-auto px-4 py-24 text-[#134d67]">
        <h1 className="text-3xl tracking-tight text-center sm:text-5xl xl:text-6xl mb-8 font-semibold">
          Our Story
        </h1>
        {[
          "Here at Chavez Concrete Work, Inc, our passion for concrete has been the foundation of our journey since 2003. Nestled in the heart of North Carolina, our family-owned business is built on values of trust, integrity, and a relentless commitment to excellence.",
          "Our story began with a simple mission: to create durable, high-quality concrete solutions that stand the test of time. From our humble beginnings, we've grown into a pillar of the community, known for our unwavering dedication and exceptional craftsmanship.",
          "At Chavez Concrete Work, Inc, every project is a testament to our hands-on approach and family values. We treat each job, whether a cozy residential driveway or a sprawling commercial development, with the same level of care and attention. Our team of skilled professionals brings innovation and expertise to every pour, ensuring your vision is brought to life with precision and pride.",
          "Over the years, our commitment to staying at the forefront of industry advancements has kept us ahead of the curve. We continuously evolve, embracing new techniques and technologies to deliver the best possible results for our clients.",
          "Being based in North Carolina isn't just about our location; it's about our community. We take pride in building lasting relationships with our clients, partners, and neighbors. We're more than just a concrete company—we're a trusted partner in your projects, dedicated to helping you lay strong foundations for the future.",
          "Join us at Chavez Concrete Work, Inc as we continue to shape the landscape of North Carolina, one solid foundation at a time. Let's build something great together."
        ].map((paragraph, index) => (
          <p key={index} className="my-10 mx-auto text-lg md:text-xl leading-relaxed text-left max-w-[1000px] text-[#211f20]">
          {paragraph}
          </p>
        ))}
        </div>
      </section>

      <section className="bg-[#134d67] py-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
      {/* Left: Text content */}
      <div className="lg:w-2/3">
        <h2 className="text-2xl tracking-tight sm:text-4xl text-white mb-6">
          Built on Experience, Driven by Quality
        </h2>
        {[
          "Chavez Concrete is a locally owned and operated company based in North Carolina, specializing in commercial flatwork and concrete solutions like sidewalks, curbs, gutters, slabs, drive-thrus, and stairs. Whether you're managing a commercial build or improving an existing space, our team is ready to deliver solid results you can trust.",
          "What sets us apart is our commitment to quality and our years of hands-on experience in the field. We don’t just pour concrete — we build long-lasting partnerships by showing up on time, staying on budget, and getting the job done right. When you work with Chavez Concrete, you’re choosing a team that takes pride in every detail and values your project like it’s our own."
        ].map((paragraph, index) => (
          <p key={index} className="my-5 leading-relaxed text-white max-w-[1000px]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Right: Buttons */}
      <div className="flex flex-col gap-4 lg:items-end">
        <a
          href="/Contact"
          className="outline-[#d69126] outline-double text-white font-semibold py-4 px-8 text-lg hover:bg-[#d69126]/80 transition duration-300"
        >
          Contact Us
        </a>
        <a
          href="/Services"
          className="outline-[#d69126] outline-double text-white font-semibold py-4 px-8 text-lg hover:bg-[#d69126]/80 transition duration-300"
        >
          Services
        </a>
      </div>
    </div>
  </div>
</section>

      </main>
    </div>
    )
}
