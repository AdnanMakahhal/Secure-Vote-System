import Header from "../_components/Header";

export const metadata = {
  title: {
    template: "SecureVote - %s",
    default: "SecureVote - Admin Elections",
  },
  description: "Manage elections and monitor the SecureVote platform.",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
