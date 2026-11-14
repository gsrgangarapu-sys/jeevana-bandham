/**
 * Jeevana Bandham Google Chat Webhook Dispatcher
 * Sends real-time notifications for:
 * 1. Daily Telugu blog article publication
 * 2. Sitemap updates & IndexNow search engine pings
 * 3. Daily SEO health and deployment reports
 */

const DEFAULT_WEBHOOK_URL = process.env.GOOGLE_CHAT_WEBHOOK_URL || "https://chat.googleapis.com/v1/spaces/AAQACHJ1rC8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=1UnFa25iYnNkNqy6yjkmpppbUFxUT0Yf4FUmTX8uWi4";

export async function sendGoogleChatNotification({
  title,
  subtitle,
  text,
  url,
  status = "SUCCESS",
  fields = []
}) {
  const statusEmoji = status === "SUCCESS" ? "💛" : status === "WARNING" ? "🟡" : "🔴";

  const messageText = `${statusEmoji} *${title}*\n_${subtitle || "జీవన బంధం (Jeevana Bandham) SEO Bot"}_\n\n${text || ""}\n${url ? `\n🔗 *ఆర్టికల్ లింక్:* ${url}` : ""}`;

  try {
    const res = await fetch(DEFAULT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: messageText })
    });

    if (res.ok) {
      console.log(`[Google Chat] Alert delivered: "${title}"`);
    } else {
      const errText = await res.text();
      console.warn(`[Google Chat] Webhook responded with HTTP ${res.status}: ${errText}`);
    }
  } catch (err) {
    console.warn(`[Google Chat] Webhook dispatch skipped: ${err.message}`);
  }
}
