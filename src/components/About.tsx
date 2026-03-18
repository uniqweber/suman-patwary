"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "./shared/Magnetic";
import Image from "next/image";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding  overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* --- Image Section (5 Columns) --- */}
          <motion.div
            style={{ scale: imageScale, rotate: imageRotate }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-3/4 rounded-[40px] overflow-hidden bg-white/5 border border-white/10 relative">
              {/* Profile Image Placeholder with Gradient */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-transparent z-10" />
              <div className=" bg-[#0A0A0A] flex items-center justify-center">
                <Image
                  src="/profile-3.png"
                  alt="Suman Patwary"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge on Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-8 right-8 p-6 bg-black/70 backdrop-blur-sm border border-white/10 rounded-3xl z-20"
              >
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                  Current Focus
                </p>
                <p className="text-white text-sm font-bold uppercase">
                  Helping businesses launch high-converting websites using
                  WordPress, Shopify, Wix, and custom full-stack development.
                </p>
              </motion.div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          </motion.div>

          {/* --- Content Section (7 Columns) --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10 py-7"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold tracking-wide md:tracking-normal uppercase mb-6 ">
                I Don&apos;t Just Build Websites<br />
                <span className="text-primary ">I Build Digital Assets</span>
              </h2>
              <p className="subtitle max-w-2xl">
                I&apos;m <span className="text-white">Suman Patwary</span>, a
                web developer trusted by 650+ businesses worldwide. For over 8
                years, I&apos;ve helped startups, agencies, and growing
                companies launch high-performing websites that are fast,
                scalable, and built to convert. I lead a small team of web
                specialists, allowing us to deliver projects efficiently while
                maintaining high quality.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 border-t border-white/10 pt-10">
              {[
                {
                  title: "Conversion-Focused Development",
                  desc: "Every website is built to attract leads and convert visitors into customers.",
                },
                {
                  title: "SEO-Ready Website Structure",
                  desc: "Clean code and technical SEO foundations help your website rank higher on Google.",
                },
                {
                  title: "Ultra-Fast Performance",
                  desc: "Optimized for speed and Core Web Vitals.",
                },
                {
                  title: "Reliable Long-Term Support",
                  desc: "Support and improvements even after launch.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-1 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary transition-colors duration-300">
                      <Plus className="w-3 h-3 text-primary group-hover:text-black" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-white/90 leading-tight">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-sm text-white/40 font-medium pl-8 group-hover:text-white/60 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Magnetic>
                <a
                  href="#contact"
                  className="group text-white px-8 text-sm py-4 bg-primary font-black uppercase tracking-widest rounded-full flex items-center gap-3 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] transition-all"
                >
                  Start a Conversation{" "}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </Magnetic>

              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                  Available on
                </span>
                <span className="text-sm font-bold text-white/70">
                  Upwork & Fiverr
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
