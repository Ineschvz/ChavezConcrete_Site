
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sky-950 bg-opacity-50 backdrop-blur-md" style={{ height: '165px' }}>
      {/* Mobile Nav */}
      <div className="flex md:hidden items-center justify-between px-4 py-4">
        <Link href="/">
          <Image src="/Badge Logo@300x.png" alt="Logo" width={100} height={100} className="rounded-full" />
        </Link>
        <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          <Menu size={28} color="white" />
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen bg-sky-950 bg-opacity-100 w-64 shadow-lg transform transition-transform duration-300 z-40 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-bold text-xl">Menu</span>
          <button onClick={() => setIsDrawerOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4 text-lg">
          <li>
            <Link href="/About" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#d69126]">
              About
            </Link>
          </li>
          <li>
            <Link href="/Contact" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#d69126]">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/Services" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#d69126]">
              Services
            </Link>
          </li>
          <li>
            <Link href="/Gallery" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#d69126]">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="tel:+19196273839" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#d69126]">
              (919) 627-3839
            </Link>
          </li>
          <li className="flex space-x-4 mt-4">
            <Link href="https://www.instagram.com/chavezconcreteworkinc/" target="_blank" className="hover:text-[#d69126]">
              <Image src="/instagram.svg" alt="IG" width={25} height={25} />
            </Link>
            <Link
              href="https://www.facebook.com/people/Chavez-Concrete-Work-Inc/61560458476532/?mibextid=kFxxJD"
              target="_blank"
              className="hover:text-[#d69126]"
            >
              <Image src="/facebook (1).svg" alt="FB" width={25} height={25} />
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center relative">
            <ul className="flex items-center space-x-8">
              <li className="text-white hover:text-[#d69126] text-lg font-medium">
                <Link href="/About">About</Link>
              </li>
              <li className="text-white hover:text-[#d69126] text-lg font-medium">
                <Link href="/Contact">Contact</Link>
              </li>
              <Link href="/" className="mx-4">
                <Image
                  src="/Badge Logo@300x.png"
                  alt="Chavez Concrete Logo"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </Link>
              <li className="text-white hover:text-[#d69126] text-lg font-medium">
                <Link href="/Services">Services</Link>
              </li>
              <li className="text-white hover:text-[#d69126] text-lg font-medium">
                <Link href="/Gallery">Gallery</Link>
              </li>
            <li className="absolute top-0 right-0 lg:right-4 flex items-center space-x-4">
              <Link href="https://www.instagram.com/chavezconcreteworkinc/" target="_blank" className="hidden sm:block">
                <Image src="/instagram.svg" alt="Instagram" width={25} height={25} />
              </Link>
              <Link
                href="https://www.facebook.com/people/Chavez-Concrete-Work-Inc/61560458476532/?mibextid=kFxxJD"
                target="_blank"
                className="hidden sm:block"
              >
                <Image src="/facebook (1).svg" alt="Facebook" width={25} height={25} />
              </Link>
              <button className="bg-[#d69126] rounded-full py-2 px-2 flex items-center">
                <Image
                  src="/telephone-phone-mobile-cellphone.svg"
                  alt="Phone"
                  width={25}
                  height={25}
                  className="mr-2"
                />
                <Link
                  href="tel:+19196273839"
                  className="text-white hover:text-sky-950 text-lg font-medium whitespace-nowrap"
                >
                  (919) 627-3839
                </Link>
              </button>
            </li>
            </ul>

            {/* Social and phone */}
          </div>
        </div>
      </nav>
    </header>
  )
}







      {/* <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="rounded-full">
            <Image src="/Badge Logo.jpg" alt="Chavez Concrete Logo" width={75} height={45} className="rounded-full" />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-white hover:text-blue-500 transition-colors duration-200 text-lg font-medium"
              >
                {item.title}
              </Link>
            ))}
            <a href= "tel:+919-627-3839" className="text-white hover:text-blue-500 transition-colors duration-200 text-lg font-medium">
            919-627-3839
            </a>
            
            <a href="https://www.instagram.com/chavezconcreteworkinc/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.facebook.com/people/Chavez-Concrete-Work-Inc/61560458476532/?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-blue-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-white hover:text-blue-500 transition-colors duration-200 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
        
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-200">
                
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Chavez-Concrete-Work-Inc/61560458476532/?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )} */}
