
import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary: "bg-[#3a7a9e] text-white hover:bg-blue-600 focus:ring-blue-500",
  secondary: "bg-green-700 text-white hover:bg-green-500 focus:ring-green-500",
  outline:
    "bg-gray-500 text-white hover:bg-gray-700 focus:ring-gray-500",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = `${baseStyles} ${variants[variant]} ${className} px-4 py-2`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
