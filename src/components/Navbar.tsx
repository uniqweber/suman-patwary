"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-100 transition-all duration-500",
        scrolled ? "py-4" : "py-2",
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "flex items-center justify-between  py-4 rounded-2xl transition-all duration-500 border",
            scrolled
              ? "bg-white/3 backdrop-blur-2xl px-5 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "bg-transparent border-transparent",
          )}
        >
          <a href="#home" className="inline-flex items-center gap-2.5">
            <Code2 size={32} strokeWidth={3} className="text-primary" />
            <div className="flex flex-col leading-none text-xs uppercase tracking-widest font-bold gap-0.5">
              <span>Suman</span>
              <span>Patwary</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all duration-500"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="btn-highlight py-2.5! px-6! text-xs! tracking-widest uppercase font-bold"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden relative z-200 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden fixed inset-0 z-90 bg-bg-dark flex flex-col items-center justify-center space-y-8 px-6 pt-20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-white hover:text-primary transition-all uppercase tracking-tighter"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => setIsOpen(false)}
              className="btn-highlight w-full max-w-xs uppercase tracking-widest font-bold"
            >
              Contact Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
