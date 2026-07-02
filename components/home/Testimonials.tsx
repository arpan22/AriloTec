"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "ArlioTech transformed our fraud detection system from a rule-based nightmare into an intelligent ML pipeline. We saw a 67% reduction in false positives within 3 months of go-live. Their team understood our compliance constraints from day one.",
    author: "Priya Mehta",
    role: "Chief Technology Officer",
    company: "NovaPay Financial Services",
    location: "Mumbai, India",
    avatar: "PM",
    rating: 5,
    metric: "67% fewer false positives",
  },
  {
    quote:
      "We engaged ArlioTech for a generative AI project and they delivered something that genuinely impressed our board. The RAG-based knowledge management system they built reduced our customer support resolution time by 45%. Exceptional quality.",
    author: "James Whitmore",
    role: "VP of Product",
    company: "Stratosphere SaaS",
    location: "London, UK",
    avatar: "JW",
    rating: 5,
    metric: "45% faster support resolution",
  },
  {
    quote:
      "Their computer vision solution for our production line quality control was deployed in 6 weeks — faster than any vendor we've worked with. Defect detection accuracy went from 78% manual inspection to 99.2% automated. Game-changing for our operations.",
    author: "Rahul Krishnan",
    role: "Head of Operations",
    company: "PrecisionMfg India",
    location: "Pune, India",
    avatar: "RK",
    rating: 5,
    metric: "99.2% detection accuracy",
  },
  {
    quote:
      "ArlioTech built our AI-powered patient risk stratification model that is now being used across 12 hospitals in our network. The team's domain knowledge of healthcare combined with their ML expertise is rare and incredibly valuable.",
    author: "Dr. Sarah Chen",
    role: "Chief Medical Information Officer",
    company: "HealthBridge Network",
    location: "Singapore",
    avatar: "SC",
    rating: 5,
    metric: "12 hospitals transformed",
  },
  {
    quote:
      "We needed an AI agent that could automate our procurement workflows end-to-end. ArlioTech delivered a multi-agent system using LangGraph that handles 80% of our purchase orders autonomously. ROI was achieved in 4 months.",
    author: "Marco Delgado",
    role: "Director of Digital Transformation",
    company: "GlobalEdge Procurement",
    location: "Barcelona, Spain",
    avatar: "MD",
    rating: 5,
    metric: "80% automation rate",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const prev = () => {
    setAutoplay(false);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setAutoplay(false);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-15" />
      <div className="glow-orb w-[600px] h-[400px] bg-brand-blue left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8 blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Client Testimonials"
          title={
            <>
              What Our Clients Say{" "}
              <span className="gradient-text">About ArlioTech</span>
            </>
          }
          className="mb-16"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <Quote className="absolute top-6 left-8 w-16 h-16 text-brand-blue/10 rotate-180" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-blue-light animate-pulse" />
                {t.metric}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{t.author}</p>
                  <p className="text-slate-400 text-sm">
                    {t.role} · {t.company}
                  </p>
                  <p className="text-slate-500 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setIndex(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === index
                      ? "w-8 h-2 bg-brand-blue"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
