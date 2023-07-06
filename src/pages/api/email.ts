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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;
    const info = await transporter.sendMail({
      from: `${name}`,
      to: process.env.OUTLOOK_EMAIL,
      subject: subject,
      html: `
            <div>
                <h2>De: ${name}</h2>
                <h3>Email: ${email}</h3>
                <p>${message}</p>
            </div>
            `,
    });
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
