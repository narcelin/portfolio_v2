"use client";

import HeroSection from "./components/sections/HeroSection";
import AboutSnippet from "./components/sections/AboutSnippet";
import Showcase from "./components/sections/Showcase";
import ReachMe from "./components/sections/ReachMe";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSnippet />
      <Showcase />
      <ReachMe />
      <div className="border border-green-500 p-24 m-10">
        <div>My offerings to you</div>
        <div>Latest Project</div>
        <div>Latest blog post</div>
        <div>Contact me</div>
        <div>Footer</div>
      </div>
    </main>
  );
}
