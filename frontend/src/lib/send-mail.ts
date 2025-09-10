import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

export async function sendMail({ email, subject, text }: {
  email: string;
  subject: string;
  text: string;
}) {
  const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: false,
    auth: {
      user: SMTP_SERVER_USERNAME,
      pass: SMTP_SERVER_PASSWORD,
    },
  });

  try {
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Kontaktformular" <${SMTP_SERVER_USERNAME}>`,
      to: SITE_MAIL_RECIEVER,
      subject,
      text,
      replyTo: email,
    });

  } catch (error) {
    throw error;
  }
}
