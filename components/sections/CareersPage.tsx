"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin, Clock, ArrowRight, Heart, Zap, Globe, Trophy,
  Coffee, BookOpen, Home, DollarSign, Users, Brain,
  Laptop, Rocket, Filter,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const benefits = [
  { icon: DollarSign, title: "Competitive Compensation", desc: "Top-of-market salary, equity options, and annual performance bonuses." },
  { icon: Home, title: "Remote-First Culture", desc: "Work from anywhere in India. We measure output, not hours." },
  { icon: BookOpen, title: "Learning Budget", desc: "₹60,000/year for courses, conferences, and certifications of your choice." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family. Mental health support included." },
  { icon: Laptop, title: "Premium Equipment", desc: "MacBook Pro, 4K monitor, mechanical keyboard, and any tools you need." },
  { icon: Coffee, title: "Flexible Hours", desc: "Flexible work schedule. Core hours 11am–4pm, rest is yours to manage." },
  { icon: Globe, title: "International Exposure", desc: "Work with clients across US, UK, Europe, and Asia from Day 1." },
  { icon: Trophy, title: "Recognition Programs", desc: "Monthly shoutouts, spot bonuses, and annual 'AI Innovator' awards." },
];

const values = [
  { icon: Brain, title: "Deep Work First", desc: "We protect focused time. No unnecessary meetings, async-first communication." },
  { icon: Zap, title: "Ship Real Things", desc: "We prioritize building over planning. Get your work into production fast." },
  { icon: Users, title: "Radical Candor", desc: "Honest, direct, respectful feedback. We help each other grow through truth." },
  { icon: Rocket, title: "Ownership Mindset", desc: "Every engineer is an owner. No hand-holding. Full accountability and full trust." },
];

const openings = [
  {
    title: "Senior ML Engineer",
    team: "AI Engineering",
    location: "Remote (India)",
    type: "Full-time",
    level: "Senior",
    tags: ["Python", "PyTorch", "MLOps", "LangChain"],
    desc: "Lead the design and deployment of production ML systems for our enterprise clients. You'll work on challenging problems across NLP, computer vision, and predictive analytics.",
  },
  {
    title: "Generative AI Engineer",
    team: "GenAI Products",
    location: "Remote (India)",
    type: "Full-time",
    level: "Senior",
    tags: ["LLMs", "RAG", "LangGraph", "OpenAI API"],
    desc: "Build sophisticated GenAI applications — RAG systems, AI agents, and LLM-powered products — for clients across industries.",
  },
  {
    title: "Full-Stack Engineer (Next.js)",
    team: "Product Engineering",
    location: "Remote (India)",
    type: "Full-time",
    level: "Mid–Senior",
    tags: ["Next.js", "TypeScript", "React", "Node.js"],
    desc: "Build high-performance web applications and AI product interfaces using Next.js 15, TypeScript, and modern frontend tooling.",
  },
  {
    title: "Data Engineer",
    team: "Data Platform",
    location: "Remote (India)",
    type: "Full-time",
    level: "Mid–Senior",
    tags: ["dbt", "Spark", "Snowflake", "Airflow"],
    desc: "Design and build scalable data pipelines, lakehouse architectures, and real-time streaming systems that power our clients' AI applications.",
  },
  {
    title: "AI Product Manager",
    team: "Product",
    location: "Remote (India)",
    type: "Full-time",
    level: "Senior",
    tags: ["Product Strategy", "AI", "Roadmap", "Client"],
    desc: "Define and own the product roadmap for ArlioTech's internal AI products. Bridge between clients, engineering, and design to ship impactful AI solutions.",
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    location: "Remote (India)",
    type: "Full-time",
    level: "Mid–Senior",
    tags: ["Figma", "Design Systems", "User Research", "Framer"],
    desc: "Design beautiful, functional interfaces for AI products. Create design systems, conduct user research, and collaborate closely with engineers to bring designs to life.",
  },
  {
    title: "DevOps / MLOps Engineer",
    team: "Infrastructure",
    location: "Remote (India)",
    type: "Full-time",
    level: "Mid–Senior",
    tags: ["Kubernetes", "Terraform", "MLflow", "AWS"],
    desc: "Build and maintain the cloud infrastructure and MLOps platform that powers ArlioTech's AI delivery — CI/CD, model serving, and observability.",
  },
  {
    title: "Business Development Manager",
    team: "Growth",
    location: "Remote (India)",
    type: "Full-time",
    level: "Senior",
    tags: ["AI Sales", "Enterprise", "Consulting", "International"],
    desc: "Drive revenue growth by building relationships with enterprise AI buyers across India and international markets. Own the full sales cycle for AI consulting engagements.",
  },
];

const process = [
  { step: "01", title: "Apply Online", desc: "Submit your application with a resume and brief note on why you want to join." },
  { step: "02", title: "Technical Screen", desc: "A 30-minute conversation about your background, experience, and technical approach." },
  { step: "03", title: "Technical Assessment", desc: "A take-home project relevant to the role — designed to respect your time (4-6 hours)." },
  { step: "04", title: "Team Interview", desc: "Meet the team you'd be working with. Focus on collaboration, culture, and problem-solving." },
  { step: "05", title: "Offer & Onboarding", desc: "Offer in 2-3 business days. Onboarding designed to make you productive from Week 1." },
];

const levels = ["All", "Mid–Senior", "Senior"];
const teams = ["All", "AI Engineering", "GenAI Products", "Product Engineering", "Data Platform", "Product", "Design", "Infrastructure", "Growth"];

export default function CareersPageContent() {
  const [teamFilter, setTeamFilter] = useState("All");

  const filteredOpenings = teamFilter === "All"
    ? openings
    : openings.filter((o) => o.team === teamFilter);

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25" />
        <div className="glow-orb w-[600px] h-[400px] bg-brand-cyan top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-6 inline-flex"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
            Join Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 mb-6"
          >
            Build the Future of AI{" "}
            <span className="gradient-text">With Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            We&apos;re a team of engineers, researchers, and builders obsessed with making AI
            work for real businesses. Join us and work on problems that actually matter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 justify-center text-sm text-slate-400"
          >
            {["Remote-First", "Top 10% Compensation", "Learning Culture", "International Projects"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Culture"
            title={
              <>
                How We Work &{" "}
                <span className="gradient-text">What We Stand For</span>
              </>
            }
            description="We've built a culture that attracts exceptional people and lets them do their best work."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/8 bg-white/3"
              >
                <v.icon className="w-8 h-8 text-brand-blue-light mb-4" />
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Benefits & Perks"
            title={
              <>
                Everything You Need to{" "}
                <span className="gradient-text">Do Your Best Work</span>
              </>
            }
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
                className="flex flex-col gap-3 p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <b.icon className="w-4 h-4 text-brand-blue-light" />
                </div>
                <h3 className="text-white font-semibold text-sm">{b.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <SectionHeader
              label="Open Positions"
              title={
                <>
                  Join Our{" "}
                  <span className="gradient-text">Growing Team</span>
                </>
              }
              align="left"
            />
            <div className="flex items-center gap-2 flex-shrink-0">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={teamFilter}
                onChange={(e) => setTeamFilter(e.target.value)}
                className="bg-white/5 border border-white/10 text-sm text-slate-300 rounded-xl px-4 py-2 focus:outline-none focus:border-brand-blue/50"
              >
                {teams.map((t) => (
                  <option key={t} value={t} className="bg-navy-900">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredOpenings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-brand-blue/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-white font-bold">{job.title}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light">
                        {job.level}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{job.desc}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {job.team}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary text-sm px-5 py-2.5 flex-shrink-0 self-start sm:self-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-400 mb-4">Don&apos;t see a role that fits? We&apos;re always looking for exceptional talent.</p>
            <Link href="/contact" className="btn-outline">
              Send Us Your Resume
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Hiring Process"
            title={
              <>
                What to Expect{" "}
                <span className="gradient-text">When You Apply</span>
              </>
            }
            description="A transparent, respectful process designed to be completed in under 2 weeks."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 rounded-2xl border border-white/8 bg-white/3 relative"
              >
                <span className="text-4xl font-black gradient-text-blue opacity-30 leading-none block mb-3">
                  {p.step}
                </span>
                <h3 className="text-white font-semibold mb-2 text-sm">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-3 text-white/10 w-5 h-5 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
