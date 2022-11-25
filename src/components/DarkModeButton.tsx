import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.querySelector("html")?.classList.remove("dark");
    } else document.querySelector("html")?.classList.add("dark");
  }, [theme]);

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

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <motion.div
      variants={variants}
      initial="sunnysky"
      animate={theme === "dark" ? "darksky" : "sunnysky"}
      className="col-span-1 row-span-2 lg:row-span-1 flex justify-center items-center rounded-xl overflow-hidden"
    >
      <div onClick={handleTheme}>
        <motion.div
          variants={variants}
          animate={theme === "dark" ? "moon" : "sun"}
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
