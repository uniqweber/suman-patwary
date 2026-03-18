"use client";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Card Container --- */}
        <div className="bg-black  rounded-[3rem] p-8 md:p-16">
          {/* Heading - One Line & Smaller */}
          <div className="mb-16 gap-4 grid lg:grid-cols-2 lg:gap-15 ">
            <h2 className=" text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
              Let&apos;s Build{" "}
            </h2>
            <p className=" text-white/30 text-sm md:text-base font-medium ">
              Have a project in mind? Fill out the form below and I&apos;ll get
              back to you within 24 hours.
            </p>
          </div>

          {/* --- Form --- */}
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {/* Name Field */}
              <div className="group relative space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe *"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-2xl font-bold text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/15"
                />
              </div>

              {/* Email Field */}
              <div className="group relative space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@example.com *"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-2xl font-bold text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/15"
                />
              </div>

              {/* Service Selection */}
              <div className="group relative space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                  Service
                </label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-2xl font-bold  focus:outline-none focus:border-primary transition-all cursor-pointer appearance-none">
                  {[
                    "WordPress Development",
                    "Shopify Development",
                    "Wix Development",
                    "Custom Web Apps (Next.js)",
                    "Clone & Rebuild Website",
                    "Figma to Website",
                    "Optimization & Support",
                  ].map((item) => (
                    <option key={item} className="bg-[#0A0A0A]">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Field */}
              <div className="group relative space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                  Budget
                </label>
                <input
                  type="text"
                  placeholder="e.g. $500 - $2000"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-2xl font-bold text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/15"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="group relative space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-white/20 group-focus-within:text-primary transition-colors">
                Your Message
              </label>
              <textarea
                rows={2}
                placeholder="Tell me about your goals..."
                className="w-full bg-transparent border-b border-white/10 py-3 text-xl md:text-3xl font-bold text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/15 resize-none"
              />
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <p className="text-white/25 text-xs   leading-relaxed  uppercase tracking-wider font-medium">
                * Available for global freelance opportunities.
              </p>

              <button className="group relative flex items-center justify-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-xl active:scale-95 hover:text-black">
                Send Inquiry
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
