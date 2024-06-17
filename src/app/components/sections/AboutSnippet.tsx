"use client";

import Image from "next/image";

import MyImageContainer from "../MyImageContainer";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

export default function AboutSnippet() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 py-10">
      <MyImageContainer
        classNames="w-1/2"
        alternateTxt="picture of me"
        size={1000}
        source="/assets/imgs/img2.jpg"
      />
      <div className="w-3/4 xl:w-full flex flex-col  gap-10">
        <MyHeader headerType={2}>Digital Journey</MyHeader>
        <div className="text-shadow text-xl leading-">
          I started off as a civil engineer with a dual degree in engineering
          from Florida Gulf Coast University. Over the years of working
          different project management positions in a variety of construction
          companies, I found my true passion in software.
        </div>
        <div className="text-shadow text-xl">
          I always found myself creating my own VBA scripts on excel, fixing our
          websites issues, and would became the guy to go to for technical
          expertise in my office. Intrigued by the idea of making my work more
          effecient, I decided to expand my knowlege in software.
        </div>
        <div className="text-shadow text-xl">
          At first, it started off with learning the basics. The typical
          &quot;Hello, World.&quot; applications with HTML, CSS, and Javascript.
          Eventually it progressed to using frameworks like ReactJS and NextJS
          with TailwindCSS. Throughout this journey I&apos;ve become more adapt
          at using tools like VSCode and understanding the importance of proper,
          simple code.
        </div>
        <div className="flex flex-row justify-center gap-10">
          <MyButton onClick={() => console.log("Clicked")} fancy withArrow>
            Let&apos;s Talk
          </MyButton>
          <MyButton onClick={() => console.log("Clicked")}>
            Our Services
          </MyButton>
        </div>
      </div>
    </section>
  );
}
