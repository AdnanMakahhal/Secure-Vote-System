import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "SecureVote - %s",
    default: "SecureVote - Home",
  },
  description:
    "Secure Voting is a secure and transparent voting system built on blockchain technology. It ensures the integrity of the voting process while maintaining voter privacy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-y-scroll flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
