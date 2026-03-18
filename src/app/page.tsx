"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { RebuildCTA } from "@/components/RebuildCTA";
import { Services } from "@/components/Services";
import { SocialProof } from "@/components/SocialProof";
import { WhatICanBuild } from "@/components/WhatICanBuild";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <WhatICanBuild />
      <Services />
      <Portfolio />
      <About />
      <SocialProof />
      <RebuildCTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
