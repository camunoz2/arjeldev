import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import type { ProjectFrontmatter } from "../customTypes";
import svgClose from "../images/SvgClose.svg";
import svgOpen from "../images/SvgOpen.svg";

const HeaderCards = ({ data }: { data: ProjectFrontmatter[] }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardVariantAnim = {
    initial: {
      y: -30,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      z: -10,
      transition: {
        type: "spring",
        stiffness: 100,
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
      {/* BackCard */}
      <motion.div
        key={currentCard}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 1 }}
        exit={{ y: 30 }}
      >
        <div className="relative mx-6">
          <div
            style={{
              opacity: 0.4,
              backgroundColor: data[currentCard + 1]
                ? data[currentCard + 1].cardColor
                : data[currentCard - 1].cardColor,
            }}
            className="absolute flex items-center justify-center bg-arjelgrey1 rounded-xl w-full h-44 -z-30 -translate-y-4"
          />
        </div>
      </motion.div>

      <header className="relative">
        <div className="flex gap-3 rotate-90 absolute bottom-20 -left-16">
          {data.map((item, index) => {
            return (
              <div
                key={item.slug}
                onClick={() => setCurrentCard(index)}
                className={`${currentCard === index ? "bg-slate-500" : "bg-slate-200"
                  } w-6 h-2 rounded-full  hover:cursor-pointer hover:bg-slate-500`}
              />
            );
          })}
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            variants={cardVariantAnim}
            initial="initial"
            animate="animate"
            exit="exit"
            key={currentCard}
          >
            <article
              style={{ backgroundColor: data[currentCard].cardColor }}
              className="relative flex flex-col rounded-xl py-10 px-0 md:px-4 z-10 shadow-xl"
            >
              <div className="flex justify-end gap-3 pt-6 pr-6 self-end">
                <a
                  className="relative"
                  href={`proyectos/${data[currentCard].slug}`}
                >
                  <motion.img
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{
                      bounce: 1,
                      damping: 3,
                      stiffness: 23,
                      duration: 0.1,
                    }}
                    src={svgOpen}
                    width={30}
                    alt="open card"
                  />
                </a>
                <div className="relative">
                  <motion.img
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{
                      bounce: 1,
                      damping: 3,
                      stiffness: 23,
                      duration: 0.1,
                    }}
                    onClick={changeCard}
                    src={svgClose}
                    width={30}
                    alt="close card"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center lg:flex-row gap-8 2xl:gap-24 px-4 xl:px-16">
                <img
                  className="object-contain mix-blend-luminosity w-[300px] shrink-0 -z-10"
                  src={data[currentCard].featuredImage}
                  alt="2d render for my blog post"
                />

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col">
                    <h1 className="text-5xl lg:text-7xl md:text-6xl xl:text-6xl 2xl:text-8xl text-white font-bold mb-2">
                      {data[currentCard].title}
                    </h1>
                    <p className="text-arjelblue md:text-xl xl:text-xl">
                      {data[currentCard].subtitle}
                    </p>
                    <p className="text-arjelblue text-xs md:text-xl xl:text-sm">{`Publicado: ${data[currentCard].publishDate}`}</p>
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
                    <span className="text-sm text-arjelblue">Let's go!</span>
                  </a>
                </div>
              </div>
            </article>
          </motion.div>
        </AnimatePresence>
      </header>
    </>
  );
};

export default HeaderCards;
