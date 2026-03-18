// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, Star } from "lucide-react";

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen bg-bg-dark flex flex-col items-center justify-center pt-28 pb-12 px-6 text-center overflow-hidden"
//     >
//       {/* Background decoration */}
//       <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 space-y-8 max-w-7xl"
//       >
//         <div className="flex justify-center">
//           <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
//             <Star className="w-4 h-4 text-primary fill-primary " />
//             <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80">
//               Available for new projects
//             </span>
//           </div>
//         </div>

//         <h1 className="text-5xl md:text-[115px] tracking-wide md:tracking-normal text-text-main font-bold  uppercase leading-[0.9] ">
//           Websites That Don&apos;t Just Look Good They{" "}
//           <span className="text-primary">Generate Clients</span>
//         </h1>

//         <p className="subtitle max-w-4xl mx-auto ">
//           I&apos;m <span className="text-white">Suman Patwary</span>, a
//           developer behind 650+ successful websites and the founder of{" "}
//           <a href="#" className="text-primary">
//             &ldquo;Webservia&quot;
//           </a>
//           . I build fast, SEO-optimized, conversion-focused websites using
//           WordPress and modern development technologies.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ">
//           <a
//             href="#portfolio"
//             className="btn-highlight w-full sm:w-auto flex items-center justify-center gap-2"
//           >
//             View My Projects <ArrowRight className="w-4 h-4" />
//           </a>
//           <a href="#contact" className="btn-outline w-full sm:w-auto">
//             Start a Conversation
//           </a>
//         </div>

//         <div className="pt-10 mt-16 grid grid-cols-1  border-t border-white/10 md:grid-cols-3 gap-8 text-center">
//           <div className="space-y-1">
//             <p className="text-3xl md:text-4xl font-bold text-white leading-none">
//               650+
//             </p>
//             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
//               Websites Built
//             </p>
//           </div>
//           <div className="space-y-1">
//             <p className="text-3xl md:text-4xl font-bold text-white leading-none">
//               $100K+
//             </p>
//             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
//               Client Revenue Generated
//             </p>
//           </div>
//           <div className="space-y-1">
//             <p className="text-3xl md:text-4xl font-bold text-white leading-none">
//               28+
//             </p>
//             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
//               Clients Across 28+ Countries
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { MessageCircleMore, ServerCog } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-bg-dark flex flex-col items-center justify-center pt-28 pb-12 px-6 text-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10  max-w-7xl"
      >
        <div className="inline-flex items-center gap-2 px-4 ">
          <span className="h-px w-10 bg-linear-to-r from-white/20 to-white/80"></span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Available for new projects
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="h-px w-10 bg-linear-to-r to-white/20 from-white/80"></span>
        </div>

        <h1 className="text-5xl mt-12 mb-7 md:text-[110px] tracking-wide md:tracking-normal text-text-main font-bold  uppercase leading-[0.9] ">
          Websites That Don&apos;t Just Look Good They{" "}
          <span className="text-primary">Generate Clients</span>
        </h1>

        <p className="subtitle max-w-3xl mx-auto ">
          I&apos;m <span className="">Suman Patwary</span>, a
          developer behind 650+ successful websites and the founder of{" "}
          <a href="#" className="text-white">
            &ldquo;Webservia&quot;
          </a>
          . I build fast, SEO-optimized, conversion-focused websites using
          WordPress and modern development technologies.
        </p>

        <div className="flex flex-col items-center gap-12 pt-13">
          {/* Main Action Group */}
          <div className="flex uppercase font-semibold tracking-wider text-sm gap-10 divide-x divide-white/10 text-white/50 ">
            {/* Primary: View Work */}
            <a href="#portfolio" className="pr-10 flex items-center gap-2 hover:text-white transition-colors duration-500">
              <ServerCog size={15} />
              View My Projects
            </a>

            {/* Secondary: Minimalist Divider & Link */}
            <a href="#contact" className="flex items-center gap-2 hover:text-white transition-colors duration-500 ">
              <MessageCircleMore size={15} />
              Start a Conversation
            </a>
          </div>
        </div>
        <div className="mt-14 pt-8 inline-flex border-t border-white/10 flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {/* Stat 1 */}
          <div className="flex items-center gap-3 group">
            <span className="text-2xl md:text-3xl font-bold text-white  transition-colors group-hover:text-primary">
              650+
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 leading-tight text-left">
              Websites <br /> Built
            </span>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block h-8 w-px bg-white/10" />

          {/* Stat 2 */}
          <div className="flex items-center gap-3 group">
            <span className="text-2xl md:text-3xl font-bold text-white  transition-colors group-hover:text-primary">
              $200K+
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 leading-tight text-left">
              Revenue <br /> Generated
            </span>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block h-8 w-px bg-white/10" />

          {/* Stat 3 */}
          <div className="flex items-center gap-3 group">
            <span className="text-2xl md:text-3xl font-bold text-white  transition-colors group-hover:text-primary">
              28+
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 leading-tight text-left">
              Global <br /> Countries
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
