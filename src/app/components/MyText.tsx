"use client";

import React from "react";

import { useEffect, useState } from "react";

export default function MyText({
  className,
  children,
  isSubtle,
}: {
  className?: string;
  children?: string;
  isSubtle?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div>Loading...</div>;

  const textStyle = `${
    isSubtle ? "text-shadow" : "text-black dark:text-accent"
  } 
  font-semibold`;

  return <div className={`${className} ${textStyle}`}>{children}</div>;
}
