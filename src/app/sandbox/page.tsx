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
    </div>
  );
}
