"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield, Zap, Globe, Users, Clock, Award, TrendingUp, HeartHandshake,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "ISO 27001 certified. Every solution we build adheres to strict data privacy standards, GDPR compliance, and enterprise security protocols.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Zap,
    title: "Rapid Delivery, Zero Compromise",
    description:
      "Our agile AI delivery methodology ensures you see working solutions within weeks, not months — without sacrificing quality or scalability.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: Globe,
    title: "Global Delivery, Indian Precision",
    description:
      "India-based talent delivering world-class results. We work seamlessly across time zones with clients in US, UK, Europe, and APAC.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Users,
    title: "Dedicated Expert Teams",
    description:
      "You get a dedicated pod of AI engineers, data scientists, and architects — not freelancers. Consistent faces, consistent accountability.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    borderColor: "border-green-500/20",
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused Engagements",
    description:
      "Every AI solution we architect is tied to a measurable business outcome. We track ROI alongside technical KPIs.",
    gradient: "from-brand-blue/20 to-brand-purple/20",
    iconColor: "text-brand-blue-light",
    borderColor: "border-brand-blue/20",
  },
  {
    icon: HeartHandshake,
    title: "True Technology Partnership",
    description:
      "We don't just build and leave. Our post-launch support, retraining pipelines, and ongoing optimization ensure your AI keeps improving.",
    gradient: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-400",
    borderColor: "border-red-500/20",
  },
  {
    icon: Clock,
    title: "24/7 Support & Monitoring",
    description:
      "Round-the-clock monitoring, intelligent alerting, and a support team that responds fast — keeping your AI systems running at peak performance.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
  },
  {
    icon: Award,
    title: "Certified & Award-Winning",
    description:
      "Recognized by industry bodies, certified on major cloud platforms, and trusted by 200+ businesses across 15+ industries.",
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="glow-orb w-[600px] h-[400px] bg-brand-purple left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why ArlioTech"
          title={
            <>
              The AI Partner That Delivers{" "}
              <span className="gradient-text">Results, Not Promises</span>
            </>
          }
          description="We combine deep AI expertise with business acumen to deliver solutions that actually work in production."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${reason.gradient} border ${reason.borderColor} transition-all duration-300 hover:shadow-card-hover cursor-default`}
            >
              <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors`}>
                <reason.icon className={`w-5 h-5 ${reason.iconColor}`} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
