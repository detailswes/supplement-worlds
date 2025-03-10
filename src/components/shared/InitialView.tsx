import { motion } from "framer-motion";
import AnimatedLogo from "@/assets/images/animated-logo.gif";

const text = "What can I help with?".split("");

const InitialView = () => {
  return (
    <div className="h-[250px] sm:h-auto my-auto flex flex-col items-center">
      <motion.h1
        className="text-[40px] font-bold text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {text.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: [0, 1, 1, 0], // Fade in, pause, fade out
              x: [0, 0, 0, 10], // Fade out moves slightly right
            }}
            transition={{
              delay: index * 0.1, // Staggered delay for left-to-right effect
              duration: 5, // Total time for each letter
              repeat: Infinity, // Loop animation
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1], // Controls animation phases
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <img src={AnimatedLogo} alt="animated-logo" className="w-40 mx-auto" />
    </div>
  );
};

export default InitialView;
