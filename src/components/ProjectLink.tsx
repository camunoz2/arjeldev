const ProjectLink = ({ link = "", isGithub = false, background = "" }) => {
  return (
    <div
      style={{ backgroundColor: background }}
      className="rounded-xl p-4 gap-2"
    >
      <a
        href={link}
        className="rounded-sm block text-center text-white p-2 text-xl hover:cursor-pointer"
      >
        Go to {isGithub ? "repo" : "project"}
      </a>
    </div>
  );
};

export default ProjectLink;
