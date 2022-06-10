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
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import SocialItem from "./SocialItem";

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
  console.log(show);

  return (
    <div
      className={`flex w-screen bg-[#000] fixed top-0 ${
        show && "opacity-80 transition-opacity duration-500 ease-in"
      }`}
    >
      {/* logo */}
      <Link
        to="/"
        className="flex m-2 px-5 sm:items-center justify-center text-[#E50914] text-2xl hover:font-bold"
      >
        Portfolio
      </Link>

      {/* navbar */}
      <nav className="flex flex-col items-center justify-center w-screen pt-8 m-2 lg:items-end lg:mr-28 sm:pt-0">
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

      {/* social icons */}
      <div className="items-center hidden mx-5 md:flex">
        <SocialItem path="https://github.com/Welin-Chen" Icon={AiFillGithub} />
        <SocialItem
          path="https://www.facebook.com/cool.walin/"
          Icon={AiFillFacebook}
        />
        <SocialItem
          path="https://www.instagram.com/cool.walin/"
          Icon={AiFillInstagram}
        />
        <SocialItem
          path="https://www.linkedin.com/in/%E7%B6%AD%E9%9C%96-%E9%99%B3-058863113/"
          Icon={AiFillLinkedin}
        />
      </div>

      {/* menu && close icon*/}
      <div
        onClick={() => setMenuShow(!menuShow)}
        className="flex px-5 pt-2 transition-all duration-200 ease-in-out cursor-pointer sm:hidden items-star sm:items-center hover:text-white"
      >
        {menuShow ? <XIcon className="h-8" /> : <MenuIcon className="h-8" />}
      </div>
    </div>
  );
}

export default Navbar;
