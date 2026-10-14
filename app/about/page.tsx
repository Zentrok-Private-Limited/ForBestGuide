"use client";

import {
  FaLaptop,
  FaTv,
  FaWifi,
  FaGamepad,
  FaArrowRight,
  FaShieldHalved,
  FaMagnifyingGlass,
  FaListCheck,
  FaSnowflake,
  FaCircleCheck,
  FaHouse
} from "react-icons/fa6";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* ================= BREADCRUMB ================= */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
        <a href="/" className="hover:text-emerald-600 transition flex items-center gap-1">
          <FaHouse size={12} /> Home
        </a>
        <span>/</span>
        <span className="text-slate-900 font-semibold">About Us</span>
      </div>

      {/* ================= SECTION 1: HERO ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid lg:grid-cols-2">
          {/* Left Column: Text & Stats */}
          <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-emerald-600"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  ABOUT FAIRREPAIRGUIDE.CO
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Better Questions. <span className="text-slate-400">Better Repair Decisions.</span>
              </h1>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-2">
                FairRepairGuide.co is an independent consumer learning resource that helps people understand what to ask, what to compare, and what to document before agreeing to local repair work.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
              <div>
                <span className="block text-3xl font-black text-slate-900">06</span>
                <span className="text-[11px] font-semibold text-slate-500 leading-snug block mt-1">
                  Device Guide Categories
                </span>
              </div>
              <div>
                <span className="block text-3xl font-black text-emerald-600">100%</span>
                <span className="text-[11px] font-semibold text-slate-500 leading-snug block mt-1">
                  Independent Education
                </span>
              </div>
              <div>
                <span className="block text-3xl font-black text-slate-900">0</span>
                <span className="text-[11px] font-semibold text-slate-500 leading-snug block mt-1">
                  Sponsored Rankings
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Image with Overlay Text */}
          <div className="relative min-h-[320px] lg:min-h-full bg-slate-100">
            {/* ADD YOUR IMAGE PATH BELOW */}
            <img
              src="/path-to-your-about-image.jpg"
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">
                OUR APPROACH
              </span>
              <p className="text-white font-bold text-lg md:text-xl max-w-md leading-snug">
                Clear, practical guidance before you hire, approve, or pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: OUR PRINCIPLES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-emerald-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                OUR PRINCIPLES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              What Guides <span className="text-slate-400">Everything We Publish</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed lg:max-w-md">
            Our content is designed to make repair conversations easier to understand without pushing users toward a particular contractor, provider, or paid listing.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                01
              </span>
              <FaShieldHalved className="text-slate-400" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Independent Guidance</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                We focus on consumer education and do not rank local repair providers based on paid placement or referral commissions.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                02
              </span>
              <FaMagnifyingGlass className="text-slate-400" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Clear Verification Steps</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                We explain what details to ask for, what to compare on a quote, and what information should be documented before work begins.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                03
              </span>
              <FaListCheck className="text-slate-400" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Practical Checklists</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Each guide turns a complicated repair discussion into a short list of questions and checks a consumer can actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DARK BANNER (WHY WE BUILT IT) ================= */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
              WHY WE BUILT IT
            </span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
              Repair Decisions Shouldn&apos;t Feel Like Guesswork.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              When an essential device stops working, many people are asked to make quick decisions about diagnosis, replacement parts, labor charges and whether the item should leave the home for workshop service.
            </p>
            <p>
              Without a simple reference point, it can be difficult to know which questions matter or what should appear on a written quote.
            </p>
            <p className="font-bold text-white pt-2">
              FairRepairGuide.co was created to make those conversations easier to understand with plain-language guides, comparison points and practical pre-service checklists.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: DEVICE GUIDES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-emerald-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                EXPLORE OUR GUIDES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Start With the Device <span className="text-slate-400">You&apos;re Getting Repaired</span>
            </h2>
          </div>

          <button className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-6 py-3 rounded-xl transition inline-flex items-center gap-2 text-sm shrink-0 self-start md:self-auto">
            View All Guides <FaArrowRight size={12} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: "01",
              title: "PC & Laptop",
              desc: "Handover, diagnosis, parts and data-safety checks.",
              icon: <FaLaptop size={22} />,
            },
            {
              id: "02",
              title: "Washing Machine",
              desc: "Inspection, parts, workshop handover and quote checks.",
              icon: <FaListCheck size={22} />,
            },
            {
              id: "03",
              title: "Refrigerator",
              desc: "Cooling diagnosis, parts and service quote guidance.",
              icon: <FaSnowflake size={22} />,
            },
            {
              id: "04",
              title: "TV & Display",
              desc: "Display checks, repair handover and replacement questions.",
              icon: <FaTv size={22} />,
            },
            {
              id: "05",
              title: "Smart Home & WiFi",
              desc: "Account ownership, access and service handover guidance.",
              icon: <FaWifi size={22} />,
            },
            {
              id: "06",
              title: "Gaming & Audio",
              desc: "Specialist-service, testing and handover questions.",
              icon: <FaGamepad size={22} />,
            },
          ].map((device) => (
            <div
              key={device.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-emerald-600 bg-emerald-50 p-3 rounded-xl">
                  {device.icon}
                </span>
                <span className="text-xs font-bold text-slate-400">{device.id}</span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{device.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
                  {device.desc}
                </p>
                <a
                  href="#"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition inline-flex items-center gap-1"
                >
                  Read Guide <FaArrowRight size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: CALLOUT CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-slate-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">
              CONSUMER LEARNING FIRST
            </span>
            <h3 className="text-xl md:text-2xl font-black text-slate-900">
              Know what to check before you book a local repair.
            </h3>
          </div>

          <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-xl transition inline-flex items-center gap-3 text-sm shrink-0">
            Read the Hiring Checklist
            <span className="bg-slate-800 p-1.5 rounded-lg">
              <FaArrowRight size={12} />
            </span>
          </button>
        </div>
      </section>
      
    </div>
  );
}