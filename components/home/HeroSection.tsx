"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, Brain } from "lucide-react";
import ParticleField from "@/components/ui/ParticleField";

const floatingTags = [
  { label: "Generative AI", x: "8%", y: "20%", delay: 0 },
  { label: "LLM Integration", x: "82%", y: "15%", delay: 0.3 },
  { label: "AI Agents", x: "6%", y: "72%", delay: 0.6 },
  { label: "MLOps", x: "80%", y: "68%", delay: 0.9 },
  { label: "RAG Pipeline", x: "88%", y: "42%", delay: 0.5 },
  { label: "Computer Vision", x: "3%", y: "44%", delay: 0.8 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Grid */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Particle field */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-purple/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-brand-cyan/10 blur-[80px] pointer-events-none" />

      {/* Floating tech tags */}
      {floatingTags.map((tag, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/15 text-xs text-slate-300 font-medium"
          style={{ left: tag.x, top: tag.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tag.delay + 1, duration: 0.5 }}
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light" />
            {tag.label}
          </motion.span>
        </motion.div>
      ))}

      {/* Central content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
          India&apos;s Premier AI Innovation Partner
          <span className="px-2 py-0.5 rounded-full bg-brand-blue/20 text-xs">New</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          Build the Future
          <br />
          <span className="relative">
            <span className="gradient-text">with Intelligent AI</span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          ArlioTech engineers enterprise-grade AI solutions — from generative AI and intelligent
          agents to full-stack automation — helping startups, SMEs, and global enterprises unlock
          exponential growth through technology.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="/contact" className="btn-primary text-base px-8 py-4 group">
            Start Your AI Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/case-studies" className="btn-secondary text-base px-8 py-4 group">
            <Play className="w-4 h-4 text-brand-blue-light" />
            See Our Work
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
        >
          {[
            { value: "200+", label: "AI Projects Delivered", icon: Brain },
            { value: "98%", label: "Client Satisfaction", icon: Sparkles },
            { value: "50+", label: "Expert Engineers", icon: Zap },
            { value: "15+", label: "Industries Served", icon: ArrowRight },
          ].map((stat, i) => (
            <div key={i} className="bg-navy-900/60 backdrop-blur-sm px-6 py-5 text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text-blue mb-1">{stat.value}</p>
              <p className="text-xs text-slate-400 leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
