import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="">
      <ul className="flex gap-2 text-[#505561]">
        <li className="px-3 py-1 rounded-md hover:bg-[#F1F6FE] hover:text-[#435FF2] active:bg-[#F1F6FE] active:text-[#435FF2]">
          <Link href="/admin/elections">
            Elections
          </Link>
        </li>
        <li className="px-3 py-1 rounded-md hover:bg-[#F1F6FE] hover:text-[#435FF2] active:bg-[#F1F6FE] active:text-[#435FF2]">
          <Link href="/admin/servers">
            Servers
          </Link>
        </li>
        <li className="px-3 py-1 rounded-md hover:bg-[#F1F6FE] hover:text-[#435FF2] active:bg-[#F1F6FE] active:text-[#435FF2]">
          <Link href="/admin/audit-log">
            Audit Log
          </Link>
        </li>
        <li className="px-3 py-1 rounded-md hover:bg-[#F1F6FE] hover:text-[#435FF2] active:bg-[#F1F6FE] active:text-[#435FF2]">
          <Link href="/admin/security">
            Security
          </Link>
        </li>
      </ul>
    </nav>
  );
}
