
// //This is my contact page which contains design and contactform 

// import React from "react"
// // import Map from "../components/map";
// import ContactForm from "./form"; 
// import { MdEmail } from "react-icons/md";
// import { FaPhone } from "react-icons/fa6";
// import { FaLocationDot } from "react-icons/fa6";




// function Contact ()  {
//     return (
//         <div >
//             {/* <header className="text-center bg-blue-700 text-white py-6 text-3xl font-bold">  Get in touch!  </header> */}

//           <div className="container mx-auto px-4 py-12 bg-white">
//             <div className=" pb-4 ">
//               <p className="font-bold text-3xl text-center font-bold  sm:text-5xl xl:text-6xl/none text-black py-">Contact Chavez Concrete </p>
//               <p className="text-center  text-black"> We hope that if you made it to this page you have serious question and would like to contract us! </p>

//               <div className="space-y-1 text-center text-muted-foreground py-12">
    
//                 <p className="max-w-[600px] text-black md:text-xl mx-auto flex justify-center">  <MdEmail /> Email: <a href='mailto:chavezconcreteworkinc@yahoo.com' className="text-blue-500 hover:underline">chavezconcreteworkinc@yahoo.com </a> </p>
//                 <p className="max-w-[600px] text-black md:text-xl mx-auto flex justify-center"> <FaPhone />Phone Number: <a href="tel:+919-624-7744" className="text-blue-500 hover:underline">919-624-7744</a> </p>
//                 <p className="max-w-[600px] text-black md:text-xl mx-auto flex justify-center"> <FaLocationDot />Address: <a href="https://www.google.com/maps/place/2231+New+Hope+Church+Rd,+Raleigh,+NC+27604/@35.8363665,-78.6028574,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac591a75c890ff:0xa651cae472a9d72c!8m2!3d35.8363665!4d-78.6002825!16s%2Fg%2F11c5n5jx17?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">2231 New Hope Church Rd, Raleigh, NC 27604</a> </p>
//                 <p>MAP INSERTED HERE</p>
//                 </div>
//             </div> 
//             {/* <div className="">
//              <p className="font-bold text-3xl text-black text-center font-bold  sm:text-5xl xl:text-6xl/none bg-white"> Contact Form </p>
//              <div className="text-center">
//             <ContactForm></ContactForm>
//              </div>
             
//             </div> */}
//           </div>
    
//         </div>
//       )   
// }
 
// export default Contact; 
'use client'

import React from "react"
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const contactInfo = [
    { 
      icon: Mail, 
      text: 'chavezconcreteworkinc@yahoo.com', 
      href: 'mailto:chavezconcreteworkinc@yahoo.com',
      id: 'email' 
    },
    { 
      icon: Phone, 
      text: '919-624-7744', 
      href: 'tel:+919-624-7744',
      id: 'phone' 
    },
    { 
      icon: MapPin, 
      text: '2231 New Hope Church Rd, Raleigh, NC 27604', 
      href: 'https://www.google.com/maps/place/2231+New+Hope+Church+Rd,+Raleigh,+NC+27604/',
      id: 'address' 
    },
  ]

  return (
    <div className="min-h-screen bg-white py-12">
      <div className=" mx-auto px-4">
        <motion.h1 
          className="text-3xl font-bold tracking-tighter text-center sm:text-5xl xl:text-6xl/none text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Chavez Concrete
        </motion.h1>
        <motion.p 
          className="max-w-[600px] text-muted-foreground md:text-xl text-center mx-auto text-black py-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We hope that if you made it to this page you have serious questions and would like to contact us!
        </motion.p>

        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 ">
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, text, href, id }) => (
                <motion.div 
                  key={id}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="h-6 w-6 text-blue-600" />
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                    {text}
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.8105686681054!2d-78.60245908427!3d35.83636648016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac591a75c890ff%3A0xa651cae472a9d72c!2s2231%20New%20Hope%20Church%20Rd%2C%20Raleigh%2C%20NC%2027604!5e0!3m2!1sen!2sus!4v1635186524500!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}