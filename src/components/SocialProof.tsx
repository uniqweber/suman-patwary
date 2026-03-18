"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Sample images
const reviews = [
  { id: 1, image: "/review.png" },
  { id: 2, image: "/review.png" },
  { id: 3, image: "/review.png" },
];

// Reusable Column Component
function ReviewColumn({
  images,
  duration = 20,
  reverse = false,
  onImageClick,
}: {
  images: typeof reviews;
  duration?: number;
  reverse?: boolean;
  onImageClick: (img: string) => void;
}) {
  return (
    <div className="relative h-[680px] overflow-hidden group">
      <motion.div
        initial={{ y: reverse ? "-50%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-50%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-3"
      >
        {[...images, ...images, ...images].map((review, idx) => (
          <div
            key={idx}
            onClick={() => onImageClick(review.image)}
            className="relative aspect-4/3 w-full overflow-hidden border border-white/5 bg-[#0A0A0A] cursor-pointer"
          >
            <Image
              src={review.image}
              alt="Client Review"
              fill
              className="opacity-80 hover:opacity-100 transition-opacity object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SocialProof() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="reviews" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* --- Left Side: Content --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold tracking-wide md:tracking-normal uppercase mb-6 leading-none">
                650+ <br />
                <span className="text-primary ">Happy Clients</span> <br />
                Worldwide.
              </h2>
              <p className="subtitle leading-relaxed max-w-sm">
                Over the years, I&apos;ve worked with business owners, startups, and
                agencies across the world, delivering hundreds of successful
                projects through Fiverr, Upwork, and direct collaborations.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white leading-none">
                  5.0
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mt-2">
                  Average Rating
                </span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white leading-none">
                  100%
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mt-2">
                  Project Success
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Verified reviews from Fiverr, Upwork, and direct clients
                worldwide.
              </p>
            </div>
          </div>

          {/* --- Right Side: Infinite Scrolling Columns --- */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3  bg-black relative">
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-bg-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-bg-dark to-transparent z-10 pointer-events-none" />

            <ReviewColumn
              images={reviews}
              duration={25}
              onImageClick={setSelectedImage}
            />
            <ReviewColumn
              images={reviews}
              duration={35}
              reverse
              onImageClick={setSelectedImage}
            />
          </div>
        </div>
      </div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                width={1000}
                height={1000}
                src={selectedImage}
                alt="Full Review"
                className="max-h-[90vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white/50 hover:text-white text-xs uppercase tracking-widest"
              >
                Close [esc]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
