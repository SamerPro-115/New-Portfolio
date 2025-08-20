import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      skills: [
        { name: "React", icon: "/icons/React.png" },
        { name: "TypeScript", icon: "/icons/TS.png" },
        { name: "Node.js", icon: "/icons/Node.js.png" },
        { name: "MongoDB", icon: "/icons/mongoDB.png" },
        { name: "Express.js", icon: "/icons/express.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwind-css.png"},
        { name: "HTML", icon: "/icons/html.png"},
        { name: "CSS", icon: "/icons/css.png"},
        { name: "JavaScript", icon: "/icons/JS.png" },
        { name: "Bootstrap", icon: "/icons/Bootstrap.png" },
        { name: "Jquery", icon: "/icons/jquery.png" },
        { name: "Shadcn/Ui", icon: "/icons/shadcn.png" },
        { name: "Git", icon: "/icons/Git.png" },
        { name: "GCP", icon: "/icons/GCP.png" },
        { name: "Github", icon: "/icons/github.png" },
      ]
    }
  ];



  return (
    <section className="mb-10 bg-black py-10 relative overflow-hidden">
        <img src="/splash-1.png" className="works-splash-image" alt="splash" />

      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Tools/Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.1, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-black border border-gray-600 rounded-full px-4 py-3 hover:bg-gray-900 hover:border-gray-500 transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <img src={skill.icon} width={23} height={23} className="text-lg rounded-sm"/>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
       <motion.div 
  initial={{ width: 0, opacity: 0, marginLeft: "auto" }} 
  whileInView={{ width: "100%", opacity: 1, marginLeft: 0 }} 
  transition={{ duration: 1, ease: "easeInOut" }} 
  viewport={{ once: true, amount: 0.8 }} 
  className="flex justify-center"
> 
  <Separator className="bg-gray-300 mt-30 ml-auto" /> 
</motion.div>

    
    </section>
  );
}