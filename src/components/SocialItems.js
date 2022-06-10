import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import SocialItem from "./SocialItem";

function SocialItems({ className }) {
  return (
    <div className={className}>
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
  );
}

export default SocialItems;
