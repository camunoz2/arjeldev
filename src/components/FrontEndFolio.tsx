import { motion } from "framer-motion";

const FrontEndFolio = () => {
  return (
    <div className="relative col-span-1 row-span-3 lg:row-span-2 text-center rounded-xl py-4 bg-arjelgrey1 flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-base md:text-2xl font-bold tracking-tighter">
        Te tocó:
      </h2>
      <motion.div
        animate={{
          backgroundPositionX: "100%",
        }}
        transition={{ repeat: Infinity, ease: "linear", duration: 100 }}
        className="absolute bottom-0 h-full w-full bg-cover bg-websites bg-repeat-x"
      />
    </div>
  );
};
export default FrontEndFolio;
