import { createTransport } from "nodemailer";

export async function sendEmail(email: string): Promise<void>{
    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: "mvpassreset@gmail.com",
            pass: process.env.EMAIL_PASS,
        },
    });

    //const baseURL = urls.baseUrl ?? "http://localhost:3000";
    const baseURL = "http://localhost:3000";
    const mailOptions = {
        from: "mvpassreset@gmail.com",
        to: email,
        subject: "MindVersity Admin Password Reset",
        text: `Click this link to reset your MindVeristy Admin password:\n${baseURL}${urls.pages.portal.newPassword}?email=${email}&key=${randomHash}`,
    };

    void transporter.sendMail(mailOptions);
}