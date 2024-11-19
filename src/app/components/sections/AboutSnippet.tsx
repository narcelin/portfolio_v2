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
        {/* <div className="text-shadow text-xl leading-">
          I began my career as a civil engineer, earning a dual degree in
          engineering from Florida Gulf Coast University. Over the years, I held
          various project management positions across different construction
          companies. During this time, I discovered my true passion for software
          development.
        </div>
        <div className="text-shadow text-xl">
          I frequently created VBA scripts in Excel, fixed website issues, and
          became the go-to person for technical expertise in my office. Driven
          by a desire to enhance efficiency, I decided to delve deeper into
          software development.
        </div>
        <div className="text-shadow text-xl">
          My journey began with learning the basics, starting with simple
          &quot;Hello, World&quot; applications in HTML, CSS, and JavaScript. As
          I honed my skills, I progressed to using frameworks like ReactJS and
          NextJS, along with TailwindCSS. Along the way, I became proficient
          with tools like VSCode and developed a strong appreciation for clean,
          efficient code.
        </div>
        <div className="text-shadow text-xl">
          This transition from civil engineering to software development has
          allowed me to merge my technical background with my newfound passion,
          opening up new avenues for creativity and problem-solving in my
          career.
        </div> */}
        <div className="text-shadow text-xl">
          I began my career as a civil engineer, earning a dual degree in
          engineering from Florida Gulf Coast University. Over the years, I held
          various project management positions across different construction
          companies, where I developed a strong technical foundation and a knack
          for problem-solving.
        </div>
        <div className="text-shadow text-xl">
          In these roles, I leveraged technology to improve project workflows,
          creating VBA scripts in Excel to streamline data analysis and
          developing solutions for website issues to enhance communication. My
          expertise in software tools like HTML, CSS, JavaScript, and frameworks
          such as ReactJS and TailwindCSS allowed me to implement efficient,
          customized solutions tailored to construction management challenges.
        </div>
        <div className="text-shadow text-xl">
          This blend of civil engineering expertise and technical proficiency
          has enabled me to optimize processes, improve collaboration, and add
          measurable value to construction projects. I am eager to bring this
          integrated skill set to a forward-thinking team, driving innovation
          and efficiency in the construction industry.
        </div>
        <div className="flex flex-row justify-center gap-10">
          <MyButton
            onClick={() => window.open("/contact", "_self")}
            fancy
            withArrow
          >
            Let&apos;s Talk
          </MyButton>
          <MyButton onClick={() => window.open("/about", "_self")}>
            See More
          </MyButton>
        </div>
      </div>
    </section>
  );
}
