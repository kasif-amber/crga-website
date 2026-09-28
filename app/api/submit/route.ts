import sql from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const latestSubmission = await sql`
      SELECT submission_id
      FROM submissions
      ORDER BY id DESC
      LIMIT 1
    `;

    let nextNumber = 1;

    if (latestSubmission.length > 0) {
      const lastId = latestSubmission[0].submission_id;
      const numericPart = parseInt(
        lastId.replace("CRGA-SUB-", "")
      );

      nextNumber = numericPart + 1;
    }

    const submissionId =
      `CRGA-SUB-${String(nextNumber).padStart(6, "0")}`;

    await sql`
      INSERT INTO submissions (
        submission_id,
        customer_name,
        email,
        phone,
        city,
        service_level,
        shipping_address
      )
      VALUES (
        ${submissionId},
        ${body.fullName},
        ${body.email},
        ${body.phone},
        ${body.city},
        ${body.service},
        ${body.shippingAddress}
      )
    `;

    await sql`
      INSERT INTO submission_cards (
        submission_id,
        card_name,
        set_name,
        declared_value,
        notes
      )
      VALUES (
        ${submissionId},
        ${body.cardName},
        ${body.setName},
        ${body.declaredValue},
        ${body.notes}
      )
    `;

    return Response.json({
      success: true,
      submissionId,
    });

  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
      error: String(error),
    });
  }
}