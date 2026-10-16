import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "GET request successful",
    },
    {
      headers: {
        "X-Request-Source": "page-info",
        "Cache-Control": "no-store",
      },
    },
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({
      success: true,
      action: "show-message",
      message: "Page information received successfully",
      received: {
        timezone: body.timezone,
        responseHeaders: body.responseHeaders,
        pathAndQuery: body.pathAndQuery,
        query: body.query,
        referrer: body.referrer,
        hostname: body.hostname,
        eventCookie: body.eventCookie,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}
