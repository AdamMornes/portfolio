import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 font-raleway py-7 px-16">
      <div className="flex justify-between items-center">
        <Link className="text-3xl text-white" href="/">
          Adam Mornes
        </Link>

        <nav>
          <ul className="flex gap-20">
            <li>
              <Link
                className="text-2xl text-white hover:underline"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-2xl text-white hover:underline"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="text-2xl text-white hover:underline"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
