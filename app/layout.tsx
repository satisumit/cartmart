import type { Metadata } from "next";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

// Import Poppins with specific font weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Adjust weights as needed
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} flex flex-col min-h-full bg-gray-50 dark:bg-slate-900`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
