//will be created to help the audience navigate 
//the footer will be added to the layout and will be on everypage
//will include contact info (contact us here), Social media, and another way to get to the pages taht are on the navbar 
"use client";

import Link from "next/link"
 import React from "react"
 import {
  FacebookIcon, 
} from 'next-share'; 


 const Footer = () =>{
    return(
        <footer className="flex flex-wrap justify-evenly items-start bg-gray-800 text-white py-6">
      <div className="flex flex-col items-start space-y-4">
        
 <button className="mt-6">
                        <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Contact Us
                        </a>
                    </button>
                  
      </div>

      <div>
        <li className="flex flex-col items-start space-y-4">
        <a style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}> Navigate </a>
        <Link href="/" legacyBehavior >
          <a>Home</a>
        </Link>
        <Link href="/about" legacyBehavior >
          <a>About</a>
        </Link>
        <Link href="/contact" legacyBehavior >
          <a>Contact</a>
        </Link>
        <Link href="/services" legacyBehavior >
          <a>Services</a>
        </Link>
        <Link href="/testimonials" legacyBehavior >
          <a>Testimonials</a>
        </Link>
        </li>
      </div>
      <div className="flex flex-col items-start space-y-4 vertical-line">
       Follow us
        <a href="https://www.facebook.com/people/Chavez-Concrete-Work-Inc/61560458476532/?mibextid=kFxxJD">
        <FacebookIcon size={32} round /> 
        </a>

      </div>
      <div className="flex flex-col items-start space-y-4">
        Office Location
      </div>
      </footer>
  
    
    )
 } 

 export default Footer;