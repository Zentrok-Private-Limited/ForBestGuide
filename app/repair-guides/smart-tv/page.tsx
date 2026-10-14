"use client";

import React from "react";
import {
  FaHouse,
  FaClock,
  FaTv,
  FaArrowRight,
  FaCircleCheck,
  FaLightbulb
} from "react-icons/fa6";

export default function TvDisplayRepairGuidePage() {
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
        <span className="text-slate-900 font-semibold uppercase">TV & DISPLAY REPAIR</span>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Info */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md uppercase tracking-wider inline-block">
              CONSUMER DECISION GUIDE #04
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              How to Find a Local TV & Flat Screen Specialist
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Demystifying LED backlight failures versus damaged display panels, board-level micro repairs (Power Board & T-Con), and safe padded transit procedures.[cite: 13]
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <FaClock className="text-emerald-600" size={14} />
                <span>6 min comprehensive read</span>[cite: 13]
              </div>
              <div className="flex items-center gap-1.5">
                <FaTv className="text-emerald-600" size={14} />
                <span>LED, OLED & 4K Displays</span>[cite: 13]
              </div>
            </div>
          </div>

          {/* Hero Image & Torch Test Tip Box */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* ADD YOUR TV IMAGE PATH BELOW */}
              <img
                src="/tvguide.jpg"
                alt="TV & Display Repair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-950 leading-relaxed flex items-start gap-2.5">
              <FaLightbulb className="text-emerald-600 shrink-0 mt-0.5" size={15} />
              <div>
                <strong className="font-bold text-emerald-950">Torch Test tip:</strong> If the screen is dark but sound works, shine a flashlight directly at the display. If you see faint images, only the LED backlights need replacement![cite: 13]
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
                Backlight Strip vs Panel Damage
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              The number one overcharge scam in television repairs is telling consumers their &ldquo;screen/panel is permanently damaged and needs full replacement&rdquo; when in reality a single LED backlight strip burned out[cite: 13].
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  LED BACKLIGHT BURNOUT
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Symptoms: Audio plays fine, remote changes channels, but picture is pitch black. This is an economical repair requiring a new set of LED array bars[cite: 13].
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  TRUE PANEL / GLASS FRACTURE
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Symptoms: Spider-web cracks, colored vertical/horizontal lines, or bleeding ink patches. Replacing the actual glass panel is rarely cost-effective compared to buying a new TV[cite: 13].
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
                Board-Level Repair vs Modular Swapping
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Inside every LED TV are three core boards: the Power Supply Board (SMPS), the Motherboard (Main Logic), and the Timing Controller (T-Con)[cite: 14].
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Power Board Capacitor Repairs:</strong> If your TV has no standby red light, a technician can replace swollen electrolytic capacitors for minimal labor fees[cite: 14].
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">T-Con Board Diagnosis:</strong> Double images, solarization, or white screen are often fixed by replacing the tiny T-Con board rather than declaring the panel dead[cite: 14].
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
                Screen Transport & Safety Standards
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              If the TV must be transported to a workshop for backlight replacement[cite: 14]:
            </p>

            <div className="space-y-3 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Padded Flight / Transit Cases
                </h4>
                <p className="text-xs text-slate-500">
                  Ensure the service provider transports the unit upright in padded blankets or hard-shell flight cases. Transporting flat on a bike will crack the matrix[cite: 14].
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Photograph Screen Glass Prior to Handover
                </h4>
                <p className="text-xs text-slate-500">
                  Take timestamped photos of the display glass to prevent disputes regarding transit scratches[cite: 14].
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
                Acceptance Checklist Before Settling Payment
              </h2>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                VERIFICATION PROTOCOL
              </span>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Test white / solid color backgrounds for even brightness without dark spots or light bleeding[cite: 15].</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Verify HDMI 1, HDMI 2, ARC, and optical audio output functionality[cite: 15].</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Ensure full set of LED strips was replaced (not just 1 single bulb) for longevity[cite: 15].</span>
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
                <span>Refrigerator Guide</span>
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
            </div>
          </div>

          {/* Fair Price Advice Widget */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">
              FAIR PRICE ADVICE
            </span>
            <h3 className="font-bold text-slate-900 text-base">Backlight Array Replacement</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Replacing the full array of backlight strips generally costs 15% to 25% of the television&apos;s original price and gives the TV 3-5 additional years of life[cite: 14].
            </p>
            <a href="#" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition inline-flex items-center gap-1 pt-1">
              VIEW HIRING CHECKLIST <FaArrowRight size={10} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}