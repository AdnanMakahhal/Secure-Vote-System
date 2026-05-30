import { ShieldCheck, X } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Verify",
};

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      <div className="relative w-full max-w-md rounded-3xl border border-[#E5E7EB] bg-white p-10 shadow-[0_2px_8px_rgba(15,23,42,0.05)]">
        <Link
          href="/register"
          className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg text-[#6B7280] transition-all duration-200 hover:bg-[#F1F5F9] hover:text-[#111827]"
        >
          <X className="h-5 w-5" />
        </Link>

        <div className="flex flex-col items-center">
          <ShieldCheck className="mb-6 h-16 w-16 stroke-[#2F88FF]" />

          <h3 className="mb-3 text-center text-2xl font-bold text-[#111827]">
            Verify Your Email
          </h3>

          <p className="mb-8 text-center text-sm leading-relaxed text-[#6B7280]">
            We&apos;ve sent a verification email to your inbox.
            Please verify your email address before continuing.
          </p>

          <div className="flex w-full flex-col gap-3">
            <Link
              href="/user/elections"
              className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-6 text-base font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
            >
              <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />

              <span className="relative z-10">
                Confirm Verification
              </span>
            </Link>

            <button className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl border border-[#435FF2]/20 border-b-[3px] border-r-[3px] border-b-[#435FF2]/40 border-r-[#435FF2]/40 bg-[#F1F6FE] px-6 text-base font-semibold text-[#435FF2] shadow-md transition-all duration-150 hover:bg-[#E8F1FF] hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]">
              <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/70 blur-md transition-all duration-700 group-hover:left-[130%]" />

              <span className="relative z-10">
                Resend Email Again
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}