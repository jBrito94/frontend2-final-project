import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full fixed flex justify-between items-center py-8 px-12 bg-black/20 backdrop-blur-sm text-white z-10">
      <Link href="/" className="text-2xl font-bold">
        Frontend II
      </Link>
      <nav className="text-xl">
        <ul className="flex gap-12">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
