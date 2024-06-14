"use client";

import HeroSection from "./components/sections/HeroSection";
import AboutSnippet from "./components/sections/AboutSnippet";
import Showcase from "./components/sections/Showcase";
import ReachMe from "./components/sections/ReachMe";

import { Slide, toast } from "react-toastify";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const underConstructionAlert = () => {
      toast.warning("Under Construction", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    };
    underConstructionAlert();
  }, []);

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
