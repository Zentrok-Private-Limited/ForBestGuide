"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Menu,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Repair guides", href: "/repair-guides" },
  { label: "How to choose", href: "/how-to-choose" },
  { label: "Resources", href: "/resources" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const mobileItems = [
    ...navItems,
    { label: "About our guides", href: "/about-our-guides" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f7f7f3]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="flex size-10 items-center justify-center rounded-2xl bg-[#173b36] text-[#d7f27c] shadow-lg">
            <ShieldCheck size={20} />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-[#173b36]">
            For Best Guide
          </span>
        </Link>
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-[#173b36]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/about-our-guides"
            className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[#173b36]"
          >
            About <ChevronDown size={15} />
          </Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/search"
            aria-label="Search"
            className="rounded-full p-2 text-slate-500 hover:bg-white hover:text-[#173b36]"
          >
            <Search size={18} />
          </Link>
          <Link
            href="/quote-checklist"
            className="rounded-full bg-[#173b36] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Get prepared <ArrowRight className="ml-1 inline" size={15} />
          </Link>
        </div>
        <button
          type="button"
          className="rounded-xl p-2 text-[#173b36] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-[#f7f7f3] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {mobileItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#173b36]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote-checklist"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#173b36] px-5 py-3 text-center font-semibold text-white"
            >
              Get prepared
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#173b36] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#d7f27c] text-[#173b36]">
              <ShieldCheck size={18} />
            </span>
            <span className="font-serif text-xl font-semibold">
              For Best Guide
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            Calm, practical guidance for making smarter decisions about the
            things you use every day.
          </p>
        </div>
        <FooterColumn title="Explore" links={navItems.slice(1)} />
        <FooterColumn
          title="Decision tools"
          links={[
            { label: "Repair or replace", href: "/repair-or-replace" },
            { label: "Quote checklist", href: "/quote-checklist" },
            { label: "Safety tips", href: "/safety-tips" },
          ]}
        />
        <FooterColumn
          title="About"
          links={[
            { label: "Our guides", href: "/about-our-guides" },
            { label: "FAQ", href: "/faq" },
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]}
        />
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row">
        <span>© 2026 For Best Guide</span>
        <span>Independent information for better choices.</span>
      </div>
    </footer>
  );
}
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d7f27c]">
        {title}
      </p>
      <div className="flex flex-col gap-3 text-sm text-white/70">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}

export const categories = [
  {
    title: "PC & Laptop",
    text: "Troubleshoot slowdowns, charging issues, overheating, and everyday computer problems.",
    href: "/pc-laptop",
    tag: "Computing",
  },
  {
    title: "Washing Machine",
    text: "Understand leaks, noises, drainage problems, and when a repair is worth it.",
    href: "/washing-machine",
    tag: "Appliances",
  },
  {
    title: "Refrigerator",
    text: "Get practical context for cooling, ice, water, and unusual sound issues.",
    href: "/refrigerator",
    tag: "Appliances",
  },
  {
    title: "Smart TV & Display",
    text: "Make sense of blank screens, picture quality, sound, and connection problems.",
    href: "/smart-tv-display",
    tag: "Entertainment",
  },
  {
    title: "Smart Home & WiFi",
    text: "Build a more reliable connected home with clear steps and better questions.",
    href: "/smart-home-wifi",
    tag: "Connected home",
  },
  {
    title: "Gaming & Audio",
    text: "Solve common console, headset, speaker, and controller frustrations.",
    href: "/gaming-audio",
    tag: "Entertainment",
  },
];
export const tools = [
  {
    title: "How to Choose",
    href: "/how-to-choose",
    text: "Compare options without getting lost in specifications.",
  },
  {
    title: "Repair or Replace",
    href: "/repair-or-replace",
    text: "Use a simple framework for the next decision.",
  },
  {
    title: "Quote Checklist",
    href: "/quote-checklist",
    text: "Know what to ask before approving service.",
  },
];

export function CategoryCard({ item }: { item: (typeof categories)[number] }) {
  return (
    <Link
      href={item.href}
      className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8aa231]">
        {item.tag}
      </span>
      <h3 className="mt-8 font-serif text-2xl text-[#173b36]">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">{item.text}</p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#173b36]">
        Read the guide <ArrowRight size={16} />
      </span>
    </Link>
  );
}

export const commonSections = [
  {
    heading: "Start with the symptoms",
    body: "A reliable decision begins with observation. Note what changed, when it started, unusual sounds or smells, and whether the issue is constant or intermittent. Those details help you ask better questions and avoid paying for guesswork.",
  },
  {
    heading: "Ask for a clear estimate",
    body: "Before work begins, ask what the diagnosis covers, which parts may be needed, and what happens if the repair reveals a second issue. A useful estimate separates labor, parts, taxes, and any service or trip charge.",
  },
  {
    heading: "Keep a simple paper trail",
    body: "Save the estimate, invoice, warranty terms, and any messages about the work. A short record makes it easier to compare future service, understand coverage, and resolve a disagreement respectfully.",
  },
];

