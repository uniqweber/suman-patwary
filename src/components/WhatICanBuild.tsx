"use client";

import { motion } from "framer-motion";
import { Check, Layers3, Lock, Mouse } from "lucide-react";

export function WhatICanBuild() {
  const services = [
    "Clone or redesign any website",
    "Convert Figma or design files into a website",
    "Build websites from screenshots or references",
    "WordPress, Shopify, Wix, and Squarespace development",
    "Custom full-stack development using Next.js or PHP",
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold uppercase leading-none">
                What I Can <br />
                <span className="text-primary">Build For You</span>
              </h2>
              <p className="subtitle max-w-lg">
                Whether you have a design, reference website, or just an idea, I
                can turn it into a fully functional website.
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              {services.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-white/70 font-medium text-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full group"
          >
            {/* --- Main Browser Window Mockup (Premium Refinement) --- */}
            <div className="relative h-full w-full rounded-xl bg-[#080808] border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] overflow-hidden group/browser transition-all duration-500 ">
              {/* Browser Top Bar (More Realistic) */}
              <div className="h-11 border-b border-white/5 bg-white/3 flex items-center px-5 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 flex-1 h-7 rounded-lg bg-white/5 border border-white/5 flex items-center px-4 justify-between">
                  <span className="text-white/30 text-[11px] leading-none tracking-wider">
                    https://yourideatomore.com
                  </span>
                  <Lock className="w-3 h-3 text-white/20" />
                </div>
              </div>

              {/* Website Content Preview (Refined Layout) */}
              <div className="p-8 md:p-10 space-y-8">
                {/* Hero Section Mockup (Gradient + Text) */}
                <div className="space-y-4">
                  <div className="h-4 w-24 bg-linear-to-r from-primary/30 animate-pulse to-primary/10 rounded-full" />
                  <div className="space-y-2.5">
                    <div className="h-10 w-full bg-white/5 animate-pulse rounded-xl" />
                    <div className="h-10 w-2/3 bg-white/5 animate-pulse rounded-xl" />
                  </div>
                  <p className="text-white/20 text-sm max-w-sm font-medium">
                    Crafting digital experiences with pixel-perfect precision
                    and modern technologies.
                  </p>
                </div>

                {/* Grid Section Mockup (Premium Cards) */}
                <div className="grid grid-cols-2 gap-5 pt-2">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="relative  aspect-16/10 rounded-2xl bg-white/3 border border-white/5 p-5 flex flex-col justify-between overflow-hidden group/card transition-all duration-300 hover:border-primary/40 hover:bg-black/40 hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)]"
                    >
                      {/* Inner Glow on Hover */}
                      <div className="absolute -inset-px opacity-0 group-hover/card:opacity-100 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent transition-opacity duration-300" />

                      <div className="space-y-2.5 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-primary/10 animate-pulse border border-primary/10 flex items-center justify-center group-hover/card:border-primary/50 transition-colors">
                            <Layers3 className="w-3.5 h-3.5 text-primary/50" />
                          </div>
                          <div className="h-3 animate-pulse w-1/2 bg-white/10 rounded-full group-hover/card:bg-white/20 transition-colors" />
                        </div>
                        <div className="h-2 animate-pulse w-full bg-white/5 rounded-full" />
                        <div className="h-2 animate-pulse w-4/5 bg-white/5 rounded-full" />
                      </div>

                      {/* Premium Fake Button */}
                      <div className="h-8 w-24 animate-pulse mt-3 bg-primary/30 rounded-lg flex items-center justify-center relative z-10 shadow-lg shadow-black/20 group-hover/card:bg-primary/90 transition-colors">
                        <span className="text-black text-[10px] font-black uppercase tracking-wider">
                          Explore
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA Mockup (Interactive Feel) */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="h-16 w-full bg-[#0F0F0F] border border-white/5 rounded-3xl flex items-center justify-between px-7 mt-6 group/cta hover:border-primary/30 transition-colors"
                >
                  <div className="h-3.5 animate-pulse w-40 bg-white/5 rounded-full group-hover/cta:bg-white/10 transition-colors" />
                  <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover/cta:rotate-12 transition-transform">
                    <Mouse className="w-5 h-5 text-black" />
                  </div>
                </motion.div>
              </div>

              {/* Subtle Fade-out Gradient at the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#080808] to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
