import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";

import SocialItem from "./SocialItem";

function SocialItems({ className }) {
  return (
    <div className={className}>
      <SocialItem path="tel:0929015591" Icon={PhoneIcon} />
      <SocialItem path="mailTo:a0929015591@gmail.com" Icon={MailIcon} />
      <SocialItem path="https://github.com/Welin-Chen" Icon={AiFillGithub} />
      <SocialItem path="https://leetcode.com/welin/" Icon={SiLeetcode} />
      {/* <SocialItem
        path="https://www.facebook.com/cool.walin/"
        Icon={AiFillFacebook}
      />
      <SocialItem
        path="https://www.instagram.com/cool.walin/"
        Icon={AiFillInstagram}
      /> */}
      <SocialItem
        path="https://www.linkedin.com/in/welin-chen-058863113/"
        Icon={AiFillLinkedin}
      />
    </div>
  );
}

export default SocialItems;
