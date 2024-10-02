import React from "react"


const AboutUs = () => {
    return (
        <section className="">
                <div className=" ">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Welcome to Chavez Concrete
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Chavez Concrete is a mission, vision, and core values. We strive to create your vision. With a dedicated team and innovative solutions, we are committed to keep you all happy.
          </p>
          <div className="mt-6">
            <a href="/about" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Learn more about us
            </a>
          </div>
        </div>
      </div>
        </section>
    )
}

export default AboutUs;