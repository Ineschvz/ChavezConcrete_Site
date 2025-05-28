"use client";
import Image from "next/image";

const companyLogos = [
  { src: "/mills-logo.png", alt: "Mills Construction Company Logo" },
  { src: "/neal-logo.png", alt: "Neal Construction & Consulting Logo" },
  // Add more company logos as needed
];

const testimonials = [
  {
    quote: "Chavez Concrete has been working on our projects for over 10 years. They are great to work with, and show up to our projects ready and willing to get the job done. They continue to support us with their quality of concrete finish work. We look forward to many more years of team work together.",
    author: "-Jennie Maley",
    title: "Administrative Assistant Mills Construction Company of SC., Inc.",
    image: "/mills-logo.png",
  },
  {
    quote: "As a Commercial Site and Utility Contractor, we have been working with Chavez for several years. They are very responsive, knowledgeable, and accommodating. From flat work to curb & gutter, Chavez always does a terrific job and we will continue to use them in the future on our projects.",
    author: "-Courtney Neal",
    title: "Neal Construction & Consulting, Inc.",
    image: "/neal-logo.png",
  },
];

export default function Sponsors() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-left space-y-4">
            <h2 className="text-3xl font-semibold tracking-tighter text-center sm:text-5xl xl:text-6xl text-[#134d67]">
              What Our Clients Say
            </h2>
            <p className="max-w-[1000px] text-[#211f20] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {"Don't just take our word for it. Hear from our satisfied clients about their experience with our services."}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <div key={i} className="text-left bg-muted p-6 space-y-4 border border-gray-200 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <Image src={t.image} alt={t.author} width={60} height={60} className="rounded-full bg-green-900" />
                  <Image src="/5stars.png" alt="5 stars" width={150} height={30} />
                </div>
                <p className="text-lg font-semibold">"{t.quote}"</p>
                <div className="font-semibold">{t.author}</div>
                <div className="text-base text-muted-foreground">{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}