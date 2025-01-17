import { motion } from "framer-motion";
import ProfileImage from "./ProfileContact";
import svgClose from "../images/SvgClose.svg";

interface Props {
  close: () => void;
}

const ContactOverlay = ({ close }: Props) => {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: -80,
      transition: {
        duration: 0.6,
        when: "afterChildren",
      },
    },
  };

  return (
    <motion.div
      initial={{ y: -200 }}
      variants={variants}
      animate="visible"
      exit="hidden"
      className="fixed z-50 bg-black/80 left-0 top-0 w-full h-full"
    >
      <motion.div
        variants={variants}
        className="absolute mx-10 md:mx-auto w-auto right-0 md:w-1/2 md:right-10 grid grid-cols-1 md:grid-cols-3 gap-2 grid-rows-2 md:grid-rows-3"
      >
        <div className="flex flex-col justify-between md:flex-row bg-white col-span-3 rounded-b-xl gap-4 items-center py-4 px-10">
          <ProfileImage />
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Cristian A. M. Arjel</h2>
            <p className="text-sm">Front-End / WebDev</p>
          </div>
          <motion.img
            src={svgClose.src}
            onClick={close}
            whileHover={{ scale: 1.2, cursor: "pointer", rotate: 45 }}
            className="w-10"
          />
        </div>

        <div className="bg-white rounded-xl col-span-3 md:col-span-2 row-span-2 flex items-center justify-center px-10">
          <p className="text-xs md:text-base">
            ¡Hola! Si te gustó mi sitio web y estás interesado en trabajar
            conmigo como desarrollador fullstack, no dudes en contactarme por
            Twitter o WhatsApp. Saludos!
          </p>
        </div>

        <a
          href="https://wa.me/56946729489"
          className="p-6 bg-arjelgrey3 rounded-xl col-span-3 md:col-span-1 row-span-1 text-center flex items-center justify-center text-base md:text-xl lg:text-2xl text-white hover:cursor-pointer"
        >
          Whatsapp
        </a>

        <a
          href="https://twitter.com/arjeldev"
          className="p-6 bg-arjelgrey3 rounded-xl col-span-3 md:col-span-1 row-span-1 text-center flex items-center justify-center text-base md:text-xl lg:text-2xl text-white"
        >
          Twitter
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactOverlay;
