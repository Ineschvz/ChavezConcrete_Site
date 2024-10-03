
'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import the Image component from Next.js


const imageList = [
  { src: "/DSC01671.jpg", alt: "1 Slide" },
    { src: "/DSC01560.jpg", alt: "2 Slide" },
    { src: "/DSC01529.jpg", alt: "3 Slide" },
    { src: "/DSC01503.jpg", alt: "4 Slide" },
];

const Slider = () => {
    const [activeImage, setActiveImage] = useState(0);

    const clickNext = () => {
        setActiveImage((prevActiveImage) => (prevActiveImage === imageList.length - 1 ? 0 : prevActiveImage + 1));
    };
    const clickPrev = () => {
        setActiveImage((prevActiveImage) => (prevActiveImage === 0 ? imageList.length - 1 : prevActiveImage - 1));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage]);

    return (
      <div className=" top-0 left-0 w-full overflow-hidden container">
            <div className="flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 ">
                {imageList.map((image, index) => (
                    <div key={index} className={`object-cover transition-all duration-500 ease-in-out ${index === activeImage ? 'block' : 'hidden'}`}>
                        <Image
                            src={image.src} // Source path of the image
                            alt={image.alt} // Alt text for the image
                            layout="fill" // Make the image fill the container
                            objectFit="cover" // Ensure the image covers the container
                            className="absolut w-full h-full "
                        />
                          <div className="absolute bottom-0 right-0 z-10">
                <img src="/translogo.png" alt="Logo" className="max-w-[300px] h-auto" />
            </div>
                    </div>
                ))}
            </div>
        </div>
      
           
    );
};

export default Slider;
