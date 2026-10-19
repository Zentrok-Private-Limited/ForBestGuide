
import Link from "next/link";
import { 
  ArrowRight,
  FileText, 
  Package, 
  IndianRupee, 
} from "lucide-react";

function ConsumerChecklist() {
  return (
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
  )
}

export default ConsumerChecklist