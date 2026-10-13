import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f2924] text-white">
      {/* Top Value Banner */}
      <div className="border-b border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-[#d7f27c] shrink-0 mt-1" size={22} />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#d7f27c]">
                INDEPENDENT CONSUMER EDUCATION
              </p>
              <p className="mt-1 text-xs text-slate-300 max-w-xl leading-relaxed">
                Practical guides to help you compare repair options, understand quotes, and know what to check before hiring a local service provider.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">✓ Independent Guides</span>
            <span className="flex items-center gap-1.5">✓ No Sponsored Rankings</span>
            <span className="flex items-center gap-1.5">✓ Consumer-Focused</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links Container */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2">
              {/* If you have a logo icon/svg component, place it here */}
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                FairRepairGuide
              </span>
            </div>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-sm">
              A consumer learning resource for understanding repair quotes, checking service details, and making more informed decisions before local repair work begins.
            </p>
            <div className="mt-6">
              <Link
                href="/about-guides"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#d7f27c] transition-colors"
              >
                About Our Guides <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Column 2: Repair Guides */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#d7f27c]">
              REPAIR GUIDES
            </p>
            <ul className="mt-4 space-y-3 text-xs text-slate-300">
              <li>
                <Link href="/repair-guides/pc-laptop" className="hover:text-white transition-colors">
                  PC & Laptop
                </Link>
              </li>
              <li>
                <Link href="/repair-guides/washing-machine" className="hover:text-white transition-colors">
                  Washing Machine
                </Link>
              </li>
              <li>
                <Link href="/repair-guides/refrigerator" className="hover:text-white transition-colors">
                  Refrigerator
                </Link>
              </li>
              <li>
                <Link href="/repair-guides/smart-tv" className="hover:text-white transition-colors">
                  Smart TV & Display
                </Link>
              </li>
              <li>
                <Link href="/repair-guides/smart-home" className="hover:text-white transition-colors">
                  Smart Home & WiFi
                </Link>
              </li>
              <li>
                <Link href="/repair-guides/gaming-audio" className="hover:text-white transition-colors">
                  Gaming & Audio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learn */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#d7f27c]">
              LEARN
            </p>
            <ul className="mt-4 space-y-3 text-xs text-slate-300">
              <li>
                <Link href="/how-to-choose" className="hover:text-white transition-colors">
                  How to Choose
                </Link>
              </li>
              <li>
                <Link href="/repair-vs-replace" className="hover:text-white transition-colors">
                  Repair or Replace
                </Link>
              </li>
              <li>
                <Link href="/quote-checklist" className="hover:text-white transition-colors">
                  Quote Checklist
                </Link>
              </li>
              <li>
                <Link href="/safety-tips" className="hover:text-white transition-colors">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Before You Pay */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#d7f27c]">
              BEFORE YOU PAY
            </p>
            <ul className="mt-4 space-y-4 text-xs text-slate-300">
              <li className="flex gap-3">
                <span className="font-mono text-[#d7f27c] font-bold">01</span>
                <span>Review the final itemized bill.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[#d7f27c] font-bold">02</span>
                <span>Confirm replaced parts and work performed.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[#d7f27c] font-bold">03</span>
                <span>Test the repaired function before sign-off.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-[11px] text-slate-400 md:flex-row md:items-center">
          <p>© 2026 FairRepairGuide.co — Independent Education Resource.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}