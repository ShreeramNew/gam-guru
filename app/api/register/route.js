import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Airtable from "airtable";
import crypto from "crypto";

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      firstName,
      lastName,
      email,
      city,
      countryCode,
      phone,
      age,
      gender,
      occupation,
      moduleTitle,
      status,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = data;

    const fullName = firstName ? `${firstName} ${lastName}` : data.name;

    // 1. VERIFICATION CHECK (Remains same)
    if (status === "active") {
      if (!razorpay_payment_id) {
        return NextResponse.json(
          { error: "Missing payment details" },
          { status: 400 },
        );
      }
      if (razorpay_order_id && razorpay_signature) {
        const secret = process.env.RAZORPAY_KEY_SECRET;
        const generated_signature = crypto
          .createHmac("sha256", secret)
          .update(razorpay_order_id + "|" + razorpay_payment_id)
          .digest("hex");
        if (generated_signature !== razorpay_signature) {
          return NextResponse.json(
            { error: "Invalid signature" },
            { status: 400 },
          );
        }
      }
    }

    // 2. AIRTABLE SYNC (Updated Fields)
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
          "First Name": firstName || fullName,
          "Last Name": lastName || "",
          Email: email,
          Age: age ? parseInt(age) : 0,
          Gender: gender || "N/A",
          Occupation: occupation || "N/A",
          City: city,
          CountryCode: countryCode,
          Phone: phone,
          Module: moduleTitle,
          "Payment ID": razorpay_payment_id || "N/A",
          "Entry Date": new Date().toISOString().split("T")[0],
        },
      },
    ]);

    // 3. MONGODB BACKEND SYNC (Only for Paid)
    if (status === "active") {
      try {
        await fetch("http://localhost:5000/api/users/sync-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
            age,
            gender,
            occupation,
            city,
            phone: `${countryCode}${phone}`,
            moduleTitle,
          }),
        });
      } catch (backendErr) {
        console.error("Node.js Backend Sync failed:", backendErr.message);
      }
    }

    // 4. EMAIL (Nodemailer)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject:
        status === "active"
          ? `Success: ${moduleTitle}`
          : `Inquiry: ${moduleTitle}`,
      text: `Namaskaram ${fullName}! Application for ${moduleTitle} received. We will connect soon.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
