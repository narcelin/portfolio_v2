import Image from "next/image";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

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
        size={800}
      />
      <div className="w-1/2 flex flex-col gap-10">
        <div className="flex flex-row gap-10">
          <FaGithub size={20} />
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaTwitter size={20} />
        </div>
        {/* Issue will arise when dynamically adding mobile views */}
        <MyHeader headerType={1}>👋 Hey there,</MyHeader>
        <MyHeader headerType={1}>It&apos;s Nicolas Arcelin.</MyHeader>
        <p className="text-shadow text-xl">
          Welcome to my creative corner! I&apos;m Nicolas Arcelin, a passionate
          programmer with years of project managment experience and developing
          software.
        </p>
        <div className="flex flex-row gap-10">
          <MyButton fancy withArrow>
            Say Hello
          </MyButton>
          <MyButton>My Portfolio</MyButton>
        </div>
      </div>
      <MyImageContainer
        device="ipad"
        source="/assets/imgs/img1.jpg"
        alternateTxt="picture of me"
        size={800}
      />
    </section>
  );
}
