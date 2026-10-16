"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomScript() {
  const [isLoading, setIsLoading] = useState(true);
  const requestStarted = useRef(false);

  function getCookie(name: string): string | null {
    const prefix = `${name}=`;
    const cookie = document.cookie
      .split("; ")
      .find((item) => item.startsWith(prefix));

    return cookie ? decodeURIComponent(cookie.slice(prefix.length)) : null;
  }

  useEffect(() => {
    if (requestStarted.current) return;
    requestStarted.current = true;

    const loadPageInfo = async () => {
      try {
        const currentUrl = new URL(window.location.href);

        // Native browser timezone detection; no external script required.
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // GET: retrieve the API response and its headers.
        const getResponse = await fetch(currentUrl.href, {
          method: "GET",
          cache: "no-store",
          signal: AbortSignal.timeout(8000),
          credentials: "same-origin",
        });

        if (!getResponse.ok) {
          throw new Error(`GET failed: ${getResponse.status}`);
        }

        const responseHeaders = Object.fromEntries(
          getResponse.headers.entries(),
        );

        // Collect only the page information needed by your API.
        const pageInfo = {
          timezone,
          responseHeaders,
          pathAndQuery: currentUrl.pathname + currentUrl.search,
          query: currentUrl.search.slice(1),
          referrer: document.referrer,
          hostname: currentUrl.hostname,
          eventCookie: getCookie("_event"),
        };

        // POST: send the information to your API.
        const postResponse = await fetch("/api/page-info", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pageInfo),
          signal: AbortSignal.timeout(8000),
        });

        if (!postResponse.ok) {
          throw new Error(`POST failed: ${postResponse.status}`);
        }

        const result = await postResponse.json();

        if (result.success && result.action === "show-message") {
          console.log(result.message);
        }
      } catch (error) {
        console.error("Page info request failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadPageInfo();
  }, []);

  if (!isLoading) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="text-center">
        <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
        <p className="text-xl font-medium text-gray-800">
          Please Wait for Page to Load...
        </p>
      </div>
    </div>
  );
}
