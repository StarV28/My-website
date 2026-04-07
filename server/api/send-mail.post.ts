import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Site Form" <${process.env.NAME_WEB_SITE}>`,
    to: process.env.MAIL_USER,
    subject: body.subject,
    text: `
Name: ${body.name}
Email: ${body.email}
Message: ${body.message}
    `,
  });

  return { success: true };
});
