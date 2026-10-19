import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,  
  Laptop, 
  Tv, 
  Zap, 
  Refrigerator, 
  Home, 
  Gamepad2
} from "lucide-react";

function ConsumerGuides() {

    const categories = [
        { name: "PC & Laptop", id: "01", targetId: "guide-pc-laptop" },
        { name: "Washing Machine", id: "02", targetId: "guide-washing-machine" },
        { name: "Refrigerator", id: "03", targetId: "guide-refrigerator" },
        { name: "Smart TV", id: "04", targetId: "guide-smart-tv" },
        { name: "Smart Home", id: "05", targetId: "guide-smart-home" },
        { name: "Gaming & Audio", id: "06", targetId: "guide-gaming-audio" }
    ];

  return (
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
  )
}

export default ConsumerGuides