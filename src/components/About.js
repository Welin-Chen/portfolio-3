import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFortran,
  SiFirebase,
  SiNextdotjs,
  SiNetlify,
  SiVercel,
  SiHeroku,
  SiSqlite,
  SiMaterialui,
  SiTailwindcss,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SkillData } from "./SkillData";
import { ExperienceData } from "./ExperienceData";
import GitHubCalendar from "react-github-calendar";

function About() {
  return (
    <div>
      <p className="title">About</p>
      <hr />

      <p className="about__title">Skills</p>
      <div className="grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
        <DiReact className="skill-Icon" />
        <SiNextdotjs className="skill-Icon" />
        <DiNodejs className="skill-Icon" />
        <DiJavascript1 className="skill-Icon" />
        <CgCPlusPlus className="skill-Icon" />
        <DiJava className="skill-Icon" />
        <DiPython className="skill-Icon" />
        <SiFortran className="skill-Icon" />
        <DiMongodb className="skill-Icon" />
        <SiSqlite className="skill-Icon" />
        <DiGit className="skill-Icon" />
        <AiFillGithub className="skill-Icon" />
        <SiFirebase className="skill-Icon" />
        <SiVercel className="skill-Icon" />
        <SiNetlify className="skill-Icon" />
        <SiHeroku className="skill-Icon" />
        <SiMaterialui className="skill-Icon" />
        <SiTailwindcss className="skill-Icon" />
      </div>
      <hr />

      <p className="about__title">Education and Work experience</p>
      <div className="grid mx-10 md:grid-cols-2 lg:grid-cols-3">
        {ExperienceData.map(
          ({
            id,
            src,
            title,
            department,
            major,
            start_year,
            end_year,
            degree,
          }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-3 m-3 text-xl transition duration-300 ease-in-out shadow-lg hover:border-2 border-sky-300 hover:scale-105 shadow-sky-300 rounded-3xl"
            >
              <img src={src} alt={title} className="my-2 w-44" />

              <p className="about__p">{title}</p>
              <p className="about__p">{degree}</p>
              <p className="about__p">
                {start_year}-{end_year}
              </p>
              <p className="about__p">{department}</p>
              <p className="text-center about__p">{major}</p>
            </div>
          )
        )}
      </div>
      <hr />

      <p className="about__title">Last year I code</p>
      <div className="flex justify-center mt-8 text-center">
        <GitHubCalendar
          username="Welin-Chen"
          blockSize={15}
          blockMargin={5}
          color="#7dd3fc"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default About;
