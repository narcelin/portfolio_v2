"use client";
import PageHeading from "../components/PageHeading";
import MyHeader from "../components/MyHeader";
import ThirtiethBirthday from "../components/hardCoded/ThirtiethBirthday.json";
import MyButton from "../components/MyButton";

import Image from "next/image";
import MyImageContainer from "../components/MyImageContainer";

export default function MyEvent() {
  console.log(ThirtiethBirthday);
  return (
    <main className="flex flex-col items-center py-14 gap-10">
      {/* <div className="flex flex-col md:flex-row items-center border border-white w-full md:w-[60vw] p-4"></div> */}

      <MyHeader className="flex items-center justify-center" headerType={4}>
        That Trip To Spain
      </MyHeader>
      <div className="flex flex-col md:flex-row justify-between items-center md:justify-center w-full max-w-4xl gap-10">
        <div className="flex flex-col space-y-5 w-1/2">
          <MyImageContainer
            // device="phone"
            classNames="flex"
            source="/assets/imgs/img1.jpg"
            alternateTxt="picture of me"
            size={100}
          />
          {/* <Image
            src="/assets/imgs/img1.jpg"
            alt="Event Image"
            width={100}
            height={100}
          /> */}
          <a
            href="https://www.google.com/search?q=los+canos+de+meca+spain&sca_esv=df75e0f1ec09a3b7&udm=2&biw=1337&bih=852&sxsrf=AHTn8zqw_Wnv-voCgrj0NWYj-SHWXAtdVw:1741281379520&ei=Y9jJZ_-zH_mA0PEP15-zIA&ved=0ahUKEwi_8dHQ-vWLAxV5ADQIHdfPDAQQ4dUDCBE&uact=5&oq=los+canos+de+meca+spain&gs_lp=EgNpbWciF2xvcyBjYW5vcyBkZSBtZWNhIHNwYWluMgcQIxgnGMkCMgYQABgFGB4yBhAAGAUYHkiHE1AAWIMScAB4AJABAJgBYKABgguqAQIxN7gBA8gBAPgBAZgCEKAC8ArCAgYQABgHGB7CAggQABgHGAoYHsICCBAAGAcYCBgewgIIEAAYBRgHGB7CAgUQABiABJgDAJIHBDE0LjKgB9tE&sclient=img"
            target="_blank"
          >
            <div>LOCATION: Los Caños De Meca, Spain</div>
          </a>
        </div>
        <div className="flex flex-col items-center space-y-5 w-1/2">
          <div className="gap-10">
            I&rsquo;ve been talking about this trip forever, and now it&rsquo;s
            finally in the works! I&rsquo;m planning to celebrate my 30th
            birthday in southern Spain and would love for you all to join me.
            Picture beaches, great company, and maybe even a quick ferry trip to
            Morocco for the day!
            <br />
            <br />
            Right now, this is just a super preliminary headcount—nothing set in
            stone yet. The trip would be about a week, with possible extensions
            for those who want to explore more. I&rsquo;ll try to provide free
            housing, but depending on the number of people, there may be a cost
            for accommodations.
            <br />
            <br />
            If this sounds like something you&rsquo;d be interested in, RSVP
            below. More details to come as planning unfolds.
          </div>
          <div>DATE: Summer 2026</div>

          <MyButton
            onClick={() => window.open("/rsvp", "_blank")}
            fancy
            withArrow
          >
            RSVP
          </MyButton>
        </div>
      </div>
    </main>
  );
}
