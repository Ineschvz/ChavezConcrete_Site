// //page.js will be our homepage
// //we will add slide show, short about us and some testimonials 

// import Image from "next/image";
// import AboutUs from "./components/aboutus"
// import Sponsors from "./components/sponsors"
// import Slider from "./components/slider"
// import MapboxMap from "./components/map";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-gray-500">

//     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
  
//     </div>
//     <div className=" w-full min-h-screen grid place-items-center">
//       <Slider/>
//     </div>
//     <div>
//     <AboutUs/>
//     </div>
//     <div>
//     <Sponsors/>
//     </div>
//     <div>
//     <MapboxMap/>
//     </div>
//   </main>
   
//   );
// }


import Image from "next/image"
import AboutUs from "./components/aboutus"
import Slider from "./components/slider"
import Sponsors from "./components/sponsors"
import MapboxMap from "./components/map"


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        <Slider />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Chavez Concrete Work Inc</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Quality Concrete Solutions for Your Projects</p>
            <a href="/Contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white text-black items-center">
        <div className="container mx-auto px-4 items-center">
  
          <AboutUs />
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Residential Concrete', 'Commercial Concrete'].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
            </section> */}
                  {/* Sponsors Section */}

      <section className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <Sponsors />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-black">Our Service Area</h2>
    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black text-center">
      Explore the map below to see the full radius of where we've worked. Zoom out to view the entire region we cover, and see how far our expertise extends.
    </p>
    <div className="h-96 shadow-lg rounded-lg overflow-hidden py-12">
      <MapboxMap />
    </div>
  </div>
</section>

    </main>
  )
}