export function ArticlePage({
  title,
  eyebrow,
  intro,
  sections = commonSections,
  children,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  sections?: { heading: string; body: string }[];
  children?: React.ReactNode;
}) {
  return (
    <Layout>
      <main className="bg-[#f7f7f3] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8aa231]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-[#173b36] md:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            {intro}
          </p>
          {children}
          <div className="mt-16 grid gap-10 border-t border-slate-200 pt-12">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-3xl text-[#173b36]">
                  {section.heading}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}


export function SearchPage() {
  return (
    <ArticlePage
      title="Search the guide"
      eyebrow="Find your next step"
      intro="Search is being shaped around practical questions. Browse the topic hubs below while you decide where to start."
    >
      <div className="mt-10 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <Search className="ml-3 text-slate-400" size={20} />
        <input
          className="w-full bg-transparent px-2 py-3 outline-none"
          placeholder={'Try "washing machine", "warranty", or "estimate"'}
          aria-label="Search guides"
        />
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {categories.slice(0, 4).map((item) => (
          <CategoryCard key={item.href} item={item} />
        ))}
      </div>
    </ArticlePage>
  );
}

export function ContactPage() {
  return (
    <ArticlePage
      title="Tell us what you need"
      eyebrow="Contact"
      intro="Have a question about a guide or a topic you would like us to cover? Send a note and we will point you in the right direction."
    >
      <form className="mt-10 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <label className="grid gap-2 text-sm font-medium text-[#173b36]">
          Your name
          <input
            required
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#173b36]">
          Email address
          <input
            required
            type="email"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#173b36]">
          How can we help?
          <textarea
            required
            className="min-h-32 rounded-xl border border-slate-200 px-4 py-3 outline-none"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-[#173b36] px-5 py-3 font-semibold text-white"
        >
          Send message
        </button>
      </form>
    </ArticlePage>
  );
}

export function CategoryPage({ item }: { item: (typeof categories)[number] }) {
  return (
    <ArticlePage
      title={`${item.title} guides`}
      eyebrow={item.tag}
      intro={item.text}
    >
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          "Common symptoms",
          "Questions to ask",
          "When to call a professional",
        ].map((heading) => (
          <div key={heading} className="rounded-2xl bg-[#dcecc1] p-6">
            <h2 className="font-serif text-2xl text-[#173b36]">{heading}</h2>
            <p className="mt-3 text-sm leading-6 text-[#173b36]/75">
              A calm starting point for understanding the problem and choosing
              your next step.
            </p>
          </div>
        ))}
      </div>
    </ArticlePage>
  );
}

export function NotFoundPage() {
  return (
    <Layout>
      <main className="flex min-h-[65vh] items-center justify-center bg-[#f7f7f3] px-5 py-20 text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa231]">
            404
          </p>
          <h1 className="mt-4 font-serif text-5xl text-[#173b36]">
            That guide is not here.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-slate-600">
            Try a topic from the guide library or return to the home page.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#173b36] px-6 py-3 font-semibold text-white"
          >
            Back home
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export const pageContent: Record<
  string,
  { title: string; intro: string; eyebrow?: string }
> = {
  "about-our-guides": {
    title: "About our guides",
    intro:
      "For Best Guide exists to make complicated service moments feel more manageable. We organize useful questions, practical context, and calm next steps in one place.",
    eyebrow: "About For Best Guide",
  },
  "repair-guides": {
    title: "Repair guides for real life",
    intro:
      "Plain-language guidance for the moments when something stops working and you need a sensible next step.",
    eyebrow: "Repair guides",
  },
  "how-to-choose": {
    title: "How to choose with confidence",
    intro:
      "Compare options without getting lost in specifications. Start with the outcome you need, then evaluate the details that matter.",
    eyebrow: "Decision tool",
  },
  "repair-or-replace": {
    title: "Repair or replace?",
    intro:
      "Use age, condition, repair cost, safety, and future reliability to make a decision that fits your situation.",
    eyebrow: "Decision tool",
  },
  "quote-checklist": {
    title: "The quote checklist",
    intro:
      "A short list of questions to ask before approving service, buying a replacement, or committing to a repair.",
    eyebrow: "Decision tool",
  },
  "safety-tips": {
    title: "Safety tips before you start",
    intro:
      "Know when to stop, when to unplug, and when a qualified professional is the right next step.",
    eyebrow: "Safety",
  },
  faq: {
    title: "Frequently asked questions",
    intro:
      "Answers to common questions about using For Best Guide and making better repair decisions.",
    eyebrow: "FAQ",
  },
  privacy: {
    title: "Privacy, plainly stated",
    intro:
      "We believe information about information should be easy to understand. This page explains the simple principles behind For Best Guide.",
    eyebrow: "Privacy",
  },
  terms: {
    title: "Terms of use",
    intro:
      "These terms explain how to use the educational information published by For Best Guide.",
    eyebrow: "Terms",
  },
  disclaimer: {
    title: "Important disclaimer",
    intro:
      "For Best Guide provides general educational information, not a diagnosis, quote, guarantee, or substitute for qualified professional advice.",
    eyebrow: "Disclaimer",
  },
  resources: {
    title: "Resources that make decisions easier",
    intro:
      "Use these checklists and explanations to prepare for a service visit, evaluate an estimate, and make a plan.",
    eyebrow: "Resources",
  },
};

export function StandardPage({ slug }: { slug: string }) {
  const content = pageContent[slug] ?? {
    title: "Guide",
    intro:
      "Clear, practical information for making a better-informed next decision.",
    eyebrow: "For Best Guide",
  };
  return (
    <ArticlePage
      title={content.title}
      eyebrow={content.eyebrow ?? "For Best Guide"}
      intro={content.intro}
      sections={
        slug === "faq"
          ? [
              {
                heading: "Can I rely on a guide for a diagnosis?",
                body: "No. Use the information to prepare questions and understand general possibilities, then consult a qualified professional for diagnosis and work.",
              },
              {
                heading: "Are the guides sponsored?",
                body: "For Best Guide is designed as independent educational content. We do not present invented endorsements or guarantees.",
              },
              ...commonSections,
            ]
          : commonSections
      }
    />
  );
}

export { ArrowRight };

export function PrivacyPage() {
  return <StandardPage slug="privacy" />;
}
export function DetailPage({ title, intro }: { title: string; intro: string }) {
  return <ArticlePage title={title} eyebrow="Guide" intro={intro} />;
}
