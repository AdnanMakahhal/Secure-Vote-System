"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h2 className="text-2xl font-semibold text-red-600">Something went wrong</h2>
      <p className="text-zinc-500">{error?.message || "An unexpected error occurred."}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-700"
      >
        Try again
      </button>
    </div>
  );
}
