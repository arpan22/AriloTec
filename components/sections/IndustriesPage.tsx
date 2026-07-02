"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse, Landmark, ShoppingCart, Factory, GraduationCap, Truck,
  Building, Shield, Globe, ShoppingBag, ArrowRight, CheckCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";

const industries = [
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    tagline: "AI that saves lives and reduces costs",
    gradient: "from-red-500/20 to-pink-500/20",
    border: "border-red-500/20",
    accent: "text-red-400",
    bg: "bg-red-500/10",
    description:
      "ArlioTech builds HIPAA-compliant AI solutions that power the next generation of healthcare delivery. From clinical decision support that helps physicians make faster, more accurate diagnoses, to AI-driven drug discovery platforms that compress years of research into months.",
    challenges: ["Manual clinical workflows slowing care delivery", "Inaccurate diagnoses due to data silos", "Skyrocketing operational costs", "Regulatory compliance complexity"],
    solutions: [
      "Medical imaging AI for radiology and pathology",
      "Predictive patient risk stratification",
      "Clinical NLP for EHR data extraction",
      "AI-powered drug discovery acceleration",
      "Intelligent appointment and bed management",
      "Automated claims processing and coding",
    ],
    caseStudy: { metric: "34% reduction in diagnostic time", client: "Multi-hospital network" },
  },
  {
    id: "finance",
    icon: Landmark,
    title: "Finance & Banking",
    tagline: "Intelligent finance at the speed of data",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
    accent: "text-green-400",
    bg: "bg-green-500/10",
    description:
      "Financial institutions face relentless pressure — from fintech competition to regulatory complexity to fraud evolution. We help banks, NBFCs, and investment firms deploy AI that detects fraud in milliseconds, prices risk with precision, automates compliance, and personalizes financial experiences.",
    challenges: ["Sophisticated fraud costing billions annually", "Manual compliance and regulatory reporting", "Slow credit decisioning losing customers", "Outdated legacy infrastructure"],
    solutions: [
      "Real-time fraud detection and prevention",
      "AI credit scoring and underwriting",
      "Regulatory compliance automation",
      "Algorithmic trading and risk modeling",
      "KYC/AML intelligence",
      "AI financial advisor and robo-advisory",
    ],
    caseStudy: { metric: "$4.2M fraud prevented annually", client: "Regional bank (Asia)" },
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    tagline: "Personalization engines that grow revenue",
    gradient: "from-orange-500/20 to-yellow-500/20",
    border: "border-orange-500/20",
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    description:
      "The future of retail is intelligent — hyper-personalized, demand-aware, and operationally optimized. We help retailers and e-commerce companies build recommendation engines that lift AOV, demand forecasting models that reduce inventory waste, and visual search experiences that convert.",
    challenges: ["Generic experiences losing customers to Amazon", "Inventory overstock and stockouts", "Price optimization in volatile markets", "Rising CAC eating margins"],
    solutions: [
      "AI product recommendation engine",
      "Demand forecasting and inventory optimization",
      "Dynamic pricing optimization",
      "Visual search and style matching",
      "Customer lifetime value prediction",
      "AI-powered merchandising",
    ],
    caseStudy: { metric: "28% increase in basket size", client: "D2C fashion brand" },
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    tagline: "Zero defects, maximum uptime with AI",
    gradient: "from-slate-500/20 to-zinc-500/20",
    border: "border-slate-500/20",
    accent: "text-slate-300",
    bg: "bg-slate-500/10",
    description:
      "Manufacturing intelligence is the competitive frontier. We bring AI to the factory floor — predictive maintenance systems that prevent costly downtime, computer vision QC that outperforms human inspectors, and supply chain AI that absorbs disruption gracefully.",
    challenges: ["Unplanned downtime costing millions per hour", "Manual QC with high defect escape rates", "Supply chain volatility and visibility gaps", "Skilled labor shortages"],
    solutions: [
      "Predictive maintenance with sensor AI",
      "Visual quality control and defect detection",
      "Digital twin simulation",
      "Supply chain visibility and optimization",
      "Energy consumption optimization",
      "Production scheduling AI",
    ],
    caseStudy: { metric: "67% reduction in unplanned downtime", client: "Auto parts manufacturer" },
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & EdTech",
    tagline: "Personalized learning at massive scale",
    gradient: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    description:
      "Education is being transformed by AI — not to replace teachers, but to give every student a personalized learning experience. We build adaptive learning platforms, AI tutors, intelligent assessment systems, and early warning models that identify at-risk students before they fall behind.",
    challenges: ["One-size-fits-all learning leaving students behind", "Teacher bandwidth and burnout", "Measuring learning outcomes accurately", "Scaling quality education affordably"],
    solutions: [
      "Adaptive learning path generation",
      "AI tutoring and Socratic questioning",
      "Automated essay grading and feedback",
      "At-risk student prediction",
      "Content recommendation engine",
      "AI-powered assessments",
    ],
    caseStudy: { metric: "40% improvement in learning outcomes", client: "EdTech platform (India)" },
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Supply Chain",
    tagline: "Smarter routes, faster delivery, lower cost",
    gradient: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10",
    description:
      "Logistics is a data problem at its core. We help logistics companies and supply chain teams deploy AI for route optimization, demand sensing, warehouse automation, and real-time visibility — turning operational complexity into competitive advantage.",
    challenges: ["Rising fuel and labor costs", "Inefficient routes and dead miles", "Warehouse throughput bottlenecks", "Poor demand visibility causing stockouts"],
    solutions: [
      "Last-mile route optimization",
      "Demand sensing and forecasting",
      "Warehouse AI (picking, putaway, slotting)",
      "Fleet management and telematics AI",
      "Port and yard management AI",
      "Carrier performance prediction",
    ],
    caseStudy: { metric: "22% fuel cost reduction", client: "3PL logistics company" },
  },
  {
    id: "realestate",
    icon: Building,
    title: "Real Estate",
    tagline: "Data-driven property intelligence",
    gradient: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    description:
      "Real estate decisions involve massive capital and complex data. We bring AI to property markets — automated valuation models, intelligent property matching, market analytics, and investment risk scoring that give developers, investors, and platforms a decisive edge.",
    challenges: ["Inaccurate manual property valuations", "Slow buyer-property matching", "Market timing and investment risk", "Paper-heavy transaction processes"],
    solutions: [
      "Automated valuation models (AVM)",
      "Intelligent property recommendation",
      "Market trend forecasting",
      "Tenant screening and scoring",
      "Document processing automation",
      "Investment ROI analytics",
    ],
    caseStudy: { metric: "95% valuation accuracy vs. market", client: "PropTech platform" },
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance",
    tagline: "Underwrite smarter, process faster",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    description:
      "Insurance is fundamentally about risk — and AI transforms how risk is assessed, priced, and managed. We build AI that automates underwriting, accelerates claims, detects fraud, and personalizes policies for modern insurance carriers and insurtech companies.",
    challenges: ["Slow manual underwriting losing customers", "High fraudulent claims losses", "Legacy claims processing bottlenecks", "Customer churn from poor experiences"],
    solutions: [
      "AI-powered underwriting automation",
      "Claims processing AI",
      "Fraud detection and investigation AI",
      "Customer churn prediction",
      "Risk scoring models",
      "Telematics-based insurance AI",
    ],
    caseStudy: { metric: "55% faster claims settlement", client: "Insurance carrier (UK)" },
  },
  {
    id: "government",
    icon: Globe,
    title: "Government & Public Sector",
    tagline: "Responsible AI for better citizen services",
    gradient: "from-teal-500/20 to-cyan-500/20",
    border: "border-teal-500/20",
    accent: "text-teal-400",
    bg: "bg-teal-500/10",
    description:
      "Government AI must be responsible, explainable, and equitable. We help public sector agencies deploy AI for citizen services, fraud prevention, infrastructure optimization, and intelligent document processing — improving outcomes for citizens while reducing administrative burden.",
    challenges: ["Overwhelming volume of citizen requests", "Manual document processing backlogs", "Fraud in benefits and procurement", "Outdated legacy IT systems"],
    solutions: [
      "Citizen service chatbot and portal",
      "Intelligent document processing",
      "Benefits fraud detection",
      "Public safety analytics",
      "Smart city infrastructure AI",
      "Revenue compliance and audit AI",
    ],
    caseStudy: { metric: "80% reduction in service processing time", client: "State government agency" },
  },
];

