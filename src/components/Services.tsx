"use client";

import {
  ArrowUpRight,
  Code2,
  Copy,
  Eye,
  Layout,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "WordPress Development",
    desc: "Custom WordPress websites built for speed, flexibility, and easy management. I create modern websites using Elementor and custom development so businesses can easily scale their online presence.",
    icon: Layout,
    status: "MOST POPULAR",
    featured: true,
  },
  {
    title: "Custom Web Apps (Next.js & React)",
    desc: "High-performance web applications built with Next.js, React, and modern backend technologies. Designed for speed, scalability, and smooth user experiences.",
    icon: Code2,
    status: "HIGH-END DEVELOPMENT",
  },
  {
    title: "Clone & Rebuild Any Website",
    desc: "Found a website design you like? I can clone, rebuild, and rebrand any website with your logo, colors, and content while improving speed, structure, and performance.",
    icon: Copy,
    status: "FAST DELIVERY",
    featured: true,
  },
  {
    title: "Figma / Design to Website",
    desc: "Turn Figma designs, screenshots, reference websites, or documents into fully functional websites with pixel-perfect accuracy and responsive layouts.",
    icon: Eye,
    status: "PIXEL PERFECT",
  },
  {
    title: "Website Optimization & Support",
    desc: "Improve your existing website with speed optimization, SEO improvements, security updates, and ongoing support to keep your website performing at its best.",
    icon: ShieldCheck,
    status: "PERFORMANCE FOCUSED",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Header & Subtitle --- */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wide md:tracking-normal uppercase mb-6">
            SOLUTIONS I PROVIDE
          </h2>
          <p className="subtitle">
            Everything you need to launch, rebuild, or scale a professional
            website. From website cloning and redesign to full-stack
            development, I help businesses turn ideas and designs into fast,
            high-performing digital platforms.
          </p>
        </div>

        {/* --- Optimized Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[32px] bg-linear-to-b from-white/3 to-transparent border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                service.featured
                  ? "border-primary/40 bg-white/5 shadow-[0_0_30px_rgba(99,102,241,0.05)]"
                  : "border-white/5 hover:border-primary/30 hover:bg-white/4"
              }`}
            >
              {/* Radial Hover Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    service.featured
                      ? "bg-primary text-black"
                      : "bg-white/3 border border-white/10 text-primary group-hover:bg-primary group-hover:text-black"
                  }`}
                >
                  <service.icon className="w-6 h-6" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/30 text-[15px] leading-relaxed font-medium group-hover:text-white/50 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Section - Compact */}
              <div className="relative z-10 mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                <span
                  className={`text-[9px] font-black uppercase tracking-[0.25em] transition-colors ${
                    service.featured
                      ? "text-primary"
                      : "text-white/20 group-hover:text-primary"
                  }`}
                >
                  {service.status}
                </span>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}{" "}
          <div className="group relative p-8 rounded-[32px] bg-primary flex flex-col justify-between overflow-hidden lg:col-span-1 md:col-span-2 lg:aspect-auto">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-black/10 rounded-full blur-3xl group-hover:bg-black/20 transition-all duration-700" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6 shadow-xl">
                <Zap className="w-6 h-6 text-primary fill-primary" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-black leading-tight tracking-tight">
                  NOT SURE WHICH <br /> ONE YOU NEED?
                </h3>
                <p className="text-black/70 text-[15px] font-bold leading-snug">
                  Don&apos;t waste time guessing. Let&apos;s hop on a 10-minute
                  quick call. I’ll audit your requirements and give you a clear
                  roadmap—totally free.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="relative z-10 mt-8 w-full bg-black text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:gap-4 transition-all active:scale-95">
              GET A FREE CONSULTATION
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
