"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { CORE_SERVICES } from "@/lib/constants";

export default function ServiceAccordion() {
  const [openSlug, setOpenSlug] = useState<string>(CORE_SERVICES[0].slug);

  return (
    <div className="divide-y divide-cream-line rounded-card border border-cream-line bg-white">
      {CORE_SERVICES.map((service) => {
        const isOpen = openSlug === service.slug;
        const Icon = service.icon;
        return (
          <div key={service.slug}>
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? "" : service.slug)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-5 px-6 py-6 text-left md:px-8"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg font-semibold text-teal-deep">
                  {service.title}
                </span>
                <span className="mt-1 block text-sm text-slate-soft">
                  {service.summary}
                </span>
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-teal transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <ul className="grid gap-3 px-6 pb-7 pl-[4.75rem] sm:grid-cols-2 md:px-8 md:pl-[4.75rem]">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-slate">
                        <Check size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
