import { ShieldCheck } from "lucide-react";
import LoginForm from "@/app/_components/LoginForm";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f9fafb] p-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-[0_2px_8px_rgba(15,23,42,0.05)] border border-[#E5E7EB]">
        <div className="mb-6">

          <h1 className="mb-2 text-3xl font-bold text-[#111827]">
            Welcome Back
          </h1>

          <p className="text-[#6B7280]">
            Sign in to access the secure electronic voting platform.
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
