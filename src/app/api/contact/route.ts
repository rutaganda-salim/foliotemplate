import { transporter } from "@/nodemailer/config";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: any) {
  const my_email = process.env.NEXT_PUBLIC_EMAIL;

  const formData = await request.formData();
  const name = formData.get("user_name");
  const email = formData.get("user_email");
  const message = formData.get("user_message");

  try {
    await transporter.sendMail({
      from: my_email,
      to: my_email,
      cc: process.env.NEXT_PUBLIC_CC,
      subject: `Portfolio 2024 website new message`,
      // this is the styling for the email template; test html styling in your own /template/email.html file; must use inline styles and table semantic tags because other forms are not widely supported; flexbox will not work well so must use alternative styling methods (display: flex works but other flex stylings like flex-direction, flex, gap, justify-content, etc. will not work)
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({
      message: "Message was sent successfully!",
    });
  } catch (err) {
    return NextResponse.json({
      message: err,
    });
  }
}
