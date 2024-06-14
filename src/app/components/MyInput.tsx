"use client";

import { useState } from "react";

export default function MyInput({
  className,
  type,
  label,
  placeHolder,
}: {
  className: string;
  type: string;
  label: string;
  placeHolder: string;
}) {
  const [value, setValue] = useState("");

  return (
    <div className={`${className}`}>
      <div className="mb-6">
        <label
          htmlFor={`${type}`}
          className="text-heading block text-sm font-medium mb-2"
        >
          {label}
        </label>
        <input
          type={`${type}`}
          id="email"
          value={`${value}`}
          onChange={(e) => setValue(e.target.value)}
          required
          placeholder={`${placeHolder}`}
          className="bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
        />
      </div>
    </div>
  );
}
