import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="" className="flex items-center gap-2">
      <Image
        src={logo}
        quality={100}
        height="45"
        width="45"
        alt="Secure Voting logo"
      />
      <h1 className="text-[1.4rem] font-bold text-[#323232]">SecureVote</h1>
    </Link>
  );
}
