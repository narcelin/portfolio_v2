export default function HeroSection() {
  return (
    <section className="flex flex-row gap-10 py-10">
      <div className="w-1/2 flex flex-col gap-10">
        <div className="flex flex-row gap-10">
          {" "}
          SOCIAL LINKS
          <div>IG</div>
          <div>FB</div>
          <div>TW</div>
          <div>LI</div>
        </div>
        <h1 className="text-7xl font-semibold">
          👋 Hey there, <br /> It&apos;s Nicolas.
        </h1>
        <p className="text-shadow text-xl">
          Welcome to my creative corner! I&apos;m Nicolas Arcelin, a passionate
          UI/UX designer with three years of experience crafting digital
          experiences that are both visually stunning and user-friendly.
        </p>
        <div className="flex flex-row gap-10">
          <button className="text-[#303030] border border-[#757575] rounded-full w-36 h-12 justify-center items-center">
            Say Hello
          </button>
          <button className="text-[#303030] border border-[#757575] rounded-full w-36 h-12 justify-center items-center">
            My Portfolio
          </button>
        </div>
      </div>
      <div className="text-9xl w-1/2 border border-red-500 flex flex-row justify-center items-center">
        IMAGE
      </div>
    </section>
  );
}
