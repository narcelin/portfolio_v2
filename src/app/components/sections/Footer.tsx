"use client";
import MyNavLink from "../MyNavLink";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="py-10 flex flex-col md:flex-row justify-between items-center gap-4 border border-transparent border-t-shadow">
      <div className="flex flex-row gap-5">
        <FaGithub size={20} />
        <FaFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
      </div>
      <ul className="flex flex-row gap-4">
        <li>
          {/* Id is empty to represent / pathname to match home. May need to be change for consistency */}
          <MyNavLink id="">Home</MyNavLink>
        </li>
        <li>
          <MyNavLink id="about">About</MyNavLink>
        </li>
        <li>
          <MyNavLink id="works">Works</MyNavLink>
        </li>
        <li>
          <MyNavLink id="services">Services</MyNavLink>
        </li>
        <li>
          <MyNavLink id="contact">Contact</MyNavLink>
        </li>
      </ul>
    </section>
  );
}
