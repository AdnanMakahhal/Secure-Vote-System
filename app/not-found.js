import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-zinc-500">Page not found.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-700"
      >
        Go home
      </Link>
    </div>
  );
}
