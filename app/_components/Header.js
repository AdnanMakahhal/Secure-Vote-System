import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import AuthNavigation from "@/components/AuthNavigation";

function Header() {
    return (
        <header>
            <div>
                <Logo />
                <Navigation />
                <AuthNavigation />
            </div>
        </header>
    )
}