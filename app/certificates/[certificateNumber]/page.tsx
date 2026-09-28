import { certificates } from "@/data/certificates";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ certificateNumber: string }>;
}) {
  const { certificateNumber } = await params;

  const certificate = certificates.find(
    (item) => item.certificateNumber === certificateNumber
  );

  if (!certificate) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Certificate Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}

      <div className="border rounded-xl p-6 mb-8">

        <h1 className="text-4xl font-bold">
          CRGA Certificate Verification
        </h1>

        <p className="mt-2 text-lg">
          Certificate #: {certificate.certificateNumber}
        </p>

        <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
          ✓ AUTHENTIC CERTIFICATE
        </div>

      </div>

      {/* Images */}

      <div className="grid md:grid-cols-2 gap-8 mb-8">

        <div>
          <h2 className="text-xl font-semibold mb-3">
            Front
          </h2>

          <img
            src={certificate.frontImage}
            alt={certificate.cardName}
            className="w-full border rounded-xl"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            Back
          </h2>

          <img
            src={certificate.backImage}
            alt={certificate.cardName}
            className="w-full border rounded-xl"
          />
        </div>

      </div>

      {/* Grade Banner */}

      <div className="border rounded-xl p-6 mb-8 text-center">

        <p className="text-sm uppercase tracking-wider">
          Assigned Grade
        </p>

        <h2 className="text-5xl font-bold mt-2">
          {certificate.grade}
        </h2>

      </div>

      {/* Certificate Details */}

      <div className="border rounded-xl overflow-hidden mb-8">

        <table className="w-full">

          <tbody>

            <tr className="border-b">
              <td className="font-semibold p-4">Card Name</td>
              <td className="p-4">{certificate.cardName}</td>
            </tr>

            <tr className="border-b">
              <td className="font-semibold p-4">Set</td>
              <td className="p-4">{certificate.setName}</td>
            </tr>

            <tr className="border-b">
              <td className="font-semibold p-4">Card Number</td>
              <td className="p-4">{certificate.cardNumber}</td>
            </tr>

            <tr className="border-b">
              <td className="font-semibold p-4">Language</td>
              <td className="p-4">{certificate.language}</td>
            </tr>

            <tr className="border-b">
              <td className="font-semibold p-4">Year</td>
              <td className="p-4">{certificate.year}</td>
            </tr>

            <tr>
              <td className="font-semibold p-4">Status</td>
              <td className="p-4 text-green-600 font-semibold">
                {certificate.certificationStatus}
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Population Report */}

      <div className="border rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-4">
          Population Report
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-3">
                Grade
              </th>

              <th className="text-left p-3">
                Population
              </th>

            </tr>

          </thead>

          <tbody>

            {Object.entries(
              certificate.population
            ).map(([grade, count]) => (

              <tr
                key={grade}
                className="border-b"
              >

                <td className="p-3">
                  {grade}
                </td>

                <td className="p-3">
                  {count}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}