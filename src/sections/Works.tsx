import React, { useState } from 'react';


const works = [
   {
    name: "Wakan",
    link: "https://wa-kan.com",
    img: "/works/Wakan.png",
    desc: "Marketing company portfolio site, vibrant colors reflecting brand identity and fully responsive with smooth scrolling.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2025"
  },
   {
    name: "Mohtaway",
    link: "https://mohtaway.app",
    img: "/works/Mohtaway.png",
    desc: "Content-sharing platform with subscription features. You can upload your video/book/podcast and sell it at Mohtaway marketplace.",
    tech: ["JavaScript", "Node.js", "MongoDB", "GCP"],
    year: "2024 - 2025"
  },

  {
    name: "FastFlow",
    link: "https://fastflow.sa",
    img: "/works/fastflow.png",
    desc: "A unique portfolio website for exceptional events. Creatively crafted to showcase innovation, highlighting a one-of-a-kind company.",
    tech: ["JavaScript", "Bootstrap", "Animate.css"],
    year: "2024"
  },
  
    {
    name: "Trader's Tools",
    link: "https://chromewebstore.google.com/detail/ljdomcoabaomadeckhgmdlbjdpmcgdhj?utm_source=item-share-cb",
    img: "/works/ex.png",
    desc: "A React-based Chrome extension for traders with simple tools like a calculator and to-do-list, etc.",
    tech: ["React", "Chrome API", "JavaScript"],
    year: "2025"
  },
 
  {
    name: "Learning Corner",
    link: "https://www.learningcorner.net",
    img: "/works/learncorner.png",
    desc: "A learning platform for students to connect with their own private tutor. With customizing Msaaq platform pages using embedded CSS and HTML to provide a better UI.",
    tech: ["HTML", "CSS", "Custom Integration"],
    year: "2023 - present"
  },
];

export function Works() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 50px, white 50px, white 51px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, white 50px, white 51px)
          `,
        }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-white"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 10}%`,
              animation: `float ${4 + i}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute -inset-6 bg-white transform -rotate-2 opacity-10"></div>
            <h2 className="relative text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              WORKS
            </h2>
          </div>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Take a look on what I've built for different customers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {works.map((work, index) => (
            <div
              key={work.name}
              className="group relative cursor-pointer"
          
              onClick={() => setSelectedWork(index)}
              style={{
                animationDelay: `${index * 0.15}s`,
                animation: `slideInUp 0.8s ease-out forwards`
              }}
            >
              <div className="relative h-96 bg-black border-4 border-white overflow-hidden group-hover:border-gray-300 transition-all duration-500">
                
                <div className="absolute inset-0 transform -skew-x-12 origin-bottom-left bg-white transition-transform duration-700 group-hover:skew-x-0"></div>
                <div className="absolute inset-0 bg-black transform skew-x-12 origin-top-right transition-transform duration-700 group-hover:skew-x-0"></div>
                
                <div className="relative z-10 h-full flex">
                  
                  <div className="w-1/2 p-8 flex flex-col justify-between text-black relative z-20">
                    
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-xl font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold tracking-widest">{work.year}</div>
                        <div className="w-8 h-px bg-black mt-2"></div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold tracking-tighter mb-4 transform transition-transform duration-300 group-hover:translate-x-2">
                        {work.name}
                      </h3>
                      
                      <div className="space-y-1">
                        {work.tech.slice(0, 3).map((tech) => (
                          <div key={tech} className="text-xs font-bold tracking-widest opacity-70">
                            {tech.toUpperCase()}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-px bg-black"></div>
                      <div className="text-xs tracking-widest font-bold">PROJECT</div>
                    </div>
                  </div>
                  
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={work.img}
                      alt={work.name}
                      className="w-full h-full object-cover filter filter-[grayscale(0.3)] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-sm tracking-widest mb-2">VIEW PROJECT</div>
                        <div className="w-16 h-px bg-white mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30">
                  <p className="text-sm leading-relaxed mb-4">
                    {work.desc}
                  </p>
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest hover:gap-4 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    VISIT SITE
                    <div className="w-4 h-4 border-r-2 border-t-2 border-black transform rotate-45"></div>
                  </a>
                </div>
                
                <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-white opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white border-4 border-black transform rotate-45 opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-black border-2 border-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedWork !== null && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
               onClick={() => setSelectedWork(null)}>
            <div 
              className="bg-zinc-950 border border-zinc-800 max-w-5xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b border-zinc-800 p-8 flex justify-between items-start bg-gradient-to-r from-zinc-950 to-zinc-900">
                <div>
                  <h3 className="text-4xl font-bold tracking-tight mb-3">{works[selectedWork].name}</h3>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-white text-black text-sm font-bold">{works[selectedWork].year}</span>
                    <span className="text-zinc-400 text-sm">Selected Work #{String(selectedWork + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedWork(null)}
                  className="w-12 h-12 border border-zinc-700 hover:border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <span className="font-bold text-lg group-hover:rotate-90 transition-transform duration-300">×</span>
                </button>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3">
                    <div className="relative">
                      <img
                        src={works[selectedWork].img}
                        alt={works[selectedWork].name}
                        className="w-full border border-zinc-700 shadow-2xl"
                      />
                      <div className="absolute -bottom-4 -right-4 w-full h-full border border-zinc-800 -z-10"></div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-lg font-bold mb-4 tracking-wide text-white/90">OVERVIEW</h4>
                      <p className="text-zinc-300 leading-relaxed">
                        {works[selectedWork].desc}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-4 tracking-wide text-white/90">MAIN TECH STACK</h4>
                      <div className="space-y-2">
                        {works[selectedWork].tech.map((tech) => (
                          <div key={tech} className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800">
                            <div className="w-2 h-2 bg-white"></div>
                            <span className="font-medium text-sm tracking-wider">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href={works[selectedWork].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-white text-black px-8 py-4 font-bold tracking-widest hover:bg-zinc-200 transition-all duration-300 group"
                    >
                      <span>LAUNCH PROJECT</span>
                      <div className="ml-3 w-4 h-4 border-r-2 border-t-2 border-black transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style >{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}