"use client";

import { useState, useEffect } from "react";

import MyButton from "@/app/components/MyButton";
import MyHeader from "@/app/components/MyHeader";

import { Slide, toast, ToastContainer } from "react-toastify";

import { supabase } from "@/app/utils/database/supabase";
import { CiSliderVertical } from "react-icons/ci";

export default function Rsvp() {
  const [usersEventID, setUsersEventID] = useState("30th Birthday");
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersCountryCode, setUsersCountryCode] = useState("");
  const [usersPhoneNumber, setUsersPhoneNumber] = useState("");
  const [userNotes, setUserNotes] = useState("");

  // Set user values to zero
  const resetUserValues = () => {
    setUsersEventID("30th Birthday");
    setUsersName("");
    setUsersEmail("");
    setUsersPhoneNumber("");
    setUserNotes("");
  };

  const toastifyNotification = (status: string, message: string) => {
    if (status === "error") {
      toast.error(message, {
        position: "bottom-center",
        autoClose: 1750,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        className: "px-20",
      });
    }
    if (status === "success") {
      toast.success(message, {
        position: "bottom-center",
        autoClose: 1750,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        className: "px-20",
      });
    }
  };

  <ToastContainer className="color-red" />;

  // Supabase Client Connection/Insert Data
  const insertDataToSupabase = async () => {
    const supabaseClient = supabase;
    const { error, status } = await supabaseClient.from("user_rsvp").insert({
      event_id: usersEventID,
      name: usersName,
      email: usersEmail,
      country_code: usersCountryCode,
      phone_number: usersPhoneNumber,
      notes: userNotes,
    });
    console.log(status);

    if (error) {
      console.log("Supabase ERROR: ", error);

      if (error.code === "23505") {
        toastifyNotification("error", "RSVP Already Exists");
      } else {
        toastifyNotification("error", "Error: RSVP Not Submitted");
      }
    }

    return error;
  };

  // Handle Submit for Input Form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = await insertDataToSupabase();
    if (!error) {
      toastifyNotification("success", "RSVP Submitted");
      resetUserValues();
    }
    // resetUserValues();
  };

  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <form
        className="flex flex-col md:grid grid-cols-4 grid-rows-4 gap-x-14 gap-y-4 w-full"
        onSubmit={handleSubmit}
      >
        {/* Event Name */}
        <div className="col-span-2 col-start-1 flex items-center justify-center">
          <MyHeader
            headerType={4}
            className="text-center border border-transparent"
          >
            The Spain Trip
          </MyHeader>
        </div>
        {/* Name Input */}
        <div className="col-span-2 col-start-3">
          <div className="mb-6">
            <label
              className="text-heading block text-sm font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="text-black border text-pText text-sm rounded-lg w-full block p-2.5 dark:text-white"
              type="text"
              id="name"
              value={`${usersName}`}
              onChange={(e) => setUsersName(e.target.value)}
              required
              placeholder="John Doe"
            />
          </div>
        </div>
        {/* Number Input */}
        <div className="col-span-2 row-start-2">
          <label
            className="text-heading block text-sm font-medium mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <div className="flex gap-5 items-center mb-6">
            <select
              id="countryCode"
              className="text-black dark:text-white border text-pText text-center text-sm rounded-lg block py-2.5"
              value={usersCountryCode}
              onChange={(e) => setUsersCountryCode(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select
              </option>
              {/* USA */}
              <option value="+1">🇺🇸 +1</option> {/* USA */}
              <option value=" +1">🇨🇦 +1</option> {/* Canada */}
              <option value="+34">🇪🇸 +34</option> {/* Spain */}
              <option value="+44">🇬🇧 +44</option> {/* UK */}
              <option value="+61">🇦🇺 +61</option> {/* Australia */}
              <option value="+43">🇦🇹 +43</option> {/* Austria */}
              <option value="+33">🇫🇷 +33</option> {/* France */}
              <option value="+49">🇩🇪 +49</option> {/* Germany */}
              <option value="+91">🇮🇳 +91</option> {/* India */}
              <option value="+212">🇲🇦 +212</option> {/* Morocco */}
              <option value="+351">🇵🇹 +351</option> {/* Portugal */}
            </select>
            <input
              className="text-black border text-pText text-sm rounded-lg w-full block p-2.5 dark:text-white"
              type="tel"
              id="phoneNumber"
              value={`${usersPhoneNumber}`}
              onChange={(e) => {
                // Remove any non-numeric characters (e.g., spaces, dashes, parentheses)
                const sanitizedValue = e.target.value.replace(/\D/g, "");
                setUsersPhoneNumber(sanitizedValue);
              }}
              required
              onBlur={(e) => console.log("onBlur")}
              placeholder="(555) 555 5555"
            />
          </div>
        </div>
        {/* Email Input */}
        <div className="col-span-2 row-start-2">
          <div className="mb-6">
            <label
              className="text-heading block text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="text-black border text-pText text-sm rounded-lg w-full block p-2.5 dark:text-white"
              type="email"
              id="email"
              value={`${usersEmail}`}
              onChange={(e) => setUsersEmail(e.target.value)}
              required
              placeholder="jdoe@email.com"
            />
          </div>
        </div>
        {/* Notes Input */}
        <div className="col-span-4 row-start-3">
          <div className="mb-6">
            <label
              className="text-heading block text-sm font-medium mb-2"
              htmlFor="subject"
            >
              Notes
            </label>
            <input
              className="text-black border text-pText text-sm rounded-lg w-full block p-2.5 dark:text-white"
              type="subject"
              id="subject"
              value={`${userNotes}`}
              onChange={(e) => setUserNotes(e.target.value)}
              required
              placeholder="Group me with the starwars fans"
            />
          </div>
        </div>
        <MyButton className="col-span-4" onClick={() => handleSubmit} fancy>
          RSVP
        </MyButton>
      </form>
    </main>
  );
}
