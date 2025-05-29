"use client"

import React from "react"
import Link from "next/link"
import { Facebook } from "lucide-react"


//object created to hold links to navigate through pages 
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Contact", label: "Contact" },
  { href: "/Services", label: "Services" },
  { href: "/Gallery", label: "Gallery" },
]

export default function Footer() {
  return (
    <footer className="text-white py-12  bg-sky-950  backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <Link
              href="/Contact"
              className="inline-flex items-center justify-center px-5 py-3 outline-[#d69126] rounded outline-double text-white font-semibold hover:bg-[#d69126]/80 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          <nav aria-labelledby="footer-navigation">
            <h2 id="footer-navigation" className="text-lg font-semibold mb-4">Navigate</h2>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#d69126] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <a
              href="https://www.facebook.com/people/Chavez-Concrete-Work-Inc/61560458476532/?mibextid=kFxxJD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-[#d69126] transition-colors duration-200"
            >
              <Facebook size={24} />
              <span>Facebook</span>
            </a>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Office Location</h2>
            <p>7223 Russell Rd Durham NC 27712</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Chavez Concrete Work Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}