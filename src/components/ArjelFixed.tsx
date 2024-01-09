import { motion } from "framer-motion";
import logo from "../images/SvgArjelFixed.svg";

const ArjelFixed = () => {
  return (
    <a href="#container">
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="fixed xl:flex flex-col gap-1 hidden z-20 top-44"
      >
        <img src={logo.src} width={100} alt="fixed logo" />
        <div className="flex w-[324px] h-[1px] bg-arjelgrey4 justify-end after:-translate-y-1/2 after:rounded-full after:w-4 after:h-4 after:bg-white" />
      </motion.div>
    </a>
  );
};
export default ArjelFixed;
