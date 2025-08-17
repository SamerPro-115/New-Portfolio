import "../assets/hero.css"


export function Hero() {
  return (
    <section className="min-h-screen">
      <div className="relative hero-container">
        <div className="relative z-10">
          <div className="left-side-hero flex">
            <div className="text-container max-w-xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Hi, I'm <span className="">Samer</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 md:mb-8 mb-3 leading-relaxed ">
                 A {" "}
                <span className="font-semibold text-white">web developer. </span>
                Inspired by the worlds of animation, where design, story, and mystery come alive.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Scroll down
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <img
          src="/Gojo.jpg"
          alt="Hero image"
          className="w-full h-full object-cover hero-image"
        />
      </div>
    </section>
  );
}
