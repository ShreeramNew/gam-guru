import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Airtable from "airtable";
import crypto from "crypto";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Inside API, Data:", data);
    const {
      name,
      email,
      city,
      countryCode,
      phone,
      moduleTitle,
      status,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = data;

    // 1. VERIFICATION CHECK
    if (status === "active") {
      // Check for the Payment ID (this always exists on success)
      if (!razorpay_payment_id) {
        return NextResponse.json(
          { error: "Missing payment details" },
          { status: 400 },
        );
      }

      // ONLY verify signature if an Order ID was actually used
      if (razorpay_order_id && razorpay_signature) {
        const secret = process.env.RAZORPAY_KEY_SECRET;
        const hmac = crypto.createHmac("sha256", secret);

        const generated_signature = hmac
          .update(razorpay_order_id + "|" + razorpay_payment_id)
          .digest("hex");

        if (generated_signature !== razorpay_signature) {
          console.error("Signature Mismatch!");
          return NextResponse.json(
            { error: "Invalid signature" },
            { status: 400 },
          );
        }
      } else {
        // For simple integrations without an Order ID, we proceed once we have the Payment ID
        console.log(
          "Simple integration detected, skipping signature verification.",
        );
      }
    }

    // 2. AIRTABLE SYNC
    const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(
      process.env.AIRTABLE_BASE_ID,
    );
    const tableName =
      status === "active"
        ? process.env.AIRTABLE_REGISTER_TABLE_NAME
        : process.env.AIRTABLE_LEADS_TABLE_NAME;

    await base(tableName).create([
      {
        fields: {
          Name: name,
          Email: email,
          City: city,
          CountryCode: countryCode,
          Phone: phone,
          Module: moduleTitle,
          "Payment ID": razorpay_payment_id || "N/A",
          "Entry Date": new Date().toISOString().split("T")[0],
        },
      },
    ]);

    // 3. EMAIL AUTOMATION
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      bcc: process.env.TO_EMAIL,
      subject:
        status === "active"
          ? `Success: ${moduleTitle}`
          : `Inquiry: ${moduleTitle}`,
      text: `Namaskaram ${name}! We have recieved your application for ${moduleTitle}. We will connect soon.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("FULL ERROR LOG:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
