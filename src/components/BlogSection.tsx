import { motion } from "framer-motion";
import { useState } from "react";
import type { BlogPost } from "../contentfulTypes";
import svgClose from "../images/SvgClose.svg";
import svgOpen from "../images/SvgOpen.svg";

const BlogSection = ({ data }: { data: BlogPost[] }) => {
  const [currentBlogPost, setCurrentBlogPost] = useState(0);

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
    <article
      style={bgColor}
      className="relative flex flex-col rounded-xl pt-16 px-4 lg:px-10 z-0"
    >
      <div className="flex justify-end gap-3 pt-6 pr-6 self-end">
        <a href={`proyectos/${data[currentBlogPost].slug}`}>
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
      <div className="absolute left-0 top-0 -z-10 mix-blend-luminosity object-contain">
        <img
          src={data[currentBlogPost].featuredImage!.fields.file.url}
          alt="some image"
        />
      </div>
      <p className="text-right">{data[currentBlogPost].publishDate}</p>
      <h3 className="text-6xl lg:text-8xl text-right font-display font-bold mt-4 mb-12">
        {data[currentBlogPost].title}
      </h3>
      <p className="lg:text-xl">{data[currentBlogPost].summary}</p>

      <a href={`/blog/${data[currentBlogPost].slug}`}>
        <p className="flex flex-row justify-end items-center gap-4 my-6">
          <span className="inline-block w-4 h-4 rounded-full bg-white" /> Leer
          Articulo
        </p>
      </a>
    </article>
  );
};
export default BlogSection;
