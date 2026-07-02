"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  {
    id: "ai-ml",
    label: "AI & ML",
    techs: [
      { name: "TensorFlow", desc: "Deep Learning" },
      { name: "PyTorch", desc: "Neural Networks" },
      { name: "Scikit-learn", desc: "ML Models" },
      { name: "Hugging Face", desc: "LLM Hub" },
      { name: "LangChain", desc: "LLM Orchestration" },
      { name: "LlamaIndex", desc: "RAG Framework" },
      { name: "OpenAI GPT-4", desc: "Language AI" },
      { name: "Claude API", desc: "Reasoning AI" },
      { name: "Gemini", desc: "Google AI" },
      { name: "Stable Diffusion", desc: "Image AI" },
      { name: "Whisper", desc: "Speech AI" },
      { name: "FAISS", desc: "Vector Search" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infra",
    techs: [
      { name: "AWS SageMaker", desc: "ML Platform" },
      { name: "Azure ML", desc: "AI Studio" },
      { name: "Google Vertex AI", desc: "AI Platform" },
      { name: "Kubernetes", desc: "Orchestration" },
      { name: "Docker", desc: "Containers" },
      { name: "Terraform", desc: "IaC" },
      { name: "AWS Lambda", desc: "Serverless" },
      { name: "CloudFront", desc: "CDN" },
      { name: "Redis", desc: "Caching" },
      { name: "RabbitMQ", desc: "Message Queue" },
      { name: "Airflow", desc: "Workflow" },
      { name: "MLflow", desc: "MLOps" },
    ],
  },
  {
    id: "data",
    label: "Data Engineering",
    techs: [
      { name: "Apache Spark", desc: "Big Data" },
      { name: "dbt", desc: "Transformation" },
      { name: "Snowflake", desc: "Data Warehouse" },
      { name: "BigQuery", desc: "Analytics" },
      { name: "Kafka", desc: "Streaming" },
      { name: "Databricks", desc: "Lakehouse" },
      { name: "PostgreSQL", desc: "Relational DB" },
      { name: "MongoDB", desc: "NoSQL" },
      { name: "Pinecone", desc: "Vector DB" },
      { name: "Weaviate", desc: "Vector Store" },
      { name: "Tableau", desc: "BI & Viz" },
      { name: "Power BI", desc: "Analytics" },
    ],
  },
  {
    id: "dev",
    label: "Development",
    techs: [
      { name: "Next.js 15", desc: "React Framework" },
      { name: "TypeScript", desc: "Type Safety" },
      { name: "Node.js", desc: "Backend" },
      { name: "FastAPI", desc: "Python API" },
      { name: "React Native", desc: "Mobile" },
      { name: "Flutter", desc: "Cross-platform" },
      { name: "GraphQL", desc: "API Layer" },
      { name: "tRPC", desc: "Type-safe API" },
      { name: "Tailwind CSS", desc: "Styling" },
      { name: "Framer Motion", desc: "Animation" },
      { name: "Prisma", desc: "ORM" },
      { name: "Supabase", desc: "Backend" },
    ],
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("ai-ml");

  const current = categories.find((c) => c.id === activeCategory)!;

  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Technology Stack"
          title={
            <>
              Powered by the World&apos;s{" "}
              <span className="gradient-text">Best AI Technologies</span>
            </>
          }
          description="We stay at the bleeding edge of AI and cloud technologies, giving you access to the most powerful tools available."
          className="mb-12"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-brand-blue text-white shadow-glow-blue"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
          >
            {current.techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="group p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/8 hover:border-brand-blue/30 transition-all duration-200 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 mb-3 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-blue-light">
                    {tech.name.slice(0, 2)}
                  </span>
                </div>
                <p className="text-white text-sm font-medium leading-tight">{tech.name}</p>
                <p className="text-slate-500 text-xs mt-0.5">{tech.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
