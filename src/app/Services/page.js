import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { ChevronRight, Hammer, Building2, Ruler } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Pavement and Pathways",
      description: "We specialize in creating durable and attractive pavements and pathways.",
      icon: <Ruler className="h-8 w-8 mb-2 text-blue-600" />,
      items: ["Side Walks", "Drive Thrus"],
      image: "/Sidewalk.jpeg",
    },
    {
      title: "Structural Elements",
      description: "Our expertise extends to various structural concrete elements.",
      icon: <Building2 className="h-8 w-8 mb-2 text-blue-600" />,
      items: ["Curbs", "Stairs"],
      image: "/curb.jpeg",
    },
    {
      title: "Additional Services",
      description: "We offer a range of additional concrete services to meet your needs.",
      icon: <Hammer className="h-8 w-8 mb-2 text-blue-600" />,
      items: ["Gutters", "Slabs"],
      image: "/Gutter.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-center text-4xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 py-6 rounded-md mb-12">
        Our Services
      </h1>
      <p className="text-xl text-center text-gray-500 mb-16 max-w-2xl mx-auto">
        Providing top-quality concrete solutions for all your construction needs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
      <div className="mt-16 text-center">
        <Link href="/Contact" passHref>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg flex items-center justify-center transition-all duration-300">
            Contact Us
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
