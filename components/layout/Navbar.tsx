"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, BarChart3, Users, Building2,
  ChevronDown, Menu, X, ArrowRight, Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  { label: "Healthcare", href: "/industries#healthcare" },
  { label: "Finance & Banking", href: "/industries#finance" },
  { label: "Retail & E-commerce", href: "/industries#retail" },
  { label: "Manufacturing", href: "/industries#manufacturing" },
  { label: "Education", href: "/industries#education" },
  { label: "Logistics", href: "/industries#logistics" },
  { label: "Real Estate", href: "/industries#realestate" },
  { label: "Insurance", href: "/industries#insurance" },
  { label: "Government", href: "/industries#government" },
];

const company = [
  { label: "About Us", href: "/about", icon: Building2 },
  { label: "Case Studies", href: "/case-studies", icon: BarChart3 },
  { label: "Careers", href: "/careers", icon: Users },
  { label: "Blog", href: "/blog", icon: Briefcase },
];

type DropdownKey = "industries" | "company" | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const openDropdown = (key: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-purple rounded-lg group-hover:shadow-glow-blue transition-all duration-300" />
                <Brain className="absolute inset-0 m-auto w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Arlio<span className="gradient-text">Tech</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {/* Industries */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("industries")}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeDropdown === "industries"
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  Industries
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === "industries" ? "rotate-180" : ""
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "industries" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56"
                      onMouseEnter={() => openDropdown("industries")}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="glass-dark shadow-2xl p-3 rounded-2xl">
                        {industries.map((ind) => (
                          <Link
                            key={ind.href}
                            href={ind.href}
                            className="flex items-center px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-150"
                          >
                            {ind.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("company")}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeDropdown === "company"
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  Company
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === "company" ? "rotate-180" : ""
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "company" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-52"
                      onMouseEnter={() => openDropdown("company")}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="glass-dark shadow-2xl p-3 rounded-2xl">
                        {company.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-150 group"
                          >
                            <c.icon className="w-4 h-4 text-slate-500 group-hover:text-brand-blue-light transition-colors" />
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/case-studies"
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                Case Studies
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-secondary text-sm px-5 py-2.5">
                Talk to Us
              </Link>
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-xl lg:hidden overflow-y-auto pt-20"
          >
            <div className="p-6 space-y-2">
              {/* Mobile Industries */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white font-medium bg-white/5"
                >
                  Industries
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      mobileExpanded === "industries" ? "rotate-180" : ""
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "industries" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 space-y-1 pl-4">
                        {industries.map((ind) => (
                          <Link
                            key={ind.href}
                            href={ind.href}
                            className="block px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm"
                          >
                            {ind.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-white font-medium bg-white/5 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 grid grid-cols-2 gap-3">
                <Link href="/contact" className="btn-secondary justify-center text-sm">
                  Talk to Us
                </Link>
                <Link href="/contact" className="btn-primary justify-center text-sm">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
