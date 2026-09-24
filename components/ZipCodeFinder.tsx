"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle2, XCircle } from "lucide-react";
import { SERVICED_ZIP_PREFIXES, BRAND } from "@/lib/constants";

type Result = "in-area" | "out-of-area" | null;

export default function ZipCodeFinder() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<Result>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\d{5}$/.test(zip)) {
      setError("Enter a valid 5-digit US ZIP code.");
      setResult(null);
      return;
    }
    setError("");
    const covered = SERVICED_ZIP_PREFIXES.some((prefix) => zip.startsWith(prefix));
    setResult(covered ? "in-area" : "out-of-area");
  };

  return (
    <div className="rounded-card border border-cream-line bg-white p-7 md:p-9">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-light text-teal">
          <MapPin size={22} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-teal-deep">
            Check care availability in your area
          </h3>
          <p className="text-sm text-slate-soft">Enter your ZIP code to see if we serve your neighborhood.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row" noValidate>
        <label htmlFor="zip-input" className="sr-only">
          US ZIP code
        </label>
        <input
          id="zip-input"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={5}
          placeholder="e.g. 80202"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
          className="w-full flex-1 rounded-full border border-cream-line bg-cream px-5 py-3 text-base text-slate placeholder:text-slate-soft/60 focus:border-teal"
        />
        <button
          type="submit"
          className="rounded-full bg-teal px-6 py-3 text-base font-semibold text-white hover:bg-teal-dark"
        >
          Check my ZIP
        </button>
      </form>

      {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={result}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`mt-5 flex items-start gap-3 rounded-2xl p-4 text-sm ${
              result === "in-area"
                ? "bg-teal-light text-teal-deep"
                : "bg-honey-light text-teal-deep"
            }`}
          >
            {result === "in-area" ? (
              <>
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  Good news — we serve ZIP code {zip}. Request a free assessment and
                  we&apos;ll follow up within one business day.
                </span>
              </>
            ) : (
              <>
                <XCircle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  We don&apos;t have caregivers in {zip} listed yet — call us at{" "}
                  {BRAND.phoneDisplay} and we&apos;ll help you find options nearby.
                </span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
