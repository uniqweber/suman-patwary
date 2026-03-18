"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className=" pt-20 overflow-hidden">
      {/* 1. Large Marquee Text - Eta design-e ekta dynamic movement anbe */}
      <div className="border-y border-white/5 py-10 bg-white/1">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="text-[60px] md:text-[120px] font-black uppercase tracking-wide  text-white/5 mx-5 brand-font"
            >
              Let&apos;s Talk <span className="text-primary/20">✳︎</span> Start a
              Project <span className="text-primary/20">✳︎</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-15">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
          {/* Left Side: CTA */}
          <div className="md:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-white tracking-tight uppercase">
                Have a Project in Mind?
              </h3>
              <p className="subtitle leading-relaxed lg:pr-10">
                I help startups, agencies, and business owners turn their ideas
                into high-performing websites. If you&apos;re looking for a
                reliable developer to build, redesign, or clone a website,
                let&apos;s talk about your project.
              </p>
            </div>

            <Link
              href="mailto:sumanpatwarydev@gmail.com"
              className="inline-flex items-center gap-4 text-xl font-bold text-white group"
            >
              sumanpatwarydev@gmail.com
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <ArrowRight className="w-5 h-5 group-hover:text-black group-hover:-rotate-45 transition-all" />
              </div>
            </Link>
          </div>

          {/* Middle: Navigation */}
          <div className="md:col-span-3 space-y-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">
              Navigation
            </p>
            <ul className="space-y-4">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm uppercase  text-white/50 font-bold tracking-widest hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Location & Socials */}
          <div className="md:col-span-3 space-y-10">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                Location
              </p>
              <p className="text-sm  text-white/50 font-bold tracking-widest leading-relaxed uppercase ">
                Based in Bangladesh <br />{" "}
                <span className="text-white/30 text-[10px]">
                  Serving Worldwide
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                Connect
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com/in/sumanpatwary",
                  },
                  {
                    name: "Upwork",
                    href: "https://upwork.com/freelancers/sumanpatwary",
                  },
                  { name: "Fiverr", href: "https://fiverr.com/sumanpatwary" },
                  { name: "GitHub", href: "https://github.com/sumanpatwary" },
                  { name: "WhatsApp", href: "https://wa.me/8801777868445" },
                  { name: "Telegram", href: "https://t.me/sumanpatwary" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors border border-white/5 px-3 py-1.5 rounded-full bg-white/3"
                  >
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keyword Line */}
        <div className="mt-20 py-8 border-y border-white/5">
          <p className="text-[10px] font-bold flex flex-wrap justify-center gap-10 text-white/20 uppercase tracking-[0.2em] text-center">
            {[
              "WordPress Developer",
              "Shopify Developer",
              "Wix Developer",
              "Website Cloning Expert",
              "Custom Web Development",
              "Web Design",
              "Next.js Developer",
            ].map((item) => (
              <span
                key={item}
                className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] text-center"
              >
                {item}
              </span>
            ))}
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.25em]">
            © 2026 Suman Patwary • All rights reserved.
          </p>
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.25em]">
            Designed for Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
