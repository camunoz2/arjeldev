import image from "../images/profile.webp";
import { motion } from "framer-motion";

const ProfileImage = ({ widget = false }) => {
  const widgetStyles = widget
    ? "col-start-3 col-span-1 row-start-1 row-span-3 lg:col-start-2 lg:row-span-1"
    : "rounded-full w-24 overflow-hidden md:bg-arjelgrey1";
  return (
    <div className={widgetStyles}>
      <motion.img
        className="w-full h-full object-contain rounded-lg select-none"
        src={image.src}
        alt="me"
      />
    </div>
  );
};
export default ProfileImage;
