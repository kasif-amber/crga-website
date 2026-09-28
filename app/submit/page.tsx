export default function SubmitPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-4">
        Submit Cards
      </h1>

      <p className="text-gray-600 mb-10">
        Start your CRGA grading submission.
      </p>

      <form className="space-y-8">

        {/* Service Level */}

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Grading Service
          </h2>

          <select
            className="w-full border rounded-lg p-3"
          >
            <option>Basic</option>
            <option>Premium</option>
            <option>Ultra</option>
            <option>Bulk</option>
          </select>

        </div>

        {/* Customer Details */}

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Customer Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              placeholder="Full Name"
              className="border rounded-lg p-3"
            />

            <input
              placeholder="Email Address"
              className="border rounded-lg p-3"
            />

            <input
              placeholder="Phone Number"
              className="border rounded-lg p-3"
            />

            <input
              placeholder="City"
              className="border rounded-lg p-3"
            />

          </div>

        </div>

        {/* Card Details */}

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Card Information
          </h2>

          <div className="space-y-4">

            <input
              placeholder="Card Name"
              className="border rounded-lg p-3 w-full"
            />

            <input
              placeholder="Set Name"
              className="border rounded-lg p-3 w-full"
            />

            <input
              placeholder="Declared Value (₹)"
              className="border rounded-lg p-3 w-full"
            />

            <textarea
              placeholder="Additional Notes"
              className="border rounded-lg p-3 w-full h-32"
            />

          </div>

        </div>

        {/* Shipping */}

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Shipping Address
          </h2>

          <textarea
            placeholder="Full Address"
            className="border rounded-lg p-3 w-full h-32"
          />

        </div>

        <button
          type="submit"
          className="bg-black text-white px-8 py-4 rounded-lg"
        >
          Continue Submission
        </button>

      </form>

    </main>
  );
}