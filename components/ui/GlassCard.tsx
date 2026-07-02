"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: "blue" | "purple" | "cyan" | "none";
  delay?: number;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className,
  hoverGlow = "blue",
  delay = 0,
  onClick,
}: GlassCardProps) {
  const glowClass = {
    blue: "hover:shadow-glow-blue hover:border-brand-blue/30",
    purple: "hover:shadow-glow-purple hover:border-brand-purple/30",
    cyan: "hover:shadow-glow-cyan hover:border-brand-cyan/30",
    none: "",
  }[hoverGlow];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={cn(
        "glass-card border border-white/10 transition-all duration-300 cursor-default",
        glowClass,
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
