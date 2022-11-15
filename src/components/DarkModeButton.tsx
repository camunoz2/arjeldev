import * as React from "react";
import { motion } from "framer-motion";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const variants = {
    sun: {
      backgroundColor: "#FCE570",
      boxShadow: "0px 0px 15px 3px #Ffb57f",
    },
    moon: {
      backgroundColor: "#AD7CEB",
      boxShadow: "0px 0px 15px 3px #BEB1CF",
    },
    sunnysky: {
      backgroundColor: "#97E0F1",
    },
    darksky: {
      backgroundColor: "#2F1A44",
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="sunnysky"
      animate={darkMode ? "darksky" : "sunnysky"}
      className="col-span-1 row-span-2 lg:row-span-1 flex justify-center items-center rounded-xl overflow-hidden"
    >
      <div onClick={() => setDarkMode(!darkMode)}>
        <motion.div
          variants={variants}
          animate={darkMode ? "moon" : "sun"}
          initial="sun"
          className="rounded-full w-16 h-16 hover:cursor-pointer z-10"
        />
        <motion.p
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity }}
          className="text-white text-xs text-center mt-2"
        >
          Click me
        </motion.p>
      </div>
    </motion.div>
  );
};
export default DarkModeButton;
