import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Here you would typically:
    // 1. Validate the data
    // 2. Send an email notification
    // 3. Store in a database
    // 4. Send confirmation email to user

    // For now, we'll just log and return success
    console.log("Contact form submission:", { name, email, service, message });

    // Example: Send to your email using a service like SendGrid, Resend, etc.
    // await sendEmail({
    //   to: 'your-email@iamaltera.com',
    //   subject: `New inquiry from ${name}`,
    //   body: `Service: ${service}\nMessage: ${message}\nFrom: ${email}`
    // })

    return NextResponse.json(
      { message: "Thank you for your message. I will get back to you soon!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
