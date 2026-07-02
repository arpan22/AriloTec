"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { TrendingUp, Users, Briefcase, Star } from "lucide-react";

const stats = [
  {
    value: 200,
    suffix: "+",
    label: "AI Projects Delivered",
    subtext: "Across 15+ industries worldwide",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention Rate",
    subtext: "Long-term partnership focus",
    icon: Star,
    color: "from-purple-500 to-pink-500",
  },
  {
    value: 50,
    suffix: "+",
    label: "AI Experts & Engineers",
    subtext: "PhDs, ML engineers, architects",
    icon: Users,
    color: "from-orange-500 to-red-500",
  },
  {
    value: 40,
    suffix: "%",
    label: "Avg. Cost Reduction",
    subtext: "Through intelligent automation",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of AI Excellence",
    subtext: "Deep domain expertise",
    icon: Star,
    color: "from-cyan-500 to-blue-500",
  },
  {
    value: 15,
    suffix: "+",
    label: "Countries Served",
    subtext: "Global delivery capability",
    icon: TrendingUp,
    color: "from-violet-500 to-purple-500",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-purple/5" />
      <div className="glow-orb w-[700px] h-[300px] bg-brand-blue left-0 top-1/2 -translate-y-1/2 opacity-10 blur-[120px]" />
      <div className="glow-orb w-[700px] h-[300px] bg-brand-purple right-0 top-1/2 -translate-y-1/2 opacity-10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
            By the Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Proof in Every{" "}
            <span className="gradient-text">Metric That Matters</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative group p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/5 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 opacity-80`}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>

              {/* Counter */}
              <div className="flex items-end gap-1 mb-1">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                />
              </div>

              <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-slate-500 text-xs">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
