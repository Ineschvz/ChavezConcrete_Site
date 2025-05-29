export default function AboutUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-left">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#134d67]">
            Welcome to Chavez Concrete
          </h2>
          <p className="max-w-[1000px] text-muted-foreground sm:text-lg md:text-xl text-[#211f20]">
            Chavez Concrete is driven by our mission, vision, and core values. We strive to bring your vision to life. With a dedicated team and innovative solutions, we are committed to ensuring your complete satisfaction.
          </p>
          <a href="/About" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base text-[#134d67] font-medium rounded-md outline-[#d69126] outline-double font-semibold text-lg hover:bg-[#d69126]/80 transition duration-300 rounded">
            Learn more about us
          </a>
        </div>
      </div>
    </section>
  );
}
