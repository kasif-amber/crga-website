"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function verifyCertificate() {
    setError("");

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

    console.log("API Response:", data);

if (data.found) {
  router.push(
    `/certificates/${data.certificateNumber}`
  );
} else {
  setError("Certificate Not Found");
}

    if (data.found) {
      router.push(
        `/certificates/${data.certificateNumber}`
      );
    } else {
      setError("Certificate Not Found");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">

      <h1 className="text-4xl font-bold">
        CRGA Certificate Verification
      </h1>

      <input
        type="text"
        placeholder="Enter Certificate Number"
        value={certificateNumber}
        onChange={(e) =>
          setCertificateNumber(e.target.value)
        }
        className="border p-3 rounded-lg w-80"
      />

      <button
        className="bg-black text-white px-6 py-3 rounded-lg"
        onClick={verifyCertificate}
      >
        Verify Certificate
      </button>

      {error && (
        <div className="border p-4 rounded-lg w-80 text-center">
          {error}
        </div>
      )}

    </main>
  );
}