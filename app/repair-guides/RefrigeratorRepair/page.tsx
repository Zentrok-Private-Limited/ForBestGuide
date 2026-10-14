"use client";

import React from "react";
import {
  FaHouse,
  FaClock,
  FaShieldHalved,
  FaArrowRight,
  FaCircleCheck,
  FaTriangleExclamation
} from "react-icons/fa6";

export default function RefrigeratorRepairGuidePage() {
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
        <span className="text-slate-900 font-semibold uppercase">REFRIGERATOR REPAIR</span>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Info */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md uppercase tracking-wider inline-block">
              CONSUMER DECISION GUIDE #03
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              How to Find a Certified Local Refrigerator Technician
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Understand compressor diagnostics, proper refrigerant gas leak testing protocols, thermostat relay issues, and avoid overpaying for unnecessary sealed-system replacements.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <FaClock className="text-emerald-600" size={14} />
                <span>7 min comprehensive read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaShieldHalved className="text-emerald-600" size={14} />
                <span>EPA & Refrigerant Standards</span>
              </div>
            </div>
          </div>

          {/* Hero Image & Critical Warning Box */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* ADD YOUR REFRIGERATOR IMAGE PATH BELOW */}
              <img
                src="/fridgeguide.jpg"
                alt="Refrigerator Repair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
              <FaTriangleExclamation className="text-amber-600 shrink-0 mt-0.5" size={15} />
              <div>
                <strong className="font-bold text-amber-950">Critical warning:</strong> Never allow gas top-up without a pressure leak check. Recharging a leaking system causes gas to escape again in 10-15 days.
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
                Compressor vs Starter Relay Distinction
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              A very common overcharge tactic is claiming the compressor is dead when only the simple PTC Starter Relay or Overload Protector capacitor has burnt out.
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  CLICKING SOUND WITH NO COOLING
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  If the fridge clicks every 2-3 minutes, the compressor starter relay is frequently the culprit. Insist on testing relay resistance before accepting a full compressor replacement quote.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  ACTUAL COMPRESSOR SEIZURE
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Occurs when internal valves fail or motor windings ground. A technician must use a digital multimeter to measure resistance across the Run, Start, and Common pins.
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
                The 3-Step Gas Recharge Standard
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              If your refrigerator has lost its cooling capability, a reputable technician will adhere to this sequence:
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Nitrogen Pressure Leak Detection:</strong> Injecting dry nitrogen to find the microscopic pinhole leak in the condenser or evaporator coil.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Filter Drier Replacement:</strong> Splicing in a new copper filter-drier to capture moisture before pulling a deep vacuum.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Weight-Based Charging:</strong> Refilling the exact grams of gas specified on the rating plate (e.g., 65g of R600a or R134a) using a precision digital scale.
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
                Pre-Booking Phone Screening Questions
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Q1: &ldquo;Does your gas recharge quote include nitrogen leak testing and filter-drier replacement?&rdquo;
                </h4>
                <p className="text-xs text-slate-500">
                  If they say leak testing is extra or optional, avoid that technician.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Q2: &ldquo;What is your warranty period on gas refilling and copper brazing joints?&rdquo;
                </h4>
                <p className="text-xs text-slate-500">
                  A quality repair comes with at least 90 days to 6 months cooling warranty.
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
                Verification Checklist Before Technician Leaves
              </h2>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                VERIFICATION STEPS
              </span>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Let the fridge run for 20-30 minutes; ensure the freezer cooling coil develops uniform frost.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Feel the side body or back condenser—it should feel warm to the touch (normal heat dissipation).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Ensure the charging port valve is tightly sealed and leak-tested with soap solution.</span>
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
                <span>Washing Machine Guide</span>
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group border-t border-slate-100">
                <span>TV & Screen Guide</span>
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
            </div>
          </div>

          {/* Age Rule Widget */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">
              AGE RULE
            </span>
            <h3 className="font-bold text-slate-900 text-base">50% Appliance Cost Rule</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              If your refrigerator is older than 10 years and needs a full compressor swap, investing in a new 5-star inverter fridge is often more economical.
            </p>
            <a href="#" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition inline-flex items-center gap-1 pt-1">
              READ FAQ ADVISORY <FaArrowRight size={10} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}