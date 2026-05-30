import Header from "../_components/Header";

export const metadata = {
  title: {
    template: "SecureVote - %s",
    default: "SecureVote - Elections",
  },
  description: "Browse and participate in active elections.",
};

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
}
