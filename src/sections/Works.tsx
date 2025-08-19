import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

const works = [
  {
    name: "Mohtaway",
    link: "https://mohtaway.app",
    img: "/works/Mohtaway.png",
    desc: "Content-sharing platform with subscription features. You can upload your video/book/podcast and sell it at Mohtaway marketplace.",
  },
  {
    name: "FastFlow",
    link: "https://fastflow.sa",
    img: "/works/fastflow.png",
    desc: "A unique portfolio website for exceptional events. Creatively crafted to showcase innovation, highlighting a one-of-a-kind company.",
  },
  {
    name: "Wakan",
    link: "https://wa-kan.com",
    img: "/works/Wakan.png",
    desc: "Marketing company portfolio site, vibrant colors reflecting brand identity and fully responsive with smooth scrolling.",
  },
  {
    name: "Trader's Tools",
    link: "https://chromewebstore.google.com/detail/ljdomcoabaomadeckhgmdlbjdpmcgdhj?utm_source=item-share-cb",
    img: "/works/ex.png",
    desc: "A React-based Chrome extension for traders with simple tools like a calculator and to-do-list, etc..",
  },
  {
    name: "Learning Corner",
    link: "https://www.learningcorner.net",
    img: "/works/learncorner.png",
    desc: "A learning platform for students to connect with their own private tutor. With customizing Msaaq platform pages using embedded CSS and HTML to provide a better UI.",
  },
];

export function Works() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
 <section className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10 lg:mb-12 text-white max-w-4xl  ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">My Works</h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl  lg:text-2xl text-gray-300 leading-relaxed max-w-2xl ">
          Some of the projects I've worked on, simple, fun, and creative.
        </p>
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl mx-auto">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {works.map((project, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2 md:pl-4 hover:-mt-1 sm:hover:-mt-2 transition-all duration-300"
              >
                <div className="group relative border border-accent rounded-xl overflow-hidden h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.img || "/placeholder.svg"}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-64 object-cover brightness-90 group-hover:scale-105 transition-transform duration-300"
                      alt={project.name}
                    />

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Button variant="link" className="text-lg sm:text-xl text-white font-medium">
                        Visit Site
                      </Button>
                    </a>
                  </div>

                  {/* Content Container */}
                  <div className="p-4 sm:p-5 border border-accent border-t-0 flex-1 flex flex-col">
                    <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{project.name}</h2>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base flex-1">{project.desc}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden sm:block">
            <CarouselPrevious variant="secondary" />
            <CarouselNext variant="secondary"  />
          </div>
        </Carousel>
      </div>

      <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-200 ${
              current === i + 1 ? "bg-white w-6 sm:w-8" : "bg-gray-500 hover:bg-gray-400 w-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>

  );
}