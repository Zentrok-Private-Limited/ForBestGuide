import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.trackingId !== 'UA-177513-1') {
      return NextResponse.json(
        { success: false, error: 'Invalid tracking ID' },
        { status: 400 }
      );
    }

    if (typeof body.pagePath !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Invalid page path' },
        { status: 400 }
      );
    }

    // Replace this with your own analytics storage.
    // Do not log sensitive query parameters or personal data.
    console.info('Pageview recorded', {
      trackingId: body.trackingId,
      pagePath: body.pagePath,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
