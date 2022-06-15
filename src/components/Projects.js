import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";
import FlipMove from "react-flip-move";

function Projects() {
  return (
    <FlipMove>
      <div className="div--container">
        <p className="mt-5 w-fit p--title--purple">Projects</p>

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
    </FlipMove>
  );
}

export default Projects;