export default function IndustriesPageContent() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25" />
        <div className="glow-orb w-[600px] h-[400px] bg-brand-purple top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-12 blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-6 inline-flex"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
            Industries We Serve
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 mb-6"
          >
            Deep AI Expertise Across{" "}
            <span className="gradient-text">Every Industry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We don&apos;t just understand AI — we understand your business. Domain-specific expertise
            means we solve real industry problems, not generic tech challenges.
          </motion.p>
        </div>
      </section>

      {/* Industry cards */}
      {industries.map((industry, i) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-20 ${i % 2 === 0 ? "bg-navy-950" : "bg-navy-900"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r ${industry.gradient} border ${industry.border} mb-6`}>
                  <industry.icon className={`w-5 h-5 ${industry.accent}`} />
                  <span className="text-white font-semibold">{industry.title}</span>
                </div>
                <p className={`text-xl font-semibold mb-4 ${industry.accent}`}>{industry.tagline}</p>
                <p className="text-slate-400 leading-relaxed mb-8">{industry.description}</p>

                {/* Case study metric */}
                <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r ${industry.gradient} border ${industry.border} mb-8`}>
                  <div>
                    <p className="text-white font-bold">{industry.caseStudy.metric}</p>
                    <p className="text-slate-300 text-xs">{industry.caseStudy.client}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Key Challenges We Solve
                  </p>
                  <div className="space-y-2">
                    {industry.challenges.map((c, ci) => (
                      <div key={ci} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: solutions */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  AI Solutions We Deliver
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {industry.solutions.map((solution, si) => (
                    <div
                      key={si}
                      className="flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/5 transition-colors"
                    >
                      <CheckCircle className={`w-4 h-4 ${industry.accent} flex-shrink-0`} />
                      <span className="text-slate-300 text-sm">{solution}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  Discuss Your {industry.title} Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <ContactCTA />
    </div>
  );
}
