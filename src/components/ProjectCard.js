import React from "react";

const projectCard__button =
  "bg-red-600 shadow-md shadow-red-600/40 hover:bg-white hover:text-red-600 hover:shadow-white text-white font-bold py-2 px-4 rounded-lg";

function ProjectCard({ src, title, description, tags, demo, code }) {
  return (
    <div className="p-5 m-5 overflow-hidden transition duration-300 ease-in-out shadow-md opacity-80 hover:shadow-white shadow-white hover:shadow-lg rounded-xl hover:scale-105 hover:opacity-100">
      <img
        src={src}
        alt={title}
        className="object-fill transition duration-100 ease-in-out "
      />

      {/* info */}
      <div className="p-5 mt-2 ">
        <h2 className="text-2xl font-bold text-center text-white ">{title}</h2>
        {/* <h4 className="my-2 text-sm text-center">{description}</h4> */}

        <div className="flex flex-wrap justify-between my-3">
          {tags.map((tag, index) => (
            <p key={index} className="text-lg font-semibold text-red-600">
              {tag}
            </p>
          ))}
        </div>
      </div>

      {/* button */}
      <div className="flex justify-evenly">
        <a href={demo} target="_blank" className={projectCard__button}>
          Visit
        </a>
        <a href={code} target="_blank" className={projectCard__button}>
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
