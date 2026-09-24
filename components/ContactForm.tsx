"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SERVICE_REQUIRED_OPTIONS } from "@/lib/constants";

const inputClasses =
  "w-full rounded-xl border border-cream-line bg-cream px-4 py-3 text-base text-slate placeholder:text-slate-soft/60 focus:border-teal";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production this would post to an API route or CRM.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-start gap-4 rounded-card border border-cream-line bg-white p-8 md:p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-light text-teal">
          <CheckCircle2 size={26} aria-hidden="true" />
        </span>
        <h3 className="font-display text-2xl font-semibold text-teal-deep">
          Thank you — your request is in.
        </h3>
        <p className="text-slate-soft">
          A care coordinator will reach out within one business day. If your
          need is urgent, please call us directly.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-cream-line bg-white p-7 md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-slate">
            Full name
          </label>
          <input id="fullName" name="fullName" type="text" required className={inputClasses} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
            pattern="^[0-9()\-\s+]{7,}$"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="zip" className="mb-1.5 block text-sm font-semibold text-slate">
            US state / ZIP
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            required
            placeholder="CO, 80202"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="serviceRequired" className="mb-1.5 block text-sm font-semibold text-slate">
            Service required
          </label>
          <select id="serviceRequired" name="serviceRequired" required className={inputClasses}>
            <option value="">Select a service</option>
            {SERVICE_REQUIRED_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="needs" className="mb-1.5 block text-sm font-semibold text-slate">
            Tell us about your loved one&apos;s primary needs
          </label>
          <textarea
            id="needs"
            name="needs"
            rows={4}
            required
            placeholder="A little context helps us match the right caregiver."
            className={inputClasses}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-teal px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal-dark sm:w-auto"
      >
        Request Free Assessment
      </button>
      <p className="mt-3 text-xs text-slate-soft">
        By submitting, you agree to be contacted about your care request. We
        never share your information. See our Privacy Policy and HIPAA Notice.
      </p>
    </form>
  );
}
