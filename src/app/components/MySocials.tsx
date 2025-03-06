"use client";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function MySocials() {
  return (
    // <div className="flex flex-row gap-5">
    //   <FaGithub size={20} />
    //   {/* <FaFacebook size={20} /> */}
    //   <FaInstagram size={20} />
    //   {/* <FaTwitter size={20} /> */}
    // </div>
    <div className="flex flex-row gap-10">
      <a href="https://github.com/narcelin" target="_blank">
        <FaGithub size={20} />
      </a>
      <a href="https://www.linkedin.com/in/narcelin/" target="_blank">
        <FaLinkedin size={20} />
      </a>
      {/* <FaFacebook size={20} /> */}
      <a
        href="https://www.instagram.com/nicodotdev?igsh=MWl1d2Y5cDI3aGs2cw%3D%3D&utm_source=qr"
        target="_blank"
      >
        <FaInstagram size={20} />
      </a>
      {/* <FaTwitter size={20} /> */}
    </div>
  );
}
