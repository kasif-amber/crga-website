import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Card Grading & Authentication
        </h1>

        <p className="text-xl text-gray-600 mb-10">
          Verify graded trading cards with confidence.
        </p>

        <Link
          href="/verify"
          className="bg-black text-white px-8 py-4 rounded-lg"
        >
          Verify Certificate
        </Link>
      </section>
    </main>
  );
}