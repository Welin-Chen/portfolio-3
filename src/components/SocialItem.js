import React from "react";

function SocialItem({ path, Icon }) {
  return (
    <a
      target="_blank"
      href={path}
      className="p-1 mx-2 text-white transition-all duration-300 ease-in-out rounded-full cursor-pointer group hover:bg-gray-400 hover:scale-125"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

export default SocialItem;
