import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { BlogFrontmatter } from "../customTypes";
import svgClose from "../images/SvgClose.svg";
import svgOpen from "../images/SvgOpen.svg";

const BlogSection = ({ data }: { data: BlogFrontmatter[] }) => {
  const [currentBlogPost, setCurrentBlogPost] = useState(0);

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
    if (currentBlogPost < data.length - 1) {
      setCurrentBlogPost((curr) => curr + 1);
    } else setCurrentBlogPost(0);
  };

  const bgColor = {
    backgroundColor: data[currentBlogPost].cardColor,
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        variants={cardVariantAnim}
        initial="initial"
        animate="animate"
        exit="exit"
        key={currentBlogPost}
      >
        <article
          style={bgColor}
          className="relative flex flex-col rounded-xl py-16 px-4 lg:px-10 z-0"
        >
          <div className="absolute top-5 right-5 flex justify-end gap-3">
            <a href={`blog/${data[currentBlogPost].slug}`}>
              <motion.img
                whileHover={{ scale: 1.3 }}
                src={svgOpen.src}
                width={30}
                alt="open card"
              />
            </a>
            <motion.img
              onClick={changeCard}
              whileHover={{ scale: 1.3 }}
              src={svgClose.src}
              width={30}
              alt="close card"
            />
          </div>
          <div className="opacity-25 md:opacity-100 absolute left-0 top-0 -z-10 mix-blend-luminosity object-contain">
            <img src={data[currentBlogPost].featuredImage} alt="some image" />
          </div>
          <h3 className="text-6xl lg:text-8xl text-right font-bold mt-4 mb-12">
            {data[currentBlogPost].title}
          </h3>
          <p className="rotate-0 md:rotate-90 bg-white px-2 rounded-full absolute top-4 left-4 md:top-1/2 md:left-0 flex items-center gap-2">
            <span
              style={{ backgroundColor: data[currentBlogPost].cardColor }}
              className="relative inline-block w-4 h-4 rounded-full"
            ></span>
            {data[currentBlogPost].publishDate}
          </p>
          <p className="lg:text-xl md:ml-48">{data[currentBlogPost].summary}</p>

          <div className="flex self-end items-center gap-8">
            <a
              className="flex gap-2 items-center relative hover:underline underline-offset-2 text-arjelblue"
              href={`blog/${data[currentBlogPost].slug}`}
            >
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
              <span className="text-sm"> Read Post</span>
            </a>
            <a
              href="/blog/allposts"
              className="hover:underline underline-offset-2 text-arjelblue text-sm"
            >
              All posts
            </a>
          </div>
        </article>
      </motion.div>
    </AnimatePresence>
  );
};
export default BlogSection;
