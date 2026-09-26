import { certificates } from "@/data/certificates";

export async function POST(request: Request) {
  const body = await request.json();

  const certificate = certificates.find(
    (item) => item.certificateNumber === body.certificateNumber
  );

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