import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";

function Projects() {
  return (
    <div className="m-5">
      <p className="flex justify-center my-32 text-5xl font-bold text-white">
        Projects
      </p>

      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3">
        {ProjectData.map(
          ({ id, src, title, description, tags, demo, code }, index) => (
            <ProjectCard
              key={id}
              src={src}
              title={title}
              description={description}
              tags={tags}
              demo={demo}
              code={code}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
