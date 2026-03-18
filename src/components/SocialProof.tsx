"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

// The data structure based on what you provided
interface Testimonial {
  name: string;
  country: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Brexwall",
    country: "🇫🇷 France",
    rating: 5,
    review:
      "The quality of work was beyond my expectations, and he made sure to fix all my requests. I highly recommend Suman Patwary for any web development projects. Thank you for your excellent service! I will be hiring him again in the near future.",
  },
  {
    name: "Ramendez",
    country: "🇺🇸 United States",
    rating: 5,
    review:
      "I recently hired Suman Patwary to clone a website to WordPress, and I couldn't be happier with the results! The communication was clear and timely, and they delivered everything exactly as I envisioned. The quality of work was outstanding.",
  },
  {
    name: "Jk1098765",
    country: "🇳🇱 Netherlands",
    rating: 5,
    review:
      "Suman delivered exactly what he promised. Clear communication, fast execution and honest guidance during the process. His technical knowledge is strong and he explains everything in a way that’s easy to understand. A reliable developer.",
  },
  {
    name: "Monschmeister_",
    country: "🇩🇪 Germany",
    rating: 5,
    review:
      "Was a tough project with many hidden details. We had 2 freelancers cancel the gig due to the complexity, which is when we hired Suman, he made an exceptional job for us and completed the project without any bugs! Highly recommended.",
  },
  {
    name: "Mickbegley",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    review:
      "Fantastic experience! Suman did an absolutely brilliant job building my website. From start to finish, he was professional, patient, and really took the time to understand what I wanted. The design looks clean and modern.",
  },
  {
    name: "Winterstorm71",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    review:
      "Suman is a great freelancer with excellent knowledge of WordPress. I have had many freelancers attempt to complete this project, and finally, Suman was the freelancer who completed it without any issues. Great work and top marks.",
  },
  {
    name: "Kaushali_sene",
    country: "🇦🇺 Australia",
    rating: 5,
    review:
      "Suman did an outstanding job executing a refined and beautifully functional website. He really knows his stuff - every request I made, no matter how custom or complex, he was able to deliver with ease. Highly recommend.",
  },
  {
    name: "Archie_4049",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    review:
      "Website made to professional standard. They built a fantastic website that perfectly captured my vision and delivered it incredibly fast. Communication was excellent throughout the entire process.",
  },
  {
    name: "Salim_frame",
    country: "🇫🇷 France",
    rating: 5,
    review:
      "Suman did a great job in creating our website and I thank him for his patience and attention to details. He stayed positive, open and patient during the gig and I'm very pleased with the result. I will hire him again.",
  },
  {
    name: "Dervolko",
    country: "🇩🇪 Germany",
    rating: 5,
    review:
      "Working with Suman Patwary was an absolute pleasure! His professionalism and meticulous attention to detail ensured a flawless, bug-free delivery. Suman’s deep understanding and quick responsiveness made the collaboration seamless.",
  },
  {
    name: "Nitenrz",
    country: "🇺🇸 United States",
    rating: 5,
    review:
      "The seller was able to follow the vision I had for my website. This is my second gig with them. I highly recommend this service. Great at capturing exactly what I wanted.",
  },
  {
    name: "Yavnzeya",
    country: "🇨🇦 Canada",
    rating: 5,
    review:
      "He's more than just a contractor, he's a collaborator! Great communication and understands the project goals perfectly. Always a pleasure to work with Suman.",
  },
];

// Helper to render stars
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < rating ? "text-primary" : "text-white/10"
        }`}
      />
    ))}
  </div>
);

// Reusable Column Component - Modified for Text Cards
function ReviewColumn({
  items,
  duration = 30, // Increased duration to make text readable
  reverse = false,
  onCardClick,
}: {
  items: Testimonial[];
  duration?: number;
  reverse?: boolean;
  onCardClick: (item: Testimonial) => void;
}) {
  return (
    <div className="relative h-[720px] overflow-hidden group">
      <motion.div
        initial={{ y: reverse ? "-50%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-50%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        // When hovering over a column, pause the animation
        whileHover={{ animationPlayState: "paused" }}
        className="flex flex-col gap-3 " // increased gap
      >
        {/* Triple the items to ensure seamless loop for text cards */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            onClick={() => onCardClick(item)}
            className="px-5 pb-5 pt-4 border border-white/5 bg-[#0A0A0A] hover:border-white/15 transition-colors cursor-pointer rounded-lg space-y-3 shadow-inner"
          >
            <div className="flex border-b border-white/5 pb-3 items-center justify-between gap-3">
              <div>
                <p className="font-bold text-white text-sm tracking-tight">
                  {item.name}
                </p>
                <p className="text-xs text-white/70 mt-0.5">{item.country}</p>
              </div>
              <StarRating rating={item.rating} />
            </div>

            <p className="text-white/80 text-xs leading-relaxed line-clamp-4">
              {item.review}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SocialProof() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  // Divide testimonials into two halves for the columns
  const halfLength = Math.ceil(testimonials.length / 2);
  const col1Items = testimonials.slice(0, halfLength);
  const col2Items = testimonials.slice(halfLength);

  return (
    <section id="reviews" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* --- Left Side: Content (Unchanged) --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold tracking-wide md:tracking-normal uppercase mb-6 leading-none">
                650+ <br />
                <span className="text-primary ">Happy Clients</span> <br />
                Worldwide.
              </h2>
              <p className="subtitle leading-relaxed max-w-sm">
                Over the years, I&apos;ve worked with business owners, startups,
                and agencies across the world, delivering hundreds of successful
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

          {/* --- Right Side: Infinite Scrolling Columns (Modified) --- */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-3  relative ">
            {/* Gradient Faders */}
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-bg-dark via-bg-dark/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-bg-dark via-bg-dark/80 to-transparent z-10 pointer-events-none" />

            <ReviewColumn
              items={col1Items}
              duration={40} // Slower for reading
              onCardClick={setSelectedTestimonial}
            />
            <div className="hidden md:block">
              <ReviewColumn
                items={col2Items}
                duration={50} // Slower and different speed for parallax effect
                reverse
                onCardClick={setSelectedTestimonial}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Lightbox Modal (Modified for Card Data) --- */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTestimonial(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-2xl w-full p-10 border border-white/10 bg-[#0A0A0A] rounded-2xl shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()} // prevent modal from closing when clicking inside
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-6">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-white mb-1.5">
                    {selectedTestimonial.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    Verified Client from{" "}
                    <span className="text-white font-medium">
                      {selectedTestimonial.country}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <StarRating rating={selectedTestimonial.rating} />
                  <span className="text-[10px] uppercase font-bold text-primary tracking-widest bg-primary/10 px-2 py-0.5 rounded-sm">
                    Excellent
                  </span>
                </div>
              </div>

              <p className="text-white/90 text-lg leading-relaxed antialiased font-medium">
                &ldquo;{selectedTestimonial.review}&rdquo;
              </p>

              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white text-xs uppercase tracking-widest flex items-center gap-1.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Close [esc]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
