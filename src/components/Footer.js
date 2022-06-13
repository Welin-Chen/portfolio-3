import React from "react";
import SocialItems from "./SocialItems";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-col items-center p-2 font-semibold bg-black md:justify-between md:flex-row">
      <p className="my-2">Desigined and Developed by Welin Chen</p>
      <p className="flex items-center my-2 ">
        <AiOutlineCopyrightCircle className="mr-1" />
        2022 Welin Chen
      </p>
      <SocialItems className="flex justify-end my-2" />
    </div>
  );
}

export default Footer;
