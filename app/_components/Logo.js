import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <ShieldCheck className="stroke-[#2F88FF] w-8 h-8" />
      <h1 className="text-[1.3rem] font-semibold stroke-2 stroke-[#323232] text-[#323232]">SecureVote</h1>
    </Link>
  );
}
