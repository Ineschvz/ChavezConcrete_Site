
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
        className={`fixed top-0 right-0 h-screen bg-slate-700 w-64 shadow-lg transform transition-transform duration-300 z-40 ${
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
            <Link href="/About" onClick={() => setIsDrawerOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/Contact" onClick={() => setIsDrawerOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/Services" onClick={() => setIsDrawerOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/Gallery" onClick={() => setIsDrawerOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="tel:+19196273839" onClick={() => setIsDrawerOpen(false)}>
              (919) 627-3839
            </Link>
          </li>
          <li className="flex space-x-4 mt-4">
            <Link href="https://www.instagram.com/chavezconcreteworkinc/" target="_blank">
              <Image src="/instagram.svg" alt="IG" width={25} height={25} />
            </Link>
            <Link
              href="https://www.facebook.com/people/Chavez-Concrete-Work-Inc/61560458476532/?mibextid=kFxxJD"
              target="_blank"
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