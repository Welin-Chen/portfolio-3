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
import { Link } from "react-router-dom";
import SocialItems from "./SocialItems";
import { CgFileDocument } from "react-icons/cg";

function Navbar() {
  const [menuShow, setMenuShow] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      onClick={() => setMenuShow(!menuShow)}
      className={`z-10 flex w-screen bg-black fixed top-0 transition--300-ease-in-out  ${
        show ? "opacity-80 backdrop-blur-md" : "opacity-100  "
      }`}
    >
      {/* logo */}
      <Link
        to="/"
        className="flex items-start justify-center w-screen px-6 m-4 text-2xl text-purple-500 sm:items-center group hover:text-pink-500 sm:hover:scale-110 transition--300-ease-in-out"
      >
        <div className="flex items-center">
          <CgFileDocument className="w-8 h-8 mr-1 text-purple-500 group-hover:text-pink-500 transition--300-ease-in-out" />
          {/* Portfolio */}
          {/* {menuShow ? <br /> : <p>Portfolio</p>} */}
          <div className="hidden md:flex">Portfolio</div>
        </div>
      </Link>

      {/* navbar */}
      <nav className="flex flex-col items-center justify-center w-screen pt-8 m-2 lg:items-end lg:mr-28 sm:pt-0">
        <div
          className={
            "hidden sm:flex flex-col sm:flex-row max-w-2xl " && menuShow
              ? "sm:flex flex-col sm:flex-row max-w-2xl "
              : "hidden sm:flex flex-col sm:flex-row max-w-2xl "
          }
        >
          <NavbarItem path="/" title="Home" Icon={HomeIcon} />
          <NavbarItem path="/about" title="About" Icon={UserIcon} />
          <NavbarItem
            path="/projects"
            title="Projects"
            Icon={PresentationChartBarIcon}
          />
          <NavbarItem
            path="/contact"
            title="Contact"
            Icon={DocumentReportIcon}
          />
        </div>
      </nav>
      {/* social icons */}
      <SocialItems className="items-center hidden mx-5 xl:flex" />
      {/* menu && close icon*/}
      <div
        onClick={() => setMenuShow(!menuShow)}
        className="flex px-10 m-4 text-purple-500 cursor-pointer sm:hidden items-star sm:items-center hover:text-pink-500 transition--300-ease-in-out"
      >
        {menuShow ? <XIcon className="h-8" /> : <MenuIcon className="h-8" />}
      </div>
    </div>
  );
}

export default Navbar;
