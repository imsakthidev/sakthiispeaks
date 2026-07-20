import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, mobile, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Use SMTP via environment variables. If not set, it will gracefully fallback or error.
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use standard Gmail or Google Workspace
      auth: {
        user: process.env.EMAIL_USER, // e.g. sakthiispeaks@gmail.com
        pass: process.env.EMAIL_PASS, // e.g. App Password from Google
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send it to yourself
      replyTo: email,
      subject: `New Portfolio Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile || 'N/A'}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // If environment variables are present, send the email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("EMAIL_USER or EMAIL_PASS is not set in environment variables. Email notification skipped, but data saved to Firebase.");
    }

    return NextResponse.json({ success: true, message: 'Message processed successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
