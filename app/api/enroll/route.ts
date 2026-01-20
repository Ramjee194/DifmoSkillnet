import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, name, phone, title } = await req.json();
    console.log("Received enrollment data:", { email, name, phone, title });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 
      },
    });

    await transporter.sendMail({
      from: `"NILET Course" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Enrollment Confirmation - ${name}`,
      text: `Thank you for enrolling in ${name}. Your details are: Name - ${name}, Phone - ${phone}. We will contact you soon!`,
    });

    
    await transporter.sendMail({
      from: `"NILET Course" <${process.env.EMAIL_USER}>`,
      to: "ramjeeyadav860@gmail.com",
      subject: `New Enrollment - ${title}`,
      text: `A new student has enrolled in ${title}. Details: Name - ${name}, Email - ${email}, Phone - ${phone}.`,
    });
    

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
