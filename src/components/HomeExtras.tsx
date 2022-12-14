import { motion } from "framer-motion";
import Widgets from "./Widgets";

const HomeExtras = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.18, duration: 0.7 }}
      className="grid grid-cols-7 gap-4"
    >
      <div className="lg:col-span-4 col-span-7">
        <div className="rounded-xl bg-arjelgrey3 h-full flex flex-col justify-center px-12 py-10 md:py-8">
          <h2 className="text-4xl md:text-5xl font-bold text-arjelgrey4">
            About me!
          </h2>
          <p className="text-sm md:text-xl text-arjelgrey2 py-4 max-w-[500px]">
            Yo, I'm Cristian M. Arjel, a FrontEnd Dev. Welcome to my little
            experiments / side projects / blog writting. If you need some of
            this, just steal it! I'll be pleased.
          </p>
        </div>
      </div>
      <div className="lg:col-span-3 col-span-7">
        <Widgets />
      </div>
    </motion.div>
  );
};

export default HomeExtras;
