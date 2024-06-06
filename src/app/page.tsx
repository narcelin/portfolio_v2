import NavigationBar from "./components/sections/NavigationBar";
import HeroSection from "./components/sections/HeroSection";
import AboutSnippet from "./components/sections/AboutSnippet";
import Showcase from "./components/sections/Showcase";
import MyOfferings from "./components/sections/MyOfferings";
import ReachMe from "./components/sections/ReachMe";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSnippet />
      <Showcase />
      <MyOfferings />
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
