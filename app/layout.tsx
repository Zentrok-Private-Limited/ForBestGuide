import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import CustomScript from './CustomScript';
import LegacyAnalytics from './LegacyAnalytics';

export const metadata: Metadata = {
  title: "For Best Guide | Clear advice for everyday decisions",
  description:
    "Practical guides for repairs, appliances, technology, safety, and smarter everyday decisions.",
  generator: "v0.app",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f7f3",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LegacyAnalytics />
        <CustomScript />
        <div id="page-content" className="page-hidden">
        <Header/>
        {children}
        <Footer/>
        {process.env.NODE_ENV === "production" && <Analytics />}
        </div>
      </body>
    </html>
  );
}
