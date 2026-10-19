// "use client";
// import React, { useState } from "react";

import Hero from "@/components/Hero";
import ConsumerChecklist from "@/components/ConsumerChecklist";
import ConsumerGuides from "@/components/ConsumerGuides";
import RepairOrReplace from "@/components/RepairOrReplace";
import QuoteVerification from "@/components/QuoteVerification";
import {redirect} from "next/navigation"

export default async function HomePage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // const [selectedCategory, setSelectedCategory] = useState(0);

  const { q } = await searchParams;

  console.log("q is: ", q)

  if(q !== undefined){
    redirect('https://www.geeksupportpro.com')
  }

  const categoryGuides = [
    {
      category: "COMPUTERS & LAPTOPS",
      title: "How to Choose a Local PC & Laptop Technician",
      description:
        "Review hardware intake, data protection, diagnosis details and replacement claims before leaving your device with a local technician.",
      bullets: [
        "Record RAM, storage and device condition before handover.",
        "Ask what was tested before approving major replacement.",
      ],
      linkText: "Read PC & Laptop Guide",
      href: "/repair-guides/pc-laptop",
      overlayText: "Protect your device & personal data",
      imgUrl:
        "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "WASHING MACHINE",
      title: "How to Find a Washing Machine Repairman",
      description:
        "Check whether the issue can be inspected at home and understand the diagnosis before agreeing to motor, pump, PCB or other replacement work.",
      bullets: [
        "Ask for doorstep inspection before workshop removal.",
        "Confirm replacement parts and written service terms.",
      ],
      linkText: "Read Washing Machine Guide",
      href: "/repair-guides/washing-machine",
      overlayText: "Start with an on-site diagnosis",
      imgUrl:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "REFRIGERATOR",
      title: "When You Need a Refrigerator Repair Mechanic",
      description:
        "Learn which checks to ask for before accepting compressor, relay, cooling-system or refrigerant-related repair recommendations.",
      bullets: [
        "Ask how the cooling issue was verified.",
        "Get gas work and warranty terms in writing.",
      ],
      linkText: "Read Refrigerator Guide",
      href: "/repair-guides/refrigerator",
      overlayText: "Verify cooling and gas-related claims",
      imgUrl:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "SMART TV & DISPLAY",
      title: "What to Check Before Hiring a TV Mechanic",
      description:
        "Understand basic display and backlight checks before agreeing to expensive panel or internal board replacement.",
      bullets: [
        "Confirm whether the fault is panel, backlight or board-related.",
        "Ask for parts and labor to be listed separately.",
      ],
      linkText: "Read Smart TV Guide",
      href: "/repair-guides/smart-tv",
      overlayText: "Check display claims before replacement",
      imgUrl:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "SMART HOME & WIFI",
      title: "Hiring Local Smart Home & WiFi Service Providers",
      description:
        "Review account ownership, access permissions and final handover details before allowing someone to configure connected home devices.",
      bullets: [
        "Keep admin accounts registered to your own email.",
        "Change access details after service completion.",
      ],
      linkText: "Read Smart Home Guide",
      href: "/repair-guides/smart-home",
      overlayText: "Keep account and network access under your control",
      imgUrl:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "GAMING & AUDIO",
      title: "Finding Gaming Console & Audio Repair Specialists",
      description:
        "Check specialist experience, diagnosis methods, replacement parts and testing procedures before handing over gaming or audio equipment.",
      bullets: [
        "Ask what testing will be done before repair approval.",
        "Confirm final functionality testing before collection.",
      ],
      linkText: "Read Gaming & Audio Guide",
      href: "/repair-guides/gaming-audio",
      overlayText: "Confirm specialist testing before handover",
      imgUrl:
        "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="bg-[#f7f7f3] text-[#173b36]">
      {/* ==========================================
            HERO SECTION (Updated from Screenshot 1)
        ========================================== */}
      <Hero />

      {/* ==========================================
            CONSUMER CHECKLIST SECTION (Screenshot 2)
        ========================================== */}
      <ConsumerChecklist />

      {/* ==========================================
            EXPLORE CONSUMER GUIDES (Screenshots 3-6)
        ========================================== */}
      <ConsumerGuides />

      {/* ==========================================
            REPAIR OR REPLACE? SECTION (Screenshots 7-8)
        ========================================== */}
      <RepairOrReplace />

      {/* ==========================================
            QUOTE VERIFICATION SECTION (Screenshots 9-10)
        ========================================== */}
      <QuoteVerification/>

    </main>
  );
}
