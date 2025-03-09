"use client";

import MySocials from "../MySocials";

import MyImageContainer from "../MyImageContainer";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";
import MyText from "../MyText";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center md:flex-row gap-10 py-10">
      <MyImageContainer
        device="phone"
        classNames="md:flex"
        source="/assets/imgs/img1.jpg"
        alternateTxt="picture of me"
        size={100}
      />
      <div className="md:w-3/4 xl:w-full flex flex-col gap-10">
        <MySocials />
        {/* Issue will arise when dynamically adding mobile views */}
        <div>
          <MyHeader headerType={1}>👋 Hey there,</MyHeader>
          <MyHeader headerType={1}>It&apos;s Nicolas Arcelin.</MyHeader>
        </div>
        <MyText className="text-xl" isSubtle>
          Welcome to my corner of the web. Please feel free to contact me at any
          time.
        </MyText>
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
