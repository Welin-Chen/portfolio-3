import React, { useState } from "react";
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

function Navbar() {
  const [menuExpend, setMenuExpend] = useState(false);

  return (
    // <header className="flex m-5 justify-end items-center h-auto">
    // <nav className="flex flex-col md:flex-row flex-grow justify-evenly max-w-2xl">

    <div className="flex md:justify-center lg:justify-end bg-black">
      <div className="flex flex-col md:flex-row flex-grow max-w-2xl justify-center items-center m-5">
        <div
          onClick={() => setMenuExpend(!menuExpend)}
          className="md:hidden w-full flex justify-end cursor-pointer pr-10 hover:text-red-500 transition-all duration-200 ease-in-out"
        >
          {menuExpend ? (
            <XIcon className="h-8" />
          ) : (
            <MenuIcon className="h-8" />
          )}
        </div>

        <div
          className={
            "flex flex-col md:flex-row flex-grow max-w-2xl justify-center items-center"
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
      </div>
    </div>
    // </header>
  );
}

export default Navbar;
