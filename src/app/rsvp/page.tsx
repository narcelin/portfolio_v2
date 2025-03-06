"use client";

import { useState } from "react";

import MyButton from "../components/MyButton";

import { supabase } from "../utils/database/supabase";

export default function Rsvp() {
  const [usersEventID, setUsersEventID] = useState("30th Birthday");
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersPhoneNumber, setUsersPhoneNumber] = useState("");
  const [userNotes, setUserNotes] = useState("");

  // Set user values to zero
  const resetUserValues = () => {
    setUsersEventID("");
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
      nasme: usersName,
      email: usersEmail,
      phone_number: usersPhoneNumber,
      notes: userNotes,
    });

    if (error) {
      console.log("Supabase ERROR: ", error);
    }

    return status;
  };

  // Handle Submit for Input Form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await insertDataToSupabase();

    console.log(
      "USERS INFO: ",
      usersEventID,
      usersName,
      usersEmail,
      usersPhoneNumber,
      userNotes
    );
    // resetUserValues();
  };

  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <form
        className="flex flex-col md:grid grid-cols-4 grid-rows-4 gap-x-14 gap-y-4 w-2/3"
        onSubmit={handleSubmit}
      >
        <div className="col-span-2 col-start-2">
          {/* Name Input */}
          <div className="mb-6">
            <label
              className="text-heading block text-sm font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="text-black bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
              type="text"
              id="name"
              value={`${usersName}`}
              onChange={(e) => setUsersName(e.target.value)}
              required
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="col-span-2 row-start-2">
          {/* Number Input */}
          <div className="mb-6">
            <label
              className="text-heading block text-sm font-medium mb-2"
              htmlFor="number"
            >
              Number
            </label>
            <input
              className="text-black bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
              type="tel"
              id="phoneNumber"
              value={`${usersPhoneNumber}`}
              onChange={(e) => setUsersPhoneNumber(e.target.value)}
              required
              placeholder="+1 (555) 555 5555"
            />
          </div>
        </div>
        <div className="col-span-2 row-start-2">
          {/* Email Input */}
          <div className="mb-6">
            <label
              className="text-heading block text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="text-black bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
              type="email"
              id="email"
              value={`${usersEmail}`}
              onChange={(e) => setUsersEmail(e.target.value)}
              required
              placeholder="jdoe@email.com"
            />
          </div>
        </div>
        <div className="col-span-4 row-start-3">
          {/* Notes Input */}
          <div className="mb-6">
            <label
              className="text-heading block text-sm font-medium mb-2"
              htmlFor="subject"
            >
              Notes
            </label>
            <input
              className="text-black bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
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
