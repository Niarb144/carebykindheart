"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  summary: string;
  href?: string;
};

export default function ServiceCard({ icon: Icon, title, summary, href = "/services" }: ServiceCardProps) {
  return (
    <motion.div
      variants={item}
      className="flex h-full flex-col rounded-card border border-cream-line bg-white p-7 shadow-soft"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-light text-teal">
        <Icon size={24} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-teal-deep">{title}</h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-slate-soft">{summary}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-dark"
      >
        Learn more <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
