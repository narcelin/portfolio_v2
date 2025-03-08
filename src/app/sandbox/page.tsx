"use client";

import { supabase } from "../utils/database/supabase";
import { useTheme } from "next-themes";

import MyButton from "../components/MyButton";
import MyThemeSwitch from "../components/MyThemeSwitch";

export default function sandbox() {
  const { resolvedTheme, setTheme, theme, systemTheme, forcedTheme } =
    useTheme();
  // setTheme("dark");
  // console.log("THEME: ", forcedTheme);
  // console.log("SYSTEM THEME: ", systemTheme);
  const testSupabase = async () => {
    const client = supabase;
    const { data, error } = await supabase.from("sandbox").select("*");
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <MyThemeSwitch />
      {/* <MyButton onClick={() => testSupabase()} fancy={false} withArrow={false}>
        Test Supabase
      </MyButton> */}
    </div>
  );
}
