"use client";

import Image from "next/image";
import Link from "next/link";
import user from "@/public/user.png";
import { useState } from "react";

export default function ClientNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((show) => !show);
  }

  return (
    <nav className="relative flex items-center">
      <div className="group relative flex items-center">
        <button className="cursor-pointer" onClick={() => toggleMenu()}>
          <Image
            src={user}
            alt="User"
            width={40}
            height={40}
            className="rounded-full border-[0.5px] border-[#4E5562] shadow-lg shadow-[#4e5562]/20"
          />
        </button>

        <div
          className={`${menuOpen ? "block" : "hidden"} absolute right-0 top-14 z-50  w-64 rounded-2xl border border-[#4e5562]/50 bg-[#f9fafb] p-3 shadow-sm`}
        >
          <div className="mb-3 flex items-center gap-3 border-b border-zinc-800 pb-3">
            <Image
              src={user}
              alt="User"
              width={42}
              height={42}
              className="rounded-full"
            />

            <div>
              <p className="font-medium text-[#4e5562] font-semibold">Adnan</p>
              <p className="text-xs text-[#4e5562]">Computer Science Student</p>
            </div>
          </div>

          <div className="space-y-1">
            <Link
              href="/profile"
              className="block rounded-lg px-3 py-2 text-sm text-[#4e5562] transition hover:bg-zinc-800 hover:text-white"
            >
              Profile
            </Link>

            <Link
              href="/settings"
              className="block rounded-lg px-3 py-2 text-sm text-[#4e5562] transition hover:bg-zinc-800 hover:text-white"
            >
              Settings
            </Link>

            <div className="my-2 border-t border-zinc-800" />

            <Link
              href="/logout"
              className="block rounded-lg px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
