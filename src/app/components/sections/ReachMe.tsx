"use client";

import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

export default function ReachMe({ className }: { className?: string }) {
  return (
    <section
      className={`${className} py-10 gap-10 flex flex-col justify-center items-center`}
    >
      <MyHeader headerType={2} className="md:w-1/3 text-center">
        Have a project in mind? Let&apos;s get to work.
      </MyHeader>
      <div className="flex flex-row items-center gap-5">
        <MyButton onClick={() => console.log("Clicked")} fancy withArrow>
          Say Hello
        </MyButton>
        <MyButton onClick={() => console.log("Clicked")}>Say Hello</MyButton>
      </div>
    </section>
  );
}
