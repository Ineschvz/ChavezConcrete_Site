import Image from 'next/image'

export default function Gallery() {
  const images = [
    { src: '/roll1.JPG', alt: 'Gallery Image 1' },
    { src: '/roll2.JPG', alt: 'Gallery Image 2' },
    { src: '/roll3.JPG', alt: 'Gallery Image 3' },
    { src: '/roll4.JPG', alt: 'Gallery Image 4' },
    { src: '/roll5.JPG', alt: 'Gallery Image 5' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Gallery Image 6' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Gallery Image 7' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Gallery Image 8' },
  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-black rounded-md mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl xl:text-6xl/none">Image Gallery</h1>
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