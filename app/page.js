import {
  ArrowRight,
  LockKeyhole,
  Minus,
  ShieldCheck,
  Signal,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full max-w-7xl items-center justify-between px-8 md:px-12 lg:px-20 gap-8">
          {/* Left: hero content */}
          <div className="flex flex-col items-start gap-5 flex-1 min-w-0">
            <div className="flex items-center gap-2 border-2 border-gray-300 rounded-full font-semibold px-4 py-2 w-max bg-[#F1F6FE] text-[#435FF2]/75 text-sm">
              <ShieldCheck className="stroke-[#2F88FF] w-4 h-4" />
              <span>Jordan&apos;s Trusted Digital Voting Platform</span>
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#18181B] lg:text-6xl xl:text-7xl">
              Secure Elections
              <br />
              for Modern <span className="text-[#435FF2]">Jordan</span>.
            </h1>

            <p className="text-base leading-7 text-zinc-400 md:text-lg max-w-lg">
              Empower universities, organizations, and institutions across Jordan
              with a modern voting platform focused on transparency, voter
              protection, and trusted election results.
            </p>

            <Link
              href="/Register"
              className="flex items-center gap-2 rounded-md bg-[#435FF2] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#435FF2]/90"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center">
              <div className="flex flex-row items-center gap-3">
                <span className="bg-[#2F88FF]/15 border-2 border-[#4E5562]/20 rounded-md p-[0.4rem]">
                  <LockKeyhole className="stroke-[#2F88FF] stroke-2 w-4 h-4" />
                </span>
                <p className="text-sm leading-5">
                  End-to-End <br /> Encryption
                </p>
              </div>
              <Minus className="rotate-90 stroke-[#4E5562] stroke-[0.5] h-8 w-8 mx-1" />
              <div className="flex flex-row items-center gap-3">
                <span className="bg-[#57A055]/15 border-2 border-[#4E5562]/20 rounded-md p-[0.4rem]">
                  <Users className="stroke-[#57A055] stroke-2 w-4 h-4" />
                </span>
                <p className="text-sm leading-5">
                  Real-Time <br />
                  Results
                </p>
              </div>
              <Minus className="rotate-90 stroke-[#4E5562] stroke-[0.5] h-8 w-8 mx-1" />
              <div className="flex flex-row items-center gap-3">
                <span className="bg-[#7643E4]/15 border-2 border-[#4E5562]/20 rounded-md p-[0.4rem]">
                  <Signal className="stroke-[#7643E4] stroke-2 w-4 h-4" />
                </span>
                <p className="text-sm leading-5">
                  Verified <br /> Voters
                </p>
              </div>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="hidden lg:flex items-center justify-center shrink-0 pr-8">
            <Image
              src="/iphone.png"
              alt="SecureVote mobile app"
              width={220}
              height={440}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
