"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-cyan/10" />
      <div className="absolute inset-0 hero-grid opacity-25" />

      {/* Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-brand-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[120px]" />
      <div className="glow-orb w-64 h-64 bg-brand-purple bottom-0 right-20 opacity-20 blur-[80px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
            Ready to Get Started?
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 mt-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Extraordinary Together</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re exploring AI for the first time or scaling an existing intelligent
            system, our team is ready to help you create measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact" className="btn-primary text-base px-8 py-4 group">
              Start a Conversation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact#calendar" className="btn-secondary text-base px-8 py-4 group">
              <Calendar className="w-4 h-4 text-brand-blue-light" />
              Book a Free Discovery Call
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {[
              "Free initial consultation",
              "Response within 24 hours",
              "No commitment required",
              "NDA signed on Day 1",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
