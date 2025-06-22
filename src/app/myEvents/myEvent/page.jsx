"use client";
import PageHeading from "../../components/sections/PageHeading";
import MyHeader from "../../components/MyHeader";
import ThirtiethBirthday from "../../components/hardCoded/ThirtiethBirthday.json";
import MyButton from "../../components/MyButton";
import MyParagraph from "../../components/MyParagraph";

import Image from "next/image";
import MyImageContainer from "../../components/MyImageContainer";

export default function MyEvent() {
  // console.log(ThirtiethBirthday);
  return (
    <main className="flex flex-col items-center py-14 gap-10">
      {/* <div className="flex flex-col md:flex-row items-center border border-white w-full md:w-[60vw] p-4"></div> */}
      <MyHeader
        className="flex items-center justify-center text-center"
        headerType={4}
      >
        That Trip To Spain
      </MyHeader>
      <div className="flex flex-col md:flex-row justify-between items-center md:justify-center w-full max-w-4xl gap-5">
        <div className="flex flex-col space-y-2 px-7">
          {/* <MyImageContainer
            // device="phone"
            classNames="flex"
            source="/assets/imgs/poloClub.jpg"
            alternateTxt="picture of me"
            size={100}
          /> */}
          <Image
            src="/assets/imgs/poloClub.jpg"
            alt="Event Image"
            width={1000}
            height={1000}
          />
          <a
            href="https://www.google.com/search?q=los+canos+de+meca+spain&sca_esv=df75e0f1ec09a3b7&udm=2&biw=1337&bih=852&sxsrf=AHTn8zqw_Wnv-voCgrj0NWYj-SHWXAtdVw:1741281379520&ei=Y9jJZ_-zH_mA0PEP15-zIA&ved=0ahUKEwi_8dHQ-vWLAxV5ADQIHdfPDAQQ4dUDCBE&uact=5&oq=los+canos+de+meca+spain&gs_lp=EgNpbWciF2xvcyBjYW5vcyBkZSBtZWNhIHNwYWluMgcQIxgnGMkCMgYQABgFGB4yBhAAGAUYHkiHE1AAWIMScAB4AJABAJgBYKABgguqAQIxN7gBA8gBAPgBAZgCEKAC8ArCAgYQABgHGB7CAggQABgHGAoYHsICCBAAGAcYCBgewgIIEAAYBRgHGB7CAgUQABiABJgDAJIHBDE0LjKgB9tE&sclient=img"
            target="_blank"
          >
            <MyHeader headerType={2} className="text-center">
              Los Caños De Meca, Spain
            </MyHeader>
          </a>
        </div>
        <div className="flex flex-col items-center space-y-5 px-14">
          <div className="gap-10">
            <MyParagraph>
              I&rsquo;ve been talking about this trip forever, and now
              it&rsquo;s finally in the works! I&rsquo;m planning to celebrate
              my 30th in Spain and would love to have all of you be apart of it.
              <br />
              <br />
              Right now, this is just a super preliminary headcount—nothing set
              in stone yet. The trip would be about a week, with possible
              extensions for those who want to explore more. I&rsquo;ll try to
              provide housing, but depending on the number of people, there may
              be a cost for accommodations.
              <br />
              <br />
              If this sounds like something you&rsquo;d be interested in, RSVP
              below. More details to come as planning unfolds.
            </MyParagraph>
          </div>
          <MyHeader headerType={4} className="text-center">
            Summer 2026
          </MyHeader>

          <MyButton
            className="w-full"
            onClick={() => window.open("myEvent/rsvp", "_self")}
            fancy
            withArrow
          >
            RSVP
          </MyButton>
        </div>
      </div>
      {/* WhatsApp Community Join Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 border border-green-500 rounded-xl p-6 bg-white dark:bg-gray-900 shadow-lg max-w-2xl w-full">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center mb-4 gap-4">
            <Image
              width={0}
              height={0}
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-16 h-16 mb-4"
            />
            <MyHeader
              headerType={3}
              className="text-green-600 mb-2 text-center md:text-left"
            >
              Join the WhatsApp Community
            </MyHeader>
          </div>
          <MyParagraph className="mb-3 text-center md:text-left">
            Stay up to date, chat with others, and get all the latest info about
            the trip!
            <br />
            <br />
            Scan the QR code or tap the link below to join.
          </MyParagraph>

          <a
            href="https://chat.whatsapp.com/EARA2ZulEGi9mUvboOTd7V"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline font-semibold text-center md:text-left"
          >
            Join via link
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/assets/imgs/QRCode.jpg"
            alt="WhatsApp Group QR Code"
            width={140}
            height={140}
            className="rounded-md border border-green-500 bg-white"
          />
        </div>
      </div>
      {/* End WhatsApp Community Join Section */}
      <div></div>
    </main>
  );
}
