"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target, Eye, Heart, Shield, Zap, Users, Award, Globe,
  ArrowRight, CheckCircle, TrendingUp, Brain,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ContactCTA from "@/components/home/ContactCTA";

const values = [
  {
    icon: Brain,
    title: "Intelligence First",
    desc: "We approach every problem with analytical rigor. Before writing a line of code, we deeply understand the business challenge and design the most intelligent solution.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Trustworthy AI",
    desc: "We build AI that is explainable, auditable, and responsible. Ethics and safety aren't afterthoughts — they're built into our engineering DNA.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Zap,
    title: "Velocity with Quality",
    desc: "We move fast without breaking things. Our agile delivery model ships working software early and iterates rapidly, maintaining production-grade quality throughout.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    desc: "Our best work comes from deep collaboration. We treat every client's problem as our own and stay invested long after deployment.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    desc: "India-rooted, globally minded. We combine world-class technical capability with deep cultural understanding to serve international clients effectively.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: TrendingUp,
    title: "Outcome Obsessed",
    desc: "We measure our success by your outcomes. Every architecture decision, every model choice, and every sprint goal is tied to business impact.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

const timeline = [
  {
    year: "2019",
    title: "ArlioTech Founded",
    desc: "Started with a small team of AI researchers and engineers with a mission to make enterprise AI accessible to businesses of all sizes.",
  },
  {
    year: "2020",
    title: "First 20 AI Projects",
    desc: "Delivered our first 20 production AI systems — spanning NLP, computer vision, and predictive analytics — earning our first international clients.",
  },
  {
    year: "2021",
    title: "Cloud & Automation Practice",
    desc: "Expanded into intelligent automation and cloud-native AI, becoming a certified AWS and Azure partner.",
  },
  {
    year: "2022",
    title: "ISO 27001 Certified",
    desc: "Achieved ISO 27001 certification, reinforcing our enterprise security standards and enabling deeper engagement with global financial and healthcare clients.",
  },
  {
    year: "2023",
    title: "Generative AI Launch",
    desc: "Pioneered generative AI implementation for enterprise clients — RAG systems, LLM fine-tuning, and AI agents — becoming one of India's first dedicated GenAI studios.",
  },
  {
    year: "2024",
    title: "200+ Projects Milestone",
    desc: "Crossed 200 successfully delivered AI projects, expanded to 50+ engineers, and began serving clients in 15+ countries across 4 continents.",
  },
];

const leadership = [
  {
    name: "Aryan Pathak",
    role: "Founder & CEO",
    bio: "AI strategist and engineer with a vision to democratize enterprise AI for Indian businesses and global markets. Previously led AI initiatives at top technology firms.",
    avatar: "AP",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "PhD in Machine Learning with 12+ years of experience building scalable AI systems. Former research scientist, now architecting AI solutions that move businesses forward.",
    avatar: "PS",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Rohan Kapoor",
    role: "Head of AI Research",
    bio: "ML practitioner specializing in LLMs, computer vision, and reinforcement learning. Published researcher with 15+ papers in top AI conferences.",
    avatar: "RK",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Ananya Verma",
    role: "VP of Client Success",
    bio: "Builds and nurtures long-term client relationships. Brings 10 years of enterprise technology consulting experience to ensure every engagement delivers on its promise.",
    avatar: "AV",
    gradient: "from-green-500 to-cyan-500",
  },
];

const stats = [
  { value: 200, suffix: "+", label: "AI Projects" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 50, suffix: "+", label: "Experts" },
  { value: 15, suffix: "+", label: "Countries" },
];

const certifications = [
  "ISO 27001 Certified",
  "AWS Advanced Partner",
  "Azure AI Partner",
  "Google Cloud Partner",
  "GDPR Compliant",
  "SOC 2 Type II",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25" />
        <div className="glow-orb w-[500px] h-[500px] bg-brand-blue top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-label mb-6 inline-flex"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
              About ArlioTech
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 mb-6"
            >
              We&apos;re Building the{" "}
              <span className="gradient-text">AI-Powered Future</span> of Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              Founded in India with a global vision, ArlioTech is on a mission to make advanced
              artificial intelligence accessible, practical, and transformative for businesses of
              every size — from ambitious startups to global enterprises.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((s, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl text-center">
                <AnimatedCounter
                  end={s.value}
                  suffix={s.suffix}
                  className="text-4xl font-bold gradient-text-blue"
                />
                <p className="text-slate-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label mb-4 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
                From a Small Team of Believers to{" "}
                <span className="gradient-text">India&apos;s Leading AI Studio</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  ArlioTech was born in 2019 from a simple but powerful idea: that every business
                  — regardless of size or budget — deserves access to world-class artificial
                  intelligence. Not theoretical AI. Not demos. Real, production-grade systems that
                  move the needle.
                </p>
                <p>
                  Our founders had spent years inside large technology companies watching AI
                  projects fail — not because the technology wasn&apos;t capable, but because the
                  bridge between research and real-world application was too wide. We started
                  ArlioTech to be that bridge.
                </p>
                <p>
                  Today, with 50+ AI engineers, data scientists, and architects, we&apos;ve delivered
                  200+ AI solutions across 15+ countries — from fraud detection systems processing
                  millions of transactions daily, to generative AI platforms transforming how
                  knowledge workers operate.
                </p>
                <p>
                  Our India-first talent model combined with a global delivery mindset lets us offer
                  premium AI engineering at competitive price points — making enterprise-grade AI
                  accessible for startups and SMEs, while matching the expectations of Fortune 500 companies.
                </p>
              </div>
            </motion.div>

            {/* Visual panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: Target, title: "Our Mission", text: "To democratize enterprise AI — making intelligent automation and advanced machine learning accessible to businesses of all sizes, creating measurable impact through technology." },
                { icon: Eye, title: "Our Vision", text: "To be the most trusted AI innovation partner for global businesses, known for delivering AI that genuinely works — responsible, scalable, and business-outcome focused." },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-blue-light" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Certifications */}
              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Certifications & Partners
                </p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Values"
            title={
              <>
                The Principles That Guide{" "}
                <span className="gradient-text">Everything We Build</span>
              </>
            }
            description="Our core values are not aspirational statements on a wall — they're the operating principles behind every technical decision and client interaction."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                  <v.icon className={`w-5 h-5 ${v.color}`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Journey"
            title={
              <>
                Five Years of{" "}
                <span className="gradient-text">Building, Learning & Growing</span>
              </>
            }
            className="mb-14"
          />

          <div className="relative space-y-6">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-purple to-brand-cyan opacity-30" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-8 pl-4"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-blue bg-navy-950 flex items-center justify-center relative z-10">
                    <div className="w-2 h-2 rounded-full bg-brand-blue-light" />
                  </div>
                </div>
                <div className="flex-1 pb-6">
                  <span className="text-xs font-bold text-brand-blue-light">{item.year}</span>
                  <h3 className="text-white font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Leadership Team"
            title={
              <>
                The Minds Behind{" "}
                <span className="gradient-text">ArlioTech</span>
              </>
            }
            description="A team of engineers, researchers, and strategists united by a passion for building AI that actually works."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/10 text-center group hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${person.gradient} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}
                >
                  {person.avatar}
                </div>
                <h3 className="text-white font-semibold mb-0.5">{person.name}</h3>
                <p className="text-brand-blue-light text-xs font-medium mb-3">{person.role}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
