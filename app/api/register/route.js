import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Airtable from "airtable";
import crypto from "crypto";

export async function POST(req) {
  try {
    const data = await req.json();
    const { 
      name, email, city, countryCode, phone, moduleTitle, status,
      razorpay_payment_id, razorpay_order_id, razorpay_signature 
    } = data;

    // 1. VERIFICATION CHECK
    if (status === "active") {
      // If these are missing, it's a bad request
      if (!razorpay_payment_id || !razorpay_signature) {
        return NextResponse.json({ error: "Missing payment details" }, { status: 400 });
      }

      // Logic: Verification string is OrderID + | + PaymentID
      // Note: If you didn't create an order on the backend first, 
      // razorpay_order_id might be undefined.
      const secret = process.env.RAZORPAY_KEY_SECRET;
      const hmac = crypto.createHmac("sha256", secret);
      
      // If using Order ID, it's order_id + "|" + payment_id
      // If you are doing a quick integration without a specific Order ID from the server:
      const generated_signature = hmac
        .update((razorpay_order_id || "") + "|" + razorpay_payment_id)
        .digest("hex");

      if (generated_signature !== razorpay_signature) {
        console.error("Signature Mismatch!");
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
      }
    }

    // 2. AIRTABLE SYNC
    const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(process.env.AIRTABLE_BASE_ID);
    const tableName = status === "active" 
      ? process.env.AIRTABLE_REGISTER_TABLE_NAME 
      : process.env.AIRTABLE_LEADS_TABLE_NAME;

    await base(tableName).create([
      {
        fields: {
          "Name": name,
          "Email": email,
          "City": city,
          "Phone": `${countryCode}${phone}`,
          "Module": moduleTitle,
          "Payment ID": razorpay_payment_id || "N/A",
          "Entry Date": new Date().toISOString().split("T")[0],
        }
      }
    ]);

    // 3. EMAIL AUTOMATION
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      bcc: process.env.TO_EMAIL,
      subject: status === "active" ? `Success: ${moduleTitle}` : `Inquiry: ${moduleTitle}`,
      text: `Namaskaram ${name}! Data for ${moduleTitle} received. We will connect soon.`
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("FULL ERROR LOG:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}