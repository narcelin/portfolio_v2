"use client";

import { useState } from "react";

import MyButton from "../MyButton";

export default function ContactMe() {
  const send = () => {
    console.log("SENT");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="flex flex-col md:grid grid-cols-4 grid-rows-4 gap-x-14 gap-y-4 w-2/3">
      <div className="col-span-2">
        <div className="mb-6">
          <label
            className="text-heading block text-sm font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
            type="text"
            id="name"
            value={`${name}`}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="John Doe"
          />
        </div>
      </div>
      <div className="col-span-2 col-start-3">
        <div className="mb-6">
          <label
            className="text-heading block text-sm font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
            type="email"
            id="email"
            value={`${email}`}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="jdoe@email.com"
          />
        </div>
      </div>
      <div className="col-span-2 row-start-2">
        <div className="mb-6">
          <label
            className="text-heading block text-sm font-medium mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
            type="subject"
            id="subject"
            value={`${subject}`}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Well, hello there."
          />
        </div>
      </div>
      <div className="col-span-2 row-start-2">
        <div className="mb-6">
          <label
            className="text-heading block text-sm font-medium mb-2"
            htmlFor="number"
          >
            Number (Not Required)
          </label>
          <input
            className="bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
            type="tel"
            id="phoneNumber"
            value={`${phoneNumber}`}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="+1 (555) 555 5555"
          />
        </div>
      </div>
      <div className="col-span-4 row-span-1 row-start-3">
        <div className="mb-6">
          <label
            className="text-heading block text-sm font-medium mb-2"
            htmlFor="text"
          >
            Message
          </label>
          <input
            className="bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
            type="text"
            id="message"
            value={`${message}`}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Hope you are having a wonderful day."
          />
        </div>
      </div>
      <MyButton onClick={() => console.log("Cool")} fancy>
        Send Message
      </MyButton>
      {/* <button
        type="submit"
        className="text-heading bg-c2 hover:bg-c1 hover:text-c3 front-medium py-2.5 px-5 rounded-lg w-full border bg-white"
        formAction={send}
      >
        Send Message
      </button> */}
    </form>
  );
}
