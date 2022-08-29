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
import { ExperienceData } from "./ExperienceData";
import GitHubCalendar from "react-github-calendar";

function About() {
  return (
    <div className="div--container">
      <p className="mt-5 text-5xl p--title--purple w-fit">About</p>

      <p className="p--title--purple w-fit">Skills</p>
      <div className="grid grid-cols-2 max-w-screen-3xl sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 justify-items-center ">
        <DiReact className="about__icon" />
        <SiNextdotjs className="about__icon" />
        <DiNodejs className="about__icon" />
        <DiJavascript1 className="about__icon" />
        <CgCPlusPlus className="about__icon" />
        <DiJava className="about__icon" />
        <DiPython className="about__icon" />
        <SiFortran className="about__icon" />
        <img src="/icons/skill/matlab.png" alt="" className="about__icon" />
        <DiMongodb className="about__icon" />
        <SiSqlite className="about__icon" />
        <DiGit className="about__icon" />
        <AiFillGithub className="about__icon" />
        <SiFirebase className="about__icon" />
        <SiVercel className="about__icon" />
        <SiNetlify className="about__icon" />
        <SiHeroku className="about__icon" />
        <SiMaterialui className="about__icon" />
        <SiTailwindcss className="about__icon" />
      </div>

      <p className="m-5 p--title--purple w-fit">
        Education and Work experience
      </p>
      <div className="grid mx-0 md:grid-cols-2 lg:grid-cols-3">
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
              className="flex flex-col items-center justify-center p-3 m-3 text-xl transition duration-300 ease-in-out border-2 border-purple-300 shadow-lg hover:border-2 hover:scale-105 shadow-purple-300 rounded-3xl"
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

      <p className="p--title--purple w-fit">Last year I code</p>
      <div className="flex justify-center mt-8 text-center">
        <GitHubCalendar
          username="Welin-Chen"
          blockSize={15}
          blockMargin={5}
          color="#9b5de5"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default About;
