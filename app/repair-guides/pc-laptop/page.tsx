"use client";

import React from "react";
import {
  FaHouse,
  FaClock,
  FaLaptop,
  FaArrowRight,
  FaCircleCheck,
  FaLock
} from "react-icons/fa6";

export default function PcLaptopRepairGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* ================= BREADCRUMB ================= */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
        <a href="/" className="hover:text-emerald-600 transition flex items-center gap-1">
          <FaHouse size={12} /> HOME
        </a>
        <span>/</span>
        <a href="/guides" className="hover:text-emerald-600 transition">
          GUIDES
        </a>
        <span>/</span>
        <span className="text-slate-900 font-semibold uppercase">PC & LAPTOP REPAIR</span>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Info */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md uppercase tracking-wider inline-block">
              CONSUMER DECISION GUIDE #01
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              How to Find a Reliable Local PC & Laptop Repair Technician
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Everything you need to evaluate before leaving your laptop or desktop with a local computer shop: data security protocols, chip-level troubleshooting, realistic diagnostic fees, and fair price benchmarks.[cite: 16]
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <FaClock className="text-emerald-600" size={14} />
                <span>7 min comprehensive read</span>[cite: 16]
              </div>
              <div className="flex items-center gap-1.5">
                <FaLaptop className="text-emerald-600" size={14} />
                <span>Verified Consumer Standard</span>[cite: 16]
              </div>
            </div>
          </div>

          {/* Hero Image & Key Takeaway Box */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* ADD YOUR PC & LAPTOP IMAGE PATH BELOW */}
              <img
                src="/laptopguide.jpg"
                alt="PC & Laptop Repair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-950 leading-relaxed flex items-start gap-2.5">
              <FaLock className="text-emerald-600 shrink-0 mt-0.5" size={15} />
              <div>
                <strong className="font-bold text-emerald-950">Key takeaway:</strong> Never share OS passwords for simple physical hardware or screen replacements.[cite: 16]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT + SIDEBAR ================= */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Detailed Steps */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* STEP 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 bg-emerald-600 text-white rounded-md flex items-center justify-center font-black text-sm shrink-0">
                1
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                Evaluating Local PC Repair Capabilities
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Not every computer shop has the equipment or training for intricate electronics. Most neighborhood shops fall into two categories: <em>Parts Assemblers</em> (who replace entire components) and <em>Chip-Level Technicians</em> (who can diagnose circuit boards and micro-solder).[cite: 16]
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  STANDARD PARTS SWAPPERS
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Suitable for simple RAM upgrades, SSD installations, screen replacements, and standard OS reinstalls. If a motherboard is dead, they will simply quote buying a new motherboard.[cite: 16, 17]
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  CHIP-LEVEL REPAIR LABS
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Equipped with thermal cameras, DC power supplies, oscilloscopes, and BGA rework stations. They can replace a single burnt capacitor or charging MOSFET for a fraction of motherboard replacement costs.[cite: 16, 17]
                </p>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 bg-emerald-600 text-white rounded-md flex items-center justify-center font-black text-sm shrink-0">
                2
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                Data Confidentiality & Privacy Rules
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Your personal files, browser sessions, and stored passwords are on your storage drive. Follow these precautions before handing over your machine:[cite: 17]
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Remove the SSD/HDD if feasible:</strong> For pure power issues, screen replacements, or fan cleaning, the technician does not need your boot drive.[cite: 17]
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Create a Guest / Local User Account:</strong> If OS testing is required, set up a temporary local account and sign out of all cloud accounts and browsers.[cite: 17]
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Full Backup First:</strong> If the computer still boots, back up vital documents to an external drive or cloud storage before handing it in.[cite: 17]
                </span>
              </li>
            </ul>
          </div>

          {/* STEP 3 */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 bg-emerald-600 text-white rounded-md flex items-center justify-center font-black text-sm shrink-0">
                3
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                The 5 Essential Phone Questions to Ask
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Call 2 or 3 local shops and ask these specific qualifying questions:[cite: 17]
            </p>

            <div className="space-y-3 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Q1: &ldquo;What is your bench fee if you inspect the laptop and conclude it is unrepairable?&rdquo;
                </h4>
                <p className="text-xs text-slate-500">
                  A transparent shop will have a fixed diagnostic rate that is waived if you approve the repair.[cite: 17]
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Q2: &ldquo;Do you repair motherboards in-house or send them to a third-party hub?&rdquo;
                </h4>
                <p className="text-xs text-slate-500">
                  In-house repairs ensure faster turnarounds and eliminate middleman markups.[cite: 17]
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Q3: &ldquo;Do you provide a written warranty on replacement screens, batteries, or board components?&rdquo;
                </h4>
                <p className="text-xs text-slate-500">
                  Insist on at least 30 to 90 days replacement warranty on new parts.[cite: 17]
                </p>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 bg-emerald-600 text-white rounded-md flex items-center justify-center font-black text-sm shrink-0">
                4
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                Pre-Payment Acceptance Checklist
              </h2>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                VERIFICATION STEPS IN SHOP
              </span>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Test keyboard keys, touchpad, WiFi connection, and speakers in front of the counter.[cite: 18]</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Verify battery charging percentage increases steadily while plugged in.[cite: 18]</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Collect the old defective hardware part that was swapped out.[cite: 18]</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Obtain a printed or digital itemized receipt specifying part warranty period.[cite: 18]</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
          {/* Navigation Widget */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">
              OTHER APPLIANCE GUIDES
            </span>
            <div className="space-y-2 text-xs font-semibold text-slate-700">
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group">
                <span>Washing Machine Guide</span>[cite: 16]
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group border-t border-slate-100">
                <span>Refrigerator Guide</span>[cite: 16]
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group border-t border-slate-100">
                <span>TV & Screen Guide</span>[cite: 16]
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
            </div>
          </div>

          {/* General Advice Widget */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">
              NEED GENERAL ADVICE?
            </span>
            <h3 className="font-bold text-slate-900 text-base">Universal 4-Step Standard</h3>[cite: 17]
            <p className="text-xs text-slate-500 leading-relaxed">
              Learn the general rules of diagnostic fee adjustments, OEM authentication, and warranty verification.[cite: 17]
            </p>
            <a href="#" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition inline-flex items-center gap-1 pt-1">
              VIEW UNIVERSAL FRAMEWORK <FaArrowRight size={10} />[cite: 17]
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}