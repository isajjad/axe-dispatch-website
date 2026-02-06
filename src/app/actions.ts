"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const truckType = formData.get("truckType") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Missing required fields" };
    }

    try {
        const data = await resend.emails.send({
            from: "AXE Dispatch <onboarding@resend.dev>", // Can be changed once domain is verified
            to: ["axedispatchllc@gmail.com"],
            subject: `New Lead: ${name} - ${truckType}`,
            html: `
        <h2>New Lead from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Truck Type:</strong> ${truckType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error: "Failed to send email" };
    }
}
