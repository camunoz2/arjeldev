import { motion } from "framer-motion";
import React, { useRef } from "react";
import pokeball from "../images/honor_ball.png";

const Pokeball = () => {
  const bounding = useRef<HTMLImageElement>(null);
  const ball = useRef<number>(0);
  return (
    <motion.div
      ref={bounding}
      className="col-span-1 row-span-2 lg:row-span-1 flex justify-center items-center rounded-xl"
    >
      <motion.img
        key={ball.current}
        animate={{
          rotateX: [32, -32],
          scale: [0.9, 1],
        }}
        className="hover:cursor-pointer"
        drag
        dragConstraints={bounding}
        src={pokeball.src}
        alt=""
        width={60}
        height={60}
        style={{ imageRendering: "pixelated" }}
      />
    </motion.div>
  );
};
export default Pokeball;
