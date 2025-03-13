import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link href="/users" className="hover:underline">Users</Link>
        </li>
        <li>
          <Link href="/counter" className="hover:underline">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}