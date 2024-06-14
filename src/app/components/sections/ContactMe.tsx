"use client";

import MyInput from "../MyInput";

export default function ContactMe() {
  const send = () => {
    console.log("SENT");
  };

  return (
    <form className="flex flex-col md:grid grid-cols-4 grid-rows-5 gap-x-14 gap-y-4 w-2/3">
      <MyInput
        className="col-span-2"
        type="name"
        label="Name"
        placeHolder="Enter Your Name"
      />
      <MyInput
        className="col-span-2 col-start-3"
        type="email"
        label="E-mail"
        placeHolder="Enter Your E-mail"
      />
      <MyInput
        className="col-span-2 row-start-2"
        type="subject"
        label="Subject"
        placeHolder="Your Subject"
      />
      <MyInput
        className="col-span-2 col-start-3 row-start-2"
        type="tel"
        label="Phone"
        placeHolder="Your Phone Number"
      />
      <MyInput
        className="col-span-4 row-span-3 row-start-3"
        type="text"
        label="Message"
        placeHolder="Write your message here"
      />
      <button
        type="submit"
        className="text-heading bg-c2 hover:bg-c1 hover:text-c3 front-medium py-2.5 px-5 rounded-lg w-full"
        formAction={send}
      >
        Send Message
      </button>
    </form>
  );
}
