import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactOverlay from "./ContactOverlay";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="rounded-full bg-arjelgrey1 px-8 py-2 text-sm hover:cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Contacto
      </div>
      <AnimatePresence>
        {isOpen && <ContactOverlay close={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default ContactButton;
