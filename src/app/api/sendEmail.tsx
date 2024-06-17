import { transporter, mailOptions } from "@/app/config/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  if (!data.userEmail) {
    return NextResponse.json({ message: "Missing email" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `${data.subject}`,
      text: "Unable to render html",
      html: `<h1>Message from Protfolio !!!</h1><p>FROM: ${data.userEmail}</p><p>${data.message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    // console.log("ROUTING ERROR", error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
