import Link from "next/link";
import { 
  ArrowRight,
  Clock, 
  Scale, 
  Shield,
} from "lucide-react";

function RepairOrReplace() {
  return (
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
  )
}

export default RepairOrReplace