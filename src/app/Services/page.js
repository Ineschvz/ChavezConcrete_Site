import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { ChevronRight, Hammer, Building2, Ruler } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "Services",
  description: "Chavez Concrete Work Inc. provides a wide range of concrete services to help you complete your construction projects.",
};
const Services = () => {
  const services = [
    {
      title: "Pavement and Pathways",
      description: "We specialize in creating durable and attractive pavements and pathways.",
      icon: <Ruler className="h-8 w-8 mb-2 text-[#d69126] " />,
      items: ["Side Walks", "Drive Thrus"],
      image: "/Sidewalk.jpeg",
    },
    {
      title: "Structural Elements",
      description: "Our expertise extends to various structural concrete elements.",
      icon: <Building2 className="h-8 w-8 mb-2 text-[#d69126]" />,
      items: ["Curbs", "Stairs"],
      image: "/curb.jpeg",
    },
    {
      title: "Additional Services",
      description: "We offer a range of additional concrete services to meet your needs.",
      icon: <Hammer className="h-8 w-8 mb-2 text-[#d69126]" />,
      items: ["Gutters", "Slabs"],
      image: "/Gutter.jpg",
    },
  ];
  
  
  return (
    <div className=" mx-auto py-24 md:py-24 lg:py-24 bg-white">
      <div className="py-24">
      <h1 className="text-3xl font-semibold tracking-tighter text-center sm:text-5xl xl:text-6xl/none text-[#134d67]">
        Our Services
      </h1>
      <p className="max-w-[1000px] text-[#211f20] md:text-xl text-left mx-auto py-10">
        Chavez Concrete Work Inc. provides a wide range of concrete services to help you complete your construction projects. Our team of experts is dedicated to delivering high-quality workmanship and exceptional customer service. Whether you need pavement, structural elements, or additional services, we have the skills and experience to meet your needs.
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center bg-gray-100 rounded-full w-16 h-16 mb-6 mx-auto">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{service.title}</h2>
              <Image
                src={service.image}
                width={550}
                height={550}
                alt={service.title}
                className="w-full h-64 object-cover rounded-md mb-6"
              />
              <p className="text-center text-gray-500 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center justify-center text-gray-800">
                    <FaCheck className="mr-2 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          
          </div>
        ))}
      </div>
      <div className=" text-center">
        <Link href="/Contact" passHref>
          <button className="outline-[#d69126] outline-double text-[#134d67]  font-semibold py-4 px-8 text-lg hover:bg-[#d69126]/80 transition duration-300 rounded">
            Contact Us
           
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
