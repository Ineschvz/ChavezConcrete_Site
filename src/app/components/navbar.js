"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";



const Navbar = () => {

  return (
    <div className="navbar bg-sky-950 bg-opacity-75 flex justify-between items-center p-4 ">
    <div className="max-w-screen-xl">
    <Link href="/" legacyBehavior>
          <a className="rounded-full">
            <Image src="/CC.jpg" alt="Chavez Concrete Logo" width={75} height={45} className="rounded-full" />
          </a>
        </Link>
    </div>
    <div className="">
      <ul className="flex space-x-4">
        <li className="flex space-x-4 text-xl">
          <Link href="/about" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              About
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              Contact
            </a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              Services
            </a>
          </Link>
          <Link href="/gallery" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              Gallery
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </div>

  );
};


export default Navbar;