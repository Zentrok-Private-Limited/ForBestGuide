import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  UserCheck, 
} from "lucide-react";

export default function Hero(){


    return (
        <section className="relative overflow-hidden bg-[#173b36] px-5 pb-20 pt-16 text-white lg:px-8 lg:pb-28 lg:pt-20">
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-24 -top-20 size-96 rounded-full bg-[#d7f27c]/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7f27c]">
                <span className="h-px w-8 bg-[#d7f27c]" />
                CONSUMER SAFETY PLAYBOOK
              </p>

              <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-[-.03em] text-white md:text-7xl">
                Check Pre-Service Guidelines{" "}
                <span className="font-normal text-[#d7f27c]">Before You Hire</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
                100% Free Unbiased Consumer Checklists
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/repair-guides"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7f27c] px-7 py-3.5 text-center text-sm font-semibold text-[#173b36] transition-colors hover:bg-white"
                >
                  Explore All Guides <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/15 pt-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#d7f27c]" size={22} />
                  <span>100% Unbiased Consumer Guide</span>
                </div>
                <div className="flex items-center gap-3">
                  <UserCheck className="text-[#d7f27c]" size={22} />
                  <span>Zero Sponsored Technician Listings</span>
                </div>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1d4640] p-2">
              <img
                src="/hero.jpg"
                alt="Consumer reviewing guidelines on laptop"
                className="h-[420px] w-full rounded-[2.2rem] object-cover"
              />
            </div>
          </div>
        </section>
    )

}