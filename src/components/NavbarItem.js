import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({ path, title, Icon }) {
  return (
    <Link
      to={path}
      className="flex flex-col lg:flex-row items-center cursor-pointer group hover:text-white transition-all duration-200 hover:ease-in-out px-5 py-2 sm:py-0"
    >
      {/* <Icon className="h-8 mb-1 group-hover:animate-bounce" /> */}
      <Icon className="h-6 mb-1 group-hover:scale-110" />
      <p className="ml-1 tracking-widest group-hover:font-bold">{title}</p>
    </Link>
  );
}

export default NavbarItem;
