


import React from "react"
// import Map from "../components/map";
import ContactForm from "./form"; 
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";




function Contact ()  {
    return (
        <div >
            <header className="text-center bg-blue-700 text-white py-6 text-3xl font-bold">  Get in touch!  </header>

          <div className="container mx-auto px-4 py-12 bg-white">
            <div className=" pb-4 ">
              <p className="font-bold text-3xl text-center font-bold  sm:text-5xl xl:text-6xl/none text-black">Contact Info </p>

              <div className="space-y-1 text-center text-muted-foreground py-12">
    
                <p className="max-w-[600px] text-black md:text-xl mx-auto flex justify-center">  <MdEmail /> Email: <a href='mailto:chavezconcreteworkinc@yahoo.com' className="text-blue-500 hover:underline">chavezconcreteworkinc@yahoo.com </a> </p>
                <p className="max-w-[600px] text-black md:text-xl mx-auto flex justify-center"> <FaPhone />Phone Number: <a href="tel:+919-624-7744" className="text-blue-500 hover:underline">919-624-7744</a> </p>
                <p className="max-w-[600px] text-black md:text-xl mx-auto flex justify-center"> <FaLocationDot />Address: <a href="https://www.google.com/maps/place/2231+New+Hope+Church+Rd,+Raleigh,+NC+27604/@35.8363665,-78.6028574,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac591a75c890ff:0xa651cae472a9d72c!8m2!3d35.8363665!4d-78.6002825!16s%2Fg%2F11c5n5jx17?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">2231 New Hope Church Rd, Raleigh, NC 27604</a> </p>
                <p>MAP INSERTED HERE</p>
                </div>
            </div> 
            <div className="">
             <p className="font-bold text-3xl text-black text-center font-bold  sm:text-5xl xl:text-6xl/none bg-white"> Contact Form </p>
             <div className="text-center">
            <ContactForm></ContactForm>
             </div>
             
            </div>
          </div>
    
        </div>
      )   
}
 
export default Contact;