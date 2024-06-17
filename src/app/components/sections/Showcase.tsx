"use client";

import MyHeader from "../MyHeader";
import MyButton from "../MyButton";
import MyImageContainer from "../MyImageContainer";

export default function Showcase() {
  return (
    <section className="py-10 flex flex-col gap-10 items-center">
      <MyHeader headerType={3}>Explore My Latest Works</MyHeader>
      <div className="flex flex-col md:flex-row items-center gap-10 w-full xl:w-2/3">
        <div className="w-full md:w-1/2">
          <MyImageContainer
            classNames="flex flex-row justify-center items-center h-60"
            size={1000}
            source="/assets/imgs/projectPrevPortfolio.jpg"
            alternateTxt="Project Crown Clothing Preview"
          />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <MyHeader headerType={3}>Portfolio</MyHeader>
              <div className="text-shadow">
                NextJS, TailwindCSS, Typescript, and More
              </div>
            </div>
            <MyButton
              onClick={() =>
                window.open(
                  "https://github.com/narcelin/portfolio_v2",
                  "_blank"
                )
              }
              justArrow
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <MyImageContainer
            classNames="flex flex-row justify-center items-center h-60"
            size={1000}
            source="/assets/imgs/projectPrevDataStructsInCpp.jpg"
            alternateTxt="Project Crown Clothing Preview"
          />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <MyHeader headerType={3}>Data Structure Models</MyHeader>
              <div className="text-shadow">
                Linked Lists, Stacks, Queues, and More. All in C++
              </div>
            </div>
            <MyButton
              onClick={() =>
                window.open(
                  "https://github.com/narcelin/cpp_datastructures",
                  "_blank"
                )
              }
              justArrow
            />
          </div>
        </div>
      </div>
      <div className="xl:w-2/3">
        <MyImageContainer
          classNames="text-6xl flex flex-row justify-center items-center"
          size={1000}
          source="/assets/imgs/projectCrwnClothingPrev.jpg"
          alternateTxt="Project Crown Clothing Preview"
        />
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <MyHeader headerType={3}>Online Retail Store</MyHeader>
            <div className="text-shadow">
              Authentication, Payment, Contact, and More
            </div>
          </div>
          <MyButton
            justArrow
            onClick={() =>
              window.open(
                "https://narcelin.github.io/ztm-crwn-clothing/",
                "_blank"
              )
            }
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-center">
        <MyButton onClick={() => console.log("Clicked")}>
          Let&apos;s See More
        </MyButton>
      </div>
    </section>
  );
}
