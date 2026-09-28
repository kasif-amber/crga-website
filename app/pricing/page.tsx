import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "₹1,500 / Card",
      value: "Up to ₹10,000",
      turnaround: "40 Days",
      features: [
        "Online Certification",
        "Professional Grading",
        "Secure Encapsulation",
      ],
    },

    {
      name: "Premium",
      price: "₹2,499 / Card",
      value: "Up to ₹1,00,000",
      turnaround: "30 Days",
      features: [
        "Higher Declared Value Coverage",
        "Online Certification",
        "Secure Encapsulation",
      ],
      featured: true,
    },

    {
      name: "Ultra",
      price: "₹2,499 + 1% Card Value",
      value: "Above ₹1,00,000",
      turnaround: "20 Days",
      features: [
        "High Value Card Service",
        "Priority Processing",
        "Online Certification",
      ],
    },

    {
      name: "Bulk",
      price: "₹999 / Card",
      value: "Up to ₹10,000",
      turnaround: "30 Days",
      features: [
        "Minimum 50 Cards",
        "Best Value",
        "Online Certification",
      ],
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <div className="text-center mb-14">

        <h1 className="text-5xl font-bold mb-4">
          Pokémon TCG Grading Pricing
        </h1>

        <p className="text-gray-600 text-lg">
          Transparent pricing for every collector.
        </p>

      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 ${
              plan.featured
                ? "border-black shadow-lg"
                : ""
            }`}
          >

            {plan.featured && (
              <div className="mb-4 inline-block bg-black text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </div>
            )}

            <h2 className="text-2xl font-bold mb-4">
              {plan.name}
            </h2>

            <div className="text-3xl font-bold mb-3">
              {plan.price}
            </div>

            <p className="mb-2">
              <strong>Declared Value:</strong>{" "}
              {plan.value}
            </p>

            <p className="mb-6">
              <strong>Turnaround:</strong>{" "}
              {plan.turnaround}
            </p>

            <ul className="space-y-3 mb-8">

              {plan.features.map((feature) => (
                <li key={feature}>
                  ✓ {feature}
                </li>
              ))}

            </ul>

            <Link
              href="/submit"
              className="block text-center bg-black text-white py-3 rounded-lg"
            >
              Submit Cards
            </Link>

          </div>
        ))}

      </div>

      <div className="mt-12 border rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-4">
          Important Notes
        </h2>

        <ul className="space-y-2">

          <li>
            • Declared value is provided by the customer at submission.
          </li>

          <li>
            • Bulk submissions require a minimum of 50 cards.
          </li>

          <li>
            • Turnaround times are estimates and may vary depending on submission volume.
          </li>

          <li>
            • Pricing shown is for Pokémon TCG grading services.
          </li>

        </ul>

      </div>

    </main>
  );
}