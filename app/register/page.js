import RegisterForm from "@/app/_components/RegisterForm";

export const metadata = {
  title: "Register",
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f9fafb] p-6">
      <div className="w-full max-w-2xl rounded-3xl border border-[#E5E7EB] bg-white p-8 md:p-10 shadow-[0_2px_8px_rgba(15,23,42,0.05)]">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-[#111827]">
            Create Your Account
          </h1>

          <p className="text-[#6B7280]">
            Register to securely participate in elections and
            manage your voting profile.
          </p>
        </div>

        <RegisterForm />
      </div>
    </main>
  );
}