import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0f]/95 backdrop-blur">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Logo />

        <div className="flex items-center gap-8 font-medium text-white">

          <Link
  href="/"
  className="transition hover:text-[#d4af37]"
>
  Home
</Link>

          <Link
            href="/pricing"
            className="transition hover:text-[#d4af37]"
          >
            Pricing
          </Link>

          <Link
            href="/population"
            className="transition hover:text-[#d4af37]"
          >
            Population
          </Link>

          <Link
            href="/submit"
            className="transition hover:text-[#d4af37]"
          >
            Submit
          </Link>

          <Link
            href="/verify"
            className="transition hover:text-[#d4af37]"
          >
            Verify
          </Link>

          <Link
            href="/about"
            className="transition hover:text-[#d4af37]"
          >
            About
          </Link>

        </div>

      </div>

    </nav>
  );
}