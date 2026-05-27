import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="">
      <ul className="flex gap-6 text-[#505561]">
        <li>
          <Link
            href=""
            className=""
          >
            Elections
          </Link>
        </li>
        <li>
          <Link href="" className="">
            Results
          </Link>
        </li>
      </ul>
    </nav>
  );
}
