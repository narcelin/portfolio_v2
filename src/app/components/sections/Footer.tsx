"use client";

import MyNavLink from "../MyNavLink";

import { NavLinks } from "../MyNavLink";
import MySocials from "../MySocials";

export default function Footer() {
  return (
    <section className="py-10 flex flex-col md:flex-row justify-between items-center gap-4 border border-transparent border-t-shadow">
      <MySocials />
      {NavLinks("flex flex-row gap-4")}
    </section>
  );
}
