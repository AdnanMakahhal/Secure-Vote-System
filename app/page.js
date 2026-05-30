import {
  AppWindow,
  ArrowRight,
  LockKeyhole,
  Minus,
  Signal,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 lg:py-0">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-5 sm:px-8 md:px-12 lg:flex-row lg:px-20">
        <div className="flex flex-1 flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <div className="flex items-center gap-2 rounded-full border-2 border-gray-300 bg-[#F1F6FE] px-4 py-2 text-sm font-semibold text-[#435FF2]/75">
            <AppWindow className="h-4 w-4 stroke-[#2F88FF]" />
            <span>Jordan&apos;s Trusted Digital Voting Platform</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#18181B] sm:text-5xl lg:text-6xl xl:text-7xl">
            The Future of
            <br />
            Secure <span className="text-[#435FF2]">Voting</span>.
          </h1>

          <p className="max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            Empower universities, organizations, and institutions across Jordan
            with a modern voting platform focused on transparency, voter
            protection, and trusted election results.
          </p>

          <Link
            href="/register"
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg border border-black/30 border-b-[3px] border-r-[3px] border-b-black/70 border-r-black/70 bg-[#435FF2] px-6 py-3 text-[15px] font-medium text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
          >
            <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/50 blur-md transition-all duration-700 group-hover:left-[130%]" />

            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <div className="flex items-center gap-3">
              <span className="rounded-md border-2 border-[#4E5562]/20 bg-[#2F88FF]/15 p-[0.4rem]">
                <LockKeyhole className="h-4 w-4 stroke-[#2F88FF] stroke-2" />
              </span>

              <p className="text-sm leading-5 text-[#18181B]">
                End-to-End
                <br />
                Encryption
              </p>
            </div>

            <Minus className="hidden h-8 w-8 rotate-90 stroke-[#4E5562] stroke-[0.5] md:block" />

            <div className="flex items-center gap-3">
              <span className="rounded-md border-2 border-[#4E5562]/20 bg-[#57A055]/15 p-[0.4rem]">
                <Users className="h-4 w-4 stroke-[#57A055] stroke-2" />
              </span>

              <p className="text-sm leading-5 text-[#18181B]">
                Real-Time
                <br />
                Results
              </p>
            </div>

            <Minus className="hidden h-8 w-8 rotate-90 stroke-[#4E5562] stroke-[0.5] md:block" />

            <div className="flex items-center gap-3">
              <span className="rounded-md border-2 border-[#4E5562]/20 bg-[#7643E4]/15 p-[0.4rem]">
                <Signal className="h-4 w-4 stroke-[#7643E4] stroke-2" />
              </span>

              <p className="text-sm leading-5 text-[#18181B]">
                Verified
                <br />
                Voters
              </p>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center lg:pr-8">
          <div className="relative">
            <Image
              src="/iphone.png"
              alt="SecureVote mobile app"
              width={260}
              height={520}
              className="relative z-20 h-auto w-52 drop-shadow-2xl sm:w-60 md:w-72"
              priority
            />

            <div className="absolute left-[8.8%] top-[2.4%] z-10 h-[95%] w-[82.4%] overflow-hidden rounded-[2.6rem]">
              <Image
                src="/mobilePage.png"
                alt="SecureVote screen"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
