import Link from 'next/link';

export default function HeaderNav() {
  return (
    <nav>
      <ul className="flex gap-20">
        <li>
          <Link className="text-2xl text-white" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-2xl text-white" href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="text-2xl text-white" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
