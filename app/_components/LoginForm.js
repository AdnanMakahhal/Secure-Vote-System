import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#4E5562]">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="h-12 w-full rounded-xl border border-[#4E5562]/20 bg-white px-4 text-[#4E5562] shadow-sm outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#435FF2]/40 focus:ring-4 focus:ring-[#435FF2]/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#4E5562]">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="h-12 w-full rounded-xl border border-[#4E5562]/20 bg-white px-4 text-[#4E5562] shadow-sm outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#435FF2]/40 focus:ring-4 focus:ring-[#435FF2]/10"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="remember"
          className="h-4 w-4 rounded border-[#4E5562]/30 text-[#435FF2] focus:ring-[#435FF2]"
        />

        <label
          htmlFor="remember"
          className="text-sm font-medium text-[#4E5562]"
        >
          Remember me
        </label>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <Link
          href="/user/elections"
          className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl border border-black/20 border-b-[3px] border-r-[3px] border-b-black/60 border-r-black/60 bg-[#435FF2] text-base font-medium text-white shadow-md transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
        >
          <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />

          <span className="relative z-10">
            Login
          </span>
        </Link>

        <Link
          href="/admin/elections"
          className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl border border-[#435FF2]/20 border-b-[3px] border-r-[3px] border-b-[#435FF2]/40 border-r-[#435FF2]/40 bg-[#F1F6FE] text-base font-semibold text-[#435FF2] shadow-md transition-all duration-150 hover:bg-[#E8F1FF] hover:translate-x-[1px] hover:translate-y-[1px] hover:border-b-[2px] hover:border-r-[2px] active:translate-x-[2px] active:translate-y-[2px]"
        >
          <span className="absolute left-[-120%] top-0 h-full w-1/3 rotate-12 bg-white/70 blur-md transition-all duration-700 group-hover:left-[130%]" />

          <span className="relative z-10">
            Sanad ID
          </span>
        </Link>
      </div>

      <p className="pt-2 text-center text-sm text-[#6B7280]">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-[#435FF2] transition hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}