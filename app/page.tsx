import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
     
      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
              Professional Card Grading
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Protect.
              <br />
              Authenticate.
              <br />
              Verify.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Professional grading and certification for trading cards,
              collectibles, coins, and other valuable items.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/submit"
                className="bg-black text-white px-6 py-3 rounded-xl"
              >
                Submit Cards
              </Link>

              <Link
                href="/verify"
                className="border border-black px-6 py-3 rounded-xl"
              >
                Verify Certificate
              </Link>
            </div>
          </div>

          {/* Right Side Sample Slab */}
          <div className="flex justify-center">
            <div className="w-80 bg-white border-4 border-gray-300 rounded-3xl shadow-xl p-6">
              <div className="border-b pb-4">
                <h2 className="font-bold text-xl">
                  Sample Certification
                </h2>

                <p className="text-sm text-gray-500">
                  MSMB000001
                </p>
              </div>

              <div className="h-64 bg-gray-100 rounded-xl mt-4 flex items-center justify-center text-gray-500">
                Card Image
              </div>

              <div className="mt-4">
                <p className="font-semibold">
                  Sandshrew
                </p>

                <p className="text-gray-500">
                  Japanese Mega Brave
                </p>

                <p className="text-green-600 font-bold mt-2">
                  Pristine 10
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* STATISTICS SECTION */}
      {/* ========================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold">1,000+</h3>
              <p className="text-gray-600">Cards Graded</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">99%</h3>
              <p className="text-gray-600">Verification Accuracy</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-gray-600">Certificate Lookup</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="text-gray-600">Unique Certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* HOW IT WORKS */}
      {/* ========================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            How It Works
          </h2>

          <p className="text-gray-600 mb-16">
            Simple certification process from submission to verification.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-2">
              1. Submit
            </h3>

            <p className="text-gray-600">
              Send your collectibles for evaluation.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-2">
              2. Grade
            </h3>

            <p className="text-gray-600">
              Our experts assess condition and authenticity.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-2">
              3. Encapsulate
            </h3>

            <p className="text-gray-600">
              Card is securely protected and labeled.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-2">
              4. Verify
            </h3>

            <p className="text-gray-600">
              Verify instantly using certificate number or QR code.
            </p>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* QUICK VERIFY SECTION */}
      {/* ========================= */}
      <section className="bg-black text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Verify a Certificate
          </h2>

          <p className="mt-4 text-gray-300">
            Search a certificate number and instantly verify grading details.
          </p>

          <Link
            href="/verify"
            className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-xl font-semibold"
          >
            Go To Verification
          </Link>
        </div>
      </section>

    </main>
  );
}