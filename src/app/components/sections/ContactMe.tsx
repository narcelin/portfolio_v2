"use client";

import { useState } from "react";

import MyButton from "../MyButton";
import { Bounce, Slide, toast } from "react-toastify";

export default function ContactMe() {
  {
    //Simplified field values
    const initValues = {
      name: "",
      email: "",
      subject: "",
      phoneNumber: "",
      message: "",
    };

    const initState = { values: initValues };

    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const handleChange = ({ target }: { target: HTMLInputElement }) =>
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));
  }

  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersSubject, setUsersSubject] = useState("");
  const [usersPhoneNumber, setUsersPhoneNumber] = useState("");
  const [usersMessage, setUsersMessage] = useState("");

  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // const underConstructionAlert = () => {
  //   toast.success("Message Sent", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     transition: Slide,
  //   });
  // };

  const send = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userName: usersName,
          userEmail: usersEmail,
          userPhone: usersPhoneNumber,
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
        toast.success("Message Sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        console.log("Email Sent");
        setEmailSubmitted(true);
        setUsersEmail("");
        setUsersSubject("");
        setUsersMessage("");
        setUsersName("");
        setUsersPhoneNumber("");

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
      {/* <MyButton onClick={send} type="submit" fancy>
        Send Message
      </MyButton> */}

      <button
        type="submit"
        className="text-white bg-my-gradient90 rounded-full px-5 h-12 flex flex-row justify-center items-center"
        formAction={send}
      >
        Send Message
      </button>
    </form>
  );
}
