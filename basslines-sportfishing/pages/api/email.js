import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "server/actions/SendEmail.ts";

interface Email {
    email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        const recipient = req.body as Email;

        await sendEmail(recipient.email);
        res.status(200).json({
            success: true,
            payload: "Reset Email Sent",
        });
    } catch (error) {
        console.error(error instanceof Error && error);
        res.status(400).json({
            success: false,
            message: "Error sending email",
        });
    }
}