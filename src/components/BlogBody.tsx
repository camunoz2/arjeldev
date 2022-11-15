import { motion } from "framer-motion";
import type { Project } from "../contentfulTypes";
import ProjectLink from "./ProjectLink";
import UsedStack from "./UsedStack";

const ProjectBody = ({ data }: { data: Project }) => {
  return (
    <motion.div
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mx-6">
        <div className="absolute flex items-center justify-center bg-arjelgrey1 rounded-xl w-full h-44 -z-30 -translate-y-4"></div>
      </div>
      <header
        style={{ backgroundColor: data.cardColor }}
        className={`relative flex flex-col items-center rounded-xl px-4 z-10 shadow-xl pt-12`}
      >
        <img
          className="mb-10"
          src={data.featuredImage.fields.file.url}
          alt=""
        />
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-display font-bold">
          {data.title}
        </h1>
        <p className="text-white font-display lg:text-xl text-sm">
          {data.subtitle ? data.subtitle : ""}
        </p>
        <a href="/" className="flex flex-row items-center gap-2 my-6 self-end">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              delay: 2,
            }}
            className="text-white w-4 h-4"
          />
          <p className="text-white mr-16">Volver</p>
        </a>
      </header>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="col-span-4 lg:col-span-1">
          <aside className="flex flex-row lg:flex-col gap-4">
            <ProjectLink link={data.projectLink} />
            <ProjectLink isGithub link={data.githubLink} />
            <UsedStack stack={data.usedStack} />
          </aside>
        </div>
        <main className="col-span-4 lg:col-span-3">
          <div className="rounded-xl bg-arjelgrey1 p-4 md:p-12 mb-8">
            <div className="mb-10"></div>
            <div
              className="blog-text-container"
              dangerouslySetInnerHTML={{
                __html: data.body,
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
            <div className="row-span-1 md:row-span-2">
              <img
                src={data.portraitProjectImage.fields.file.url}
                alt=""
                className="rounded-xl md:h-full object-cover"
              />
            </div>
            <div>
              <img
                src={data.landscapeProjectImages[0].fields.file.url}
                alt=""
                className="rounded-xl md:h-full object-cover"
              />
            </div>
            <div>
              <img
                src={data.landscapeProjectImages[1].fields.file.url}
                alt=""
                className="rounded-xl md:h-full object-cover"
              />
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default ProjectBody;
