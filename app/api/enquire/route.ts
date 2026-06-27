import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(req: Request) {
  const { name, mobile, message, carName, listingUrl } = await req.json();

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-AU");
  const timeStr = now.toLocaleTimeString("en-AU");

  const smsMsg = `[MustGoDeals] New enquiry\nCar: ${carName}\nName: ${name}\nMobile: ${mobile}\nMessage: ${message}`;

  // 1. Texto SMS
  const rawPhone = process.env.DEALER_PHONE ?? "";
  const dealerE164 = "+61" + rawPhone.replace(/^0/, "");
  try {
    const smsRes = await fetch("https://api.texto.com.au/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TEXTO_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: dealerE164, message: smsMsg }),
    });
    const smsData = await smsRes.json();
    console.log("[enquire] SMS response:", JSON.stringify(smsData));
  } catch (e) {
    console.error("[enquire] SMS error:", e);
  }

  // 2. Nodemailer email
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.GMAIL_USER,
        pass: (process.env.GMAIL_APP_PASSWORD ?? "").replace(/\s/g, ""),
      },
    });
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "hello.mustgodeals@gmail.com, yyh1283@gmail.com",
      subject: `[MustGoDeals] New Enquiry — ${carName}`,
      text: `New enquiry received via MustGoDeals\n\nCar: ${carName}\nName: ${name}\nMobile: ${mobile}\nMessage: ${message}\nListing: ${listingUrl}\n\nReceived: ${dateStr} ${timeStr}`,
    });
  } catch (e) {
    console.error("[enquire] Email error:", e);
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
        values: [[dateStr, timeStr, carName, name, mobile, message, listingUrl]],
      },
    });
  } catch (e) {
    console.error("[enquire] Sheets error:", e);
  }

  return NextResponse.json({ ok: true });
}
