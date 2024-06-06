import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

export default function HeroSection() {
  return (
    <section className="flex flex-row gap-10 py-10">
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
          UI/UX designer with three years of experience crafting digital
          experiences that are both visually stunning and user-friendly.
        </p>
        <div className="flex flex-row gap-10">
          <MyButton fancy withArrow>
            Say Hello
          </MyButton>
          <MyButton>My Portfolio</MyButton>
        </div>
      </div>
      <div className="text-9xl w-1/2 border border-red-500 flex flex-row justify-center items-center">
        IMAGE
      </div>
    </section>
  );
}
