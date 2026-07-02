"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain, Cpu, Bot, MessageSquare, BarChart3, Eye, Zap, Cloud,
  Database, Globe, Smartphone, Palette, Code2, Users, Briefcase, ArrowRight,
} from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";

const serviceGroups = [
  {
    title: "Artificial Intelligence & ML",
    services: [
      { icon: Brain, title: "Artificial Intelligence", href: "/services/artificial-intelligence", desc: "End-to-end AI strategy, development, and deployment." },
      { icon: Cpu, title: "Generative AI", href: "/services/generative-ai", desc: "LLMs, RAG systems, fine-tuning, and GenAI applications." },
      { icon: Bot, title: "AI Agents", href: "/services/ai-agents", desc: "Autonomous multi-agent systems for complex workflows." },
      { icon: MessageSquare, title: "Chatbot Development", href: "/services/chatbot-development", desc: "Intelligent conversational AI across every channel." },
      { icon: BarChart3, title: "Machine Learning", href: "/services/machine-learning", desc: "Predictive models, MLOps, and production ML systems." },
      { icon: Eye, title: "Computer Vision", href: "/services/computer-vision", desc: "Visual AI for inspection, detection, and recognition." },
    ],
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/20",
  },
  {
    title: "Automation & Cloud",
    services: [
      { icon: Zap, title: "Automation & RPA", href: "/services/automation", desc: "Intelligent process automation combining AI and RPA." },
      { icon: Cloud, title: "Cloud Solutions", href: "/services/cloud-solutions", desc: "Cloud-native architecture across AWS, Azure, and GCP." },
      { icon: Database, title: "Data Engineering", href: "/services/data-engineering", desc: "Modern data platforms, pipelines, and analytics." },
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
  },
  {
    title: "Product & Development",
    services: [
      { icon: Globe, title: "Web Development", href: "/services/web-development", desc: "High-performance web applications with modern frameworks." },
      { icon: Smartphone, title: "Mobile Development", href: "/services/mobile-app-development", desc: "Native and cross-platform iOS/Android applications." },
      { icon: Palette, title: "UI/UX Design", href: "/services/ui-ux-design", desc: "Research-driven design systems and premium interfaces." },
      { icon: Code2, title: "Custom Software", href: "/services/custom-software", desc: "Bespoke software solutions built for your exact needs." },
      { icon: Briefcase, title: "IT Consulting", href: "/services/it-consulting", desc: "Strategic technology advisory and digital transformation." },
      { icon: Users, title: "Staff Augmentation", href: "/services/staff-augmentation", desc: "Dedicated AI & engineering talent on demand." },
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
  },
];

export default function ServicesPageContent() {
  return (
    <div className="min-h-screen bg-navy-900">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25" />
        <div className="glow-orb w-[600px] h-[400px] bg-brand-blue top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-12 blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-6 inline-flex"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
            What We Build
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 mb-6"
          >
            Enterprise AI & Technology Services{" "}
            <span className="gradient-text">That Deliver Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From AI research to production deployment, we cover the full spectrum of intelligent
            technology services. Every engagement is outcome-focused and built for scale.
          </motion.p>
        </div>
      </section>

      {serviceGroups.map((group, gi) => (
        <section key={gi} className={`py-16 ${gi % 2 === 0 ? "bg-navy-950" : "bg-navy-900"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${group.gradient} border ${group.border} mb-8`}
            >
              <span className="text-white font-semibold text-sm">{group.title}</span>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={service.href}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${group.gradient}`}
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white font-semibold text-sm">{service.title}</h3>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">{service.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ContactCTA />
    </div>
  );
}
