"use client";

import MyButton from "../components/MyButton";
import { supabase } from "../utils/database/supabase";

export default function sandbox() {
  const testSupabase = async () => {
    const client = supabase;
    const { data, error } = await supabase.from("sandbox").select("*");
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <MyButton onClick={() => testSupabase()} fancy={false} withArrow={false}>
        Test Supabase
      </MyButton>
    </div>
  );
}
