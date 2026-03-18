"use client";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react"; // Loader যোগ করেছি সাবমিট স্টেট দেখাতে
import React, { useRef, useState } from "react";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    const SERVICE_ID = "service_tzia3mp";
    const TEMPLATE_ID = "template_cf0mkuw";
    const PUBLIC_KEY = "BJOHXRbSGPVjN6_EF";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        alert("Message sent successfully!");
        setIsSending(false);
        form.current?.reset();
      },
      (error) => {
        console.error("FAILED...", error.text);
        alert("Something went wrong. Please try again.");
        setIsSending(false);
      },
    );
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black rounded-[3rem] p-8 md:p-16">
          <div className="mb-16 gap-4 grid lg:grid-cols-2 lg:gap-15">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
              Let&apos;s Build{" "}
            </h2>
            <p className="text-white/30 text-sm md:text-base font-medium">
              Have a project in mind? Fill out the form below and I&apos;ll get
              back to you within 24 hours.
            </p>
          </div>

          {/* Form - ref এবং onSubmit অ্যাড করা হয়েছে */}
          <form ref={form} onSubmit={sendEmail} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {/* Name Field - name="name" অ্যাড করা হয়েছে */}
              <div className="group relative space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe *"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-2xl font-bold text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/15"
                />
              </div>

              {/* Email Field - name="email" অ্যাড করা হয়েছে */}
              <div className="group relative space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="email@example.com *"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-2xl font-bold text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/15"
                />
              </div>

              {/* Service Selection - name="service" অ্যাড করা হয়েছে */}
              <div className="group relative space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                  Service
                </label>
                <select
                  name="service"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-2xl font-bold text-white focus:outline-none focus:border-primary transition-all cursor-pointer appearance-none"
                >
                  {[
                    "WordPress Development",
                    "Shopify Development",
                    "Wix Development",
                    "Custom Web Apps (Next.js)",
                    "Clone & Rebuild Website",
                    "Figma to Website",
                    "Optimization & Support",
                  ].map((item) => (
                    <option key={item} value={item} className="bg-[#0A0A0A]">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Field - name="budget" অ্যাড করা হয়েছে */}
              <div className="group relative space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                  Budget
                </label>
                <input
                  name="budget"
                  type="text"
                  required
                  placeholder="e.g. $500 - $2000"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-2xl font-bold text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/15"
                />
              </div>
            </div>

            {/* Message Field - name="message" অ্যাড করা হয়েছে */}
            <div className="group relative space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                Your Message
              </label>
              <textarea
                required
                name="message"
                rows={2}
                placeholder="Tell me about your goals..."
                className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-3xl font-bold text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/15 resize-none"
              />
            </div>

            <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <p className="text-white/25 text-xs leading-relaxed uppercase tracking-wider font-medium">
                * Available for global freelance opportunities.
              </p>

              <button
                disabled={isSending}
                type="submit"
                className="group relative flex items-center justify-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-xl active:scale-95 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    Sending... <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
