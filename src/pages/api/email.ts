import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

// const transporter = nodemailer.createTransport({
//   host: "outlook.office365.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.OUTLOOK_EMAIL,
//     pass: process.env.OUTLOOK_PASSWORD,
//   },
// });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_PASSWORD,
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;
    const info = await transporter.sendMail({
      from: `${name}`,
      to: process.env.OUTLOOK_EMAIL,
      subject: subject,
      html: `
            <!doctype html>
            <html lang="es">
              <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>${subject}</title>
              </head>
              <body style="margin:0;padding:0;background-color:#f5f7fb;">
                <div style="background-color:#f5f7fb; padding:5px;">
                  <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e6e8ee;border-radius:12px;overflow:hidden;box-shadow:0 1px 2px rgba(16,24,40,0.04);">
                    <!-- Header -->
                    <div style="background:linear-gradient(135deg,#4f46e5,#06b6d4);padding:16px 20px;">
                      <h1 style="margin:0;font-size:18px;line-height:1.4;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif; text-align: center;">Tienes un nuevo mensaje desde tu portafolio.</h1>
                    </div>

                    <!-- Content -->
                    <div style="padding:20px;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111827;">
                      <div style="margin-bottom:12px;">
                        <span style="display:inline-block;width:80px;color:#6b7280;font-size:13px;">De</span>
                        <strong style="font-size:14px;color:#111827;">${name}</strong>
                      </div>
                      <div style="margin-bottom:12px;">
                        <span style="display:inline-block;width:80px;color:#6b7280;font-size:13px;">Email</span>
                        <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;font-size:14px;">${email}</a>
                      </div>

                      <div style="margin:18px 0 8px;color:#6b7280;font-size:13px;">Mensaje</div>
                      <div style="white-space:pre-wrap;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:14px;color:#111827;font-size:14px;line-height:1.6;">
                        ${message}
                      </div>
                    </div>

                    <!-- Footer -->
                    <div style="padding:14px 20px;border-top:1px solid #f1f5f9;background:#fafafa;color:#6b7280;font-size:12px;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
                      <p style="margin:0;">Este correo fue enviado desde el formulario de contacto en <a href="https://juniorhuanca.vercel.app/">juniorhuanca.vercel.app</a>.</p>
                    </div>
                  </div>
                </div>
              </body>
            </html>
            `,
    });
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
