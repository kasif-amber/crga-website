"use client";

import { useState } from "react";

export default function VerifyPage() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [result, setResult] = useState<any>(null);

  async function verifyCertificate() {
    const response = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        certificateNumber,
      }),
    });

    const data = await response.json();
    setResult(data);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        PTCG Certificate Verification
      </h1>

      <input
        type="text"
        placeholder="Enter Certificate Number"
        value={certificateNumber}
        onChange={(e) => setCertificateNumber(e.target.value)}
        className="border p-3 rounded-lg w-80"
      />

      <button
        className="bg-black text-white px-6 py-3 rounded-lg"
        onClick={verifyCertificate}
      >
        Verify Certificate
      </button>

      {result && result.found && (
        <div className="border p-4 rounded-lg w-80">
          <p>
            <strong>Certificate:</strong> {result.certificateNumber}
          </p>
          <p>
            <strong>Card:</strong> {result.cardName}
          </p>
          <p>
            <strong>Grade:</strong> {result.grade}
          </p>
        </div>
      )}

      {result && !result.found && (
        <div className="border p-4 rounded-lg w-80">
          Certificate Not Found
        </div>
      )}
    </main>
  );
}