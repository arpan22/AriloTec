"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, BarChart3, RefreshCw } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Assessment",
    description:
      "We begin by deeply understanding your business — mapping your processes, identifying AI opportunities, and assessing your data landscape to build a clear transformation roadmap.",
    color: "blue",
    duration: "Week 1-2",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "AI Strategy & Architecture",
    description:
      "Our architects design the AI solution blueprint — selecting models, defining data pipelines, and architecting scalable infrastructure aligned with your security and compliance requirements.",
    color: "purple",
    duration: "Week 2-3",
  },
  {
    number: "03",
    icon: Code2,
    title: "Rapid Prototyping",
    description:
      "We build working prototypes within days, not weeks. You see real, functional AI demos early — enabling fast feedback loops and reducing delivery risk significantly.",
    color: "cyan",
    duration: "Week 3-5",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Development & Integration",
    description:
      "Full-scale development with rigorous testing, security hardening, and seamless integration into your existing tech stack, ERP systems, and business workflows.",
    color: "blue",
    duration: "Week 5-10",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Launch & Quality Assurance",
    description:
      "Production-grade deployment with comprehensive testing, performance benchmarking, A/B testing, and meticulous quality assurance to ensure flawless go-live.",
    color: "purple",
    duration: "Week 10-12",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Optimize & Scale",
    description:
      "Post-launch, we continuously monitor model performance, retrain on new data, optimize for speed and cost, and scale infrastructure as your usage grows.",
    color: "cyan",
    duration: "Ongoing",
  },
];

const colorClasses = {
  blue: { num: "text-brand-blue-light", border: "border-brand-blue/40", bg: "bg-brand-blue/10", icon: "text-brand-blue-light" },
  purple: { num: "text-brand-purple-light", border: "border-brand-purple/40", bg: "bg-brand-purple/10", icon: "text-brand-purple-light" },
  cyan: { num: "text-brand-cyan-light", border: "border-brand-cyan/40", bg: "bg-brand-cyan/10", icon: "text-brand-cyan-light" },
};

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Process"
          title={
            <>
              From Idea to Production AI{" "}
              <span className="gradient-text">in Weeks, Not Months</span>
            </>
          }
          description="A battle-tested delivery framework refined across 200+ AI projects. Transparent, collaborative, and results-oriented at every step."
          className="mb-16"
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-purple to-brand-cyan opacity-30 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div
                      className={`inline-flex flex-col gap-3 p-6 rounded-2xl border ${colors.border} bg-white/3 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 max-w-md ${
                        isEven ? "sm:ml-auto" : ""
                      }`}
                    >
                      <div className={`flex items-center gap-3 ${isEven ? "sm:flex-row-reverse" : ""}`}>
                        <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                          <step.icon className={`w-5 h-5 ${colors.icon}`} />
                        </div>
                        <div>
                          <span className="text-xs text-slate-500 font-medium">{step.duration}</span>
                          <h3 className="text-white font-semibold text-sm">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Step number — center bubble */}
                  <div className="relative sm:w-16 flex-shrink-0 flex items-center justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <div
                      className={`w-12 h-12 rounded-full bg-navy-900 border-2 ${colors.border} flex items-center justify-center shadow-lg`}
                    >
                      <span className={`text-sm font-bold ${colors.num}`}>{step.number}</span>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
