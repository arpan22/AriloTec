"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp, Clock, Users, BarChart3, ArrowRight, Filter,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";

const caseStudies = [
  {
    id: 1,
    tag: "Generative AI",
    industry: "Legal Tech",
    client: "LegalEdge Corp",
    location: "London, UK",
    title: "AI-Powered Contract Intelligence Platform Processing 10,000+ Documents Monthly",
    challenge:
      "LegalEdge's team of 200+ lawyers spent 60% of their time reviewing, summarizing, and extracting key clauses from contracts — work that was repetitive, error-prone, and expensive.",
    solution:
      "We built a RAG-based contract intelligence platform powered by GPT-4 with custom fine-tuning on legal language. The system extracts obligations, dates, risks, and anomalies with legal-grade accuracy, and generates executive summaries automatically.",
    results: [
      { metric: "92%", label: "Time reduction in contract review" },
      { metric: "99.1%", label: "Extraction accuracy on key clauses" },
      { metric: "$1.8M", label: "Annual savings in legal hours" },
      { metric: "3 weeks", label: "From kickoff to production" },
    ],
    technologies: ["GPT-4", "LangChain", "RAG", "Next.js", "PostgreSQL"],
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/20",
    accent: "text-blue-400",
  },
  {
    id: 2,
    tag: "Machine Learning",
    industry: "Banking",
    client: "FinancePro Bank",
    location: "Singapore",
    title: "Real-Time Fraud Detection ML System Monitoring 2 Million Transactions Daily",
    challenge:
      "FinancePro was losing $6M+ annually to fraudulent transactions. Their rule-based system had a 35% false positive rate, frustrating legitimate customers and overwhelming the fraud operations team.",
    solution:
      "We designed and deployed an ensemble ML fraud detection system combining gradient boosting, neural networks, and graph-based anomaly detection. The model processes transactions in under 12ms, enabling real-time blocking.",
    results: [
      { metric: "67%", label: "Reduction in fraud losses" },
      { metric: "89%", label: "Reduction in false positives" },
      { metric: "$4.2M", label: "Fraud prevented in Year 1" },
      { metric: "12ms", label: "Real-time inference latency" },
    ],
    technologies: ["XGBoost", "PyTorch", "Kafka", "Redis", "AWS SageMaker"],
    gradient: "from-green-500/20 to-cyan-500/20",
    border: "border-green-500/20",
    accent: "text-green-400",
  },
  {
    id: 3,
    tag: "Computer Vision",
    industry: "Manufacturing",
    client: "AutoPrecision India",
    location: "Pune, India",
    title: "AI Quality Control System Replacing 40 Manual Inspectors on Automotive Assembly Line",
    challenge:
      "AutoPrecision's manual QC process had an 8% defect escape rate — costing millions in recalls and rework. 40 inspectors worked around the clock, yet quality remained inconsistent.",
    solution:
      "We installed a multi-camera computer vision system using YOLOv9 with custom-trained defect detection models. The system inspects every unit in real-time, classifying 47 defect types with sub-30ms inference on edge hardware.",
    results: [
      { metric: "99.4%", label: "Defect detection accuracy" },
      { metric: "0.2%", label: "Defect escape rate (from 8%)" },
      { metric: "65%", label: "QC cost reduction" },
      { metric: "24/7", label: "Continuous automated inspection" },
    ],
    technologies: ["YOLOv9", "OpenCV", "TensorRT", "NVIDIA Jetson", "Python"],
    gradient: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/20",
    accent: "text-orange-400",
  },
  {
    id: 4,
    tag: "AI Agents",
    industry: "Procurement",
    client: "GlobalEdge Enterprise",
    location: "Barcelona, Spain",
    title: "Multi-Agent Procurement Automation Handling €50M in Purchase Orders Autonomously",
    challenge:
      "GlobalEdge's procurement team processed 2,000+ purchase orders monthly — a labor-intensive process involving vendor lookup, price negotiation, approval routing, and ERP data entry.",
    solution:
      "We architected a LangGraph-based multi-agent system with specialized agents for vendor lookup, price comparison, compliance checking, and approval orchestration — integrated directly with their SAP S/4HANA instance.",
    results: [
      { metric: "80%", label: "Purchase orders processed autonomously" },
      { metric: "74%", label: "Reduction in processing time" },
      { metric: "4 months", label: "ROI achievement timeline" },
      { metric: "99.8%", label: "Compliance accuracy" },
    ],
    technologies: ["LangGraph", "Claude API", "SAP API", "Python", "FastAPI"],
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
    accent: "text-purple-400",
  },
  {
    id: 5,
    tag: "Predictive Analytics",
    industry: "Healthcare",
    client: "HealthBridge Network",
    location: "Singapore",
    title: "Patient Risk Stratification AI Deployed Across 12 Hospitals, Preventing 1,400+ Adverse Events",
    challenge:
      "HealthBridge struggled to identify high-risk patients proactively. Clinicians relied on intuition and fragmented data — resulting in preventable readmissions and adverse events.",
    solution:
      "We built a HIPAA-compliant patient risk ML platform that ingests EHR, lab, medication, and vitals data to score patient risk in real-time. Integrated with nurse call systems, it surfaces alerts 48 hours before predicted deterioration.",
    results: [
      { metric: "1,400+", label: "Adverse events prevented" },
      { metric: "34%", label: "Reduction in ICU readmissions" },
      { metric: "$8.2M", label: "Annual cost avoidance" },
      { metric: "12", label: "Hospitals on the platform" },
    ],
    technologies: ["PyTorch", "FHIR APIs", "AWS HealthLake", "FastAPI", "React"],
    gradient: "from-red-500/20 to-pink-500/20",
    border: "border-red-500/20",
    accent: "text-red-400",
  },
  {
    id: 6,
    tag: "NLP & Automation",
    industry: "Insurance",
    client: "ShieldMore Insurance",
    location: "Mumbai, India",
    title: "AI Claims Processing Platform Reducing Settlement Time from 14 Days to 6 Hours",
    challenge:
      "ShieldMore's claims process required manual document review, fraud assessment, policy matching, and approval — taking an average of 14 business days and costing significant operational overhead.",
    solution:
      "We built an end-to-end claims AI platform using NLP for document understanding, ML for fraud scoring, and workflow AI for automated approval routing. Integrated with their legacy claims management system via API.",
    results: [
      { metric: "6 hours", label: "Average claims settlement (from 14 days)" },
      { metric: "55%", label: "Operational cost reduction" },
      { metric: "94%", label: "Customer CSAT improvement" },
      { metric: "31%", label: "Fraud detection improvement" },
    ],
    technologies: ["BERT", "spaCy", "XGBoost", "FastAPI", "Azure"],
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    accent: "text-amber-400",
  },
];

