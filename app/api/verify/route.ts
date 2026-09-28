import { certificates } from "@/data/certificates";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Searching for:", body.certificateNumber);

  const certificate = certificates.find(
    (item) => item.certificateNumber === body.certificateNumber
  );

  console.log("Result:", certificate);

  if (certificate) {
    return Response.json({
      found: true,
      ...certificate,
    });
  }

  return Response.json({
    found: false,
  });
}