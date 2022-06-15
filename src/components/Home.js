import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import React from "react";
import { AiFillGithub, AiOutlineCloudDownload } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col m-16 md:mx-32 lg:mx-52">
      <section className="text-white ">
        <p className="text-5xl w-fit p--title--purple">Hello 👋</p>
        <p className="mt-5 text-4xl w-fit p--title--purple">
          Welcome to my portfolio
        </p>
        <p className="mt-5 text-4xl w-fit p--title--purple">I'm Welin Chen.</p>
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

        <div className="flex">
          <Link
            to="/file/簡歷-陳維霖.pdf"
            target="_blank"
            type="button"
            className="flex w-fit items-center text-2xl text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 hover:scale-110 transition duration-300 ease-in-out"
          >
            <AiOutlineCloudDownload className="mr-2" />
            Download CV
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center ">
        <p className="p--title--purple">Find Me</p>
        <div className="flex justify-center my-2 mt-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="tel:0929015591"
            className="flex items-center p-2 mx-8 text-2xl font-medium text-center text-white transition-all duration-300 ease-in-out rounded-full shadow-lg cursor-pointer group hover:bg-gray-400 hover:scale-125 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 "
          >
            <PhoneIcon className="w-12 h-12" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailTo:a0929015591@gmail.com"
            className="flex items-center p-2 mx-8 text-2xl font-medium text-center text-white transition-all duration-300 ease-in-out rounded-full shadow-lg cursor-pointer group hover:bg-gray-400 hover:scale-125 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 "
          >
            <MailIcon className="w-12 h-12" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Welin-Chen"
            className="flex items-center p-2 mx-8 text-2xl font-medium text-center text-white transition-all duration-300 ease-in-out rounded-full shadow-lg cursor-pointer group hover:bg-gray-400 hover:scale-125 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 "
          >
            <AiFillGithub className="w-12 h-12" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
