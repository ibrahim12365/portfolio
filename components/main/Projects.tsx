import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        <ProjectCard
          src="/voltwise.png"
          title="VoltWise Solutions"
          description="Voltwise Solutions is a web application to manage, monitor and integrate connected charging stations in real time."
        />
        <ProjectCard
          src="/remoteHub.png"
          title="RemoteHub"
          description="Web application to plan and track leave and telework requests"
        />
      </div>
    </div>
  );
};

export default Projects;
