"use client"

import React from "react"
import Link from "next/link"
import { Facebook } from "lucide-react"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          <nav aria-labelledby="footer-navigation">
            <h2 id="footer-navigation" className="text-lg font-semibold mb-4">Navigate</h2>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-indigo-400 transition-colors duration-200">
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
              className="inline-flex items-center space-x-2 text-white hover:text-indigo-400 transition-colors duration-200"
            >
              <Facebook size={24} />
              <span>Facebook</span>
            </a>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Office Location</h2>
            <p>123 Concrete Ave, Building City, ST 12345</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Chavez Concrete Work Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}