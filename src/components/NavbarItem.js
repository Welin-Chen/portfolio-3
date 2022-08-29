import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({ path, title, Icon }) {
  return (
    <Link
      to={path}
      className="flex flex-col items-center px-5 py-2 cursor-pointer transition--300-ease-in-out group lg:flex-row hover:text-white sm:py-0 hover:scale-110"
    >
      <Icon className="h-6 mb-1" />
      <p className="ml-1 text-lg font-bold tracking-widest">{title}</p>
    </Link>
  );
}

export default NavbarItem;
