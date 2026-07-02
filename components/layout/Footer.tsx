"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain, Mail, Phone, MapPin, Youtube, ArrowRight, Send,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
    { label: "Generative AI", href: "/services/generative-ai" },
    { label: "AI Agents", href: "/services/ai-agents" },
    { label: "Machine Learning", href: "/services/machine-learning" },
    { label: "Automation & RPA", href: "/services/automation" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "Data Engineering", href: "/services/data-engineering" },
    { label: "Web Development", href: "/services/web-development" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  industries: [
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Finance & Banking", href: "/industries#finance" },
    { label: "Retail & E-commerce", href: "/industries#retail" },
    { label: "Manufacturing", href: "/industries#manufacturing" },
    { label: "Education", href: "/industries#education" },
    { label: "Logistics", href: "/industries#logistics" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};

const socials = [
  { icon: Youtube, href: "https://youtube.com/@arilotec", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="glow-orb w-96 h-96 bg-brand-blue -bottom-48 -left-48 opacity-10" />
      <div className="glow-orb w-96 h-96 bg-brand-purple -bottom-48 -right-48 opacity-10" />

      {/* Newsletter bar */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Stay ahead of the AI curve</h3>
              <p className="text-slate-400 text-sm mt-1">
                Monthly insights on AI, automation, and enterprise tech.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
              <button className="btn-primary text-sm px-5 py-3 whitespace-nowrap">
                Subscribe <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-purple rounded-lg" />
                <Brain className="absolute inset-0 m-auto w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Arlio<span className="gradient-text">Tech</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              India&apos;s premier AI innovation company empowering businesses through intelligent
              automation, generative AI, and enterprise-grade digital transformation solutions.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@arilotec.com"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                hello@arilotec.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                +91 98765 43210
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                <span>India (Remote-first, serving globally)</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-brand-blue-light" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-brand-blue-light" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-4 mt-8 text-sm uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-brand-blue-light" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center mb-4">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Ready to build with AI?</h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Let&apos;s discuss how AI can transform your business.
              </p>
              <Link href="/contact" className="btn-primary text-sm w-full justify-center">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {["ISO 27001", "GDPR", "SOC 2", "AWS Partner"].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-slate-400"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} AriloTec. All rights reserved. Made with ❤️ in India.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
