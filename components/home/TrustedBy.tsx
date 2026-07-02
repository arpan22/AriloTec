"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = [
  "TechCorp Global",
  "InnovateCo",
  "Nexus Ventures",
  "DataStream Inc",
  "CloudPeak Solutions",
  "FinEdge Capital",
  "MediSys Health",
  "RetailFlow",
  "ManufactureAI",
  "EduTech Pro",
  "LogiTrack",
  "InsureMax",
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 bg-navy-950 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest">
          Trusted by innovative companies worldwide
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/8 bg-white/3 whitespace-nowrap"
            >
              <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-blue/40 to-brand-purple/40" />
              <span className="text-slate-400 font-medium text-sm">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
