import Link from "next/link";

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/elections">Elections</Link>
      </li>
      <li>
        <Link href="/results">Results</Link>
      </li>
    </ul>
  );
}

export default Navigation;
