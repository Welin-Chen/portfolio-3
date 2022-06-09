import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({ path, title, Icon }) {
  return (
    <Link
      to={path}
      className="w-full flex flex-col lg:flex-row justify-center items-center cursor-pointer group hover:text-white opacity-100 hover:opacity-100 transition-all duration-200 hover:ease-in-out py-2 md:py-0"
    >
      <Icon className="h-10 mb-1 group-hover:animate-bounce" />
      <p className="ml-1 tracking-widest">{title}</p>
    </Link>
  );
}

export default NavbarItem;
