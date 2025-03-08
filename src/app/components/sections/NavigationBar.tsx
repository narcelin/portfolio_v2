"use client";
import { FaGripLines } from "react-icons/fa6";
import { FaGripLinesVertical } from "react-icons/fa6";

import { useState } from "react";

import MyButton from "../MyButton";
import MyNavLink from "../MyNavLink";
import MyThemeSwitch from "../MyThemeSwitch";

import { NavLinks } from "../MyNavLink";

export default function NavigationBar() {
  const [mobileNavMenu, setMobileNavMenu] = useState(false);

  // const navLinks = (classNames: string) => (
  //   <ul className={`${classNames}`}>
  //     <li>
  //       {/* Id is empty to represent / pathname to match home. May need to be change for consistency */}
  //       <MyNavLink id="">Home</MyNavLink>
  //     </li>
  //     <li>
  //       <MyNavLink id="about">About</MyNavLink>
  //     </li>
  //     <li>
  //       <MyNavLink id="contact">Contact</MyNavLink>
  //     </li>
  //   </ul>
  // );

  return (
    <section className="border border-transparent border-b-shadow">
      <div className="flex flex-row justify-between h-20 items-center">
        <div className="flex flex-row font-semibold text-2xl">
          <div className="text-[#303030]">Nicolas&nbsp;</div>
          <div className="text-[#909090]">Arcelin</div>
        </div>
        {NavLinks("hidden md:flex flex-row gap-4")}
        <button
          className="md:hidden"
          onClick={() => setMobileNavMenu(!mobileNavMenu)}
        >
          {mobileNavMenu ? (
            <FaGripLinesVertical className="" />
          ) : (
            <FaGripLines />
          )}
        </button>
        <MyThemeSwitch />
        <MyButton onClick={() => window.open("/contact", "_self")} withArrow>
          Let&apos;s Talk
        </MyButton>
      </div>

      {mobileNavMenu
        ? NavLinks(
            "flex flex-row anitmate-bounce md:hidden justify-around gap-4 pb-5"
          )
        : null}
    </section>
  );
}
