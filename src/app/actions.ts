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

    console.log("Attempting to send email to info@axedispatch.com...");
    console.log("Form data:", { name, email, phone, truckType });

    try {
        // Create a timeout promise
        const timeout = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out after 10 seconds")), 10000)
        );

        // Race the Resend call against the timeout
        const { data, error } = await Promise.race([
            resend.emails.send({
                from: "AXE Dispatch <onboarding@resend.dev>",
                to: ["info@axedispatch.com"],
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
            }),
            timeout
        ]) as { data: any, error: any };

        if (error) {
            console.error("Resend API Error:", error);
            return { success: false, error: error.message };
        }

        console.log("Email sent successfully:", data);
        return { success: true, data };
    } catch (e: any) {
        console.error("Error in sendContactEmail:", e.message);
        return { success: false, error: e.message || "Failed to send email" };
    }
}
