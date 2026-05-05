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
      if (!razorpay_payment_id) {
        return NextResponse.json(
          { error: "Missing payment details" },
          { status: 400 }
        );
      }

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
            { status: 400 }
          );
        }
      } else {
        console.log("Simple integration detected, skipping signature verification.");
      }
    }

    // 2. AIRTABLE SYNC
    const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(
      process.env.AIRTABLE_BASE_ID
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

    // 3. MONGODB BACKEND SYNC (Only for Paid Enrollments)
    if (status === "active") {
      try {
        // We use the new modularized endpoint
        const backendRes = await fetch("http://localhost:5000/api/users/sync-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name,
            city,
            phone: `${countryCode}${phone}`,
            moduleTitle,
          }),
        });
        
        if (!backendRes.ok) {
          console.error("MongoDB Sync failed but Airtable was successful.");
        }
      } catch (backendErr) {
        console.error("Could not reach Node.js Backend:", backendErr.message);
        // We don't return an error here because Airtable/Email already worked
      }
    }

    // 4. EMAIL AUTOMATION
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
      text: `Namaskaram ${name}! We have received your application for ${moduleTitle}. We will connect soon.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("FULL ERROR LOG:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}