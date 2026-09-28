"use client";

import { useState } from "react";

export default function SubmitPage() {

  const selectedService = "Basic";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] =
    useState(selectedService);

  const [cardName, setCardName] = useState("");
  const [setName, setSetName] = useState("");
  const [declaredValue, setDeclaredValue] =
    useState("");

  const [notes, setNotes] = useState("");

  const [shippingAddress, setShippingAddress] =
    useState("");

  const [submissionId, setSubmissionId] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const response = await fetch(
      "/api/submit",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          city,
          service,
          shippingAddress,
          cardName,
          setName,
          declaredValue,
          notes,
        }),
      }
    );

    const data =
      await response.json();

    setLoading(false);

    if (data.success) {
      setSubmissionId(
        data.submissionId
      );
    } else {
      alert(
        "Submission failed"
      );
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-4">
        Submit Cards
      </h1>

      <p className="text-gray-600 mb-10">
        Start your CRGA grading submission.
      </p>

      {submissionId && (
        <div className="border border-green-500 bg-green-50 p-6 rounded-xl mb-8">

          <h2 className="text-2xl font-bold mb-2">
            Submission Created
          </h2>

          <p>
            Submission ID:
          </p>

          <p className="text-xl font-bold">
            {submissionId}
          </p>

        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Grading Service
          </h2>

          <select
            value={service}
            onChange={(e) =>
              setService(
                e.target.value
              )
            }
            className="w-full border rounded-lg p-3"
          >
            <option>Basic</option>
            <option>Premium</option>
            <option>Ultra</option>
            <option>Bulk</option>
          </select>

        </div>

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Customer Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              value={fullName}
              onChange={(e) =>
                setFullName(
                  e.target.value
                )
              }
              placeholder="Full Name"
              className="border rounded-lg p-3"
            />

            <input
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="Email Address"
              className="border rounded-lg p-3"
            />

            <input
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
              placeholder="Phone Number"
              className="border rounded-lg p-3"
            />

            <input
              value={city}
              onChange={(e) =>
                setCity(
                  e.target.value
                )
              }
              placeholder="City"
              className="border rounded-lg p-3"
            />

          </div>

        </div>

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Card Information
          </h2>

          <div className="space-y-4">

            <input
              value={cardName}
              onChange={(e) =>
                setCardName(
                  e.target.value
                )
              }
              placeholder="Card Name"
              className="border rounded-lg p-3 w-full"
            />

            <input
              value={setName}
              onChange={(e) =>
                setSetName(
                  e.target.value
                )
              }
              placeholder="Set Name"
              className="border rounded-lg p-3 w-full"
            />

            <input
              value={declaredValue}
              onChange={(e) =>
                setDeclaredValue(
                  e.target.value
                )
              }
              placeholder="Declared Value (₹)"
              className="border rounded-lg p-3 w-full"
            />

            <textarea
              value={notes}
              onChange={(e) =>
                setNotes(
                  e.target.value
                )
              }
              placeholder="Additional Notes"
              className="border rounded-lg p-3 w-full h-32"
            />

          </div>

        </div>

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Shipping Address
          </h2>

          <textarea
            value={shippingAddress}
            onChange={(e) =>
              setShippingAddress(
                e.target.value
              )
            }
            placeholder="Full Address"
            className="border rounded-lg p-3 w-full h-32"
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-8 py-4 rounded-lg"
        >
          {loading
            ? "Submitting..."
            : "Continue Submission"}
        </button>

      </form>

    </main>
  );
}