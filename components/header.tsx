"use client"
import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  LayoutGrid,
  Scale,
  FileCheck,
  ShieldAlert,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  HelpCircle,
  Info,
  Tv,
  Laptop,
  Gamepad2,
  Home,
  Sparkles,
  Zap,
  Refrigerator
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#173b36] px-5 py-4 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-[#173b36]">
            <div className="flex size-6 items-center justify-center rounded-lg bg-[#173b36] text-[#d7f27c]">
              <span className="font-mono text-sm font-bold">🔧</span>
            </div>
            <span className="font-serif text-lg font-bold tracking-tight text-[#173b36]">
              For<span className="font-normal text-[#8aa231]">Best</span>Guide
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 text-xs font-semibold text-slate-200 lg:flex">
          <Link
            href="/#choose"
            className="flex items-center gap-1.5 transition-colors hover:text-[#d7f27c]"
          >
            <CheckCircle2 size={15} className="text-[#d7f27c]" />
            <span>How to Choose</span>
          </Link>

          {/* ==========================================
              MEGA DROPDOWN: REPAIR GUIDES (Screenshot 18)
          ========================================== */}
          <div className="group relative flex items-center gap-1.5 cursor-pointer py-2 transition-colors hover:text-[#d7f27c]">
            <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors group-hover:bg-white/10">
              <LayoutGrid size={15} className="text-[#d7f27c]" />
              <span>Repair Guides</span>
              <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
            </div>

            {/* Mega Menu Dropdown Container */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden w-[720px] group-hover:block">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 text-slate-800 shadow-2xl">
                
                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#8aa231]">
                      EXPLORE REPAIR GUIDES
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Select a device category to diagnose problems and check estimated repair costs
                    </p>
                  </div>
                  <Link
                    href="/repair-guides"
                    className="flex items-center gap-1 text-xs font-bold text-[#8aa231] hover:underline"
                  >
                    All Categories <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Main Content Grid: 2 Columns Categories + 1 Column Featured Card */}
                <div className="mt-6 grid grid-cols-[1.6fr_1fr] gap-6">
                  
                  {/* Category Grid (6 Items) */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Refrigerator */}
                    <Link
                      href="/repair-guides/RefrigeratorRepair"
                      className="flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Refrigerator size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#173b36]">Refrigerator</p>
                        <p className="text-[10px] text-slate-400">Cooling, compressor & leakage</p>
                      </div>
                    </Link>

                    {/* Washing Machine */}
                    <Link
                      href="/repair-guides/washing-machine"
                      className="flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                        <Zap size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#173b36]">Washing Machine</p>
                        <p className="text-[10px] text-slate-400">Motor, spin & drainage</p>
                      </div>
                    </Link>

                    {/* Smart TV & Display */}
                    <Link
                      href="/repair-guides/smart-tv"
                      className="flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                        <Tv size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#173b36]">Smart TV & Display</p>
                        <p className="text-[10px] text-slate-400">Screen, panel & power board</p>
                      </div>
                    </Link>

                    {/* Computer & Laptop */}
                    <Link
                      href="/repair-guides/pc-laptop"
                      className="flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#dcecc1] text-[#173b36]">
                        <Laptop size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#173b36]">Computer & Laptop</p>
                        <p className="text-[10px] text-slate-400">Hardware, boot & upgrades</p>
                      </div>
                    </Link>

                    {/* Gaming & Audio */}
                    <Link
                      href="/repair-guides/gaming-audio"
                      className="flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                        <Gamepad2 size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#173b36]">Gaming & Audio</p>
                        <p className="text-[10px] text-slate-400">Consoles, soundbars & gear</p>
                      </div>
                    </Link>

                    {/* Smart Home & IoT */}
                    <Link
                      href="/repair-guides/smart-home"
                      className="flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Home size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#173b36]">Smart Home & IoT</p>
                        <p className="text-[10px] text-slate-400">Hubs, cameras & switches</p>
                      </div>
                    </Link>
                  </div>

                  {/* Featured Blue Tool Card */}
                  <div className="flex flex-col justify-between rounded-2xl bg-slate-50 p-5 border border-slate-100">
                    <div>
                      <span className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                        <Sparkles size={10} /> FEATURE
                      </span>
                      <h4 className="mt-3 font-serif text-base font-bold text-[#173b36]">
                        Repair vs Replace Calculator
                      </h4>
                      <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                        Calculate whether fixing your old machine is worth the cost or if upgrading is smarter.
                      </p>
                    </div>

                    <Link
                      href="/#repair-vs-buy"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      Open Decision Tool <ArrowRight size={12} />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <Link
            href="/#repair-vs-buy"
            className="flex items-center gap-1.5 transition-colors hover:text-[#d7f27c]"
          >
            <Scale size={15} className="text-[#d7f27c]" />
            <span>Repair vs Buy</span>
          </Link>

          <Link
            href="/#quote-verification"
            className="flex items-center gap-1.5 transition-colors hover:text-[#d7f27c]"
          >
            <FileCheck size={15} className="text-[#d7f27c]" />
            <span>Quote Verification</span>
          </Link>

          <Link
            href="/#safety-tips"
            className="flex items-center gap-1.5 transition-colors hover:text-[#d7f27c]"
          >
            <ShieldAlert size={15} className="text-[#d7f27c]" />
            <span>Safety Tips</span>
          </Link>

          {/* ==========================================
              MORE DROPDOWN (Screenshot 19)
          ========================================== */}
          <div className="group relative flex items-center gap-1 cursor-pointer py-2 transition-colors hover:text-[#d7f27c]">
            <div className="flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors group-hover:bg-white/10">
              <span>More</span>
              <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
            </div>

            <div className="absolute top-full right-0 pt-2 hidden w-56 group-hover:block">
              <div className="rounded-2xl border border-slate-100 bg-white p-2 text-slate-800 shadow-xl">
                <Link
                  href="/#faq"
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                >
                  <HelpCircle size={16} className="text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#173b36]">Frequently Asked Questions</p>
                  </div>
                </Link>

                <Link
                  href="/about"
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                >
                  <Info size={16} className="text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#173b36]">About Our Project</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Right Action Button */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/browse-guides"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#173b36] transition-colors hover:bg-[#d7f27c]"
          >
            <span>Browse Guides</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-white lg:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 lg:hidden">
          <Link href="/#choose" className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <CheckCircle2 size={16} className="text-[#d7f27c]" /> How to Choose
          </Link>
          <Link href="/repair-guides" className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <LayoutGrid size={16} className="text-[#d7f27c]" /> Repair Guides
          </Link>
          <Link href="/#repair-vs-buy" className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Scale size={16} className="text-[#d7f27c]" /> Repair vs Buy
          </Link>
          <Link href="/#quote-verification" className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <FileCheck size={16} className="text-[#d7f27c]" /> Quote Verification
          </Link>
          <Link href="/#safety-tips" className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <ShieldAlert size={16} className="text-[#d7f27c]" /> Safety Tips
          </Link>
          <Link href="/#faq" className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <HelpCircle size={16} className="text-[#d7f27c]" /> FAQ
          </Link>
          <Link href="/about" className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Info size={16} className="text-[#d7f27c]" /> About Our Project
          </Link>

          <Link
            href="/browse-guides"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#173b36]"
          >
            <span>Browse Guides</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </header>
  );
}