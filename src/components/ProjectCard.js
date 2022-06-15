import React, { forwardRef } from "react";

const ProjectCard = forwardRef(
  ({ src, title, description, tags, demo, code }, ref) => {
    return (
      <div
        ref={ref}
        className="p-5 m-5 overflow-hidden transition duration-300 ease-in-out shadow-md opacity-100 hover:shadow-purple-500 shadow-purple-500 hover:shadow-lg rounded-xl hover:scale-105 hover:opacity-100"
      >
        <img
          src={src}
          alt={title}
          className="object-fill transition duration-100 ease-in-out"
        />

        {/* info */}
        <div className="p-5 mt-2 ">
          <h2 className="text-2xl font-bold text-center text-purple-500 ">
            {title}
          </h2>

          <div className="flex flex-wrap justify-between my-3">
            {tags.map((tag, index) => (
              <p key={index} className="text-lg font-semibold text-pink-500">
                {tag}
              </p>
            ))}
          </div>
        </div>

        {/* button */}
        <div className="flex justify-evenly">
          <a href={demo} target="_blank" rel="noreferrer">
            <button className="group button--gradient--outline">
              <span className="button__span--gradient--outline">Visit</span>
            </button>
          </a>

          <a href={code} target="_blank" rel="noreferrer">
            <button className="group button--gradient--outline">
              <span className="button__span--gradient--outline">Code</span>
            </button>
          </a>
        </div>
      </div>
    );
  }
);

export default ProjectCard;
