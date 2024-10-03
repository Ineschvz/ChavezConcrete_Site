import React from "react" 
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const Services = () => {
    return (
        <div className="text-center space-y-4">
            <h1 className="bg-blue-700 text-white py-6 mx-auto px-4 text-3xl font-bold"> Services </h1>
            <div className="grid grid-cols-2 gap-6 "> 
            <div className="space-y-2">
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"> Commercial </h2>
            <Image 
          src='/DSC01589.jpg' 
          width="550"
          height="550"
          className= "mx-auto aspect-video overflow-hidden object-cover"></Image>
            
            </div>
            <div>
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"> Residential</h2>
            <Image 
          src='/DSC01588.jpg' 
          width="550"
          height="550"
          className= "mx-auto aspect-video overflow-hidden rounded-xl object-cover "></Image>
            </div>

            </div>
            <div className="text-muted-foreground md:text-xl text-center">

<p className="flex justify-center">   <FaCheck /> Side Walks </p>
<p className="flex justify-center">   <FaCheck /> Curbs </p>
<p className="flex justify-center">   <FaCheck /> Gutters </p>
<p className="flex justify-center">   <FaCheck /> Slabs </p>
<p className="flex justify-center">   <FaCheck /> Drive Thrus </p>
<p className="flex justify-center">   <FaCheck /> Stairs</p>

<div className="mt-6 flex justify-center">
 <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
  Contact us 
 </a>
</div>

</div>
        </div>
      )   

}

export default Services; 