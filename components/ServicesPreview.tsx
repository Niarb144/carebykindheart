"use client";

import { motion } from "framer-motion";
import { CORE_SERVICES } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="max-w-2xl">
          <p className="eyebrow">What we offer</p>
          <h2 className="h2 mt-3">Care that adapts to what your family needs today.</h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CORE_SERVICES.slice(0, 4).map((service) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              summary={service.summary}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
