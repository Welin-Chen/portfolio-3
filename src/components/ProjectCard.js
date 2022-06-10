import React from "react";

const projectCard__button =
  "bg-red-600 shadow-md shadow-red-600/40 hover:bg-white hover:text-red-600 hover:shadow-white text-white font-bold py-2 px-4 rounded-lg";

function ProjectCard({ src, title, description, demo, code }) {
  return (
    <div className="p-5 m-5 overflow-hidden transition duration-300 ease-in-out shadow-lg rounded-xl shadow-white hover:scale-105">
      <img
        src={src}
        alt={title}
        className="object-fill transition duration-100 ease-in-out opacity-80 hover:opacity-100"
      />

      {/* info */}
      <div className="p-5 mt-2 ">
        <h2 className="text-lg font-bold text-center text-white ">{title}</h2>
        <h4 className="my-2 text-sm text-center">{description}</h4>
      </div>

      {/* button */}
      <div className="flex justify-evenly">
        <a href={demo} target="_blank" class={projectCard__button}>
          Visit
        </a>
        <a href={code} target="_blank" class={projectCard__button}>
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
