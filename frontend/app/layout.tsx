import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Providers } from "@/providers/tan-stack-query";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Auction Platform",
  description: "A modern auction platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className} antialiased`}>
        <Providers>{children}</Providers>{" "}
      </body>
    </html>
  );
}
