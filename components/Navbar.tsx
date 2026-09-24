"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
            <HeartHandshake size={20} aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-semibold text-teal-deep">
            {BRAND.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-slate hover:text-teal-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={BRAND.phoneHref}
            className="flex items-center gap-2 text-[15px] font-semibold text-teal-deep"
          >
            <Phone size={17} aria-hidden="true" />
            {BRAND.phoneDisplay}
          </a>
          <Button href="/contact" className="!px-5 !py-2.5 text-sm">
            Book Free Assessment
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-teal-deep md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-cream-line bg-cream md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate hover:bg-teal-light hover:text-teal-deep"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BRAND.phoneHref}
                className="flex items-center gap-2 px-3 py-3 text-base font-semibold text-teal-deep"
              >
                <Phone size={18} aria-hidden="true" />
                {BRAND.phoneDisplay}
              </a>
              <Button href="/contact" className="mt-2 w-full">
                Book Free Assessment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
