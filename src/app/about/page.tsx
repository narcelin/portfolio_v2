import AboutSnippet from "../components/sections/AboutSnippet";
import ReachMe from "../components/sections/ReachMe";

import MyHeader from "../components/MyHeader";
import MyParagraph from "../components/MyParagraph";
import MySimpleCard from "../components/MySimpleCard";

export default function About() {
  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <div className="flex flex-col md:w-1/2 justify-center items-center">
        <MyHeader
          headerType={4}
          className="text-center border border-transparent border-b-shadow w-1/2"
        >
          About Us
        </MyHeader>
        <MyParagraph className=" text-center justify-center">
          Empowering Your Vision Through Creative Design Solutions, Intuitive
          User Experiences, and Innovative Design Thinking
        </MyParagraph>
      </div>
      <AboutSnippet />
      <div className="container flex flex-col items-center">
        <MyHeader headerType={2}>Work History</MyHeader>
        <MySimpleCard
          title="Project Manager"
          subTitle="Classic Brass Works"
          imgSrc="IMG SOURCE"
        />
        <MySimpleCard
          title="Assistent Project Manager / Jr. Super Intendent"
          subTitle="Manhattan Construction"
          imgSrc="IMG SOURCE"
        />
      </div>
      <ReachMe />
    </main>
  );
}
