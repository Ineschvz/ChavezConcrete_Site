// import React from "react"


// const AboutUs = () => {
//     return (
//         <section className="">
//                 <div className=" ">
//         <div className="text-center space-y-4">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//             Welcome to Chavez Concrete
//           </h2>
//           <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//             Chavez Concrete is a mission, vision, and core values. We strive to create your vision. With a dedicated team and innovative solutions, we are committed to keep you all happy.
//           </p>
//           <div className="mt-6">
//             <a href="/about" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
//               Learn more about us
//             </a>
//           </div>
//         </div>
//       </div>
//         </section>
//     )
// }

// export default AboutUs; 


// import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to Chavez Concrete
          </h2>
          <p className="max-w-[700px] text-muted-foreground sm:text-lg md:text-xl">
            Chavez Concrete is driven by our mission, vision, and core values. We strive to bring your vision to life. With a dedicated team and innovative solutions, we are committed to ensuring your complete satisfaction.
          </p>
          <a href="/About" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
//               Learn more about us
//             </a>
        </div>
      </div>
    </section>
  )
}