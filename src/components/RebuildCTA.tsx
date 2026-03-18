"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function RebuildCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-10 md:p-20 rounded-[40px] bg-linear-to-br from-primary/10 to-transparent border border-white/5 overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="space-y-8 lg:col-span-3">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold uppercase leading-none">
                  Send Me Any Website<br />
                  <span className="text-primary">
                    I&apos;ll Rebuild It Better
                  </span>
                </h2>
                <p className="subtitle max-w-xl">
                  Have a website design you like but want it customized for your
                  brand? Send me the reference website and I&apos;ll clone,
                  redesign, and rebuild it with your branding, content, and
                  improved performance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Website cloning and redesign",
                  "Convert designs into websites",
                  "Faster loading & performance",
                  "SEO-friendly structure",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-white/70 uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 space-y-4">
                <a
                  href="#contact"
                  className="btn-highlight inline-flex items-center gap-3 group"
                >
                  Send a Website to Rebuild{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest pl-2">
                  I usually reply within a few hours.
                </p>
              </div>
            </div>

            <div className="hidden lg:col-span-2 lg:block  relative h-full">
              {/* Main Vertical Container */}
              <div className="absolute inset-0 bg-white/5  border border-white/10 px-3 pb-4 pt-2.5  group rounded-xl">
                {/* Browser Header dots */}
                <div className=" flex items-center mb-2 justify-between">
                  <div className="flex gap-1.5  px-2">
                    <div className="size-2.5 rounded-full bg-red-500" />
                    <div className="size-2.5 rounded-full bg-yellow-500" />
                    <div className="size-2.5 rounded-full bg-green-500" />
                  </div>
                  <p className="text-[9px] pr-1.5 font-bold tracking-widest text-white/30 uppercase leading-none ">
                    www.oldwebsite.com
                  </p>
                </div>

                {/* Scrolling Mockup Content */}
                <div className="relative h-full w-full bg-black/20 rounded-lg border border-black/5 overflow-hidden">
                  {/* Moving Content - Website sections clone houya bujhate */}
                  <motion.div
                    animate={{ y: [0, -400] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="space-y-3 p-3"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                      (i) => (
                        <div
                          key={i}
                          className="space-y-3 p-4 bg-black/40 rounded-xl border border-white/5"
                        >
                          <div className="h-2 w-20 bg-primary/40 rounded-full" />
                          <div className="h-24 w-full bg-white/5 rounded-lg" />
                          <div className="space-y-2">
                            <div className="h-1.5 w-full bg-white/10 rounded-full" />
                            <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
                          </div>
                        </div>
                      ),
                    )}
                  </motion.div>

                  {/* Static Overlay: The "Improve" Layer */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent z-10" />

                  {/* Center Floating Action Card */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="bg-black/80 backdrop-blur-xl border border-primary/30 px-14 py-6 rounded-3xl shadow-[0_0_50px_-12px_rgba(var(--primary),0.5)] flex flex-col items-center text-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                          Status
                        </span>
                        <p className="text-white font-bold text-sm leading-tight">
                          UPGRADING
                          <br />
                          YOUR DESIGN
                        </p>
                      </div>

                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((dot) => (
                          <motion.div
                            key={dot}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: dot * 0.2,
                            }}
                            className="w-1 h-1 bg-primary rounded-full"
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 z-40  transition-transform duration-500">
                  <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse" />

                    <div className="relative flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-emerald-500/30 px-4 py-2 rounded-2xl shadow-2xl">
                      {/* Animated Pulse Dot */}
                      <div className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                      </div>

                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-emerald-500 leading-none uppercase tracking-tighter">
                          +45% Conversion
                        </span>
                        <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">
                          Post-Rebuild
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glows */}
              <div className="absolute top-1/2 -right-10 w-40 h-80 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
