// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { user_name, user_email, subject, message } = await req.json();
  console.log(process.env.EMAIL_PASS)
  // Setup transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // or "hotmail", "yahoo", etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${user_name}" <${user_email}>`,
      to: process.env.EMAIL_RECEIVER, // your email to receive
      subject: subject || "New Contact Form Submission",
      text: message,
      html: `
        <h2>New Message from ${user_name}</h2>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email failed:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
