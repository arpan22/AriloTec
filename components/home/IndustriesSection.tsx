"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse, Landmark, ShoppingCart, Factory, GraduationCap,
  Truck, Building, Shield, Globe, ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const industries = [
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    shortDesc: "AI-powered diagnostics, drug discovery, and patient care automation.",
    longDesc:
      "We build HIPAA-compliant AI solutions that power clinical decision support, medical imaging analysis, drug discovery acceleration, and intelligent patient engagement platforms — helping healthcare organizations deliver better outcomes at lower cost.",
    useCases: ["Medical Imaging AI", "Clinical Decision Support", "Drug Discovery", "Patient Risk Prediction"],
    color: "from-red-500/20 to-pink-500/20",
    accent: "text-red-400",
    border: "border-red-500/20",
  },
  {
    id: "finance",
    icon: Landmark,
    title: "Finance & Banking",
    shortDesc: "Fraud detection, risk modeling, and intelligent banking experiences.",
    longDesc:
      "Our AI solutions for financial services include real-time fraud detection, credit risk modeling, regulatory compliance automation, and AI-powered investment analysis — helping institutions move faster while managing risk intelligently.",
    useCases: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading", "Compliance Automation"],
    color: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-400",
    border: "border-green-500/20",
  },
  {
    id: "retail",
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    shortDesc: "Personalization engines, demand forecasting, and visual search.",
    longDesc:
      "From AI-driven product recommendations to computer vision-based inventory management, we help retailers unlock personalized experiences that drive conversion, loyalty, and operational efficiency across every channel.",
    useCases: ["Recommendation Engine", "Demand Forecasting", "Visual Search", "Dynamic Pricing"],
    color: "from-orange-500/20 to-yellow-500/20",
    accent: "text-orange-400",
    border: "border-orange-500/20",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    shortDesc: "Predictive maintenance, quality control, and supply chain AI.",
    longDesc:
      "We deploy AI on the factory floor — predictive maintenance models that prevent downtime, computer vision systems for defect detection, and intelligent supply chain optimization that reduces waste and cost.",
    useCases: ["Predictive Maintenance", "Visual Quality Control", "Supply Chain AI", "Digital Twin"],
    color: "from-slate-500/20 to-zinc-500/20",
    accent: "text-slate-300",
    border: "border-slate-500/20",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & EdTech",
    shortDesc: "Adaptive learning, AI tutors, and intelligent assessment systems.",
    longDesc:
      "Our EdTech AI solutions power personalized learning pathways, AI tutoring systems, automated grading, and early intervention models that identify at-risk students — transforming education outcomes at scale.",
    useCases: ["Adaptive Learning", "AI Tutors", "Automated Grading", "Dropout Prediction"],
    color: "from-blue-500/20 to-indigo-500/20",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Supply Chain",
    shortDesc: "Route optimization, demand sensing, and warehouse automation.",
    longDesc:
      "Intelligent logistics AI that optimizes last-mile delivery routes, forecasts demand with precision, automates warehouse operations, and provides real-time supply chain visibility — reducing costs and improving service levels.",
    useCases: ["Route Optimization", "Demand Sensing", "Warehouse AI", "Fleet Management"],
    color: "from-cyan-500/20 to-teal-500/20",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    id: "realestate",
    icon: Building,
    title: "Real Estate",
    shortDesc: "Property valuation AI, smart search, and investment analytics.",
    longDesc:
      "AI-powered property valuation models, intelligent property matching engines, market analytics, and predictive investment tools that help real estate businesses and investors make smarter decisions faster.",
    useCases: ["AVM Models", "Smart Property Search", "Market Analytics", "Tenant Scoring"],
    color: "from-purple-500/20 to-violet-500/20",
    accent: "text-purple-400",
    border: "border-purple-500/20",
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance",
    shortDesc: "Underwriting AI, claims automation, and risk assessment.",
    longDesc:
      "We modernize insurance operations with AI — automating underwriting, accelerating claims processing, detecting fraudulent claims, and delivering personalized policy recommendations that improve conversion and retention.",
    useCases: ["Underwriting AI", "Claims Automation", "Fraud Detection", "Risk Modeling"],
    color: "from-amber-500/20 to-orange-500/20",
    accent: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    id: "government",
    icon: Globe,
    title: "Government & Public Sector",
    shortDesc: "Citizen service AI, document processing, and analytics platforms.",
    longDesc:
      "We help government agencies deploy responsible AI for citizen services — intelligent document processing, benefits fraud detection, public safety analytics, and digital service transformation that improves outcomes for citizens.",
    useCases: ["Document Processing", "Benefits Analytics", "Public Safety AI", "Citizen Chatbots"],
    color: "from-teal-500/20 to-cyan-500/20",
    accent: "text-teal-400",
    border: "border-teal-500/20",
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active)!;

  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries We Serve"
          title={
            <>
              AI Solutions for Every{" "}
              <span className="gradient-text">Industry Vertical</span>
            </>
          }
          description="Deep domain expertise across 15+ industries means we understand your specific challenges and deliver AI that creates real impact."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Industry list */}
          <div className="lg:col-span-1 space-y-2">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActive(ind.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                  active === ind.id
                    ? `bg-gradient-to-r ${ind.color} border-white/20 shadow-lg`
                    : "border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    active === ind.id ? "bg-white/10" : "bg-white/5"
                  }`}
                >
                  <ind.icon
                    className={`w-4 h-4 ${active === ind.id ? ind.accent : "text-slate-400"}`}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      active === ind.id ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {ind.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`h-full p-8 rounded-2xl border ${current.border} bg-gradient-to-br ${current.color} backdrop-blur-sm`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <current.icon className={`w-7 h-7 ${current.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{current.title}</h3>
                    <p className={`font-medium ${current.accent}`}>{current.shortDesc}</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-8">{current.longDesc}</p>

                <div className="mb-8">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Key Use Cases
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {current.useCases.map((uc) => (
                      <span
                        key={uc}
                        className={`text-sm px-3 py-1.5 rounded-lg border ${current.border} bg-white/5 text-slate-300`}
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/industries#${current.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:gap-3 transition-all duration-200"
                >
                  Explore {current.title} Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
