import { motion } from "framer-motion";
import AnimatedLogo from "@/assets/images/animated-logo.gif";

const text = "What can I help with?".split("");

const InitialView = () => {
  return (
    <div className="h-[250px] sm:h-auto my-auto flex flex-col items-center">
      <h1 className="text-[40px] font-bold text-white text-center">
        {text.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <img src={AnimatedLogo} alt="animated-logo" className="w-40 mx-auto" />
    </div>
  );
};

export default InitialView;
