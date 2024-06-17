"use client";

import { useState } from "react";

import MyButton from "../MyButton";

export default function ContactMe() {
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersSubject, setUsersSubject] = useState("");
  const [usersPhoneNumber, setUsersPhoneNumber] = useState("");
  const [usersMessage, setUsersMessage] = useState("");

  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const send = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userEmail: usersEmail,
          subject: usersSubject,
          message: usersMessage,
        }),
      });

      console.log(response);
      if (!response.ok) {
        setEmailSent(false);

        setTimeout(() => {
          setEmailSent(true);
        }, 8000);

        throw new Error("Failed to send email");
      }

      if (response.status === 200) {
        console.log("Email Sent");
        setEmailSubmitted(true);
        setUsersEmail("");
        setUsersSubject("");
        setUsersMessage("");

        setTimeout(() => {
          setEmailSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error); // Handle error
    }
  };

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
            value={`${usersName}`}
            onChange={(e) => setUsersName(e.target.value)}
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
            value={`${usersEmail}`}
            onChange={(e) => setUsersEmail(e.target.value)}
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
            value={`${usersSubject}`}
            onChange={(e) => setUsersSubject(e.target.value)}
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
            value={`${usersPhoneNumber}`}
            onChange={(e) => setUsersPhoneNumber(e.target.value)}
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
            value={`${usersMessage}`}
            onChange={(e) => setUsersMessage(e.target.value)}
            required
            placeholder="Hope you are having a wonderful day."
          />
        </div>
      </div>
      <MyButton onClick={send} fancy>
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
