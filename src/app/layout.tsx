import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "../utils/classNames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TextShine.ai",
  description: "AI Support for your writing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames("bg-neutral-800", inter.className)}>
        {children}
      </body>
    </html>
  );
}
