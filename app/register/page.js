import { ShieldCheck } from "lucide-react";
import RegisterForm from "@/app/_components/RegisterForm";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
      <div className="flex flex-col align-center border-2 border-[#4E5562]/55 rounded-lg p-5 max-w-2xl">
        <div className="flex items-center gap-2 mb-5">
          <ShieldCheck className="stroke-[#2F88FF] w-8 h-8" />
          <h2 className="font-bold">SecureVote</h2>
        </div>
        <p className="text-gray-600 mb-5">
          Create your account to get started.
        </p>

        <RegisterForm />
      </div>
    </main>
  );
}
