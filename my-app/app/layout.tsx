import "./globals.css";
import { Inria_Sans } from "next/font/google";
import type { Metadata } from "next";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import SmoothScrolling from "./_components/smooth-scrolling";

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
      <body
        className={`${inriaSans.variable} relative mx-auto box-border max-w-[1728px] px-[17px] py-[10px] antialiased lg:px-[100px] lg:py-[23px]`}
      >
        <SmoothScrolling>
          
          {/* blur effect in lg screen - top screen */}
          <div className="absolute hidden left-0 lg:block h-[400px] w-[400px] bg-white opacity-10 blur-3xl lg:top-[-100px]" />
          <Header />

          {/* blur effect on stats - lg screen */}
          <div className="absolute hidden -right-0 lg:block h-[400px] w-[400px] bg-white opacity-5 blur-3xl lg:top-[700px]" />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
