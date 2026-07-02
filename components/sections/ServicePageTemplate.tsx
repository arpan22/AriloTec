"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, LucideIcon,
  Brain, Layers, Network, ShieldCheck, Gauge, RefreshCw,
  FileText, Cpu, Bot, Search, Workflow, Lock,
  PlugZap, LineChart, Server, Settings, FlaskConical,
  BarChart3, GitBranch, TrendingUp, Eye, Image, Users,
  Monitor, Database, Package, PieChart, Rocket, Globe,
  Palette, Smartphone, Mic, MessageSquare, Code2, Building2,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";

const iconMap: Record<string, LucideIcon> = {
  Brain, Layers, Network, ShieldCheck, Gauge, RefreshCw,
  FileText, Cpu, Bot, Search, Workflow, Lock,
  PlugZap, LineChart, Server, Settings, FlaskConical,
  BarChart3, GitBranch, TrendingUp, Eye, Image, Users,
  Monitor, Database, Package, PieChart, Rocket, Globe,
  Palette, Smartphone, Mic, MessageSquare, Code2, Building2,
};

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServicePageData {
  label: string;
  titlePre: string;
  titleGradient: string;
  headline: string;
  description: string;
  heroDescription: string;
  gradient: string;
  features: ServiceFeature[];
  process: ServiceProcess[];
  metrics: ServiceMetric[];
  useCases: string[];
  technologies: string[];
  faqs?: { q: string; a: string }[];
}

interface Props {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: Props) {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25" />
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[400px] bg-gradient-to-br ${data.gradient} rounded-full blur-[120px] opacity-20 pointer-events-none`}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="section-label mb-6 inline-flex"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
                {data.label}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-white leading-tight mt-4 mb-6"
              >
                {data.titlePre}{" "}
                <span className="gradient-text">{data.titleGradient}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed mb-8"
              >
                {data.heroDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="btn-primary">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  See Related Work
                </Link>
              </motion.div>
            </div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {data.metrics.map((m, i) => (
                <div
                  key={i}
                  className={`glass-card p-6 rounded-2xl border border-white/10 ${i === 0 ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <p className={`text-4xl font-bold bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent mb-2`}>
                    {m.value}
                  </p>
                  <p className="text-slate-400 text-sm">{m.label}</p>
                </div>
              ))}

              <div className="col-span-2 glass-card p-5 rounded-2xl border border-white/10">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Technologies We Use
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Core Capabilities"
            title={
              <>
                What We Deliver with{" "}
                <span className="gradient-text">{data.headline}</span>
              </>
            }
            description={data.description}
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15 transition-all duration-300 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${data.gradient} opacity-80 flex items-center justify-center mb-4`}
                >
                  {React.createElement(iconMap[feature.icon] ?? Brain, { className: "w-5 h-5 text-white" })}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <SectionHeader
              label="Use Cases"
              title={
                <>
                  Real Applications,{" "}
                  <span className="gradient-text">Real Results</span>
                </>
              }
              description="Our solutions are deployed across a wide range of business scenarios, consistently delivering measurable ROI."
              align="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.useCases.map((uc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/3"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{uc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="How We Work"
            title={
              <>
                Our Delivery{" "}
                <span className="gradient-text">Process</span>
              </>
            }
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border border-white/8 bg-white/3"
              >
                <span
                  className={`text-5xl font-black bg-gradient-to-br ${data.gradient} bg-clip-text text-transparent opacity-30 leading-none block mb-3`}
                >
                  {p.step}
                </span>
                <h3 className="text-white font-semibold mb-2 text-sm">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
                {i < data.process.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-2.5 text-white/10 w-5 h-5 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
