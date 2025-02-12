import "./globals.css";
import {Inria_Sans} from 'next/font/google'
import type { Metadata } from "next";

const inriaSans = Inria_Sans({
  variable: '--font-inria-sans',
  subsets: ['latin'],
  weights:['400', '700', '300']
})

export const metadata : Metadata= {
  title: "Money",
  description: "Real time NTF website to increase money"}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className= {`${inriaSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
