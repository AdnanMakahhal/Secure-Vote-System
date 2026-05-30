import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "SecureVote - %s",
    default: "SecureVote - Home",
  },
  description: "Jordan's trusted digital voting platform.",
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
