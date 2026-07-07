import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(req: Request) {
  let body: { name: string; mobile: string; contactMethod?: string; message: string; carName: string; listingUrl: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const { name, mobile, contactMethod, message, carName, listingUrl } = body;
  const contactLabel = contactMethod ?? "Mobile";

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-AU");
  const timeStr = now.toLocaleTimeString("en-AU");
  const cleanUrl = listingUrl.replace(/http:\/\/localhost:\d+/, "https://mustgodeals.com.au");

  const failures: string[] = [];

  // 1. SMS (Texto)
  try {
    const rawPhone = process.env.DEALER_PHONE ?? "";
    const dealerE164 = "+61" + rawPhone.replace(/^0/, "");
    const smsMsg = `[MustGoDeals] New enquiry\nCar: ${carName}\nName: ${name}\n${contactLabel}: ${mobile}\nMessage: ${message}`;
    const smsRes = await fetch("https://api.texto.com.au/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TEXTO_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: dealerE164, message: smsMsg }),
    });
    if (!smsRes.ok) {
      const smsErr = await smsRes.text();
      console.error("[enquire] SMS failed:", smsErr);
      failures.push("sms");
    } else {
      console.log("[enquire] SMS sent OK");
    }
  } catch (e) {
    console.error("[enquire] SMS error:", e);
    failures.push("sms");
  }

  // 2. Email (nodemailer)
  try {
    const toAddresses = [
      process.env.GMAIL_USER ?? "hello.mustgodeals@gmail.com",
      process.env.DEALER_EMAIL ?? "jbang@alto.com.au",
    ].filter(Boolean).join(", ");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: (process.env.GMAIL_APP_PASSWORD ?? "").replace(/\s/g, ""),
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: toAddresses,
      subject: `[MustGoDeals] New Enquiry — ${carName}`,
      text: [
        "New enquiry received via MustGoDeals",
        "",
        `Car:     ${carName}`,
        `Name:    ${name}`,
        `${contactLabel}: ${mobile}`,
        `Message: ${message}`,
        `Listing: ${cleanUrl}`,
        "",
        `Received: ${dateStr} ${timeStr}`,
      ].join("\n"),
    });
    console.log("[enquire] Email sent OK to:", toAddresses);
  } catch (e) {
    console.error("[enquire] Email error:", e);
    failures.push("email");
  }

  // 3. Google Sheets
  try {
    const raw = process.env.GOOGLE_SHEETS_ID ?? "";
    const spreadsheetId = raw.includes("/d/")
      ? raw.split("/d/")[1].split("/")[0]
      : raw;

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G",
      valueInputOption: "RAW",
      requestBody: {
        values: [[dateStr, timeStr, carName, name, `${mobile} (${contactLabel})`, message, cleanUrl]],
      },
    });
    console.log("[enquire] Sheets logged OK");
  } catch (e) {
    console.error("[enquire] Sheets error:", e);
    failures.push("sheets");
  }

  // Email is the critical channel — return 500 if it failed
  if (failures.includes("email")) {
    return NextResponse.json(
      { ok: false, failures, error: "Failed to send email" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, warnings: failures });
}
