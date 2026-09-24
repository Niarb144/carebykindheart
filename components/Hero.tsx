"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ShieldCheck } from "lucide-react";
import Button from "./Button";
import { BRAND } from "@/lib/constants";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="section pb-16 pt-14 md:pb-24 md:pt-16">
      <div className="section-inner grid items-center gap-14 md:grid-cols-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="eyebrow">
            In-home care across the Spokane County area.
          </motion.p>
          <motion.h1 variants={item} className="h1 mt-4">
            Compassionate, reliable in-home care for your loved ones.
          </motion.h1>
          <motion.p variants={item} className="body-lg mt-6 max-w-prose">
            We provide in-home senior care and disability support for adults
             across Spokane County, Washington. As a small, hands-on team,
              you talk directly to the people who run this company, not a call center.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact">Request Free Assessment</Button>
            <Button href={BRAND.phoneHref} variant="secondary" icon={<Phone size={18} />}>
              Call {BRAND.phoneDisplay}
            </Button>
          </motion.div>
          <motion.p variants={item} className="mt-6 text-sm text-slate-soft">
            No obligation. A care coordinator responds within one business day.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card shadow-soft md:aspect-[5/6]">
            <Image
              src="/hero1.jpg"
              alt="A caregiver sitting with an older adult, smiling together at home"
              fill
              priority
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ y: [0, -8, 0], opacity: 1 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            }}
            className="absolute -bottom-6 -left-6 flex max-w-[240px] items-center gap-3 rounded-2xl bg-white p-4 shadow-soft md:-left-10"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
              <ShieldCheck size={22} aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold text-teal-deep">
              Licensed &amp; Insured Caregivers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