const filters = ["All", "Generative AI", "Machine Learning", "Computer Vision", "AI Agents", "Predictive Analytics", "NLP & Automation"];

export default function CaseStudiesPageContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.tag === activeFilter);

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
            Success Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 mb-6"
          >
            AI That Works in the{" "}
            <span className="gradient-text">Real World</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We let results speak. Here are six detailed case studies showing exactly how
            ArlioTech&apos;s AI solutions have transformed businesses across industries.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-navy-950 border-b border-white/5 sticky top-16 lg:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeFilter === f
                    ? "bg-brand-blue text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filtered.map((cs, i) => (
              <motion.article
                key={cs.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className={`p-8 rounded-2xl border ${cs.border} bg-gradient-to-br ${cs.gradient} hover:shadow-card-hover transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main content */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cs.border} ${cs.accent} bg-white/5`}>
                        {cs.tag}
                      </span>
                      <span className="text-xs text-slate-400 px-2 py-1 rounded-full border border-white/10">
                        {cs.industry}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                      {cs.title}
                    </h2>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        The Challenge
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="mb-5">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Our Solution
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">{cs.solution}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {cs.client}
                      </span>
                      <span>{cs.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {cs.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Key Results
                    </p>
                    {cs.results.map((r, ri) => (
                      <div
                        key={ri}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <TrendingUp className={`w-4 h-4 ${cs.accent} flex-shrink-0`} />
                        <div>
                          <p className={`text-xl font-bold ${cs.accent}`}>{r.metric}</p>
                          <p className="text-slate-400 text-xs">{r.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
