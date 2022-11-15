const ProjectLink = ({ link = "", isGithub = false }) => {
  return (
    <div className="rounded-xl bg-arjelgrey2 p-4 gap-2">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="rounded-sm block text-center text-arjelblue p-2 text-xl hover:cursor-pointer"
      >
        Ir al {isGithub ? "Github" : "Link"}
      </a>
    </div>
  );
};

export default ProjectLink;
