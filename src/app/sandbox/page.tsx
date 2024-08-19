"use client";

import MyButton from "../components/MyButton";

export default function sandbox() {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <MyButton
        onClick={() => console.log("Clicked")}
        fancy={false}
        withArrow={false}
      >
        Education
      </MyButton>

      <div className="flex flex-row gap-10">
        <div className="border border-black px-10 py-3">Flex 1</div>
        <div className="border border-black px-10 py-3">Flex 2</div>
        <div className="border border-black px-10 py-3">Flex 3</div>
      </div>
    </div>
  );
}
