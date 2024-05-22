"use client";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <section className="border border-red-500 px-32">
      <div className="flex flex-row justify-between h-28 items-center">
        <div className="flex flex-row">
          <div className="text-[#303030]">Nicolas&nbsp;</div>
          <div className="text-[#909090]">Arcelin</div>
        </div>
        <ul className="flex flex-row gap-4">
          <li>
            <button className="text-[#303030]">Home</button>
          </li>
          <li>
            <button className="text-[#303030]">About</button>
          </li>
          <li>
            <button className="text-[#303030]">Works</button>
          </li>
          <li>
            <button className="text-[#303030]">Services</button>
          </li>
          <li>
            <button className="text-[#303030]">Contact</button>
          </li>
        </ul>
        <button className="text-[#303030] border border-[#757575] rounded-full w-36 h-12 flex flex-row justify-center items-center">
          <div>Let&apos;s Talk</div>
          <Image
            src="/assets/arrow-narrow-right.svg"
            width={25} //ADJUST TO DYNAMIC
            height={25}
            alt="arrow"
          />
        </button>
      </div>
    </section>
  );
}
