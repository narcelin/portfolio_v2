import Image from "next/image";

import MyImageContainer from "../MyImageContainer";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

export default function AboutSnippet() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 py-10">
      <MyImageContainer
        alternateTxt="picture of me"
        size={800}
        source="/assets/imgs/img2.jpg"
      />
      <div className="w-1/2 flex flex-col  gap-10">
        <MyHeader headerType={2}>Digital Experiences with Passion</MyHeader>
        <div className="text-shadow text-xl leading-">
          Ever since I was young, I&apos;ve been fascinate by the intersection
          of effeciency and technology. This curiosity led me to pursue a degree
          in Engineering.
        </div>
        <div className="text-shadow text-xl">
          Where I honded my skilled in design and development. As I progressed
          on my journey, I found myself always creating my own scripts for many
          design programs we used in civil engineering.
        </div>
        <div className="text-shadow text-xl">
          I have then took the initiative to pursue a career is programming.
        </div>
        <div className="flex flex-row gap-10">
          <MyButton fancy withArrow>
            Let&apos;s Talk
          </MyButton>
          <MyButton>Our Services</MyButton>
        </div>
      </div>
    </section>
  );
}
