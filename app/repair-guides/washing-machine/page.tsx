"use client";

import React from "react";
import {
  FaHouse,
  FaClock,
  FaHouseUser,
  FaArrowRight,
  FaCircleCheck,
  FaTriangleExclamation
} from "react-icons/fa6";

export default function WashingMachineRepairGuidePage() {
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
        <span className="text-slate-900 font-semibold uppercase">WASHING MACHINE REPAIR</span>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Info */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md uppercase tracking-wider inline-block">
              CONSUMER DECISION GUIDE #02
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              How to Find & Vet a Local Washing Machine Technician
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              A comprehensive guide for diagnosing whether you need a quick sensor fix or major drum bearing replacement, ensuring doorstep service without unnecessary transportation fees.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <FaClock className="text-emerald-600" size={14} />
                <span>6 min comprehensive read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaHouseUser className="text-emerald-600" size={14} />
                <span>On-Site Doorstep Focused</span>
              </div>
            </div>
          </div>

          {/* Hero Image & Key Takeaway Box */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* ADD YOUR WASHING MACHINE IMAGE PATH BELOW */}
              <img
                src="/WMguide.jpg"
                alt="Washing Machine Repair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-950 leading-relaxed flex items-start gap-2.5">
              <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={15} />
              <div>
                <strong className="font-bold text-emerald-950">Key takeaway:</strong> Insist on in-home diagnosis. Over 85% of washer faults (valves, pumps, belts, PCB capacitors) can be repaired on-site.
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
                Evaluating Appliance Repair Qualifications
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Modern washing machines (both front-load and top-load) are micro-computer controlled. Technicians must understand:
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  DIRECT-DRIVE & INVERTER MOTORS
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Brushless DC motors require specialized diagnostic tools to check hall effect sensors and stator coils rather than simply guessing rotor failure.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  CONTROL PCB & ERROR CODES
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  A technician should ask for the error code shown on your display (e.g., E4, OE, dF, UE) before arriving so they bring the correct pressure switch or door latch.
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
                Preventing Appliance Hauling Scams
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Some unscrupulous services insist on hauling heavy washing machines to their workshops for minor pump blockages or sensor wiring issues to charge inflated transport fees.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaTriangleExclamation className="text-amber-500 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Only PCB/Motor Rebuilding Requires Shop Work:</strong> Only complete drum spider replacements or complex PCB trace repairs require workshop tooling.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Take Photos of Serial Stickers:</strong> If only the small PCB module is removed for repair, photograph its barcode and connection headers before it leaves.
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
                Questions to Ask the Technician Prior to Booking
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Q1: &ldquo;Is the doorstep inspection fee adjustable into the final repair bill?&rdquo;
                </h4>
                <p className="text-xs text-slate-500">
                  Standard practice is to waive the visit fee if you approve the estimated repair.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Q2: &ldquo;Do you supply genuine OEM drain pumps and shock absorbers?&rdquo;
                </h4>
                <p className="text-xs text-slate-500">
                  Cheap universal pumps often fail within 3 months under high load cycles.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Q3: &ldquo;What warranty do you offer on new water inlet valves or carbon brushes?&rdquo;
                </h4>
                <p className="text-xs text-slate-500">
                  Expect a minimum 60 to 90 days written warranty.
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
                On-Site Testing Checklist Before Settling Payment
              </h2>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                VERIFICATION STEPS WHILE TECH IS PRESENT
              </span>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Run a short rinse + spin test to ensure proper water intake, drainage speed, and no excessive vibration.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Inspect rubber door bellows and bottom hose clamps for immediate water leaks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Collect the replaced old component (faulty capacitor, valve, or worn belt).</span>
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
                <span>PC & Laptop Guide</span>
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group border-t border-slate-100">
                <span>Refrigerator Guide</span>
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group border-t border-slate-100">
                <span>TV & Screen Guide</span>
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
            </div>
          </div>

          {/* Pre-Hiring Tips Widget */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">
              PRE-HIRING TIPS
            </span>
            <h3 className="font-bold text-slate-900 text-base">Secondary Quote Strategy</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              If quoted a high sum for a new drum assembly, spending 5 minutes calling another local technician can save up to 40% on labor charges.
            </p>
            <a href="#" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition inline-flex items-center gap-1 pt-1">
              VIEW SAFETY CHECKLIST <FaArrowRight size={10} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}