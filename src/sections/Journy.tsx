import React from 'react';
import { motion } from 'framer-motion';


// AI code generation
const Journy = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Full Stack Developer',
      company: 'Tech Corp',
      description: 'Led development of React applications with modern frameworks and best practices',
      tech: ['React', 'Node.js', 'MongoDB'],
      panelStyle: 'border-4 border-white bg-black shadow-[0_0_0_4px_black,0_0_0_8px_white]',
      speech: "The journey reaches its peak..."
    },
    {
      year: '2023', 
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      description: 'Built responsive web applications focusing on user experience and performance',
      tech: ['Vue.js', 'TypeScript', 'Tailwind'],
      panelStyle: 'border-4 border-white bg-gradient-to-br from-gray-900 to-black shadow-[0_0_0_4px_black,0_0_0_8px_white]',
      speech: "Power grows with each challenge..."
    },
    {
      year: '2022',
      title: 'Junior Developer', 
      company: 'Code Academy',
      description: 'Started my coding journey learning fundamentals and building first projects',
      tech: ['JavaScript', 'HTML', 'CSS'],
      panelStyle: 'border-4 border-white bg-gradient-to-br from-black to-gray-800 shadow-[0_0_0_4px_black,0_0_0_8px_white]',
      speech: "The origin story begins..."
    }
  ];

  return (
    
    <div className="min-h-screen bg-black py-10 md:py-20 relative overflow-hidden">
      {/* Manga-style background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white transform rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-white transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-white transform rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-16 bg-white transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Manga-style header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 relative"
        >
          {/* Speed lines background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="absolute bg-white origin-left transform -rotate-12"
                style={{
                  width: '200px',
                  height: '2px',
                  top: `${10 + i * 8}%`,
                  left: `${-10 + i * 5}%`,
                }}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative z-10 bg-black border-4 border-white p-8 mx-auto max-w-2xl
                       shadow-[0_0_0_4px_black,0_0_0_8px_white] transform -rotate-1"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 
                         tracking-wider relative">
              <span className="relative z-10">MY JOURNEY</span>
              <div className="absolute -inset-2 bg-white/10 transform skew-x-2 -z-10"></div>
            </h2>
            
            {/* Speech bubble */}
            <div className="relative bg-white text-black p-4 mt-6 font-bold text-lg
                          after:content-[''] after:absolute after:top-full after:left-1/2 
                          after:transform after:-translate-x-1/2 after:border-8
                          after:border-transparent after:border-t-white">
              "Every developer has an origin story..."
            </div>
          </motion.div>
        </motion.div>
        
        <div className="relative">
          {/* Dramatic center line with manga effects */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white hidden lg:block
                        shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            {/* Power aura effects along the line */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3] 
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute w-4 h-4 bg-white rounded-full left-1/2 transform -translate-x-1/2"
                style={{ top: `${i * 25}%` }}
              />
            ))}
          </div>
          
          {/* Mobile timeline */}
          <div className="absolute left-8 top-0 h-full w-1 bg-white lg:hidden shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative flex items-center mb-16 md:mb-24 lg:mb-20 
                ${index % 2 === 0 
                  ? 'lg:flex-row flex-row' 
                  : 'lg:flex-row-reverse flex-row'
                }`}
            >
              {/* Manga panel card */}
              <div className={`
                w-full lg:w-5/12 ml-16 lg:ml-0
                ${index % 2 === 0 
                  ? 'lg:pr-8' 
                  : 'lg:pl-8'
                } 
              `}>
                <motion.div 
                  className={`${exp.panelStyle} p-6 sm:p-8 lg:p-10 relative overflow-hidden 
                             transform hover:scale-[1.02] transition-all duration-500 group`}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 0 0 4px black, 0 0 0 8px white, 0 20px 40px rgba(0,0,0,0.8)"
                  }}
                >
                  {/* Manga-style action lines on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-white transform origin-center"
                        style={{
                          width: '100px',
                          height: '2px',
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Speech bubble for year */}
                    <div className="mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="inline-block bg-white text-black px-6 py-3 font-black text-xl
                                 relative max-w-fit
                                 after:content-[''] after:absolute after:top-full after:left-8
                                 after:border-8 after:border-transparent after:border-t-white"
                      >
                        {exp.year}
                      </motion.div>
                    </div>
                    
                    {/* Dramatic title with manga effects */}
                    <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black mb-3 
                                 tracking-wider uppercase relative">
                      <span className="relative z-10">{exp.title}</span>
                      <div className="absolute -inset-2 bg-white/5 transform -skew-x-2 -z-10"></div>
                      
                      {/* Power aura effect */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="absolute -inset-4 border-2 border-white/30 -z-20"
                      />
                    </h3>
                    
                    <p className="text-white text-lg lg:text-xl mb-2 font-bold tracking-wide">
                      {exp.company}
                    </p>
                    
                    {/* Thought bubble for description */}
                    <div className="bg-gray-200 text-black p-4 mb-4 relative font-medium text-base
                                  border-2 border-black
                                  before:content-[''] before:absolute before:bottom-full before:left-6
                                  before:border-8 before:border-transparent before:border-b-gray-200
                                  after:content-[''] after:absolute after:bottom-full after:left-6
                                  after:border-10 after:border-transparent after:border-b-black
                                  after:transform after:translate-y-1">
                      <p className="italic">"{exp.description}"</p>
                    </div>
                    
                    {/* Speech bubble for the dramatic quote */}
                    <div className="bg-white text-black p-3 mb-4 font-bold text-center
                                  relative rounded-lg
                                  after:content-[''] after:absolute after:top-full after:right-4
                                  after:border-6 after:border-transparent after:border-t-white">
                      {exp.speech}
                    </div>
                    
                    {/* Power level indicators (tech stack) */}
                    <div className="border-2 border-white p-3 bg-black/80">
                      <p className="text-white font-bold mb-2 text-sm uppercase tracking-widest">
                        ABILITIES UNLOCKED:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + techIndex * 0.2 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="bg-white text-black px-3 py-1 font-black text-sm
                                     relative overflow-hidden group/tech
                                     transform hover:rotate-1 transition-all duration-200"
                          >
                            <motion.div
                              className="absolute inset-0 bg-gray-800"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Dramatic timeline dot with power effects */}
              <motion.div 
                className="absolute w-8 h-8 lg:w-12 lg:h-12 bg-white border-4 border-black z-20
                          left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 
                          shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3 + 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.3,
                  boxShadow: "0 0 30px rgba(255,255,255,1)"
                }}
              >
                {/* Inner energy core */}
                <motion.div 
                  animate={{ 
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-1 bg-black"
                />
              </motion.div>
              
              {/* Connection line to timeline */}
              <div className="absolute left-8 w-4 h-1 bg-white lg:hidden top-1/2 transform -translate-y-1/2
                            shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
            </motion.div>
          ))}
        </div>

        {/* Epic finale call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mt-20 md:mt-24 relative"
        >
          {/* Dramatic background burst */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
                className="absolute bg-white origin-center"
                style={{
                  width: '200px',
                  height: '4px',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 bg-black border-4 border-white p-8 mx-auto max-w-lg
                         shadow-[0_0_0_4px_black,0_0_0_8px_white]">
            <p className="text-white text-xl font-bold mb-6 tracking-wide">
              READY FOR THE NEXT CHAPTER?
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 0 4px black, 0 0 0 8px white, 0 0 30px rgba(255,255,255,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 font-black text-xl uppercase tracking-widest
                       relative overflow-hidden group/btn border-4 border-black
                       hover:bg-black hover:text-white hover:border-white transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">CONNECT!</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Journy;