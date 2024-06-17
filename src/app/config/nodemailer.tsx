import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.GOOGLE_APP_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
