import { motion } from "framer-motion";
import type { Project } from "../contentfulTypes";
import { useState } from "react";
import svgClose from "../images/SvgClose.svg";
import svgOpen from "../images/SvgOpen.svg";

const HeaderCards = ({ data }: { data: Project[] }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardVariantAnim = {
    hide: {
      y: -80,
      scale: 0.9,
      opacity: 0.1,
    },
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const changeCard = () => {
    if (data.length <= 0) return console.log("No projects where found");
    if (currentCard < data.length - 1) {
      setCurrentCard((curr) => curr + 1);
    } else setCurrentCard(0);
  };

  return (
    <>
      <motion.div
        key={currentCard}
        initial={{ scale: 0.9, y: 10, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ delay: 0.12, duration: 0.5 }}
        exit={{ y: 1500 }}
      >
        <div className="relative mx-6">
          <div className="absolute flex items-center justify-center bg-arjelgrey1 rounded-xl w-full h-44 -z-30 -translate-y-4"></div>
        </div>
      </motion.div>
      <motion.header
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        exit={{ y: 1500 }}
      >
        <motion.div
          variants={cardVariantAnim}
          initial="hide"
          animate="show"
          key={currentCard}
        >
          <article
            style={{ backgroundColor: data[currentCard].cardColor }}
            className="relative flex flex-col rounded-xl py-10 px-0 md:px-4 z-10 shadow-xl"
          >
            <div className="flex justify-end gap-3 pt-6 pr-6 self-end">
              <a href={`proyectos/${data[currentCard].slug}`}>
                <motion.img
                  whileHover={{ scale: 1.3 }}
                  src={svgOpen}
                  width={30}
                  alt="open card"
                />
              </a>
              <motion.img
                onClick={changeCard}
                whileHover={{ scale: 1.3 }}
                src={svgClose}
                width={30}
                alt="close card"
              />
            </div>

            <div className="flex flex-col items-center lg:flex-row gap-8 2xl:gap-24 px-4 xl:px-16">
              <img
                className="object-contain mix-blend-luminosity w-[300px] shrink-0 -z-10"
                src={data[currentCard].featuredImage!.fields.file.url}
                alt="2d render for my blog post"
              />

              <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <h1 className="text-5xl lg:text-7xl md:text-6xl xl:text-6xl 2xl:text-8xl text-white font-bold font-display">
                    {data[currentCard].title}
                  </h1>
                  <p className="text-arjelblue font-display md:text-xl xl:text-xl">
                    {data[currentCard].subtitle}
                  </p>
                  <p className="text-arjelblue font-display text-xs md:text-xl xl:text-sm">{`Publicado: ${data[currentCard].publishDate}`}</p>
                </div>

                <p className="md:text-xl">{data[currentCard].summary}</p>

                <a
                  href={`/proyectos/${data[currentCard].slug}`}
                  className="flex gap-2 self-end items-center relative"
                >
                  {/* TODO: Make a pulse animation to btn link */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0.7, 0.2],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "anticipate",
                      duration: 2.1,
                    }}
                    className="bg-arjelblue w-4 h-4 rounded-full absolute -left-6 opacity-0"
                  />
                  <div className="bg-arjelblue w-4 h-4 rounded-full absolute -left-6" />
                  <span className="text-sm text-arjelblue">Ver Proyecto</span>
                </a>
              </div>
            </div>
          </article>
        </motion.div>
      </motion.header>
    </>
  );
};

export default HeaderCards;
