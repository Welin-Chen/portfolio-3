import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  PresentationChartBarIcon,
  DocumentReportIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import NavbarItem from "./NavbarItem";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuShow, setMenuShow] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  console.log(show);

  return (
    <header
      className={`flex w-screen bg-[#000] fixed top-0 ${
        show && "opacity-80 transition-opacity duration-500 ease-in"
      }`}
    >
      <Link
        to="/"
        className="flex justify-center items-center m-5 text-[#E50914] text-2xl hover:font-bold"
      >
        Portfolio
      </Link>

      <nav className="w-screen flex flex-col items-center justify-center lg:items-end lg:mr-28 m-2">
        <div
          onClick={() => setMenuShow(!menuShow)}
          className="sm:hidden w-full flex justify-end cursor-pointer hover:text-white transition-all duration-200 ease-in-out"
        >
          {menuShow ? <XIcon className="h-8" /> : <MenuIcon className="h-8" />}
        </div>

        <div
          className={
            "hidden sm:flex flex-col sm:flex-row max-w-2xl" && menuShow
              ? "sm:flex flex-col sm:flex-row max-w-2xl"
              : "hidden sm:flex flex-col sm:flex-row max-w-2xl"
          }
        >
          <NavbarItem path="/" title="Home" Icon={HomeIcon} />
          <NavbarItem path="/about" title="About" Icon={UserIcon} />
          <NavbarItem
            path="/projects"
            title="Projects"
            Icon={PresentationChartBarIcon}
          />
          <NavbarItem path="/resume" title="Resume" Icon={DocumentReportIcon} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
