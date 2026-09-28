import { certificates } from "@/data/certificates";

export default function PopulationPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-4">
        Population Report
      </h1>

      <p className="text-gray-600 mb-10">
        View population data for cards graded by CRGA.
      </p>

      <div className="space-y-8">

        {certificates.map((certificate) => (
          <div
            key={certificate.certificateNumber}
            className="border rounded-xl p-6"
          >

            <h2 className="text-2xl font-bold mb-2">
              {certificate.cardName}
            </h2>

            <p className="mb-4">
              {certificate.setName}
            </p>

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
        ))}

      </div>

    </main>
  );
}