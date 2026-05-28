import Link from "next/link";

export default function RegisterForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">First Name</label>

          <input
            type="text"
            placeholder="Your first name"
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Last Name</label>

          <input
            type="text"
            placeholder="Your last name"
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">National ID</label>

          <input
            type="text"
            placeholder="Your national ID"
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>

          <input
            type="email"
            placeholder="Your email"
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Password</label>

          <input
            type="password"
            placeholder="Your password"
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Terms */}
      <div className="flex items-center">
        <input type="checkbox" id="terms" className="mr-2" />

        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the Terms of Service and Privacy Policy.
        </label>
      </div>

      <div className="flex flex-cols gap-3 pace-y-3 pt-2">
        <button
          type="submit"
          className="h-12 w-full rounded-xl bg-blue-500 font-medium text-white transition hover:bg-blue-600"
        >
          Create Account
        </button>

        <button
          type="button"
          className="h-12 w-full border-1 font-semibold border-[#4E5562]/20 rounded-xl bg-[#F1F6FE] font-medium text-[#435FF2] transition hover:bg-[#F1F6FE]/70"
        >
          Sanad ID
        </button>
      </div>
      <p className="text-center text-sm text-gray-600 mt-4">
        already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
