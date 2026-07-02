"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, MessageSquare, Calendar, Send,
  CheckCircle, ArrowRight, Linkedin, Twitter, Github,
} from "lucide-react";

const contactOptions = [
  {
    icon: MessageSquare,
    title: "Start a Project",
    desc: "Tell us about your AI vision. We'll respond within 24 hours with initial thoughts and next steps.",
    cta: "Send a Message",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Calendar,
    title: "Book a Discovery Call",
    desc: "30-minute video call with our AI architects. No pitch — just a genuine conversation about your challenges.",
    cta: "Schedule a Call",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    desc: "Partnership opportunities, media requests, or any other questions. We're always happy to connect.",
    cta: "Send an Email",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

const officeInfo = [
  { icon: MapPin, label: "Headquarters", value: "India (Remote-first, serving globally)" },
  { icon: Mail, label: "General Inquiries", value: "hr@arliotech.com" },
  { icon: Mail, label: "Business Development", value: "hr@arliotech.com" },
  { icon: Phone, label: "Phone (India)", value: "+91 890076432" },
  { icon: MessageSquare, label: "WhatsApp", value: "+91 890076432" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/arliotech" },
  { icon: Twitter, label: "Twitter/X", href: "https://twitter.com/arliotech" },
  { icon: Github, label: "GitHub", href: "https://github.com/arliotech" },
];

const services = [
  "Artificial Intelligence Solutions",
  "Generative AI & LLMs",
  "AI Agents",
  "Machine Learning",
  "Computer Vision",
  "Automation & RPA",
  "Cloud Solutions",
  "Data Engineering",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "IT Consulting",
  "Staff Augmentation",
  "Other",
];

const budgets = [
  "Under $10K",
  "$10K – $50K",
  "$50K – $100K",
  "$100K – $500K",
  "$500K+",
  "Not sure yet",
];

export default function ContactPageContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
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
            Let&apos;s Talk
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 mb-6"
          >
            Start Your AI Journey{" "}
            <span className="gradient-text">Today</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Whether you have a clear AI roadmap or just a vague idea — we&apos;re the right conversation to start.
          </motion.p>
        </div>
      </section>

      {/* Contact options */}
      <section className="pb-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {contactOptions.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${opt.border} bg-gradient-to-br from-white/3 to-white/1 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${opt.bg} flex items-center justify-center mb-4`}>
                  <opt.icon className={`w-5 h-5 ${opt.color}`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{opt.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{opt.desc}</p>
                <button className="text-sm font-medium text-white flex items-center gap-1 hover:gap-2 transition-all">
                  {opt.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main form + info */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-slate-400 mb-8">We respond to every inquiry within 24 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center glass-card p-8 rounded-2xl border border-green-500/20"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-slate-400">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                      >
                        <option value="">Select a budget range…</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Describe your AI challenge, goals, and any relevant context. The more detail, the better we can help…"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    We sign NDAs on Day 1 and your information is never shared.
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h3 className="text-white font-semibold mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {officeInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-4 h-4 text-brand-blue-light" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">{info.label}</p>
                        <p className="text-slate-200 text-sm">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
                <div className="space-y-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/3 hover:bg-white/8 border border-white/5 transition-all group"
                    >
                      <s.icon className="w-4 h-4 text-slate-400 group-hover:text-brand-blue-light transition-colors" />
                      <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                        {s.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h3 className="text-white font-semibold mb-3">What Happens Next</h3>
                <div className="space-y-3">
                  {[
                    "We review your inquiry (within 4 business hours)",
                    "Initial response with clarifying questions or a meeting invite",
                    "Discovery call with our AI architects",
                    "Proposal and detailed project roadmap",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue-light text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        {i + 1}
                      </span>
                      <p className="text-slate-400 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
