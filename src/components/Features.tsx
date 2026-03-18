"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Rocket, ShieldCheck, Target, Zap } from "lucide-react";
import React from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const marqueeItems = [
  "WordPress",
  "Shopify",
  "Wix",
  "Squarespace",
  "ReactJS/NextJS",
  "PHP/NodeJS",
  "WordPress",
  "Shopify",
  "Wix",
  "Squarespace",
  "ReactJS/NextJS",
  "PHP/NodeJS",
];
export function Features() {
  return (
    <section className="section-padding text-white overflow-hidden">
      <div className="max-w-7xl px-6 mx-auto">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-wide md:tracking-normal uppercase mb-6">
            HOW I HELP BUSINESSES GROW ONLINE
          </h2>
          <p className="subtitle">
            I combine conversion-focused design, clean development, and scalable
            technology to build websites that look great, load fast, and turn
            visitors into customers.
          </p>
        </motion.div>

        {/* --- Asymmetric Bento Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
        >
          {/* Box 1: Speed (Large Square) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-7 group relative p-10 rounded-[40px] bg-[#0A0A0A] border border-white/5 overflow-hidden"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Insanely Fast Performance
                </h3>
                <p className="text-white/40 text-lg max-w-sm">
                  Speed matters. I optimize WordPress, Shopify, and custom
                  websites to achieve high Lighthouse scores and lightning-fast
                  loading times so visitors stay engaged and Google ranks your
                  site higher.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10 italic">
                  Core Web Vitals Optimized
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10 italic">
                  Lightning-Fast Load Time
                </span>
              </div>
            </div>
            {/* Background Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition-all" />
          </motion.div>

          {/* Box 2: Conversion (Tall Rectangle) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 group relative p-10 rounded-[40px] bg-[#0A0A0A] border border-white/5 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Built to Convert</h3>
              <p className="text-white/40 text-lg">
                Your website should work like a 24/7 sales machine. I design
                websites that guide visitors toward taking action — whether
                it&apos;s contacting you, booking services, or making purchases.
              </p>
            </div>
            <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-sm text-white/60 font-medium">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-white/40 uppercase text-[10px] font-black tracking-widest">
                  Conversion-focused layout
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60 font-medium">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-white/40 uppercase text-[10px] font-black tracking-widest">
                  User-first UI/UX design
                </span>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Development (Horizontal Rectangle) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 group relative p-10 rounded-[40px] bg-[#0A0A0A] border border-white/5 overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Clean & Scalable Development
            </h3>
            <p className="text-white/40 text-lg">
              I build websites using WordPress, Wix, Shopify, Squarespace,
              Next.js, and PHP, ensuring your website is fast, scalable, and
              easy to manage as your business grows.
            </p>
          </motion.div>

          {/* Box 4: SEO (Small Square - Highlighted) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-7 group relative p-10 rounded-[40px] bg-primary overflow-hidden"
          >
            <div className="relative z-10 flex flex-col h-full justify-between text-black">
              <div>
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-tight mb-4 text-black">
                  Get Found on Google
                </h3>
                <p className="font-bold text-black/60 text-lg max-w-md">
                  A beautiful website means nothing if people can&apos;t find
                  it. I build websites with SEO-friendly structure, optimized
                  code, and high performance to help your business rank higher
                  on Google and attract more clients.
                </p>
              </div>
              <div className="flex justify-end pt-10   items-center gap-4">
                <span className="text-xs font-black uppercase text-black/40">
                  Ready to scale?
                </span>
                <Rocket className="w-12 h-12 text-black/30 -rotate-12" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Trust Bar / Technologies --- */}

        <div className="relative overflow-hidden my-12 p-8 border-y border-white/10 opacity-80 transition-all duration-700">
          <div className="animate-marquee whitespace-nowrap flex gap-7 items-center">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest hover:text-primary ">
                  {item}
                </span>

                <div className="w-18 h-px bg-white/10" />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className=" text-center">
          <p className="font-semibold uppercase tracking-wider text-xs text-white/30 leading-none">
            * As an agency, we are capable of all types of websites without
            limitations
          </p>
        </div>
      </div>
    </section>
  );
}
