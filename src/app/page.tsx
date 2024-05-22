import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import AboutSnippet from "./components/AboutSnippet";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <main className="w-4/5 mx-auto">
      <NavigationBar />
      <HeroSection />
      <AboutSnippet />
      <Showcase />
      <div className="border border-green-500 pt-24">
        <div>QUICK BIO</div>
        <div>Latest Works</div>
        <div>My offerings to you</div>
        <div>Latest Project</div>
        <div>Latest blog post</div>
        <div>Contact me</div>
        <div>Footer</div>
      </div>
    </main>
  );
}
