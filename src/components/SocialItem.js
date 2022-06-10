import React from "react";

function SocialItem({ path, Icon }) {
  return (
    <a
      target="_blank"
      href={path}
      className="p-2 mx-2 text-white transition-all duration-200 ease-in-out rounded-full cursor-pointer group hover:bg-gray-400"
    >
      <Icon className="w-auto h-6 group-hover:scale-125" />
    </a>
  );
}

export default SocialItem;
