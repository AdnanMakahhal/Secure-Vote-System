import Link from "next/link";

export default function RegisterForm() {
  const inputClass =
    "h-12 w-full rounded-xl border border-[#4E5562]/20 bg-white px-4 text-[#4E5562] shadow-sm outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#435FF2]/40 focus:ring-4 focus:ring-[#435FF2]/10";

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#4E5562]";

  return (
    <form className="w-full space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>National ID Number</label>
          <input
            type="text"
            placeholder="Enter your national ID number"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 h-4 w-4 rounded border-[#4E5562]/30 text-[#435FF2] focus:ring-[#435FF2]"
        />

        <label
          htmlFor="terms"
          className="text-sm leading-relaxed text-[#6B7280]"
        >
          I agree to the Terms of Service and Privacy Policy.
        </label>
      </div>

      <div className="flex flex-col gap-2 pt-1 sm:flex-row">
        <Link
          href="/verify"
          className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] px-6 text-base font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
        >
          <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />

          <span className="relative z-10">
            Create Account
          </span>
        </Link>

        <Link
          href="/sanad"
          className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl border border-[#435FF2]/20 border-b-[3px] border-r-[3px] border-b-[#435FF2]/40 border-r-[#435FF2]/40 bg-[#F1F6FE] px-6 text-base font-semibold text-[#435FF2] shadow-md transition-all duration-150 hover:bg-[#E8F1FF] hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
        >
          <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/70 blur-md transition-all duration-700 group-hover:left-[130%]" />

          <span className="relative z-10">
            Sanad ID
          </span>
        </Link>
      </div>

      <p className="pt-1 text-center text-sm text-[#6B7280]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-[#435FF2] hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}