import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const Services = () => {
    return (
        <div className="text-center space-y-4">
            <h1 className="bg-blue-700 text-white py-6 mx-auto px-4 text-3xl font-bold">Services</h1>
            <p> list down here blah blah blah </p>
            <div className="grid grid-cols-2 gap-6">  
            
                <div className="">
                    <Image 
                        src='/DSC01589.jpg' 
                        width="550"
                        height="550"
                        className= "mx-auto object-cover "
                    />
                </div>  
                
                <div className="bg-white">
                    <p className="text-black">Pavement and Pathways</p>
                    <p className="flex justify-center text-black">
                        <FaCheck /> Side Walks
                    </p>
                    <p className="flex justify-center text-black">
                        <FaCheck /> Drive Thrus
                    </p>
                </div>

                <div className="bg-white">
                    <p className="text-black">Structural Elements</p>
                    <p className="flex justify-center text-black">
                        <FaCheck /> Curbs
                    </p>
                    <p className="flex justify-center text-black">
                        <FaCheck /> Stairs
                    </p>
                </div>

                <div>
                    <Image 
                        src='/DSC01588.jpg' 
                        width="550"
                        height="550"
                        className= "mx-auto object-cover"
                    />
                </div>
            </div>

            <div className="text-muted-foreground md:text-xl text-center">
                <p className="flex justify-center">
                    <FaCheck /> Gutters
                </p>
                <p className="flex justify-center">
                    <FaCheck /> Slabs
                </p>

                <div className="mt-6 flex justify-center">
                    <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Contact us 
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
