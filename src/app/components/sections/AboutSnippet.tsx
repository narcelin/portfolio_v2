import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

export default function AboutSnippet() {
  return (
    <section className="flex flex-row gap-10 py-10">
      <div className="text-9xl w-1/2 border border-red-500 flex flex-row justify-center items-center">
        IMAGE
      </div>
      <div className="w-1/2 flex flex-col  gap-10">
        <MyHeader headerType={2}>Digital Experiences with Passion</MyHeader>
        <div className="text-shadow text-xl leading-">
          Ever since I was young, I&apos;ve been fascinate by the intersection
          of design and technology. This curiosity led me dto pursue a degree in
          Graphic Design.
        </div>
        <div className="text-shadow text-xl">
          where I honded my skilled in visual communication and digital
          artidtry. As I delved deeper into the world of design, I found my true
          calling in UI/UX design - the perfect blend of aesthetics and
          functionality
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
