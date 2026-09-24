"use client";

import { motion } from "framer-motion";
import { CARE_PROCESS } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProcessSteps() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6 md:grid-cols-4"
    >
      {CARE_PROCESS.map((step, i) => (
        <motion.div key={step.step} variants={item} className="relative">
          <div className="rounded-card border border-cream-line bg-white p-6 h-full">
            <span className="font-display text-sm font-semibold text-honey">
              {step.step}
            </span>
            <span className="mt-3 flex h-11 w-11 items-center justify-center rounded-full bg-teal-light text-teal">
              <step.icon size={22} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-teal-deep">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-soft">
              {step.description}
            </p>
          </div>
          {i < CARE_PROCESS.length - 1 && (
            <div
              className="absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-cream-line md:block"
              aria-hidden="true"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
