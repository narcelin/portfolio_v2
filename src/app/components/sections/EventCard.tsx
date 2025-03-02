"use client";

import Image from "next/image";

import MyImageContainer from "../MyImageContainer";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

export default function HeroSection({
  children,
  className,
  headerType,
}: {
  children: string;
  className?: string;
  headerType: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid white",
        width: "60vw",
      }}
    >
      <div style={{ flex: 1 }}>
        <Image
          src="/assets/imgs/img1.jpg"
          alt="picture of me"
          width={100}
          height={100}
        />
      </div>
      <div style={{ flex: 2, textAlign: "center" }}>
        <MyHeader headerType={3}>Event Title</MyHeader>
        <div>Event Description</div>
      </div>
      <div style={{ flex: 1, textAlign: "right" }}>
        <div>Event Date</div>
      </div>
    </div>
  );
}
