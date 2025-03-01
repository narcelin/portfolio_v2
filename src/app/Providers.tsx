"use client";

import "react-toastify/ReactToastify.min.css";
// import "./app/globals.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}
