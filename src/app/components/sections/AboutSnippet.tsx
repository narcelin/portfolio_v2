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
      <div className="md:w-1/2 flex flex-col  gap-10">
        <MyHeader headerType={2}>Digital Experiences with Passion</MyHeader>
        <div className="text-shadow text-xl leading-">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          voluptatem ad et doloremque a error, eos ducimus tempore ipsum
          officiis!
        </div>
        <div className="text-shadow text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          deserunt dolorum a perspiciatis ratione enim! Pariatur quod eligendi
          id velit eaque necessitatibus debitis nisi cupiditate? Perferendis
          accusamus hic natus mollitia exercitationem voluptatum delectus beatae
          fuga?
        </div>
        <div className="text-shadow text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, at?
        </div>
        <div className="flex flex-row justify-center gap-10">
          <MyButton fancy withArrow>
            Let&apos;s Talk
          </MyButton>
          <MyButton>Our Services</MyButton>
        </div>
      </div>
    </section>
  );
}
