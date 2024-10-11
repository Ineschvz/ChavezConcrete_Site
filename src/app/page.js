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
            <a href="/Contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white text-black items-center">
        <div className="container mx-auto px-4 items-center">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
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

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="h-96">
            <MapboxMap />
          </div>
        </div>
      </section>
    </main>
  )
}