import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import ClientNavigation from "@/app/_components/ClientNavigation";

export default function Header() {
  return (
    <header className="border-[1.5px] border-[#4E5562] px-5 py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />  
        <Navigation />
        <ClientNavigation />
      </div>
    </header>
  );
}
