"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, Globe, Layout } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Custom Code", "WordPress", "Wix"];

const projects = [
  {
    title: "Eco-Stream SaaS",
    subtitle: "Real-time analytics dashboard for energy monitoring",
    category: "Custom Code",
    link: "#",
    icon: Code2,
  },
  {
    title: "Nexus Agency",
    subtitle: "Premium portfolio for a London-based creative studio",
    category: "WordPress",
    link: "#",
    icon: Layout,
  },
  {
    title: "Luxe Decor",
    subtitle: "Minimalist furniture store with high conversion rate",
    category: "Wix",
    link: "#",
    icon: Globe,
  },
  {
    title: "Fintech App",
    subtitle: "Secure mobile-first banking interface for startups",
    category: "Custom Code",
    link: "#",
    icon: Code2,
  },
  {
    title: "Traveler Pro",
    subtitle: "Booking system and travel guide for global explorers",
    category: "WordPress",
    link: "#",
    icon: Layout,
  },
  {
    title: "Urban Loft",
    subtitle: "Boutique real estate landing page with interactive maps",
    category: "Wix",
    link: "#",
    icon: Globe,
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <section id="portfolio" className="section-padding  ">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Header & Filters --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
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
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
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
                  className="group flex flex-col md:flex-row md:items-center justify-between py-6 hover:px-2 hover:md:px-5  border-b border-white/5 hover:bg-white/1 transition-all duration-500  relative overflow-hidden"
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

                  <div className="mt-6 md:mt-0 flex items-center gap-8 relative z-10">
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
        <div className="mt-20 flex justify-center">
          <Link
            href="/all-projects"
            className="group flex items-center gap-3 text-white/20 hover:text-white transition-all py-3 bg-white/3 hover:bg-primary rounded-full px-7 border border-white/5"
          >
            <span className="text-sm font-semibold uppercase tracking-widest">
              View Full Archive
            </span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
