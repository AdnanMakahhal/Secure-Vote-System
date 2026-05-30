import Header from "../_components/Header";

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
