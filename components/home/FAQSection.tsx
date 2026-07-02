"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "How long does it take to build an AI solution?",
    a: "Project timelines vary by complexity. A focused AI prototype or chatbot can be live within 2-3 weeks. A comprehensive ML pipeline or enterprise AI platform typically takes 8-16 weeks. We always provide a detailed roadmap with clear milestones during our discovery phase.",
  },
  {
    q: "Do we need a large amount of data to start an AI project?",
    a: "Not always. The data requirements depend on the use case. Some solutions (like RAG-based chatbots using your knowledge base) can start with limited data. For predictive ML models, we help you assess data readiness, and in some cases we use transfer learning and synthetic data generation to bootstrap with smaller datasets.",
  },
  {
    q: "How does ArlioTech ensure data security and privacy?",
    a: "Security is built into everything we do. We are ISO 27001 certified and GDPR compliant. We sign comprehensive NDAs, offer on-premise or private cloud deployment, use encrypted data pipelines, and conduct regular security audits. Your data never trains third-party models.",
  },
  {
    q: "What makes you different from other AI companies in India?",
    a: "We combine deep AI research capability with practical engineering. We don't just build models — we build production systems that scale, integrate with your stack, and keep improving post-launch. Our average engagement is 18+ months, because we become a genuine technology partner, not a one-off vendor.",
  },
  {
    q: "Can you integrate AI into our existing systems (ERP, CRM, etc.)?",
    a: "Absolutely. We have deep integration experience with SAP, Salesforce, ServiceNow, Microsoft 365, and most major enterprise platforms. Our API-first architecture ensures AI capabilities plug seamlessly into your existing workflows without disruption.",
  },
  {
    q: "How do you price your AI development services?",
    a: "We offer three engagement models: Fixed-price project delivery for well-scoped work, Time & Materials for exploratory and evolving projects, and Dedicated Team arrangements for ongoing product development. We provide transparent, detailed estimates after a free discovery session.",
  },
  {
    q: "Do you provide post-launch support and model maintenance?",
    a: "Yes, and this is a key differentiator. AI models degrade over time as data patterns shift — we offer model monitoring, retraining pipelines, performance optimization, and a dedicated support team. Think of us as your long-term AI operations partner.",
  },
  {
    q: "Can startups and small businesses afford AI development?",
    a: "We serve companies of all sizes. For startups and SMEs, we offer lean MVP-focused packages that deliver core AI value efficiently. We also help clients leverage open-source models and cost-effective cloud configurations to maximize ROI on limited budgets.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title={
            <>
              Everything You&apos;d Want to{" "}
              <span className="gradient-text">Know About Working With Us</span>
            </>
          }
          description="Straight answers to the questions we get asked most often."
          className="mb-14"
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white/3 hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  {open === i ? (
                    <Minus className="w-3 h-3 text-brand-blue-light" />
                  ) : (
                    <Plus className="w-3 h-3 text-slate-400" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2">
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
