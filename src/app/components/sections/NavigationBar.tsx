"use client";
import { FaGripLines } from "react-icons/fa6";
import { FaGripLinesVertical } from "react-icons/fa6";

import { useState } from "react";

import MyButton from "../MyButton";
import MyNavLink from "../MyNavLink";
import MyThemeSwitch from "../MyThemeSwitch";

export default function NavigationBar() {
  const [mobileNavMenu, setMobileNavMenu] = useState(false);
  return (
    <section className="border border-transparent border-b-shadow">
      <div className="flex flex-row justify-between h-20 items-center">
        <div className="flex flex-row font-semibold text-2xl">
          <div className="text-[#303030]">Nicolas&nbsp;</div>
          <div className="text-[#909090]">Arcelin</div>
        </div>
        <ul className="hidden md:flex flex-row gap-4 ">
          <li>
            {/* Id is empty to represent / pathname to match home. May need to be change for consistency */}
            <MyNavLink id="">Home</MyNavLink>
          </li>
          <li>
            <MyNavLink id="about">About</MyNavLink>
          </li>
          <li>
            <MyNavLink id="works">Works</MyNavLink>
          </li>
          <li>
            <MyNavLink id="services">Services</MyNavLink>
          </li>
          <li>
            <MyNavLink id="contact">Contact</MyNavLink>
          </li>
        </ul>
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
        <MyButton onClick={() => console.log("Clicked")} withArrow>
          Let&apos;s Talk
        </MyButton>
        <MyThemeSwitch />
      </div>

      {mobileNavMenu ? (
        <ul className="flex flex-row anitmate-bounce md:hidden justify-between gap-4 pb-5">
          <li>
            {/* Id is empty to represent / pathname to match home. May need to be change for consistency */}
            <MyNavLink id="">Home</MyNavLink>
          </li>
          <li>
            <MyNavLink id="about">About</MyNavLink>
          </li>
          <li>
            <MyNavLink id="works">Works</MyNavLink>
          </li>
          <li>
            <MyNavLink id="services">Services</MyNavLink>
          </li>
          <li>
            <MyNavLink id="contact">Contact</MyNavLink>
          </li>
        </ul>
      ) : null}
    </section>
  );
}
