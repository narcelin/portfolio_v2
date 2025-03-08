import React from "react";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function MyText() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { setTheme, resolvedTheme } = useTheme();

  if (!mounted) return <div>Loading...</div>;

  return <div>MyText</div>;
}
