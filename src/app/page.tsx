"use client";

import HeroSection from "./components/sections/HeroSection";
import AboutSnippet from "./components/sections/AboutSnippet";
import Showcase from "./components/sections/Showcase";
import ReachMe from "./components/sections/ReachMe";

import { Slide, toast } from "react-toastify";

import { useEffect } from "react";

export default function Home() {
  const hasShownBefore = localStorage.getItem("constructionAlertShown");
  useEffect(() => {
    const underConstructionAlert = () => {
      toast.warning("Under Construction", {
        position: "top-right",
        autoClose: 800,
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
    </main>
  );
}
