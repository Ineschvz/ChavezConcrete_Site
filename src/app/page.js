//page.js will be our homepage
//we will add slide show, short about us and some testimonials 

import Image from "next/image";
import AboutUs from "./components/aboutus"
import Sponsors from "./components/sponsors"
import Slider from "./components/slider"
import MapboxMap from "./components/map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-gray-500">

    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
  
    </div>
    <div className=" w-full min-h-screen grid place-items-center">
      <Slider/>
    </div>
    <div>
    <AboutUs/>
    </div>
    <div>
    <Sponsors/>
    </div>
    <div>
    <MapboxMap/>
    </div>
  </main>
   
  );
}
