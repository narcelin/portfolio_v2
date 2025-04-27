"use client";

import Image from "next/image";
import Link from "next/link";

import MyImageContainer from "../MyImageContainer";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";
import MyParagraph from "../MyParagraph";

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
    <MyNavLink id={`myEvents/${id ? id : "error"}`}>
      <div className="flex flex-col md:flex-row items-center border border-white w-full md:w-[60vw] p-4">
        <div className="flex-1 mb-4 md:mb-0">
          {/* <MyImageContainer
            // device="phone"
            classNames="flex"
            source="/assets/imgs/poloClub.jpg"
            alternateTxt="picture of me"
            size={10}
          /> */}
          <Image
            src="/assets/imgs/poloClub.jpg"
            alt="Event Image"
            width={100}
            height={100}
          />
        </div>
        <div className="flex-2 text-center mb-4 md:mb-0">
          <MyHeader headerType={3}>{title ? title : "MISSING TITLE"}</MyHeader>
          <MyParagraph>
            {description ? description : "MISSING DESCRIPTION"}
          </MyParagraph>
        </div>
        <div className="flex-1 text-right">
          <MyParagraph>{date ? date : "Event Date"}</MyParagraph>
        </div>
      </div>
    </MyNavLink>
  );
}
