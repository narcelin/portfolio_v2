export default function AboutSnippet() {
  return (
    <section className="flex flex-row gap-10 py-10">
      <div className="text-9xl w-1/2 border border-red-500 flex flex-row justify-center items-center">
        IMAGE
      </div>
      <div className="w-1/2 flex flex-col  gap-10">
        <div className="text-5xl font-semibold">
          Digital Experiences with Passion
        </div>
        <div className="text-shadow text-xl">
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
          <button className="text-[#303030] border border-[#757575] rounded-full w-36 h-12 justify-center items-center">
            Say Hello
          </button>
          <button className="text-[#303030] border border-[#757575] rounded-full w-36 h-12 justify-center items-center">
            My Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
