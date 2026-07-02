"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain, Cpu, Bot, MessageSquare, BarChart3, Eye, Zap,
  Cloud, Database, Globe, Smartphone, Palette, ArrowRight, Code2,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Custom AI strategy, model development, and deployment. We build production-grade AI systems tailored to your business logic.",
    href: "/services/artificial-intelligence",
    color: "blue",
    tags: ["Neural Networks", "Predictive AI", "AI Strategy"],
  },
  {
    icon: Cpu,
    title: "Generative AI",
    description:
      "Harness GPT-4, Claude, Gemini, and open-source LLMs. Build intelligent document processors, code assistants, and content engines.",
    href: "/services/generative-ai",
    color: "purple",
    tags: ["LLMs", "RAG", "Fine-tuning"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Autonomous AI agents that reason, plan, and execute complex workflows. Multi-agent systems for enterprise-scale automation.",
    href: "/services/ai-agents",
    color: "cyan",
    tags: ["Agentic AI", "LangGraph", "AutoGen"],
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    description:
      "Conversational AI that understands context. Intelligent chatbots and virtual assistants for sales, support, and operations.",
    href: "/services/chatbot-development",
    color: "blue",
    tags: ["NLP", "Multilingual", "Omnichannel"],
  },
  {
    icon: BarChart3,
    title: "Machine Learning",
    description:
      "End-to-end ML pipelines — from data prep and model training to deployment and MLOps. Delivering measurable business outcomes.",
    href: "/services/machine-learning",
    color: "purple",
    tags: ["Scikit-learn", "PyTorch", "MLflow"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Visual AI for quality inspection, object detection, facial recognition, and medical imaging. Real-time processing at scale.",
    href: "/services/computer-vision",
    color: "cyan",
    tags: ["YOLO", "OCR", "Video Analytics"],
  },
  {
    icon: Zap,
    title: "Automation & RPA",
    description:
      "Intelligent process automation combining RPA and AI. Eliminate repetitive workflows and unlock operational efficiency.",
    href: "/services/automation",
    color: "blue",
    tags: ["UiPath", "Zapier", "n8n"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud-native architecture, migration, and optimization across AWS, Azure, and GCP. Scalable infrastructure for AI workloads.",
    href: "/services/cloud-solutions",
    color: "purple",
    tags: ["AWS", "Azure", "Kubernetes"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Modern data platforms, ETL pipelines, and real-time analytics. Turn raw data into actionable business intelligence.",
    href: "/services/data-engineering",
    color: "cyan",
    tags: ["Spark", "dbt", "Snowflake"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance web applications built with Next.js, React, and modern frameworks. SEO-optimized and conversion-focused.",
    href: "/services/web-development",
    color: "blue",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Seamless user experiences with AI-powered features.",
    href: "/services/mobile-app-development",
    color: "purple",
    tags: ["React Native", "Flutter", "iOS/Android"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Research-driven design systems and premium interfaces. We craft experiences users love and businesses convert on.",
    href: "/services/ui-ux-design",
    color: "cyan",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
];

const colorMap = {
  blue: {
    icon: "bg-brand-blue/10 text-brand-blue-light group-hover:bg-brand-blue/20",
    border: "hover:border-brand-blue/30",
    shadow: "hover:shadow-glow-blue",
    tag: "bg-brand-blue/10 text-brand-blue-light border-brand-blue/20",
  },
  purple: {
    icon: "bg-brand-purple/10 text-brand-purple-light group-hover:bg-brand-purple/20",
    border: "hover:border-brand-purple/30",
    shadow: "hover:shadow-glow-purple",
    tag: "bg-brand-purple/10 text-brand-purple-light border-brand-purple/20",
  },
  cyan: {
    icon: "bg-brand-cyan/10 text-brand-cyan-light group-hover:bg-brand-cyan/20",
    border: "hover:border-brand-cyan/30",
    shadow: "hover:shadow-glow-cyan",
    tag: "bg-brand-cyan/10 text-brand-cyan-light border-brand-cyan/20",
  },
};

export default function ServicesOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="glow-orb w-[500px] h-[500px] bg-brand-blue top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Build"
          title={
            <>
              AI Services That Drive{" "}
              <span className="gradient-text">Real Business Value</span>
            </>
          }
          description="From strategy to deployment, we deliver end-to-end AI and technology solutions that move the needle for your business."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <Link
                  href={service.href}
                  className={`group flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 ${colors.border} ${colors.shadow} hover:-translate-y-1`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${colors.icon}`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-full border ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-400 group-hover:text-white transition-colors">
                    Learn more{" "}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
