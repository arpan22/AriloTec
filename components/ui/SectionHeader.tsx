"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  descClassName?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
  labelClassName,
  titleClassName,
  descClassName,
}: SectionHeaderProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn("section-label", labelClassName)}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "text-slate-400 text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            descClassName
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
