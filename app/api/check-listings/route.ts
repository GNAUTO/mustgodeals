import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { LISTINGS } from "../../data/listings";

type AlertDetail = {
  slug: string;
  name: string;
  reason: string;
  sourceUrl: string;
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");

  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const available = LISTINGS.filter((l) => l.status === "available" && l.sourceUrl);
  const alerts: AlertDetail[] = [];

  for (const listing of available) {
    const sourceUrl = listing.sourceUrl!;
    let reason: string | null = null;

    try {
      const res = await fetch(sourceUrl, {
        method: "GET",
        headers: { "User-Agent": "MustGoDeals-Checker/1.0" },
        signal: AbortSignal.timeout(10_000),
      });

      const SOLD_PHRASES = [
        // Generic phrases
        "this vehicle has been sold",
        "this car has been sold",
        "vehicle sold",
        "no longer available",
        // alto.com.au and similar: JSON/data attributes
        '"status":"sold"',
        '"sold":true',
        'data-status="sold"',
        // rydekia.com.au: title prefix pattern
        "<title>sold ",
      ];

      if (res.status === 404) {
        reason = "HTTP 404 page not found";
      } else if (res.url !== sourceUrl) {
        // Page redirected to a different URL — vehicle likely removed or sold
        reason = `Redirected to ${res.url}`;
      } else if (res.ok) {
        const lower = (await res.text()).toLowerCase();
        const matched = SOLD_PHRASES.find((p) => lower.includes(p.toLowerCase()));
        if (matched) reason = `Page indicates sold: "${matched}"`;
      }
    } catch (err) {
      reason = `Fetch error: ${err instanceof Error ? err.message : String(err)}`;
    }

    if (reason) {
      alerts.push({ slug: listing.slug, name: listing.name, reason, sourceUrl: sourceUrl });
    }
  }

  if (alerts.length > 0) {
    const dateStr = new Date().toLocaleDateString("en-AU");

    const itemLines = alerts
      .map(
        (a) =>
          `차량: ${a.name}\n이유: ${a.reason}\n딜러 원본: ${a.sourceUrl}\nMustGoDeals: https://mustgodeals.com.au/listings/${a.slug}`
      )
      .join("\n\n");

    const body = [
      "아래 매물을 확인해주세요.",
      "",
      itemLines,
      "",
      "확인 후 listings.ts에서 status를 'sold'로 변경해주세요.",
    ].join("\n");

    try {
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
        to: process.env.GMAIL_USER,
        subject: `[MustGoDeals] 매물 확인 필요 - ${dateStr}`,
        text: body,
      });
    } catch (err) {
      console.error("[check-listings] Email error:", err);
      return NextResponse.json(
        { checked: available.length, alerts: alerts.length, details: alerts, error: "Email failed" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({
    checked: available.length,
    alerts: alerts.length,
    details: alerts,
  });
}
