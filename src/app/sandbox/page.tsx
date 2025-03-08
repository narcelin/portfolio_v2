"use client";

import { supabase } from "../utils/database/supabase";

import MyButton from "../components/MyButton";
import MyThemeSwitch from "../components/MyThemeSwitch";

export default function sandbox() {
  const testSupabase = async () => {
    const client = supabase;
    const { data, error } = await supabase.from("sandbox").select("*");
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <MyThemeSwitch />
    </div>
  );
}
