import Link from "next/link";

export default function ClientNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            href=""
            className="bg-[#435FF2] border border-[#4E5562] text-[#ffffff] text-[1rem] font-bold px-4 py-2 rounded-md"
          >
            Login / Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
