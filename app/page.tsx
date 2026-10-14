"use client"
import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle2, 
  FileText, 
  Package, 
  IndianRupee, 
  Laptop, 
  Tv, 
  Clock, 
  Scale, 
  Shield,
  Zap, 
  Refrigerator, 
  Home, 
  Gamepad2
} from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categoryGuides = [
  {
    category: "COMPUTERS & LAPTOPS",
    title: "How to Choose a Local PC & Laptop Technician",
    description: "Review hardware intake, data protection, diagnosis details and replacement claims before leaving your device with a local technician.",
    bullets: [
      "Record RAM, storage and device condition before handover.",
      "Ask what was tested before approving major replacement."
    ],
    linkText: "Read PC & Laptop Guide",
    href: "/repair-guides/pc-laptop",
    overlayText: "Protect your device & personal data",
    imgUrl: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "WASHING MACHINE",
    title: "How to Find a Washing Machine Repairman",
    description: "Check whether the issue can be inspected at home and understand the diagnosis before agreeing to motor, pump, PCB or other replacement work.",
    bullets: [
      "Ask for doorstep inspection before workshop removal.",
      "Confirm replacement parts and written service terms."
    ],
    linkText: "Read Washing Machine Guide",
    href: "/repair-guides/washing-machine",
    overlayText: "Start with an on-site diagnosis",
    imgUrl: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "REFRIGERATOR",
    title: "When You Need a Refrigerator Repair Mechanic",
    description: "Learn which checks to ask for before accepting compressor, relay, cooling-system or refrigerant-related repair recommendations.",
    bullets: [
      "Ask how the cooling issue was verified.",
      "Get gas work and warranty terms in writing."
    ],
    linkText: "Read Refrigerator Guide",
    href: "/repair-guides/refrigerator",
    overlayText: "Verify cooling and gas-related claims",
    imgUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "SMART TV & DISPLAY",
    title: "What to Check Before Hiring a TV Mechanic",
    description: "Understand basic display and backlight checks before agreeing to expensive panel or internal board replacement.",
    bullets: [
      "Confirm whether the fault is panel, backlight or board-related.",
      "Ask for parts and labor to be listed separately."
    ],
    linkText: "Read Smart TV Guide",
    href: "/repair-guides/smart-tv",
    overlayText: "Check display claims before replacement",
    imgUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "SMART HOME & WIFI",
    title: "Hiring Local Smart Home & WiFi Service Providers",
    description: "Review account ownership, access permissions and final handover details before allowing someone to configure connected home devices.",
    bullets: [
      "Keep admin accounts registered to your own email.",
      "Change access details after service completion."
    ],
    linkText: "Read Smart Home Guide",
    href: "/repair-guides/smart-home",
    overlayText: "Keep account and network access under your control",
    imgUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "GAMING & AUDIO",
    title: "Finding Gaming Console & Audio Repair Specialists",
    description: "Check specialist experience, diagnosis methods, replacement parts and testing procedures before handing over gaming or audio equipment.",
    bullets: [
      "Ask what testing will be done before repair approval.",
      "Confirm final functionality testing before collection."
    ],
    linkText: "Read Gaming & Audio Guide",
    href: "/repair-guides/gaming-audio",
    overlayText: "Confirm specialist testing before handover",
    imgUrl: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1200&q=80"
  }
];

  const categories = [
    { name: "PC & Laptop", id: "01", targetId: "guide-pc-laptop" },
    { name: "Washing Machine", id: "02", targetId: "guide-washing-machine" },
    { name: "Refrigerator", id: "03", targetId: "guide-refrigerator" },
    { name: "Smart TV", id: "04", targetId: "guide-smart-tv" },
    { name: "Smart Home", id: "05", targetId: "guide-smart-home" },
    { name: "Gaming & Audio", id: "06", targetId: "guide-gaming-audio" }
  ];

  return (
      <main className="bg-[#f7f7f3] text-[#173b36]">
        
        {/* ==========================================
            HERO SECTION (Updated from Screenshot 1)
        ========================================== */}
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


        {/* ==========================================
            CONSUMER CHECKLIST SECTION (Screenshot 2)
        ========================================== */}
        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              {/* Left Column */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa231]">
                  ■ CONSUMER CHECKLIST
                </p>
                <h2 className="mt-3 font-serif text-4xl text-[#173b36] md:text-5xl">
                  A Few Checks <br />
                  <span className="text-slate-400">Before You Say Yes</span>
                </h2>
                <p className="mt-6 text-sm text-slate-600 max-w-md leading-relaxed">
                  Before approving repair work, review these basic points to better understand the diagnosis, quote and service terms.
                </p>

                {/* Left Image Box */}
                <div className="relative mt-8 overflow-hidden rounded-2xl bg-slate-100">
                  <img src="/checks.jpg" alt="Technician talking to customer" className="h-64 w-full object-cover" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    PRE-SERVICE CONSUMER CHECKLIST
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs text-white">
                    100% Free Advice
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/repair-guides"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#173b36] hover:bg-slate-50"
                  >
                    Browse Complete Guides <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right Column Steps */}
              <div className="divide-y divide-slate-200">
                {/* Step 01 */}
                <div className="py-6 first:pt-0">
                  <span className="text-xs text-slate-400 font-mono">Step 01</span>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">01</span>
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-[#173b36]">
                          Ask What Was Actually Checked
                        </h3>
                        <p className="mt-1 text-xs text-slate-500">
                          Get a clear explanation of the diagnosis before approving work.
                        </p>
                      </div>
                    </div>
                    <FileText className="text-slate-400 shrink-0" size={18} />
                  </div>
                </div>

                {/* Step 02 */}
                <div className="py-6">
                  <span className="text-xs text-slate-400 font-mono">Step 02</span>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">02</span>
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-[#173b36]">
                          Understand the Parts Being Replaced
                        </h3>
                        <p className="mt-1 text-xs text-slate-500">
                          Confirm which part is faulty and why replacement is required.
                        </p>
                      </div>
                    </div>
                    <Package className="text-slate-400 shrink-0" size={18} />
                  </div>
                </div>

                {/* Step 03 */}
                <div className="py-6">
                  <span className="text-xs text-slate-400 font-mono">Step 03</span>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">03</span>
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-[#173b36]">
                          Confirm the Total Price
                        </h3>
                        <p className="mt-1 text-xs text-slate-500">
                          Review Inspection, labor and replacement-part charges separately.
                        </p>
                      </div>
                    </div>
                    <IndianRupee className="text-slate-400 shrink-0" size={18} />
                  </div>
                </div>

                {/* Step 04 */}
                <div className="py-6">
                  <span className="text-xs text-slate-400 font-mono">Step 04</span>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">04</span>
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-[#173b36]">
                          Keep Written Service Details
                        </h3>
                        <p className="mt-1 text-xs text-slate-500">
                          Ask for a receipt and clearly stated service or part warranty.
                        </p>
                      </div>
                    </div>
                    <FileText className="text-slate-400 shrink-0" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            EXPLORE CONSUMER GUIDES (Screenshots 3-6)
        ========================================== */}
        <section id="choose" className="bg-[#f7f7f3] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa231]">
            — EXPLORE CONSUMER GUIDES
          </p>
          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl text-[#173b36] md:text-5xl max-w-xl">
              Choose What You're <br />
              <span className="text-slate-400">Planning to Get Repaired</span>
            </h2>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Select a category to see what to check before hiring a local repairman, what questions to ask, and what details to confirm before approving work.
            </p>
          </div>
        </div>

        {/* Category Navigation Bar / Tabs */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-6 border-y border-slate-200 bg-white">
          {categories.map((tab) => (
            <a
              key={tab.name}
              href={`#${tab.targetId}`}
              className="flex items-center justify-between p-4 text-xs font-medium text-slate-600 border-r border-slate-200 transition-colors hover:bg-slate-50 hover:text-[#173b36]"
            >
              <span>{tab.name}</span>
              <span className="text-[10px] text-slate-400 font-mono">{tab.id}</span>
            </a>
          ))}
        </div>

        {/* All Guide Cards List */}
        <div className="mt-12 space-y-12">
          
          {/* Guide 01: PC & Laptop */}
          <div
            id="guide-pc-laptop"
            className="grid gap-8 rounded-3xl bg-white p-8 border border-slate-200 lg:grid-cols-2 lg:items-center scroll-mt-8"
          >
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
              <img src="/laptoppc.webp" alt="Computers and Laptops repair" className="h-80 w-full object-cover" />
              <div className="absolute bottom-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-white backdrop-blur-sm flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#d7f27c]" />
                Protect your device & personal data
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231] flex items-center gap-1.5">
                <Laptop size={14} /> COMPUTERS & LAPTOPS
              </p>
              <h3 className="mt-2 font-serif text-3xl text-[#173b36]">
                How to Choose a Local PC & Laptop Technician
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Review hardware intake, data protection, diagnosis details and replacement claims before leaving your device with a local technician.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Record RAM, storage and device condition before handover.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Ask what was tested before approving major replacement.</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <Link
                  href="/repair-guides/pc-laptop"
                  className="text-xs font-bold text-[#173b36] hover:underline"
                >
                  Read PC & Laptop Guide
                </Link>
                <div className="flex size-8 items-center justify-center rounded-full border border-slate-200">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Guide 02: Washing Machine */}
          <div
            id="guide-washing-machine"
            className="grid gap-8 rounded-3xl bg-white p-8 border border-slate-200 lg:grid-cols-2 lg:items-center scroll-mt-8"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231] flex items-center gap-1.5">
                <Zap size={14} /> WASHING MACHINE
              </p>
              <h3 className="mt-2 font-serif text-3xl text-[#173b36]">
                How to Find a Washing Machine Repairman
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Check whether the issue can be inspected at home and understand the diagnosis before agreeing to motor, pump, PCB or other replacement work.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Ask for doorstep inspection before workshop removal.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Confirm replacement parts and written service terms.</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <Link
                  href="/repair-guides/washing-machine"
                  className="text-xs font-bold text-[#173b36] hover:underline"
                >
                  Read Washing Machine Guide
                </Link>
                <div className="flex size-8 items-center justify-center rounded-full border border-slate-200">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-slate-100 lg:order-last">
              <img src="/WM.jpg" alt="Washing machine repair diagnosis" className="h-80 w-full object-cover" />
              <div className="absolute bottom-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-white backdrop-blur-sm flex items-center gap-1.5">
                <Home size={14} className="text-[#d7f27c]" />
                Start with an on-site diagnosis
              </div>
            </div>
          </div>

          {/* Guide 03: Refrigerator */}
          <div
            id="guide-refrigerator"
            className="grid gap-8 rounded-3xl bg-white p-8 border border-slate-200 lg:grid-cols-2 lg:items-center scroll-mt-8"
          >
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
              <img src="/fridge.jpg" alt="Refrigerator repair service" className="h-80 w-full object-cover" />
              <div className="absolute bottom-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-white backdrop-blur-sm flex items-center gap-1.5">
                <Zap size={14} className="text-[#d7f27c]" />
                Verify cooling and gas-related claims
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231] flex items-center gap-1.5">
                <Refrigerator size={14} /> REFRIGERATOR
              </p>
              <h3 className="mt-2 font-serif text-3xl text-[#173b36]">
                When You Need a Refrigerator Repair Mechanic
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Learn which checks to ask for before accepting compressor, relay, cooling-system or refrigerant-related repair recommendations.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Ask how the cooling issue was verified.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Get gas work and warranty terms in writing.</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <Link
                  href="/repair-guides/refrigerator"
                  className="text-xs font-bold text-[#173b36] hover:underline"
                >
                  Read Refrigerator Guide
                </Link>
                <div className="flex size-8 items-center justify-center rounded-full border border-slate-200">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Guide 04: Smart TV & Display */}
          <div
            id="guide-smart-tv"
            className="grid gap-8 rounded-3xl bg-white p-8 border border-slate-200 lg:grid-cols-2 lg:items-center scroll-mt-8"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231] flex items-center gap-1.5">
                <Tv size={14} /> SMART TV & DISPLAY
              </p>
              <h3 className="mt-2 font-serif text-3xl text-[#173b36]">
                What to Check Before Hiring a TV Mechanic
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Understand basic display and backlight checks before agreeing to expensive panel or internal board replacement.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Confirm whether the fault is panel, backlight or board-related.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Ask for parts and labor to be listed separately.</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <Link
                  href="/repair-guides/smart-tv"
                  className="text-xs font-bold text-[#173b36] hover:underline"
                >
                  Read Smart TV Guide
                </Link>
                <div className="flex size-8 items-center justify-center rounded-full border border-slate-200">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-slate-100 lg:order-last">
              <img src="/tv.jpg" alt="TV repair backlight check" className="h-80 w-full object-cover" />
              <div className="absolute bottom-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-white backdrop-blur-sm flex items-center gap-1.5">
                <Tv size={14} className="text-[#d7f27c]" />
                Check display claims before replacement
              </div>
            </div>
          </div>

          {/* Guide 05: Smart Home & WiFi */}
          <div
            id="guide-smart-home"
            className="grid gap-8 rounded-3xl bg-white p-8 border border-slate-200 lg:grid-cols-2 lg:items-center scroll-mt-8"
          >
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
              <img src="/wifi.jpg" alt="Smart Home configuration service" className="h-80 w-full object-cover" />
              <div className="absolute bottom-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-white backdrop-blur-sm flex items-center gap-1.5">
                <Home size={14} className="text-[#d7f27c]" />
                Keep account and network access under your control
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231] flex items-center gap-1.5">
                <Home size={14} /> SMART HOME & WIFI
              </p>
              <h3 className="mt-2 font-serif text-3xl text-[#173b36]">
                Hiring Local Smart Home & WiFi Service Providers
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Review account ownership, access permissions and final handover details before allowing someone to configure connected home devices.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Keep admin accounts registered to your own email.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Change access details after service completion.</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <Link
                  href="/repair-guides/smart-home"
                  className="text-xs font-bold text-[#173b36] hover:underline"
                >
                  Read Smart Home Guide
                </Link>
                <div className="flex size-8 items-center justify-center rounded-full border border-slate-200">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Guide 06: Gaming & Audio */}
          <div
            id="guide-gaming-audio"
            className="grid gap-8 rounded-3xl bg-white p-8 border border-slate-200 lg:grid-cols-2 lg:items-center scroll-mt-8"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231] flex items-center gap-1.5">
                <Gamepad2 size={14} /> GAMING & AUDIO
              </p>
              <h3 className="mt-2 font-serif text-3xl text-[#173b36]">
                Finding Gaming Console & Audio Repair Specialists
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Check specialist experience, diagnosis methods, replacement parts and testing procedures before handing over gaming or audio equipment.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Ask what testing will be done before repair approval.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="text-[#8aa231] shrink-0 mt-0.5" size={16} />
                  <span>Confirm final functionality testing before collection.</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <Link
                  href="/repair-guides/gaming-audio"
                  className="text-xs font-bold text-[#173b36] hover:underline"
                >
                  Read Gaming & Audio Guide
                </Link>
                <div className="flex size-8 items-center justify-center rounded-full border border-slate-200">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-slate-100 lg:order-last">
              <img src="/game.jpg" alt="Gaming console repair specialist testing" className="h-80 w-full object-cover" />
              <div className="absolute bottom-4 left-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-white backdrop-blur-sm flex items-center gap-1.5">
                <Gamepad2 size={14} className="text-[#d7f27c]" />
                Confirm specialist testing before handover
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Dark Banner */}
        <div className="mt-12 flex flex-col justify-between gap-4 rounded-2xl bg-[#0f2924] p-8 text-white md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#d7f27c] shrink-0" size={24} />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#d7f27c]">
                INDEPENDENT CONSUMER GUIDE
              </p>
              <p className="mt-1 text-xs text-slate-300 max-w-xl leading-relaxed">
                Our guides are designed to help consumers understand what to check, what to ask, and what to document before agreeing to local repair work.
              </p>
            </div>
          </div>
          <Link
            href="/hiring-checklist"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white underline underline-offset-4 hover:text-[#d7f27c] shrink-0"
          >
            View Hiring Checklist <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>


        {/* ==========================================
            REPAIR OR REPLACE? SECTION (Screenshots 7-8)
        ========================================== */}
        <section id="repair-vs-buy" className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa231]">
                — REPAIR OR REPLACE?
              </p>
              <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <h2 className="font-serif text-4xl text-[#173b36] md:text-5xl max-w-xl">
                  Make the Decision <br />
                  <span className="text-slate-400">Before You Spend More</span>
                </h2>
                <p className="text-xs text-slate-600 max-w-sm">
                  Compare the repair quote, the age of the product, and the value you may get from continued use before approving a major repair.
                </p>
              </div>
            </div>

            {/* 4 Block Metric Breakdown */}
            <div className="mt-12 grid border border-[#0f2924] bg-[#0f2924] text-white md:grid-cols-4">
              <div className="p-8 border-b border-white/10 md:border-b-0 md:border-r">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#d7f27c] flex items-center gap-1">
                  <Scale size={12} /> QUICK STARTING POINT
                </p>
                <span className="mt-4 block font-serif text-6xl text-[#d7f27c]">50%</span>
                <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                  If a repair quote is close to half the cost of buying a comparable replacement, it may be worth comparing both options carefully.
                </p>
              </div>

              <div className="p-8 border-b border-white/10 md:border-b-0 md:border-r">
                <span className="text-xs font-mono text-slate-400">01</span>
                <h3 className="mt-4 font-serif text-lg font-semibold">Compare the Quote</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Include labor, parts, inspection and other charges in the total repair cost.
                </p>
              </div>

              <div className="p-8 border-b border-white/10 md:border-b-0 md:border-r">
                <span className="text-xs font-mono text-slate-400">02</span>
                <h3 className="mt-4 font-serif text-lg font-semibold">Consider the Age</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Older equipment may be more likely to need additional maintenance later.
                </p>
              </div>

              <div className="p-8">
                <span className="text-xs font-mono text-slate-400">03</span>
                <h3 className="mt-4 font-serif text-lg font-semibold">Look at Future Value</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Compare expected usage, efficiency, warranty and replacement cost.
                </p>
              </div>
            </div>

            {/* 3 Column Detailed Checks */}
            <div className="mt-8 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3">
              {/* Cost Check */}
              <div className="p-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#8aa231]">COST CHECK</span>
                  <span className="text-xs font-bold text-slate-400">%</span>
                </div>
                <h3 className="mt-4 font-serif text-xl text-[#173b36]">
                  Compare Repair Cost With Replacement Cost
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  Use the full quoted amount rather than looking only at the price of one part.
                </p>
                <div className="mt-6 space-y-3 text-xs border-t border-slate-100 pt-4">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-600">Lower repair quote</span>
                    <span className="font-semibold text-[#8aa231]">Consider Repair</span>
                  </div>
                  <div className="flex justify-between py-1 border-t border-slate-100">
                    <span className="text-slate-600">High repair quote</span>
                    <span className="font-semibold text-[#173b36]">Compare Replacement</span>
                  </div>
                </div>
              </div>

              {/* Age Check */}
              <div className="p-2 border-t border-slate-200 md:border-t-0 md:border-l md:pl-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#8aa231]">AGE CHECK</span>
                  <Clock size={14} className="text-slate-400" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-[#173b36]">
                  Check How Long You've Been Using It
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  Age alone does not decide the answer, but it helps put a large repair bill into perspective.
                </p>
                <div className="mt-6 space-y-2 text-xs border-t border-slate-100 pt-4">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-600">Computers</span>
                    <span className="font-mono text-slate-700">4-6 yrs</span>
                  </div>
                  <div className="flex justify-between py-1 border-t border-slate-100">
                    <span className="text-slate-600">Washing Machines</span>
                    <span className="font-mono text-slate-700">8-10 yrs</span>
                  </div>
                  <div className="flex justify-between py-1 border-t border-slate-100">
                    <span className="text-slate-600">Refrigerators</span>
                    <span className="font-mono text-slate-700">10-12 yrs</span>
                  </div>
                  <div className="flex justify-between py-1 border-t border-slate-100">
                    <span className="text-slate-600">Smart TVs</span>
                    <span className="font-mono text-slate-700">6-8 yrs</span>
                  </div>
                </div>
              </div>

              {/* Value Check */}
              <div className="p-2 border-t border-slate-200 md:border-t-0 md:border-l md:pl-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#8aa231]">VALUE CHECK</span>
                  <Shield size={14} className="text-slate-400" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-[#173b36]">
                  Compare What You Get After the Repair
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  Think beyond today's repair and compare warranty, expected use and ongoing running cost.
                </p>
                <div className="mt-6 space-y-3 text-xs border-t border-slate-100 pt-4">
                  <div>
                    <span className="font-semibold text-[#173b36]">Warranty</span>
                    <p className="text-[11px] text-slate-500">Compare repair warranty with the coverage offered on a replacement.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#173b36]">Condition</span>
                    <p className="text-[11px] text-slate-500">Consider whether other parts are already showing signs of wear.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-12 flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-[#f7f7f3] p-6 md:flex-row md:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231]">
                  SIMPLE DECISION CHECK
                </p>
                <h4 className="mt-1 font-serif text-xl font-bold text-[#173b36]">
                  Don't approve a major repair from one number alone.
                </h4>
                <p className="text-xs text-slate-500">
                  Compare the full quote, product age and expected future use together before deciding.
                </p>
              </div>
              <Link
                href="/device-guide"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-[11px] font-semibold text-[#173b36] hover:bg-slate-50"
              >
                Check Your Device Guide <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>


        {/* ==========================================
            QUOTE VERIFICATION SECTION (Screenshots 9-10)
        ========================================== */}
        <section id="quote-verification" className="bg-[#f7f7f3] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa231]">
                — BEFORE YOU APPROVE THE QUOTE
              </p>
              <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <h2 className="font-serif text-4xl text-[#173b36] md:text-5xl max-w-xl">
                  Know What You're Paying For <br />
                  <span className="text-slate-400">Before Repair Work Begins</span>
                </h2>
                <p className="text-xs text-slate-600 max-w-sm">
                  Ask for a clear breakdown of the diagnosis, parts and labor so you can understand the quote before agreeing to the work.
                </p>
              </div>
            </div>

            {/* Banner Callout */}
            <div className="mt-8 flex flex-col justify-between gap-4 rounded-xl bg-[#0f2924] p-6 text-white md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <FileText className="text-[#d7f27c]" size={20} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#d7f27c]">
                    SIMPLE CONSUMER RULE
                  </p>
                  <p className="text-xs font-medium">
                    Ask for the quote to show the <span className="text-[#d7f27c] font-bold">part cost, inspection or visiting fee, and labor charge</span> separately.
                  </p>
                </div>
              </div>
              <button className="text-xs text-slate-300 underline underline-offset-4 hover:text-white shrink-0">
                Get the estimate in writing
              </button>
            </div>

            {/* Main Quote Checklist Layout */}
            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231]">
                  QUOTE CHECKLIST
                </p>
                <h3 className="mt-2 font-serif text-3xl text-[#173b36]">
                  Four things to confirm before saying yes.
                </h3>
                <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                  These checks help you understand what is being proposed and what the final amount is expected to include.
                </p>

                <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 text-xs font-semibold text-slate-600">
                  <div className="flex justify-between">
                    <span>Diagnosis</span>
                    <span className="font-mono text-slate-400">01</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-4">
                    <span>Replacement Parts</span>
                    <span className="font-mono text-slate-400">02</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-4">
                    <span>Fees & Labor</span>
                    <span className="font-mono text-slate-400">03</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-4">
                    <span>Receipt & Warranty</span>
                    <span className="font-mono text-slate-400">04</span>
                  </div>
                </div>
              </div>

              {/* 4 Steps Details */}
              <div className="divide-y divide-slate-200 rounded-3xl bg-white p-8 border border-slate-200">
                {/* 01 */}
                <div className="pb-8">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span className="text-[#8aa231] font-bold">01</span>
                    <span className="uppercase tracking-wider">DIAGNOSIS</span>
                  </div>
                  <h4 className="mt-2 font-serif text-xl font-semibold text-[#173b36]">
                    Ask What Was Checked
                  </h4>
                  <p className="mt-2 text-xs text-slate-500">
                    Ask the repairman to explain what was inspected, what problem was found, and why the proposed work is needed.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-700">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#8aa231]" /> Clear problem explanation</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#8aa231]" /> Proposed work explained</span>
                  </div>
                </div>

                {/* 02 */}
                <div className="py-8">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span className="text-[#8aa231] font-bold">02</span>
                    <span className="uppercase tracking-wider">REPLACEMENT PARTS</span>
                  </div>
                  <h4 className="mt-2 font-serif text-xl font-semibold text-[#173b36]">
                    Confirm Which Part Is Being Replaced
                  </h4>
                  <p className="mt-2 text-xs text-slate-500">
                    Ask for the part name, compatible part number where available, its price, and whether the old part can be shown after replacement.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-700">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#8aa231]" /> Part name & price</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#8aa231]" /> Replacement reason</span>
                  </div>
                </div>

                {/* 03 */}
                <div className="py-8">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span className="text-[#8aa231] font-bold">03</span>
                    <span className="uppercase tracking-wider">FEES & LABOR</span>
                  </div>
                  <h4 className="mt-2 font-serif text-xl font-semibold text-[#173b36]">
                    Confirm Charges Before Work Starts
                  </h4>
                  <p className="mt-2 text-xs text-slate-500">
                    Check the visiting or inspection fee, labor charge and any other agreed costs before dismantling or replacement work begins.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-700">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#8aa231]" /> Visiting fee</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#8aa231]" /> Labor charge</span>
                  </div>
                </div>

                {/* 04 */}
                <div className="pt-8">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span className="text-[#8aa231] font-bold">04</span>
                    <span className="uppercase tracking-wider">RECEIPT & WARRANTY</span>
                  </div>
                  <h4 className="mt-2 font-serif text-xl font-semibold text-[#173b36]">
                    Keep the Final Details in Writing
                  </h4>
                  <p className="mt-2 text-xs text-slate-500">
                    Keep the invoice or receipt showing the work performed, parts used, amount paid and any warranty terms offered for the service.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-700">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#8aa231]" /> Itemized receipt</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#8aa231]" /> Written warranty terms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ==========================================
            QUESTIONS TO ASK BY DEVICE (Screenshot 11)
        ========================================== */}
        <section className="bg-white px-5 py-16 lg:px-8 border-t border-slate-200">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8aa231]">
                  QUICK REFERENCE
                </p>
                <h2 className="mt-1 font-serif text-3xl text-[#173b36]">
                  Questions to Ask by Device
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Use these as starting questions when discussing a proposed repair.
              </p>
            </div>

            <div className="mt-8 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Washing Machine */}
              <div className="rounded-2xl border border-slate-200 bg-[#f7f7f3] p-6">
                <div className="flex items-center justify-between text-slate-500">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-white text-[#8aa231]">
                    <Package size={16} />
                  </div>
                  <span className="text-xs font-mono text-slate-400">01</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">
                  Washing Machine
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  What was checked before recommending a motor, pump or control-board replacement?
                </p>
              </div>

              {/* Refrigerator */}
              <div className="rounded-2xl border border-slate-200 bg-[#f7f7f3] p-6">
                <div className="flex items-center justify-between text-slate-500">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-white text-[#8aa231]">
                    <Clock size={16} />
                  </div>
                  <span className="text-xs font-mono text-slate-400">02</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">
                  Refrigerator
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  How was the cooling problem checked before recommending compressor or gas work?
                </p>
              </div>

              {/* PC & Laptop */}
              <div className="rounded-2xl border border-slate-200 bg-[#f7f7f3] p-6">
                <div className="flex items-center justify-between text-slate-500">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-white text-[#8aa231]">
                    <Laptop size={16} />
                  </div>
                  <span className="text-xs font-mono text-slate-400">03</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">
                  PC & Laptop
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Which component was tested before recommending a full motherboard replacement?
                </p>
              </div>

              {/* Smart TV */}
              <div className="rounded-2xl border border-slate-200 bg-[#f7f7f3] p-6">
                <div className="flex items-center justify-between text-slate-500">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-white text-[#8aa231]">
                    <Tv size={16} />
                  </div>
                  <span className="text-xs font-mono text-slate-400">04</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">
                  Smart TV
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Was the backlight and related circuitry checked before suggesting display replacement?
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            CHECK THE WORK FIRST (Screenshots 12-13)
        ========================================== */}
        <section id="safety-tips" className="bg-[#f7f7f3] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa231]">
                — BEFORE FINAL PAYMENT
              </p>
              <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <h2 className="font-serif text-4xl text-[#173b36] md:text-5xl max-w-xl">
                  Check the Work First <span className="text-slate-400">Then</span> <br />
                  <span className="text-slate-400">Complete the Payment</span>
                </h2>
                <p className="text-xs text-slate-600 max-w-sm">
                  Before making the final payment, review the completed work, confirm replaced parts and keep a written record of what was done.
                </p>
              </div>
            </div>

            {/* Dark Top Callout Banner */}
            <div className="mt-12 grid border border-[#0f2924] bg-[#0f2924] text-white lg:grid-cols-[1fr_2fr]">
              <div className="p-8 border-b border-white/10 lg:border-b-0 lg:border-r">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#d7f27c] flex items-center gap-2">
                  <FileText size={14} /> PAYMENT CHECK
                </p>
                <h3 className="mt-3 font-serif text-2xl text-white">
                  Don't rush the final payment.
                </h3>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Take a few minutes to test the repaired item, review the final bill, and confirm any service or part warranty before closing the job.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#d7f27c]">
                  <CheckCircle2 size={14} /> Verify before you pay
                </div>
              </div>
            </div>

            {/* 3 Steps Grid */}
            <div className="grid gap-8 border-t border-slate-200 bg-white p-8 lg:grid-cols-3 border-x border-b rounded-b-3xl">
              {/* Rule 01 */}
              <div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-bold text-[#8aa231] uppercase">RULE 01</span>
                  <FileText size={16} />
                </div>
                <h4 className="mt-4 font-serif text-xl font-semibold text-[#173b36]">
                  Compare a Large Quote Before Agreeing
                </h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  If the final amount is much higher than expected, ask for the reason and compare it with another local repair provider before approving additional work.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="text-[#8aa231] shrink-0" size={14} />
                  <span>Compare the same type of repair and the same replacement part.</span>
                </div>
              </div>

              {/* Rule 02 */}
              <div className="border-t border-slate-200 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-bold text-[#8aa231] uppercase">RULE 02</span>
                  <Package size={16} />
                </div>
                <h4 className="mt-4 font-serif text-xl font-semibold text-[#173b36]">
                  Review the Parts That Were Replaced
                </h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Ask to see the removed part and review the packaging or part details for the replacement where they are available.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="text-[#8aa231] shrink-0" size={14} />
                  <span>Keep the old part when practical and note the replacement on the invoice.</span>
                </div>
              </div>

              {/* Rule 03 */}
              <div className="border-t border-slate-200 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-bold text-[#8aa231] uppercase">RULE 03</span>
                  <Clock size={16} />
                </div>
                <h4 className="mt-4 font-serif text-xl font-semibold text-[#173b36]">
                  Test the Device Before Final Payment
                </h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Run a normal function check while the repair provider is still present so you can confirm that the original issue has been addressed.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="text-[#8aa231] shrink-0" size={14} />
                  <span>Test the same function that originally caused the service request.</span>
                </div>
              </div>
            </div>

            {/* Final Function Check Cards (Screenshot 13) */}
            <div className="mt-16">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8aa231]">
                    FINAL FUNCTION CHECK
                  </p>
                  <h3 className="mt-1 font-serif text-3xl text-[#173b36]">
                    What to Test Before the Technician Leaves
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Use a simple real-world check based on the device that was repaired.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between text-slate-500">
                    <Package size={16} className="text-[#8aa231]" />
                    <span className="text-xs font-mono text-slate-400">01</span>
                  </div>
                  <h4 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">Washing Machine</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Run a short fill, drain and spin check and listen for unusual noise or leakage.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between text-slate-500">
                    <Clock size={16} className="text-[#8aa231]" />
                    <span className="text-xs font-mono text-slate-400">02</span>
                  </div>
                  <h4 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">Refrigerator</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Check that the unit starts normally and ask what cooling behavior to expect after service.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between text-slate-500">
                    <Laptop size={16} className="text-[#8aa231]" />
                    <span className="text-xs font-mono text-slate-400">03</span>
                  </div>
                  <h4 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">PC & Laptop</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Boot the device and test the specific function or hardware that was serviced.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between text-slate-500">
                    <Tv size={16} className="text-[#8aa231]" />
                    <span className="text-xs font-mono text-slate-400">04</span>
                  </div>
                  <h4 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">Smart TV</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Check picture, sound and the repaired input or display function before sign-off.
                  </p>
                </div>
              </div>
            </div>

            {/* Save Invoice Banner */}
            <div className="mt-12 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:flex-row md:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231]">
                  KEEP A RECORD
                </p>
                <h4 className="mt-1 font-serif text-xl font-bold text-[#173b36]">
                  Save the invoice, payment proof and warranty details.
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Written records make it easier to understand what was serviced if the same issue returns later.
                </p>
              </div>
              <Link
                href="/quote-checklist"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-[#f7f7f3] px-4 py-2 text-[11px] font-semibold text-[#173b36] hover:bg-slate-100"
              >
                Review Quote Checklist <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>


        {/* ==========================================
            COMMON QUESTIONS FAQ (Screenshots 14-15)
        ========================================== */}
        <section id="faq" className="bg-white px-5 py-20 lg:px-8 border-t border-slate-200">
          <div className="mx-auto max-w-7xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa231]">
                — COMMON QUESTIONS
              </p>
              <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <h2 className="font-serif text-4xl text-[#173b36] md:text-5xl max-w-xl">
                  Questions People Ask <span className="text-slate-400">Before</span> <br />
                  <span className="text-slate-400">Hiring a Repairman</span>
                </h2>
                <p className="text-xs text-slate-600 max-w-sm">
                  Straightforward answers about quotes, parts, visiting fees, handover, warranties and what to check during local repair work.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr]">
              {/* Left Sticky Box */}
              <div className="rounded-3xl bg-[#0f2924] p-8 text-white h-fit">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#d7f27c]">
                  FAQ GUIDE
                </p>
                <h3 className="mt-3 font-serif text-3xl text-white">
                  Quick answers for common repair decisions.
                </h3>
                <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                  Open any question to see a short consumer-focused explanation.
                </p>
                <div className="mt-12 border-t border-white/15 pt-6 flex items-center gap-2 text-xs text-slate-300">
                  <FileText size={14} className="text-[#d7f27c]" />
                  <span>8 practical questions</span>
                </div>
              </div>

              {/* Right Accordion List */}
              <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white p-8">
                {/* Q1 */}
                <div className="py-6 first:pt-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">01</span>
                      <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                        Is an older appliance always worth repairing?
                      </h4>
                    </div>
                    <span className="text-slate-400 text-xs">✕</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                    Not always. Compare the repair quote with the cost of a suitable replacement, then consider the product's age, condition and how long you plan to keep using it.
                  </p>
                </div>

                {/* Q2 */}
                <div className="py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">02</span>
                      <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                        What should I do if the same problem returns after service?
                      </h4>
                    </div>
                    <span className="text-slate-400 text-xs">✕</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                    Keep the invoice and any written service warranty. Contact the repair provider with the original work details and ask what follow-up coverage applies.
                  </p>
                </div>

                {/* Q3 */}
                <div className="py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">03</span>
                      <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                        What if a part needs to be taken to a workshop?
                      </h4>
                    </div>
                    <span className="text-slate-400 text-xs">✕</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                    Ask why off-site work is needed. Before handover, photograph the part or device, note visible identifiers where available, and get a written acknowledgment of what was taken.
                  </p>
                </div>

                {/* Q4 */}
                <div className="py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">04</span>
                      <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                        How can I check a replacement part?
                      </h4>
                    </div>
                    <span className="text-slate-400 text-xs">✕</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                    Ask for the part name, compatible part number and price. Review packaging or labels when available and keep the old part when practical.
                  </p>
                </div>

                {/* Q5 */}
                <div className="py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">05</span>
                      <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                        Should I pay a visiting or inspection fee?
                      </h4>
                    </div>
                    <span className="text-slate-400 text-xs">✕</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                    A provider may charge a visiting or inspection fee. Ask the amount before the visit and whether it will be adjusted if you proceed with the repair.
                  </p>
                </div>

                {/* Q6 */}
                <div className="py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">06</span>
                      <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                        What if the quoted price changes after inspection?
                      </h4>
                    </div>
                    <span className="text-slate-400 text-xs">✕</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                    Ask what changed and request an updated itemized quote before authorizing additional work. If you are not comfortable with the change, you can compare another estimate before proceeding.
                  </p>
                </div>

                {/* Q7 */}
                <div className="py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">07</span>
                      <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                        How should I evaluate a local repair provider?
                      </h4>
                    </div>
                    <span className="text-slate-400 text-xs">✕</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                    Compare clear business details, recent customer feedback, written estimates, service terms and how clearly the provider explains the proposed work.
                  </p>
                </div>

                {/* Q8 */}
                <div className="py-6 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-[#8aa231] font-mono">08</span>
                      <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                        Should every repair be completed at home?
                      </h4>
                    </div>
                    <span className="text-slate-400 text-xs">✕</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                    No. Some work may require workshop tools or testing. Ask why the item needs to leave your home, what exactly is being taken, and how the handover will be documented.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          </div>
        </section>

      </main>
  );
}