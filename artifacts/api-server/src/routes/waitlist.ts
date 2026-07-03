import { Router } from "express";
import { logger } from "../lib/logger";

const waitlistRouter = Router();

waitlistRouter.post("/waitlist", async (req, res) => {
  const email = req.body?.email?.trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "A valid email is required" });
    return;
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    logger.error("BREVO_API_KEY is not set");
    res.status(500).json({ error: "Server misconfiguration" });
    return;
  }

  try {
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        attributes: { SOURCE: "waitlist" },
      }),
    });

    // 201 = created, 204 = already exists (updateEnabled handles update)
    if (brevoRes.status === 201 || brevoRes.status === 204) {
      res.status(200).json({ success: true });
      return;
    }

    const data = await brevoRes.json().catch(() => ({}));
    res
      .status(brevoRes.status)
      .json({ error: (data as any)?.message || "Failed to subscribe" });
  } catch (err) {
    logger.error({ err }, "Brevo API request failed");
    res.status(502).json({ error: "Could not reach email service" });
  }
});

export default waitlistRouter;
