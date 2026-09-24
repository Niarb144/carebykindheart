import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

const VARIANT_STYLES: Record<string, string> = {
  primary:
    "bg-teal text-white hover:bg-teal-dark shadow-soft",
  secondary:
    "bg-white text-teal-deep border-2 border-teal hover:bg-teal-light",
  ghost: "text-teal-deep hover:bg-teal-light",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: ButtonProps) {
  const isExternalOrTel = href.startsWith("tel:") || href.startsWith("http");

  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-colors duration-150 ${VARIANT_STYLES[variant]} ${className}`;

  if (isExternalOrTel) {
    return (
      <a href={href} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
