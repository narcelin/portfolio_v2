import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";
import NavigationBar from "./components/sections/NavigationBar";
import Footer from "./components/sections/Footer";

const inter_Tight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-interTight",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter_Tight.variable} p-4 font-sans md:w-4/5 mx-auto`}
      >
        <Providers>
          {<NavigationBar />}
          {children}
          {<Footer />}
        </Providers>
      </body>
    </html>
  );
}
