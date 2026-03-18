"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project scope. A typical business website usually takes 1–3 weeks, while more complex platforms or custom web applications may take 4–8 weeks. Before starting any project, I always provide a clear timeline and milestones so you know exactly when your website will be ready.",
  },
  {
    question: "Can you clone or recreate an existing website?",
    answer:
      "Yes. If you have a website design you like, I can clone and rebuild it with your branding, content, and improvements. This is one of my most requested services. I can recreate websites on WordPress, Shopify, Wix, or custom frameworks depending on your needs.",
  },
  {
    question: "Can you build a website from Figma or design files?",
    answer:
      "Absolutely. I can convert Figma designs, screenshots, reference websites, or documents into a fully functional website with pixel-perfect accuracy. All websites are responsive, fast, and optimized for performance.",
  },
  {
    question: "Which platform should I choose for my website?",
    answer:
      "It depends on your business goals. WordPress is best for business websites and flexibility. Shopify is best for eCommerce stores. Wix / Squarespace are simple and easy to manage. Next.js / Custom Development is best for complex platforms. I’ll always recommend the best solution for your project and long-term growth.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Every website I build follows a mobile-first approach to ensure it works perfectly on smartphones, tablets, and desktops. Today, most users visit websites from mobile devices, so performance and usability are always a top priority.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, I offer post-launch support and maintenance packages. This includes security updates, performance monitoring, content updates, and fixing any technical issues to ensure your website runs smoothly 24/7.",
  },

  {
    question: "Can I update the content on my own later?",
    answer:
      "Yes. Depending on the platform (WordPress, Shopify, or a custom CMS), I’ll set it up so you can easily edit text, swap images, and manage blog posts without needing any coding knowledge. I also provide a quick video walkthrough if needed.",
  },

  {
    question: "Do I need to buy hosting and a domain separately?",
    answer:
      "Yes, the client typically covers the cost of the domain and hosting. However, I can recommend the best and most cost-effective providers based on your project requirements and help you set everything up correctly.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("group  transition-all duration-500")}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-7 text-left"
      >
        <span
          className={cn(
            "text-xl md:text-2xl font-medium tracking-tight transition-all duration-300",
            isOpen ? "text-primary" : "text-white/80 group-hover:text-white",
          )}
        >
          {question}
        </span>
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500",
            isOpen
              ? "border-primary bg-primary rotate-180"
              : "border-white/10 group-hover:border-white/20",
          )}
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-black" />
          ) : (
            <Plus className="w-5 h-5 text-white/40" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-8 text-white/50 text-lg font-medium leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-32">
          {/* --- Sticky Left Side --- */}
          <div className="lg:w-96 shrink-0 ">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-wide md:tracking-normal uppercase mb-6">
                FAQ
              </h2>
              <p className="subtitle max-w-sm">
                Everything you need to know about the process, technology, and
                project delivery when working with me.
              </p>
            </div>

            <div className="bg-white/3 p-6 rounded-[24px] border border-white/5 mt-8 space-y-4">
              <p className="text-sm font-bold text-white uppercase tracking-widest">
                Have a specific question?
              </p>
              <p className="text-sm  text-white/50 leading-relaxed font-medium">
                If your question isn&apos;t listed here, feel free to send me a
                message. I usually reply within a few hours.
              </p>
              <a
                href="#contact"
                className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-xs group pt-2"
              >
                Message me now{" "}
                <MessageCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* --- Right Side Accordion --- */}
          <div className="w-full -mt-7">
            <div className="divide-y divide-white/5">
              {faqs.map((faq, index) => (
                <FAQItem key={index} index={index} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
