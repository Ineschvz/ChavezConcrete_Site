"use client";
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
        <div className="absolute inset-0 flex items-center px-5 py bg-black bg-opacity-50 ">
          <div className="text-left ">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 typing-animation "> Reliable. Resilient. Ready. </h1>
        
            <a href="/Contact" className="inline-flex items-center justify-center px-5 py-3 outline-[#d69126] outline-double text-white font-semibold text-lg hover:bg-[#d69126]/80 transition duration-300 rounded ">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}

          <style jsx>{`
        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid white;
          animation: typing 4s steps(30, end), blink 0.5s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }
      `}</style>
      
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
    <div className="w-full py-12 md:py-24 lg:py-32 space-y-4">
    <h2 className="text-3xl font-semibold tracking-tighter text-center sm:text-5xl xl:text-6xl text-[#134d67]">Our Service Area</h2>
    <p className="max-w-[1000px] text-muted-foreground sm:text-lg md:text-xl text-[#211f20] mx-auto text-left"> 
      Explore the map below to see the full radius of where we have worked. Zoom out to view the entire region we cover, and see how far our expertise extends.
    </p>
    <div className="h-96 shadow-lg rounded-lg overflow-hidden py-12">
      <MapboxMap />
    </div>

    </div>
  </div>
</section>

    </main>
  )
}