import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden border-b border-black/10 bg-[#0b0d0f] text-white">

        {/* Background decoration */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-white/10" />

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

          {/* LEFT */}

          <div>
            <div className="mb-7 inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Collectible Registry Grading & Authentication
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Grade the collectible.
              <br />

              <span className="text-white/55">
                Register the slab.
              </span>

              <br />

              Verify ownership.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              CRGA combines collectible grading, authentication and
              registry-backed slab ownership to create a stronger layer
              of protection against counterfeit and misrepresented slabs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/submit"
                className="rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:bg-white/90"
              >
                Submit for Grading
              </Link>

              <Link
                href="/verify"
                className="rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Verify Certificate
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50">

              <span>Certificate Verification</span>

              <span>Owner Registry</span>

              <span>Transfer Records</span>

              <span>Population Reports</span>

            </div>
          </div>


          {/* RIGHT — SAMPLE REGISTRY CARD */}

          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-md">

              <div className="rounded-[28px] border border-white/15 bg-white/[0.07] p-3 shadow-2xl backdrop-blur">

                <div className="rounded-[22px] bg-white p-6 text-black">

                  <div className="flex items-start justify-between border-b border-black/10 pb-5">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                        CRGA Registry
                      </p>

                      <h2 className="mt-2 text-xl font-bold">
                        Certified Collectible
                      </h2>
                    </div>

                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      VERIFIED
                    </div>

                  </div>


                  <div className="my-6 flex h-72 items-center justify-center rounded-2xl border border-black/10 bg-[#f1f1ef]">

                    <div className="text-center">

                      <div className="mx-auto mb-4 h-24 w-16 rounded-lg border-2 border-black/15 bg-white shadow-sm" />

                      <p className="text-sm text-black/40">
                        Certified Card Image
                      </p>

                    </div>

                  </div>


                  <div className="space-y-4">

                    <div className="flex justify-between border-b border-black/10 pb-3">
                      <span className="text-sm text-black/45">
                        Certificate
                      </span>

                      <span className="font-semibold">
                        MSMB000001
                      </span>
                    </div>


                    <div className="flex justify-between border-b border-black/10 pb-3">
                      <span className="text-sm text-black/45">
                        Grade
                      </span>

                      <span className="font-semibold">
                        Pristine 10
                      </span>
                    </div>


                    <div className="flex justify-between border-b border-black/10 pb-3">
                      <span className="text-sm text-black/45">
                        Registry
                      </span>

                      <span className="font-semibold text-emerald-700">
                        Owner Verified
                      </span>
                    </div>


                    <div className="flex justify-between">
                      <span className="text-sm text-black/45">
                        Ownership Status
                      </span>

                      <span className="font-semibold">
                        Registered
                      </span>
                    </div>

                  </div>

                </div>

              </div>

              <p className="mt-5 text-center text-xs leading-5 text-white/35">
                Example registry interface. Ownership identity is not
                publicly exposed.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* CORE IDEA */}
      {/* ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
              Beyond traditional grading
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              A slab should have more than a grade.
            </h2>

          </div>


          <div>

            <p className="text-xl leading-9 text-black/60">
              Counterfeit slabs can imitate labels, certification numbers
              and physical holders. CRGA is being designed around an
              additional registry layer that connects a genuine slab to
              its certification record and verified ownership.
            </p>

            <p className="mt-6 text-xl leading-9 text-black/60">
              When ownership changes, the registry can be updated through
              a controlled transfer process — creating continuity between
              the collectible, the slab and its registered owner.
            </p>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* THREE SECURITY PILLARS */}
      {/* ====================================================== */}

      <section className="border-y border-black/10 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="mb-14 max-w-3xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
              The CRGA Registry
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Built around three layers of verification.
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {/* CARD 1 */}

            <div className="rounded-3xl border border-black/10 p-8">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-lg font-bold text-white">
                01
              </div>

              <h3 className="text-2xl font-semibold">
                Collectible Authentication
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                The collectible is evaluated for authenticity before
                condition grading and encapsulation.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="rounded-3xl border border-black/10 p-8">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-lg font-bold text-white">
                02
              </div>

              <h3 className="text-2xl font-semibold">
                Registered Ownership
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                The slab can be associated with a verified owner using an
                identity verification process rather than relying only on
                possession of the physical slab.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="rounded-3xl border border-black/10 p-8">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-lg font-bold text-white">
                03
              </div>

              <h3 className="text-2xl font-semibold">
                Ownership Transfer
              </h3>

              <p className="mt-4 leading-7 text-black/55">
                When a registered slab is sold, ownership can be
                transferred within the CRGA registry so the record follows
                the genuine collectible.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* HOW CRGA WORKS */}
      {/* ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="mb-16 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
            From submission to registry
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            How CRGA works
          </h2>

        </div>


        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-[#111315] p-8 text-white">

            <p className="text-sm text-white/40">
              STEP 01
            </p>

            <h3 className="mt-12 text-2xl font-semibold">
              Submit
            </h3>

            <p className="mt-4 leading-7 text-white/55">
              Select a grading service and submit your collectible to CRGA.
            </p>

          </div>


          <div className="rounded-3xl bg-[#e9e9e5] p-8">

            <p className="text-sm text-black/35">
              STEP 02
            </p>

            <h3 className="mt-12 text-2xl font-semibold">
              Authenticate & Grade
            </h3>

            <p className="mt-4 leading-7 text-black/55">
              The collectible is authenticated, evaluated and assigned a
              grade.
            </p>

          </div>


          <div className="rounded-3xl bg-[#e9e9e5] p-8">

            <p className="text-sm text-black/35">
              STEP 03
            </p>

            <h3 className="mt-12 text-2xl font-semibold">
              Register
            </h3>

            <p className="mt-4 leading-7 text-black/55">
              Certification and ownership information are linked within
              the CRGA registry.
            </p>

          </div>


          <div className="rounded-3xl bg-[#e9e9e5] p-8">

            <p className="text-sm text-black/35">
              STEP 04
            </p>

            <h3 className="mt-12 text-2xl font-semibold">
              Verify & Transfer
            </h3>

            <p className="mt-4 leading-7 text-black/55">
              Verify the certificate online and transfer registered
              ownership when the slab changes hands.
            </p>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* ANTI COUNTERFEIT */}
      {/* ====================================================== */}

      <section className="bg-[#deded8]">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
              Counterfeit protection
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              A certificate number alone should not be the entire security
              system.
            </h2>

          </div>


          <div className="space-y-6">

            <div className="rounded-2xl bg-white p-6">

              <h3 className="font-semibold">
                Digital Certificate Record
              </h3>

              <p className="mt-2 text-black/55">
                Every issued slab receives a searchable certification
                record through CRGA.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-6">

              <h3 className="font-semibold">
                Registry Verification
              </h3>

              <p className="mt-2 text-black/55">
                Genuine slabs can be associated with verified ownership,
                adding another layer beyond copying a label or number.
              </p>

            </div>


            <div className="rounded-2xl bg-white p-6">

              <h3 className="font-semibold">
                Controlled Ownership Transfer
              </h3>

              <p className="mt-2 text-black/55">
                Buyers can request transfer of the registry record when a
                slab is sold.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* PRIVACY SECTION */}
      {/* ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="rounded-[32px] border border-black/10 bg-white p-8 md:p-12">

          <div className="grid gap-10 md:grid-cols-2">

            <div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
                Privacy by design
              </p>

              <h2 className="text-3xl font-semibold tracking-tight">
                Identity verification should not mean exposing identity.
              </h2>

            </div>


            <div>

              <p className="leading-8 text-black/55">
                Government-issued identification may be used during owner
                verification, but sensitive identity information should
                not appear on the public certificate page. Public records
                should show verification status while private information
                remains protected.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* VERIFY CTA */}
      {/* ====================================================== */}

      <section className="bg-[#0b0d0f] text-white">

        <div className="mx-auto max-w-5xl px-6 py-28 text-center">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-white/40">
            CRGA Certification
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Verify before you trust.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/55">
            Search a CRGA certificate to view grading information,
            certification details and registry status.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/verify"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black"
            >
              Verify Certificate
            </Link>

            <Link
              href="/pricing"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold"
            >
              View Grading Pricing
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}