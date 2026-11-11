import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/appointment-schema";
import { practice } from "@/data/site";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestsByIp = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );
  if (recent.length >= MAX_REQUESTS) {
    requestsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  requestsByIp.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "local";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many requests. Please wait a few minutes or call our office.",
      },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = appointmentSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields and try again.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const webhook = process.env.APPOINTMENT_WEBHOOK_URL;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "downtowndental.biz",
          officePhone: practice.phone,
          ...parsed.data,
        }),
      });
      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`);
      }
    } catch (error) {
      console.error("Appointment request could not be delivered", error);
      return NextResponse.json(
        {
          ok: false,
          message: `We could not send your request. Please call us at ${practice.phone}.`,
        },
        { status: 502 },
      );
    }
  } else {
    console.info("New appointment request (no webhook configured)", {
      name: parsed.data.name,
      newPatient: parsed.data.newPatient,
      email: parsed.data.email,
      phone: parsed.data.phone,
      preferredDays: parsed.data.preferredDays,
      convenientTimes: parsed.data.convenientTimes,
    });
  }

  return NextResponse.json({
    ok: true,
    message:
      "Thank you. Your request has been received and a member of our team will contact you to schedule.",
  });
}
