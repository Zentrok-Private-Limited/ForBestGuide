import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Package,
  Laptop,
  Tv,
  Clock,
} from "lucide-react";

function QuoteVerification() {
  return (
    <section
        id="quote-verification"
        className="bg-[#f7f7f3] px-5 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa231]">
              — BEFORE YOU APPROVE THE QUOTE
            </p>
            <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-serif text-4xl text-[#173b36] md:text-5xl max-w-xl">
                Know What You're Paying For <br />
                <span className="text-slate-400">
                  Before Repair Work Begins
                </span>
              </h2>
              <p className="text-xs text-slate-600 max-w-sm">
                Ask for a clear breakdown of the diagnosis, parts and labor so
                you can understand the quote before agreeing to the work.
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
                  Ask for the quote to show the{" "}
                  <span className="text-[#d7f27c] font-bold">
                    part cost, inspection or visiting fee, and labor charge
                  </span>{" "}
                  separately.
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
                These checks help you understand what is being proposed and what
                the final amount is expected to include.
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
                  Ask the repairman to explain what was inspected, what problem
                  was found, and why the proposed work is needed.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#8aa231]" /> Clear
                    problem explanation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#8aa231]" />{" "}
                    Proposed work explained
                  </span>
                </div>
              </div>

              {/* 02 */}
              <div className="py-8">
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span className="text-[#8aa231] font-bold">02</span>
                  <span className="uppercase tracking-wider">
                    REPLACEMENT PARTS
                  </span>
                </div>
                <h4 className="mt-2 font-serif text-xl font-semibold text-[#173b36]">
                  Confirm Which Part Is Being Replaced
                </h4>
                <p className="mt-2 text-xs text-slate-500">
                  Ask for the part name, compatible part number where available,
                  its price, and whether the old part can be shown after
                  replacement.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#8aa231]" /> Part
                    name & price
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#8aa231]" />{" "}
                    Replacement reason
                  </span>
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
                  Check the visiting or inspection fee, labor charge and any
                  other agreed costs before dismantling or replacement work
                  begins.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#8aa231]" />{" "}
                    Visiting fee
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#8aa231]" /> Labor
                    charge
                  </span>
                </div>
              </div>

              {/* 04 */}
              <div className="pt-8">
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span className="text-[#8aa231] font-bold">04</span>
                  <span className="uppercase tracking-wider">
                    RECEIPT & WARRANTY
                  </span>
                </div>
                <h4 className="mt-2 font-serif text-xl font-semibold text-[#173b36]">
                  Keep the Final Details in Writing
                </h4>
                <p className="mt-2 text-xs text-slate-500">
                  Keep the invoice or receipt showing the work performed, parts
                  used, amount paid and any warranty terms offered for the
                  service.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#8aa231]" />{" "}
                    Itemized receipt
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#8aa231]" />{" "}
                    Written warranty terms
                  </span>
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
                  Use these as starting questions when discussing a proposed
                  repair.
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
                    What was checked before recommending a motor, pump or
                    control-board replacement?
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
                    How was the cooling problem checked before recommending
                    compressor or gas work?
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
                    Which component was tested before recommending a full
                    motherboard replacement?
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
                    Was the backlight and related circuitry checked before
                    suggesting display replacement?
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
                    Check the Work First{" "}
                    <span className="text-slate-400">Then</span> <br />
                    <span className="text-slate-400">Complete the Payment</span>
                  </h2>
                  <p className="text-xs text-slate-600 max-w-sm">
                    Before making the final payment, review the completed work,
                    confirm replaced parts and keep a written record of what was
                    done.
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
                    Take a few minutes to test the repaired item, review the
                    final bill, and confirm any service or part warranty before
                    closing the job.
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
                    <span className="text-[10px] font-bold text-[#8aa231] uppercase">
                      RULE 01
                    </span>
                    <FileText size={16} />
                  </div>
                  <h4 className="mt-4 font-serif text-xl font-semibold text-[#173b36]">
                    Compare a Large Quote Before Agreeing
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    If the final amount is much higher than expected, ask for
                    the reason and compare it with another local repair provider
                    before approving additional work.
                  </p>
                  <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2
                      className="text-[#8aa231] shrink-0"
                      size={14}
                    />
                    <span>
                      Compare the same type of repair and the same replacement
                      part.
                    </span>
                  </div>
                </div>

                {/* Rule 02 */}
                <div className="border-t border-slate-200 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-[10px] font-bold text-[#8aa231] uppercase">
                      RULE 02
                    </span>
                    <Package size={16} />
                  </div>
                  <h4 className="mt-4 font-serif text-xl font-semibold text-[#173b36]">
                    Review the Parts That Were Replaced
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    Ask to see the removed part and review the packaging or part
                    details for the replacement where they are available.
                  </p>
                  <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2
                      className="text-[#8aa231] shrink-0"
                      size={14}
                    />
                    <span>
                      Keep the old part when practical and note the replacement
                      on the invoice.
                    </span>
                  </div>
                </div>

                {/* Rule 03 */}
                <div className="border-t border-slate-200 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-[10px] font-bold text-[#8aa231] uppercase">
                      RULE 03
                    </span>
                    <Clock size={16} />
                  </div>
                  <h4 className="mt-4 font-serif text-xl font-semibold text-[#173b36]">
                    Test the Device Before Final Payment
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    Run a normal function check while the repair provider is
                    still present so you can confirm that the original issue has
                    been addressed.
                  </p>
                  <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2
                      className="text-[#8aa231] shrink-0"
                      size={14}
                    />
                    <span>
                      Test the same function that originally caused the service
                      request.
                    </span>
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
                    Use a simple real-world check based on the device that was
                    repaired.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between text-slate-500">
                      <Package size={16} className="text-[#8aa231]" />
                      <span className="text-xs font-mono text-slate-400">
                        01
                      </span>
                    </div>
                    <h4 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">
                      Washing Machine
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      Run a short fill, drain and spin check and listen for
                      unusual noise or leakage.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between text-slate-500">
                      <Clock size={16} className="text-[#8aa231]" />
                      <span className="text-xs font-mono text-slate-400">
                        02
                      </span>
                    </div>
                    <h4 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">
                      Refrigerator
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      Check that the unit starts normally and ask what cooling
                      behavior to expect after service.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between text-slate-500">
                      <Laptop size={16} className="text-[#8aa231]" />
                      <span className="text-xs font-mono text-slate-400">
                        03
                      </span>
                    </div>
                    <h4 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">
                      PC & Laptop
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      Boot the device and test the specific function or hardware
                      that was serviced.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between text-slate-500">
                      <Tv size={16} className="text-[#8aa231]" />
                      <span className="text-xs font-mono text-slate-400">
                        04
                      </span>
                    </div>
                    <h4 className="mt-4 font-serif text-lg font-semibold text-[#173b36]">
                      Smart TV
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      Check picture, sound and the repaired input or display
                      function before sign-off.
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
                    Written records make it easier to understand what was
                    serviced if the same issue returns later.
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
          <section
            id="faq"
            className="bg-white px-5 py-20 lg:px-8 border-t border-slate-200"
          >
            <div className="mx-auto max-w-7xl">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa231]">
                  — COMMON QUESTIONS
                </p>
                <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <h2 className="font-serif text-4xl text-[#173b36] md:text-5xl max-w-xl">
                    Questions People Ask{" "}
                    <span className="text-slate-400">Before</span> <br />
                    <span className="text-slate-400">Hiring a Repairman</span>
                  </h2>
                  <p className="text-xs text-slate-600 max-w-sm">
                    Straightforward answers about quotes, parts, visiting fees,
                    handover, warranties and what to check during local repair
                    work.
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
                    Open any question to see a short consumer-focused
                    explanation.
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
                        <span className="text-xs font-bold text-[#8aa231] font-mono">
                          01
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                          Is an older appliance always worth repairing?
                        </h4>
                      </div>
                      <span className="text-slate-400 text-xs">✕</span>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                      Not always. Compare the repair quote with the cost of a
                      suitable replacement, then consider the product's age,
                      condition and how long you plan to keep using it.
                    </p>
                  </div>

                  {/* Q2 */}
                  <div className="py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <span className="text-xs font-bold text-[#8aa231] font-mono">
                          02
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                          What should I do if the same problem returns after
                          service?
                        </h4>
                      </div>
                      <span className="text-slate-400 text-xs">✕</span>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                      Keep the invoice and any written service warranty. Contact
                      the repair provider with the original work details and ask
                      what follow-up coverage applies.
                    </p>
                  </div>

                  {/* Q3 */}
                  <div className="py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <span className="text-xs font-bold text-[#8aa231] font-mono">
                          03
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                          What if a part needs to be taken to a workshop?
                        </h4>
                      </div>
                      <span className="text-slate-400 text-xs">✕</span>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                      Ask why off-site work is needed. Before handover,
                      photograph the part or device, note visible identifiers
                      where available, and get a written acknowledgment of what
                      was taken.
                    </p>
                  </div>

                  {/* Q4 */}
                  <div className="py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <span className="text-xs font-bold text-[#8aa231] font-mono">
                          04
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                          How can I check a replacement part?
                        </h4>
                      </div>
                      <span className="text-slate-400 text-xs">✕</span>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                      Ask for the part name, compatible part number and price.
                      Review packaging or labels when available and keep the old
                      part when practical.
                    </p>
                  </div>

                  {/* Q5 */}
                  <div className="py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <span className="text-xs font-bold text-[#8aa231] font-mono">
                          05
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                          Should I pay a visiting or inspection fee?
                        </h4>
                      </div>
                      <span className="text-slate-400 text-xs">✕</span>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                      A provider may charge a visiting or inspection fee. Ask
                      the amount before the visit and whether it will be
                      adjusted if you proceed with the repair.
                    </p>
                  </div>

                  {/* Q6 */}
                  <div className="py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <span className="text-xs font-bold text-[#8aa231] font-mono">
                          06
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                          What if the quoted price changes after inspection?
                        </h4>
                      </div>
                      <span className="text-slate-400 text-xs">✕</span>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                      Ask what changed and request an updated itemized quote
                      before authorizing additional work. If you are not
                      comfortable with the change, you can compare another
                      estimate before proceeding.
                    </p>
                  </div>

                  {/* Q7 */}
                  <div className="py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <span className="text-xs font-bold text-[#8aa231] font-mono">
                          07
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                          How should I evaluate a local repair provider?
                        </h4>
                      </div>
                      <span className="text-slate-400 text-xs">✕</span>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                      Compare clear business details, recent customer feedback,
                      written estimates, service terms and how clearly the
                      provider explains the proposed work.
                    </p>
                  </div>

                  {/* Q8 */}
                  <div className="py-6 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <span className="text-xs font-bold text-[#8aa231] font-mono">
                          08
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#173b36]">
                          Should every repair be completed at home?
                        </h4>
                      </div>
                      <span className="text-slate-400 text-xs">✕</span>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed pl-8">
                      No. Some work may require workshop tools or testing. Ask
                      why the item needs to leave your home, what exactly is
                      being taken, and how the handover will be documented.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
  )
}

export default QuoteVerification