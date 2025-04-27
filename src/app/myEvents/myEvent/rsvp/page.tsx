"use client";

import { useState } from "react";

import MyButton from "@/app/components/MyButton";
import MyHeader from "@/app/components/MyHeader";

import { supabase } from "@/app/utils/database/supabase";

export default function Rsvp() {
  const [usersEventID, setUsersEventID] = useState("30th Birthday");
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
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

  // Supabase Client Connection

  const insertDataToSupabase = async () => {
    const supabaseClient = supabase;
    const { error, status } = await supabaseClient.from("user_rsvp").insert({
      event_id: usersEventID,
      name: usersName,
      email: usersEmail,
      phone_number: usersPhoneNumber,
      notes: userNotes,
    });
    console.log(error);

    if (error) {
      console.log("Supabase ERROR: ", error);
    }

    return error;
  };

  // Handle Submit for Input Form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = await insertDataToSupabase();
    if (!error) {
      resetUserValues();
    }
    // resetUserValues();
  };

  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <form
        className="flex flex-col md:grid grid-cols-4 grid-rows-4 gap-x-14 gap-y-4 w-2/3"
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
              className="text-black bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5 dark:text-white"
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
          <div className="mb-6">
            <label
              className="text-heading block text-sm font-medium mb-2"
              htmlFor="number"
            >
              Number
            </label>
            <input
              className="text-black bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5 dark:text-white"
              type="tel"
              id="phoneNumber"
              value={`${usersPhoneNumber}`}
              onChange={(e) => setUsersPhoneNumber(e.target.value)}
              required
              placeholder="+1 (555) 555 5555"
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
              className="text-black bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5 dark:text-white"
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
              className="text-black bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5 dark:text-white"
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
