import { useState } from "react";
import type { BlogPost } from "../contentfulTypes";

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
      <div className="absolute left-0 top-0 -z-10 mix-blend-luminosity object-contain">
        <img
          src={data[currentBlogPost].featuredImage.fields.file.url}
          alt="some image"
        />
      </div>
      <p className="text-right">
        {data[currentBlogPost].publishDate.toLocaleString("es-CL")}
      </p>
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
