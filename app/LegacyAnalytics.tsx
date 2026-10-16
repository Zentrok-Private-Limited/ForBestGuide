
'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const pagePath = pathname + (query ? `?${query}` : '');

    void fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trackingId: 'UA-177513-1',
        pagePath,
      }),
      keepalive: true,
    }).catch((error) => {
      console.error('Pageview tracking failed:', error);
    });
  }, [pathname, searchParams]);

  return null;
}

export default function LegacyAnalytics() {
  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}
