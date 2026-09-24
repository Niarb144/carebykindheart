import Link from "next/link";
import { Phone, Mail, MapPin, HeartHandshake } from "lucide-react";
import { BRAND, NAV_LINKS, CORE_SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-cream-line bg-teal-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <HeartHandshake size={18} aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold">{BRAND.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {BRAND.serviceAreaNote}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Site
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/85 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {CORE_SERVICES.slice(0, 4).map((service) => (
              <li key={service.slug}>
                <Link href="/services" className="text-white/85 hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                {BRAND.addressLine1}
                <br />
                {BRAND.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" aria-hidden="true" />
              <a href={BRAND.phoneHref}>{BRAND.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" aria-hidden="true" />
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Licensed,
            bonded, and insured. Services vary by location.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/hipaa-notice" className="hover:text-white">
              HIPAA Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
