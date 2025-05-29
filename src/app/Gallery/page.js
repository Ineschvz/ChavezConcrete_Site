import Image from 'next/image'

export const metadata = {
  title: "Gallery",
  description: "Chavez Concrete Work Inc. Photo Gallery",
};

export default function Gallery() {
  //created an arraay of objects that hold images 
  const images = [
    { src: '/roll1.JPG', alt: 'Gallery Image 1' },
    { src: '/roll2.JPG', alt: 'Gallery Image 2' },
    { src: '/roll3.JPG', alt: 'Gallery Image 3' },
    { src: '/roll4.JPG', alt: 'Gallery Image 4' },
    { src: '/roll5.JPG', alt: 'Gallery Image 5' },
    { src: '/IMG_2432.jpeg', alt: 'Gallery Image 8' },
    { src: '/IMG_2427.jpeg', alt: 'Gallery Image 7' },
    { src: '/IMG_2375.jpeg', alt: 'Gallery Image 7' },
    { src: '/IMG_2377.jpeg', alt: 'Gallery Image 6' },
    { src: '/roll6.jpeg', alt: 'Gallery Image 9' },
    { src: '/roll7.jpeg', alt: 'Gallery Image 10' },
    { src: '/roll8.jpeg', alt: 'Gallery Image 11' },
    { src: '/roll9.jpeg', alt: 'Gallery Image 12' },
    { src: '/roll10.jpeg', alt: 'Gallery Image 13' },


  ]

  return (
    <div className=" mx-auto py-24 md:py-24 lg:py-24 bg-white">
      <h1 className="text-[#134d67] rounded-md mb-12 py-24 text-3xl  tracking-tighter text-center sm:text-5xl xl:text-6xl/none font-semibold">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
