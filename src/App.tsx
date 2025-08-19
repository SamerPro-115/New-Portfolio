import { motion } from "framer-motion";
import { Separator } from "./components/ui/separator";
import { AboutMe } from "./sections/AboutMe";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Works } from "./sections/Works";

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <AboutMe />
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex justify-center mt-32"
      >
        <Separator className="bg-gray-300" />
      </motion.div>
      <Skills />

      <Works />
    </div>
  );
}

export default App;
