"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Layout, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [ "WordPress", "Custom Code", "Shopify", "Wix"];

const projects = [
  {
    title: "Sophie Paterson",
    subtitle: "High-end luxury interior design portal",
    category: "WordPress",
    link: "https://www.sophiepatersoninteriors.com/",
    icon: Layout,
  },
  {
    title: "Composio",
    subtitle: "Platform for building powerful AI agents",
    category: "Custom Code",
    link: "https://composio.dev/",
    icon: Code2,
  },
  {
    title: "A Brighter Scent",
    subtitle: "Luxury fragrance e-commerce experience",
    category: "Shopify",
    link: "https://www.a-brighter-scent.com/",
    icon: ShoppingBag,
  },
  {
    title: "Chauffeur Amsterdam",
    subtitle: "Premium chauffeur service & booking system",
    category: "WordPress",
    link: "https://chauffeurserviceamsterdam.com",
    icon: Layout,
  },
  {
    title: "Granola AI",
    subtitle: "Intelligent meeting notes with AI assistance",
    category: "Custom Code",
    link: "https://www.granola.ai/",
    icon: Code2,
  },
  {
    title: "Luxe Decor",
    subtitle: "Interior decor store with conversion focus",
    category: "Wix",
    link: "#",
    icon: Globe,
  },
  {
    title: "Loft Kings UK",
    subtitle: "Construction and loft conversion specialist",
    category: "WordPress",
    link: "https://loftkingsuk.co.uk/",
    icon: Layout,
  },
  {
    title: "Lemma Studio",
    subtitle: "Creative digital experiences and design",
    category: "Custom Code",
    link: "https://lemma.studio/",
    icon: Code2,
  },
  {
    title: "Myloxstar Store",
    subtitle: "Fashion and retail Shopify development",
    category: "Shopify",
    link: "https://myloxstar.myshopify.com/",
    icon: ShoppingBag,
  },
  {
    title: "Legacy Injury Clinics",
    subtitle: "Medical and healthcare services platform",
    category: "WordPress",
    link: "https://legacyinjuryclinics.com/",
    icon: Layout,
  },
  {
    title: "Brainwave",
    subtitle: "Advanced AI landing page with futuristic UI",
    category: "Custom Code",
    link: "https://brainwave-uniqweber.vercel.app/",
    icon: Code2,
  },
  {
    title: "Franchisee Pros",
    subtitle: "Business franchise consulting portal",
    category: "WordPress",
    link: "https://franchiseepros.com/",
    icon: Layout,
  },
  {
    title: "Urban Loft",
    subtitle: "Real estate landing page for boutique lofts",
    category: "Wix",
    link: "#",
    icon: Globe,
  },
  {
    title: "Rokos Technology",
    subtitle: "IT solutions and technology services",
    category: "WordPress",
    link: "https://rokostechnology.com/",
    icon: Layout,
  },
  {
    title: "Lovistro",
    subtitle: "Premium boutique e-commerce application",
    category: "Custom Code",
    link: "https://lovistro.com/",
    icon: Code2,
  },
  {
    title: "Clinica Dental Vital",
    subtitle: "Professional dental care & booking portal",
    category: "WordPress",
    link: "https://clinicadentalvitalcr.com/en/",
    icon: Layout,
  },
  {
    title: "Giuli Gartner",
    subtitle: "Photographer & creative director portfolio",
    category: "Custom Code",
    link: "https://www.giuligartner.com/",
    icon: Code2,
  },
  {
    title: "Els Van Der Helm",
    subtitle: "Performance coaching and sleep expertise",
    category: "WordPress",
    link: "https://www.elsvanderhelm.com/",
    icon: Layout,
  },
  {
    title: "Charismatic Cleaners",
    subtitle: "Professional cleaning services landing page",
    category: "WordPress",
    link: "https://charismatic-cleaners.com/",
    icon: Layout,
  },
  {
    title: "Slot Predictor AI",
    subtitle: "AI-powered prediction tools showcase",
    category: "WordPress",
    link: "https://slotpredictorai.com/",
    icon: Layout,
  },
  {
    title: "The Max Letters",
    subtitle: "Personal branding and messaging service",
    category: "WordPress",
    link: "https://www.themaxletters.com/",
    icon: Layout,
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState("WordPress");

  const filteredProjects = projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding  ">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Header & Filters --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-10 lg:mb-20">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-wide md:tracking-normal uppercase mb-6">
              Recent Projects.
            </h2>
            <p className="subtitle">
              A curated collection of digital experiences built with precision
              and modern tech stacks.
            </p>
          </div>

          {/* Minimalist Tab Switcher */}
          <div className="flex flex-wrap gap-1 bg-[#0A0A0A] p-1 rounded-full border border-white/5 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 lg:px-5 py-2 rounded-full text-[9px] lg:text-[10px] font-bold uppercase tracking-widest leading-none transition-all ${
                  filter === cat
                    ? "bg-primary text-white shadow-sm"
                    : "text-white/30 hover:text-white hover:bg-white/2"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Refined Project List --- */}
        <div className="border-t border-white/10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  className="group flex justify-between py-6 hover:px-2 hover:md:px-5  border-b border-white/5 hover:bg-white/1 transition-all duration-500  relative overflow-hidden"
                >
                  {/* Subtle Background Slide Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-primary/3 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />

                  <div className="flex items-center gap-6 md:gap-10 relative z-10">
                    {/* Compact Icon */}
                    <div className="hidden  md:block text-white/30 border-r border-white/10 pr-5 group-hover:text-primary transition-colors group-hover:border-primary">
                      <project.icon className="size-5" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white/70 group-hover:text-white transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/20 text-sm md:text-base font-medium group-hover:text-white/40 transition-colors">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className=" flex items-center gap-8 relative z-10">
                    <span className="hidden sm:block text-[9px] font-black uppercase tracking-[0.3em] text-white/10 group-hover:text-primary/50 transition-colors">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-black transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- Compact Footer --- */}
        {/* <div className="mt-20 flex justify-center">
          <Link
            href="/all-projects"
            className="group flex items-center gap-3 text-white/20 hover:text-white transition-all py-3 bg-white/3 hover:bg-primary rounded-full px-7 border border-white/5"
          >
            <span className="text-sm font-semibold uppercase tracking-widest">
              View Full Archive
            </span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
