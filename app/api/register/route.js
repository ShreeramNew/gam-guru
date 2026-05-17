import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Airtable from "airtable";
import crypto from "crypto";

const airtableBase = new Airtable({ 
  apiKey: process.env.AIRTABLE_PAT 
}).base(process.env.AIRTABLE_BASE_ID || "");

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
      timezone,
      startSession,
      endSession, // NEW FIELDS
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

    await airtableBase(tableName).create([
      {
        fields: {
          "First Name": firstName,
          "Last Name": lastName,
          Email: email,
          Age: age ? parseInt(age) : 0,
          Gender: gender,
          Occupation: occupation,
          City: city,
          CountryCode: countryCode,
          Phone: `${countryCode}${phone}`,
          Module: moduleTitle,
          Timezone: timezone, // ADDED
          "Start Session": startSession, // ADDED
          "End Session": endSession, // ADDED
          "Payment ID": razorpay_payment_id || "N/A",
          "Entry Date": new Date().toISOString(),
        },
      },
    ]);

    // 3. MONGODB BACKEND SYNC (Only for Paid)
    if (status === "active") {
      try {
        let backendRes = await fetch(
          "http://16.171.143.163:5000/api/users/sync-payment",
          {
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
              countryCode,
              phone: `${phone}`,
              moduleTitle,
            }),
            signal: AbortSignal.timeout(5000),
          },
        );
        if (!backendRes.ok) {
          console.error(`AWS Backend returned status: ${backendRes.status}`);
        } else {
          console.log("✅ MongoDB Sync Successful");
        }
      } catch (backendErr) {
        console.error("Node.js Backend Sync failed:", backendErr.message);
      }
    }

    // 4. EMAIL (Nodemailer)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // 5. WHATSAPP (MSG91 Integration)
    if (status === "active") {
      try {
        console.log("Coming to whatsapp section:");
        const msg91AuthKey = process.env.MSG91_AUTH_KEY;
        const msg91TemplateId = "registration_success_notification";
        const msg91Sender = process.env.MSG91_WHATSAPP_SENDER;

        console.log("Check details:", msg91AuthKey, msg91Sender);

        const formattedPhone = `${countryCode.replace("+", "")}${phone}`;

        // Create the custom string for your template placeholder
        const formattedTimeAndDate = `on ${startSession} (${timezone})`;

        const whatsappPayload = {
          integrated_number: msg91Sender,
          content_type: "template",
          payload: {
            messaging_product: "whatsapp",
            type: "template",
            template: {
              name: msg91TemplateId,
              language: {
                code: "en",
                policy: "deterministic",
              },
              to_and_components: [
                {
                  to: [formattedPhone],
                  components: {
                    body_body_name: {
                      type: "text",
                      value: fullName,
                      parameter_name: "body_name",
                    },
                    body_body_module_name: {
                      type: "text",
                      value: moduleTitle,
                      parameter_name: "body_module_name",
                    },
                    body_body_time_and_date: {
                      type: "text",
                      value: formattedTimeAndDate, // Now sends "on 17th May at 9:00pm (IST)"
                      parameter_name: "body_time_and_date",
                    },
                    body_body_date1: {
                      type: "text",
                      value: startSession || "N/A",
                      parameter_name: "body_date1",
                    },
                    body_body_date2: {
                      type: "text",
                      value: endSession || "N/A",
                      parameter_name: "body_date2",
                    },
                  },
                },
              ],
            },
          },
        };

        console.log("whatsapp payload:", whatsappPayload);

        await fetch(
          "https://api.msg91.com/api/v5/whatsapp/whatsapp-outbound-message/bulk/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authkey: msg91AuthKey,
            },
            body: JSON.stringify(whatsappPayload),
          },
        );
      } catch (whatsappErr) {
        console.error("WhatsApp MSG91 failed:", whatsappErr.message);
      }
    }
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject:
        status === "active"
          ? `Success: ${moduleTitle}`
          : `Inquiry: ${moduleTitle}`,
      text:
        status === "active"
          ? 
      `Namaskaram ${fullName}! Your Registration for ${moduleTitle} with Shlokabhyasa is Successful✨️🌸. 
      Your 1st Mandatory Live Session is happening on ${startSession} 🌍.
      Please Use the Below Zoom Link to Join the Session
      https://us05web.zoom.us/j/8433113469?pwd=GP76pxdhayL1k438VpC3nkAzp8PaBG.1

      For General Updates from Shlokabhyasa, Join Our whatsapp Group ✨️
      https://chat.whatsapp.com/DuuEfGYCb0QG6ttknLbrLC

      Pranam,
      Team Sanatan After School`
          : 
      `Namaskaram ${fullName}! We have recieved your interest for ${moduleTitle}. We will connect soon.Pranam,
      Team Sanatan After School`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
