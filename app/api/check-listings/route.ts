import { NextResponse } from "next/server";
import { LISTINGS } from "../../data/listings";

type AlertDetail = {
  slug: string;
  name: string;
  reason: string;
};

async function sendTelegram(message: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "HTML" }),
  });
}

export async function GET(req: Request) {
  // Verify cron secret
  const auth = req.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;
  if (!process.env.CRON_SECRET || auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const available = LISTINGS.filter((l) => l.status === "available" && l.sourceUrl);
  const alerts: AlertDetail[] = [];

  for (const listing of available) {
    const url = listing.sourceUrl!;
    let reason: string | null = null;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { "User-Agent": "MustGoDeals-Checker/1.0" },
        signal: AbortSignal.timeout(10_000),
      });

      if (res.status === 404) {
        reason = "HTTP 404 — page not found";
      } else if (res.ok) {
        const html = await res.text();
        const lower = html.toLowerCase();

        if (
          lower.includes("sold") ||
          lower.includes("unavailable") ||
          lower.includes("no longer available")
        ) {
          reason = "Page contains sold/unavailable text";
        } else {
          // Check if listing price appears on the page
          const priceStr = listing.price.toLocaleString("en-AU");
          const priceNaked = String(listing.price);
          if (!lower.includes(priceStr.toLowerCase()) && !lower.includes(priceNaked)) {
            reason = `Listed price $${priceStr} not found on page`;
          }
        }
      }
    } catch (err) {
      reason = `Fetch error: ${err instanceof Error ? err.message : String(err)}`;
    }

    if (reason) {
      alerts.push({ slug: listing.slug, name: listing.name, reason });

      const message =
        `[MustGoDeals] 매물 확인 필요\n` +
        `차량: ${listing.name}\n` +
        `이유: ${reason}\n` +
        `딜러 링크: ${url}\n` +
        `관리: mustgodeals.com.au/listings/${listing.slug}`;

      await sendTelegram(message);
    }
  }

  return NextResponse.json({
    checked: available.length,
    alerts: alerts.length,
    details: alerts,
  });
}
