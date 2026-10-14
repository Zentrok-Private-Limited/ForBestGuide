"use client";

import React from "react";
import {
  FaHouse,
  FaClock,
  FaGamepad,
  FaArrowRight,
  FaCircleCheck,
  FaTriangleExclamation,
  FaScrewdriverWrench
} from "react-icons/fa6";

export default function GamingConsoleAudioGuidePage() {
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
        <span className="text-slate-900 font-semibold uppercase">
          GAMING CONSOLE & AUDIO GEAR GUIDE
        </span>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Info */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md uppercase tracking-wider inline-block">
              CONSUMER PLAYBOOK #06
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              How to Find a Trusted Local Gaming Console & Hi-Fi Audio Specialist
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Everything you need to verify before handing over your PlayStation 5, Xbox Series X, Nintendo Switch, or AV home theater amplifier: liquid metal resealing, authentic HDMI 2.1 port micro-soldering, and capacitor replacement standards[cite: 19].
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <FaClock className="text-emerald-600" size={14} />
                <span>7 min technical read</span>[cite: 19]
              </div>
              <div className="flex items-center gap-1.5">
                <FaScrewdriverWrench className="text-emerald-600" size={14} />
                <span>Micro-Soldering Standard</span>[cite: 19]
              </div>
            </div>
          </div>

          {/* Hero Image & Rule Box */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* ADD YOUR GAMING CONSOLE / PS5 IMAGE PATH BELOW */}
              <img
                src="/gameguide.jpg"
                alt="Gaming Console & Audio Gear Repair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-950 leading-relaxed flex items-start gap-2.5">
              <FaScrewdriverWrench className="text-emerald-600 shrink-0 mt-0.5" size={15} />
              <div>
                <strong className="font-bold text-emerald-950">Micro-Soldering Rule:</strong> Console HDMI ports require hot-air microscope soldering. Never accept cold-soldering hacks that tear PCB traces[cite: 19].
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
                HDMI 2.1 Port Replacement Standards (PS5 / Xbox)
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Broken HDMI sockets are the #1 physical failure on modern game consoles due to heavy cables or accidental tugs. Repairing an HDMI port involves desoldering 19 to 21 microscopic surface-mount pins without lifting the delicate motherboard traces[cite: 19].
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block flex items-center gap-1.5">
                  <FaCircleCheck size={12} /> AUTHENTIC PORT VERIFICATION
                </span>
                <p className="text-xs text-emerald-950 leading-relaxed">
                  Insist that the replacement port is rated for full HDMI 2.1 throughput (4K@120Hz & HDR support), not an older 1080p-restricted cheap clone[cite: 19].
                </p>
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block flex items-center gap-1.5">
                  <FaTriangleExclamation size={12} /> REPAIRMAN RED FLAG
                </span>
                <p className="text-xs text-rose-950 leading-relaxed">
                  The shop claims they can replace the port using a basic handheld soldering iron without an optical microscope or hot air station[cite: 19].
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
                PS5 Liquid Metal vs Xbox Thermal Paste Protocol
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              When consoles overheat, shut down mid-game, or produce loud fan noise, the thermal interface layer requires servicing. PlayStation 5 uses conductive liquid metal over the APU, whereas Xbox Series X uses high-viscosity phase-change thermal paste[cite: 20].
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Liquid Metal Re-Sealing (PS5):</strong> The foam barrier surrounding the APU must be 100% intact. Spilled liquid metal causes immediate catastrophic short circuits[cite: 20].
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Dry Spot Oxidation Removal:</strong> Technicians must gently polish oxidized bare copper heatsink spots before spreading fresh liquid metal compound[cite: 20].
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                <FaCircleCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong className="text-slate-900">Heatsink Deep Clean:</strong> Power supply ventilation channels must be completely cleared of compacted lint and dust blankets[cite: 20].
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
                Home Theater & AV Receiver Amplifier Diagnostics
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Protect Mode Tripping (Denon, Marantz, Yamaha, Sony):
                </h4>
                <p className="text-xs text-slate-500">
                  If the amplifier turns off and blinks a red protection LED, a shorted output transistor or bulging power supply filter capacitor is typically responsible. Do not let technicians quote an entire mainboard replacement[cite: 20].
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">
                  Capacitor Bank Quality:
                </h4>
                <p className="text-xs text-slate-500">
                  For audiophile receivers, demand 105°C rated low-ESR audio-grade electrolytic capacitors (Nichicon, Nippon Chemi-Con, Rubycon) instead of generic industrial parts[cite: 20].
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
                Shop Counter Acceptance Checklist
              </h2>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                SHOP COLLECTION TESTING PROTOCOL
              </span>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">—</span>
                  <span>Plug console into a 4K TV and test both 60Hz and 120Hz display modes without screen flickering[cite: 21].</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">—</span>
                  <span>Run a graphically intense game (e.g. Spider-Man 2, Cyberpunk 2077) for at least 10 minutes to ensure whisper-quiet fan speeds[cite: 21].</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">—</span>
                  <span>Test both disc drive ingestion and controller Bluetooth sync before leaving the shop[cite: 21].</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">—</span>
                  <span>Obtain a written invoice clearly stating the 60-day to 90-day warranty on soldered components[cite: 21].</span>
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
              ALL DEVICE PLAYBOOKS
            </span>
            <div className="space-y-2 text-xs font-semibold text-slate-700">
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group">
                <span>PC & Laptop Guide</span>[cite: 19]
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group border-t border-slate-100">
                <span>Smart Home & WiFi Guide</span>[cite: 19]
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group border-t border-slate-100">
                <span>Smart TV & Display Guide</span>[cite: 19]
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group border-t border-slate-100">
                <span>Washing Machine Guide</span>[cite: 19]
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
              <a href="#" className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition group border-t border-slate-100">
                <span>Refrigerator Guide</span>[cite: 19]
                <FaArrowRight size={10} className="text-slate-400 group-hover:text-emerald-600 transition" />
              </a>
            </div>
          </div>

          {/* Independent Advice Widget */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">
              INDEPENDENT ADVICE
            </span>
            <h3 className="font-bold text-slate-900 text-base">Zero Sponsored Vendor Deals</h3>[cite: 20]
            <p className="text-xs text-slate-500 leading-relaxed">
              Our platform does not take commissions from warranty companies or console brands. All advice is designed purely to protect consumers from overcharging and improper soldering[cite: 20].
            </p>
            <a href="#" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition inline-flex items-center gap-1 pt-1">
              READ 4-STEP RULES <FaArrowRight size={10} />[cite: 20]
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}