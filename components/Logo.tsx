import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/crga-logo.png"
        alt="CRGA"
        width={50}
        height={50}
        priority
      />
    </Link>
  );
}