// import React from "react"
// import Image from "next/image";


// export default function Sponsors() {

//         const companyLogos = [
//         "/millsLogo.png","/neal-logo.png"
    
//         // Add more company logos as needed
//     ];
    
//   return (

//     <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
//            We Work alongside 
//            </h2>
//            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 ">
//                        {companyLogos.map((logo, index) => (
//                            <div key={index} className="flex justify-center">
//                                 <img src={logo} alt={`Company ${index + 1}`} className="h-12 md:h-16 lg:h-20 " />
//                            </div>
//                        ))}
//                        </div>
//         </div>

//       <div className="container space-y-12 px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 ">
//           <div className="space-y-2">
//             <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
//             <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//               Hear from our satisfied customers about their experience with our services.
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-muted p-6 text-center">
//             <Image className="border">
//             </Image>
//             <blockquote className="text-lg font-semibold leading-snug">
//               "Chavez Concrete has been working on our projects for over 10 years. They are great to work with, and show up to our projects ready and willing to get the job done. They continue to support us with their quality of concrete finish work.  We look forward to many more years of team work together."
//             </blockquote>
//             <div className="font-semibold">Jennie Maley</div>
//             <div className="text-sm text-muted-foreground">Administrative Assistant Mills Construction Company of SC., Inc.</div>
//           </div> 
//           <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-muted p-6 text-center">
//             <Image className="border">
//             </Image>
//             <blockquote className="text-lg font-semibold leading-snug">
//             "As a Commercial Site and Utility Contractor, we have been working with Chavez for several years. They are very responsive, knowledgeable, and accommodating. From flat work to curb & gutter, Chavez always does a terrific job and we will continue to use them in the future on our projects."
//             </blockquote>
//             <div className="font-semibold">Courtney Neal</div>
//             <div className="text-sm text-muted-foreground">Neal Construction & Consulting, Inc.</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// } 
import Image from "next/image";

const companyLogos = [
  { src: "/millsLogo.png", alt: "Mills Construction Company Logo" },
  { src: "/neal-logo.png", alt: "Neal Construction & Consulting Logo" },
  // Add more company logos as needed
];

const testimonials = [
  {
    quote: "Chavez Concrete has been working on our projects for over 10 years. They are great to work with, and show up to our projects ready and willing to get the job done. They continue to support us with their quality of concrete finish work. We look forward to many more years of team work together.",
    author: "Jennie Maley",
    title: "Administrative Assistant Mills Construction Company of SC., Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "As a Commercial Site and Utility Contractor, we have been working with Chavez for several years. They are very responsive, knowledgeable, and accommodating. From flat work to curb & gutter, Chavez always does a terrific job and we will continue to use them in the future on our projects.",
    author: "Courtney Neal",
    title: "Neal Construction & Consulting, Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function Sponsors() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          We Work Alongside
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center mb-16">
          {companyLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={80}
              className="h-12 md:h-16 lg:h-20 w-auto object-contain "
            />
          ))}
        </div>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers about their experience with our services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-muted p-6 text-center">
               
               <blockquote className="text-lg font-semibold leading-snug">
  &quot;{testimonial.quote}&quot;
</blockquote>

                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}