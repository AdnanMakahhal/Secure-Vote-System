import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import ClientNavigation from "@/app/_components/ClientNavigation";

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

export const metadata = {
  title: {
    template: "%s / Secure Voting",
    default: "Welcome / Secure Voting",
  },
  description:
    "Secure Voting is a secure and transparent voting system built on blockchain technology. It ensures the integrity of the voting process while maintaining voter privacy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header>
          <Logo />
          <Navigation />
          <ClientNavigation />
        </Header>
        <div className="">
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
