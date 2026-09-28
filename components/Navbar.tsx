import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        <div className="flex gap-6">
          <div className="flex gap-6">
  <Link href="/">Home</Link>

  <Link href="/pricing">Pricing</Link>

  <Link href="/population">Population</Link>

  <Link href="/submit">Submit</Link>

  <Link href="/verify">Verify</Link>

  <Link href="/about">About</Link>
</div>
        </div>
      </div>
    </nav>
  );
}

