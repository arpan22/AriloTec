"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const cases = [
  {
    tag: "Generative AI",
    title: "AI-Powered Legal Document Automation for 10,000+ Monthly Contracts",
    client: "LegalEdge Corp",
    industry: "Legal Tech",
    metrics: [
      { value: "92%", label: "Time Saved" },
      { value: "99.1%", label: "Accuracy" },
      { value: "3 weeks", label: "Delivery" },
    ],
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/20",
    href: "/case-studies",
  },
  {
    tag: "Machine Learning",
    title: "Fraud Detection ML Model Processing 2M Transactions Daily",
    client: "FinancePro Bank",
    industry: "Finance",
    metrics: [
      { value: "67%", label: "Less Fraud" },
      { value: "$4.2M", label: "Saved/Year" },
      { value: "12ms", label: "Inference" },
    ],
    gradient: "from-green-500/20 to-cyan-500/20",
    border: "border-green-500/20",
    href: "/case-studies",
  },
  {
    tag: "Computer Vision",
    title: "Manufacturing Defect Detection Replacing 40 Manual QC Inspectors",
    client: "AutoPrecision India",
    industry: "Manufacturing",
    metrics: [
      { value: "99.4%", label: "Accuracy" },
      { value: "65%", label: "Cost Down" },
      { value: "Real-time", label: "Processing" },
    ],
    gradient: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/20",
    href: "/case-studies",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-16">
          <SectionHeader
            label="Case Studies"
            title={
              <>
                Real Projects,{" "}
                <span className="gradient-text">Measurable Impact</span>
              </>
            }
            align="left"
          />
          <Link
            href="/case-studies"
            className="btn-outline whitespace-nowrap flex-shrink-0"
          >
            All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={c.href}
                className={`group flex flex-col h-full p-6 rounded-2xl border ${c.border} bg-gradient-to-br ${c.gradient} hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-white/15 text-white/80 bg-white/10">
                    {c.tag}
                  </span>
                  <TrendingUp className="w-4 h-4 text-green-400 opacity-70" />
                </div>

                <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-blue-100 transition-colors flex-1">
                  {c.title}
                </h3>

                <div className="mb-5">
                  <p className="text-xs text-slate-400">
                    <span className="text-slate-300 font-medium">{c.client}</span> · {c.industry}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
                  {c.metrics.map((m, mi) => (
                    <div key={mi} className="text-center">
                      <p className="text-lg font-bold gradient-text-blue">{m.value}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-white transition-colors">
                  Read full case study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
