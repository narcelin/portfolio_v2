"use client";

import Image from "next/image";
import Link from "next/link";

import MyImageContainer from "../MyImageContainer";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

import { usePathname } from "next/navigation";

export function MyNavLink({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={`${
        pathname === `/${id}`
          ? "bg-my-gradient90 text-transparent bg-clip-text"
          : "text-shadow"
      } font-semibold`}
      href={`/${id}`}
    >
      {children}
    </Link>
  );
}

export default function HeroSection({
  id, // Will be used for the href in the MyNavLink
  imageSrc,
  imgAlt,
  title,
  description,
  date,
}: {
  id?: string;
  imageSrc?: string;
  imgAlt?: string;
  title?: string;
  description?: string;
  date?: string;
}) {
  return (
    <MyNavLink id={id ? id : "sandbox"}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid white",
          width: "60vw",
          padding: "1rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <Image
            src={imageSrc ? imageSrc : "/assets/imgs/img1.jpg"}
            alt={imgAlt ? imgAlt : "Event Image"}
            width={100}
            height={100}
          />
        </div>
        <div style={{ flex: 2, textAlign: "center" }}>
          <MyHeader headerType={3}>{title ? title : "Event Title"}</MyHeader>
          <div>{description ? description : "Event Description"}</div>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <div>{date ? date : "Event Date"}</div>
        </div>
      </div>
    </MyNavLink>
  );
}
