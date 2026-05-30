"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import AdminNavigation from "@/app/_components/AdminNavigation";
import ClientNavigation from "@/app/_components/ClientNavigation";

const USER_LINKS = [
  { href: "/user/elections", label: "Elections" },
  { href: "/user/results", label: "Results" },
];

const ADMIN_LINKS = [
  { href: "/admin/elections", label: "Elections" },
  { href: "/admin/servers", label: "Servers" },
  { href: "/admin/audit-log", label: "Audit Log" },
  { href: "/admin/security", label: "Security" },
];

export default function Header() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = isAdminRoute ? ADMIN_LINKS : USER_LINKS;

  return (
    <header className="border-b border-[#4E5562]/30 px-5 py-2">
      <div className="mx-auto flex items-center justify-between">
        {/* Left: Logo + desktop nav */}
        <div className="flex items-center gap-10">
          <Logo />
          <div className="hidden min-[800px]:block">
            {isAdminRoute ? <AdminNavigation /> : <Navigation />}
          </div>
        </div>

        {/* Right: profile + hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <ClientNavigation />

          {/* Hamburger — visible below 800px */}
          <div className="relative flex items-center min-[800px]:hidden">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex flex-col justify-center gap-[5px] p-2 rounded-lg hover:bg-[#F1F6FE] transition"
              aria-label="Toggle navigation"
            >
              <span
                className={`block h-[2px] w-5 bg-[#4e5562] transition-all duration-200 origin-center ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-[#4e5562] transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-[#4e5562] transition-all duration-200 origin-center ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>

            {mobileOpen && (
              <div className="absolute right-0 top-14 z-50 w-56 rounded-2xl border border-[#4e5562]/50 bg-[#f9fafb] p-3 shadow-sm">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-[#4e5562] transition hover:bg-zinc-800 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
