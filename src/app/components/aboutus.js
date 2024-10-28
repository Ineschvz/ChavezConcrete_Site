export default function AboutUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to Chavez Concrete
          </h2>
          <p className="max-w-[700px] text-muted-foreground sm:text-lg md:text-xl">
            Chavez Concrete is driven by our mission, vision, and core values. We strive to bring your vision to life. With a dedicated team and innovative solutions, we are committed to ensuring your complete satisfaction.
          </p>
          <a href="/About" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Learn more about us
          </a>
        </div>
      </div>
    </section>
  );
}
