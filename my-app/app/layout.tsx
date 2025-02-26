import "./globals.css";
import { Inria_Sans } from "next/font/google";
import type { Metadata } from "next";
import Header from "./_components/header/header";

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Money",
  description: "Real time NTF website to increase money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inriaSans.variable} relative mx-auto box-border max-w-[1728px] px-[17px] py-[10px] antialiased lg:px-[100px] lg:py-[23px]`}>
        
        <Header />
        {children}
      </body>
    </html>
  );
}
