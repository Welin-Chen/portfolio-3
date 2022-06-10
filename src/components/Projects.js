import React from "react";
import ProjectCard from "./ProjectCard";
import amazon from "../img/amazon.png";
import hulu from "../img/hulu.png";
import covid_19 from "../img/covid-19.png";
import spotify from "../img/spotify.png";
import netflix from "../img/netflix.png";
import airbnb from "../img/airbnb.png";
import YelpCamp from "../img/YelpCamp.png";

function Projects() {
  return (
    <div className="m-5">
      <p className="flex justify-center my-32 text-5xl font-bold text-white">
        Projects
      </p>

      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          src={amazon}
          title="Amazone-clone"
          description="React Material-UI Stripe Firebase Authentication"
          demo="https://amazon-clone-gutc6z8f7-welin-chen.vercel.app/"
          code="https://github.com/Welin-Chen/amazon-clone"
        />
        <ProjectCard
          src={netflix}
          title="Netflix-clone"
          description="descrition1"
          demo="https://netflix-clone-six-orpin.vercel.app/"
          code="https://github.com/Welin-Chen/netflix-clone"
        />
        <ProjectCard
          src={covid_19}
          title="Covid-19 Tracker"
          description="descrition1"
          demo="https://covid-19-tracker-blond.vercel.app/"
          code="https://github.com/Welin-Chen/covid-19-tracker"
        />
        <ProjectCard
          src={spotify}
          title="Spotify-clone"
          description="descrition1"
          demo="https://spotify-clone-theta-ten.vercel.app/"
          code="https://github.com/Welin-Chen/spotify-clone"
        />
        <ProjectCard
          src={airbnb}
          title="Airbnb-clone"
          description="descrition1"
          demo="https://airbnb-clone-tau-jade.vercel.app/"
          code="https://github.com/Welin-Chen/airbnb-clone"
        />
        <ProjectCard
          src={hulu}
          title="Hulu-clone"
          description="descrition1"
          demo="https://hulu-clone-coral-seven.vercel.app/"
          code="https://github.com/Welin-Chen/hulu-clone"
        />
        <ProjectCard
          src={YelpCamp}
          title="YelpCamp"
          description="descrition1"
          demo="https://still-badlands-39239.herokuapp.com/campgrounds"
          code="https://github.com/Welin-Chen/Web_Development_Bootcamp_2022_ColtSteele/tree/master/YelpCamp"
        />
      </div>
    </div>
  );
}

export default Projects;
