"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const go = (direction: 1 | -1) => {
    setIndex((prev) => (prev + direction + total) % total);
  };

  const current = TESTIMONIALS[index];

  return (
    <section className="section bg-teal-light">
      <div className="section-inner">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Families like yours</p>
            <h2 className="h2 mt-3">Trusted with what matters most.</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-teal/30 bg-white text-teal-deep hover:bg-teal hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-teal/30 bg-white text-teal-deep hover:bg-teal hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative mt-10 min-h-[220px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-card bg-white p-8 shadow-soft md:p-10"
            >
              <Quote className="text-teal" size={28} aria-hidden="true" />
              <blockquote className="mt-4 font-display text-xl leading-relaxed text-teal-deep md:text-2xl">
                {current.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-slate">
                {current.name}
                <span className="ml-2 font-normal text-slate-soft">{current.relation}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-teal" : "w-2 bg-teal/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
