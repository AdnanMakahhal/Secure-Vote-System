import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import AuthNavigation from "@/components/AuthNavigation";

import { Geist, Geist_Mono } from "@next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import "@/app/_styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: {
    template: "%s / Secure Vote",
    default: "Welcome / Secure Vote",
  },
  description: "A secure voting platform for democratic processes.",
};

export default function RootLayout() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header>
          <Logo />
          <Navigation />
          <AuthNavigation />
        </Header>
      </body>
    </html>
  );
}
