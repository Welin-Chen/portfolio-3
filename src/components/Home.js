import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import React from "react";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import SocialItem from "./SocialItem";
import SocialItems from "./SocialItems";

function Home() {
  return (
    <div className="flex flex-col m-16 mt-32 md:m-32 lg:m-52">
      <section className="text-white ">
        <p className="text-5xl w-fit purpleText">Hello 👋</p>
        <p className="mt-5 text-4xl w-fit purpleText">
          Welcome to my portfolio
        </p>
        <p className="mt-5 text-4xl w-fit purpleText">I'm Welin Chen.</p>
        <p className="mt-5 text-4xl">
          I like coding, I'm interesting in web development.
        </p>
        <div className="mt-5 text-4xl">My goal is become a web developer!</div>
      </section>

      <section>
        <p className="mt-10 mb-5 text-2xl">
          Now I've built some front-end and back-end projects, master skills at
          ...
        </p>

        <Link to="/about">
          <button
            type="button"
            // className="flex items-center text-2xl text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            className="flex items-center text-2xl text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 hover:scale-110 transition duration-300 ease-in-out"
          >
            View More
            <AiOutlineArrowRight className="ml-2" />
          </button>
        </Link>
      </section>

      <section className="flex flex-col items-center ">
        {/* <p className="mt-16 text-3xl text-center">Find Me</p> */}
        {/* <p className="mt-16 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> */}
        <p className="purpleText">Find Me</p>
        <div className="flex justify-center my-2 mt-10">
          <a
            target="_blank"
            href="tel:0929015591"
            className="flex items-center p-2 mx-8 text-2xl font-medium text-center text-white transition-all duration-300 ease-in-out rounded-full shadow-lg cursor-pointer group hover:bg-gray-400 hover:scale-125 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 "
            // className="p-1 mx-8 text-white transition-all duration-300 ease-in-out rounded-full cursor-pointer group hover:bg-gray-400 hover:scale-125"
          >
            <PhoneIcon className="w-12 h-12" />
          </a>
          <a
            target="_blank"
            href="mailTo:a0929015591@gmail.com"
            // className="p-1 mx-8 text-white transition-all duration-300 ease-in-out rounded-full cursor-pointer group hover:bg-gray-400 hover:scale-125"
            className="flex items-center p-2 mx-8 text-2xl font-medium text-center text-white transition-all duration-300 ease-in-out rounded-full shadow-lg cursor-pointer group hover:bg-gray-400 hover:scale-125 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 "
          >
            <MailIcon className="w-12 h-12" />
          </a>
          <a
            target="_blank"
            href="https://github.com/Welin-Chen"
            className="flex items-center p-2 mx-8 text-2xl font-medium text-center text-white transition-all duration-300 ease-in-out rounded-full shadow-lg cursor-pointer group hover:bg-gray-400 hover:scale-125 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 "
            // className="p-1 mx-8 text-white transition-all duration-300 ease-in-out rounded-full cursor-pointer group hover:bg-gray-400 hover:scale-125"
          >
            <AiFillGithub className="w-12 h-12" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
