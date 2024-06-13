import Image from "next/image";

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
        size={800}
      />
      <div className="md:w-1/2 flex flex-col gap-10">
        <div className="flex flex-row gap-10">
          <a href="https://github.com/narcelin" target="_blank">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/narcelin/" target="_blank">
            <FaLinkedin size={20} />
          </a>
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaTwitter size={20} />
        </div>
        {/* Issue will arise when dynamically adding mobile views */}
        <MyHeader headerType={1}>👋 Hey there,</MyHeader>
        <MyHeader headerType={1}>It&apos;s Nicolas Arcelin.</MyHeader>
        <p className="text-shadow text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          explicabo eius repellendus delectus ullam neque esse repellat amet
          ducimus ipsum!
        </p>
        <div className="flex flex-row justify-center gap-10">
          <MyButton fancy withArrow>
            Say Hello
          </MyButton>
          <MyButton>My Portfolio</MyButton>
        </div>
      </div>
      <MyImageContainer
        classNames="w-1/2 border border-red-500"
        device="ipad"
        source="/assets/imgs/img1.jpg"
        alternateTxt="picture of me"
        size={1000}
      />
    </section>
  );
}
