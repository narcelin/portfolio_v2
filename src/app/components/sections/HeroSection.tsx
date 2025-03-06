"use client";

import Image from "next/image";

import MySocials from "../MySocials";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import MyImageContainer from "../MyImageContainer";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center md:flex-row gap-10 py-10">
      <MyImageContainer
        device="phone"
        classNames="md:flex"
        source="/assets/imgs/img1.jpg"
        alternateTxt="picture of me"
        size={1000}
      />
      <div className="md:w-3/4 xl:w-full flex flex-col gap-10">
        <MySocials />
        {/* <div className="flex flex-row gap-10">
          <a href="https://github.com/narcelin" target="_blank">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/narcelin/" target="_blank">
            <FaLinkedin size={20} />
          </a>
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaTwitter size={20} />
        </div> */}

        {/* Issue will arise when dynamically adding mobile views */}
        <div>
          <MyHeader headerType={1}>👋 Hey there,</MyHeader>
          <MyHeader headerType={1}>It&apos;s Nicolas Arcelin.</MyHeader>
        </div>
        <p className="text-shadow text-xl">
          Welcome to my corner of the web. Please feel free to contact me at any
          time.
        </p>
        <div className="flex flex-row justify-center gap-10">
          <MyButton
            onClick={() => window.open("/contact", "_self")}
            fancy
            withArrow
          >
            Say Hello
          </MyButton>
          <MyButton
            onClick={() => window.open("/assets/narcelin_CV2024.pdf", "_blank")}
          >
            My CV
          </MyButton>
        </div>
      </div>
      <MyImageContainer
        classNames=""
        device="ipad"
        source="/assets/imgs/img1.jpg"
        alternateTxt="picture of me"
        size={1000}
      />
    </section>
  );
}
