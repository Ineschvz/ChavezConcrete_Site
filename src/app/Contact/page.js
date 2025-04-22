
"use client"

import React from "react"
import { Mail, Phone, MapPin } from 'lucide-react'
import Head from "next/head"
import { motion } from 'framer-motion'
import Form from "./form"



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
      text: '919-627-3839', 
      href: 'tel:+919-627-3839',
      id: 'phone' 
    },
    { 
      icon: MapPin, 
      text: '7223 Russell Rd Durham NC 27712', 
      href: 'https://www.google.com/maps?q=7223+Russell+Rd,+Durham,+NC+27712',
      id: 'address' 
    },
  ]

  return (
    <div className="min-h-screen bg-white py-24 md:py-36 lg:py-48" id="contact">
      <Head>
        <title>Contact | Chavez Concrete</title>
        <meta name="contact chavez concrete" content="Contact Chavez Concrete " />
        <meta name="keywords" content="SEO, keywords, Next.js" />
      </Head>
      
      <div className="mx-auto px-4">
        
        <motion.h1 
          className="text-3xl font-bold tracking-tighter text-center sm:text-5xl xl:text-6xl text-black"
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

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Form />
          </div>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.1363000006823!2d-78.927474!3d36.0731485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acaaf1b2e3cd47%3A0x7bfb5b8e00c0d8fa!2s7223%20Russell%20Rd%2C%20Durham%2C%20NC%2027712!5e0!3m2!1sen!2sus!4v1696368396393!5m2!1sen!2sus"
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
    </div>
  )
}

