// import axios from "axios";

// export const sendEmail = ({ name, email, message, resend }: { name: string, email: string, message: string, resend: boolean }) => axios.post(`api/email`, { name, email, message, resend })

export const sendEmail = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const data = { name, email, subject, message };

  return fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
