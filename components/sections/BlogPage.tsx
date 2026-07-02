"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";

const posts = [
  {
    id: 1,
    category: "Generative AI",
    title: "RAG vs Fine-Tuning: Which Should You Choose for Your Enterprise LLM?",
    excerpt:
      "A practical framework for deciding between retrieval-augmented generation and fine-tuning when building production GenAI applications. We compare cost, accuracy, latency, and maintainability.",
    author: "Srikanth Raju",
    role: "Head of AI Research",
    readTime: "8 min read",
    date: "Jun 28, 2025",
    tags: ["RAG", "Fine-tuning", "LLMs", "Enterprise AI"],
    featured: true,
    gradient: "from-purple-500/20 to-blue-500/20",
    border: "border-purple-500/20",
  },
  {
    id: 2,
    category: "Machine Learning",
    title: "The 7 Most Common Reasons ML Projects Fail in Production (And How to Avoid Them)",
    excerpt:
      "After delivering 200+ ML projects, we've seen patterns in failure. Distribution shift, missing MLOps, data quality debt — here's the field guide to sustainable ML.",
    author: "Srinivas Narayanan",
    role: "Chief Technology Officer",
    readTime: "10 min read",
    date: "Jun 15, 2025",
    tags: ["MLOps", "Machine Learning", "Production AI", "Best Practices"],
    featured: false,
    gradient: "from-green-500/20 to-cyan-500/20",
    border: "border-green-500/20",
  },
  {
    id: 3,
    category: "AI Agents",
    title: "Building Reliable AI Agents with LangGraph: A Production Engineering Guide",
    excerpt:
      "LangGraph gives you the scaffolding to build complex agentic systems. But reliability in production requires thinking carefully about state management, error recovery, and human oversight.",
    author: "Sai Kartikeyan",
    role: "Senior AI Engineer",
    readTime: "12 min read",
    date: "Jun 5, 2025",
    tags: ["LangGraph", "AI Agents", "LangChain", "Engineering"],
    featured: false,
    gradient: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/20",
  },
  {
    id: 4,
    category: "Data Engineering",
    title: "The Modern Data Stack for AI: How to Build a Foundation That Actually Scales",
    excerpt:
      "Most AI projects don't fail because of the model — they fail because of the data. Here's how we architect data platforms that support AI at enterprise scale.",
    author: "Gundumapalli Venkat",
    role: "Data Engineering Lead",
    readTime: "9 min read",
    date: "May 22, 2025",
    tags: ["Data Engineering", "dbt", "Snowflake", "AI Infrastructure"],
    featured: false,
    gradient: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/20",
  },
  {
    id: 5,
    category: "Business AI",
    title: "How to Build a Compelling Business Case for AI Investment in 2025",
    excerpt:
      "CFOs and boards are more AI-skeptical than ever. Here's a framework for calculating and communicating AI ROI that wins executive buy-in — with real numbers from our client engagements.",
    author: "Srikanth Raju",
    role: "Founder & CEO",
    readTime: "7 min read",
    date: "May 10, 2025",
    tags: ["AI Strategy", "Business Case", "ROI", "Enterprise"],
    featured: false,
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
  },
  {
    id: 6,
    category: "Computer Vision",
    title: "Deploying Computer Vision at the Edge: Lessons from 20 Manufacturing Projects",
    excerpt:
      "Edge deployment of vision AI is hard — inconsistent lighting, model drift, hardware constraints, and latency requirements. Here's what we've learned deploying on factory floors.",
    author: "Anand Krishnamurthy",
    role: "Computer Vision Lead",
    readTime: "11 min read",
    date: "Apr 25, 2025",
    tags: ["Computer Vision", "Edge AI", "Manufacturing", "NVIDIA Jetson"],
    featured: false,
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/20",
  },
  {
    id: 7,
    category: "Cloud AI",
    title: "Optimizing AI Inference Costs on AWS: A Practical Guide to 50%+ Cost Reduction",
    excerpt:
      "Inference costs can be the biggest hidden expense in AI deployment. We walk through model quantization, batching strategies, spot instances, and caching to dramatically reduce your AI cloud bill.",
    author: "Padmanabhan Iyer",
    role: "Cloud Solutions Architect",
    readTime: "9 min read",
    date: "Apr 12, 2025",
    tags: ["Cloud AI", "AWS", "Cost Optimization", "MLOps"],
    featured: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
  },
  {
    id: 8,
    category: "Generative AI",
    title: "Prompt Engineering for Production: Beyond ChatGPT Tricks",
    excerpt:
      "Production prompt engineering is a discipline, not a trick. We cover systematic evaluation, prompt versioning, adversarial testing, and meta-prompting strategies for reliable enterprise LLM outputs.",
    author: "Sai Kartikeyan",
    role: "Head of AI Research",
    readTime: "13 min read",
    date: "Mar 28, 2025",
    tags: ["Prompt Engineering", "LLMs", "GenAI", "Production"],
    featured: false,
    gradient: "from-violet-500/20 to-pink-500/20",
    border: "border-violet-500/20",
  },
];

const categories = ["All", "Generative AI", "Machine Learning", "AI Agents", "Data Engineering", "Business AI", "Computer Vision", "Cloud AI"];

export default function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = posts.find((p) => p.featured);
  const rest = filteredPosts.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25" />
        <div className="glow-orb w-[500px] h-[400px] bg-brand-purple top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-6 inline-flex"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
            AI Insights & Thought Leadership
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 mb-6"
          >
            Knowledge from the{" "}
            <span className="gradient-text">Frontlines of AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Technical depth, practical frameworks, and honest perspectives from engineers
            who build AI systems in production every day.
          </motion.p>
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === "All" && featured && (
        <section className="pb-8 bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 sm:p-10 rounded-3xl border ${featured.border} bg-gradient-to-br ${featured.gradient}`}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full border border-white/15 text-white/80 bg-white/10">
                      Featured
                    </span>
                    <span className="text-xs text-slate-400">{featured.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
                    <span className="font-medium text-white">{featured.author}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                    <span>{featured.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 flex items-center gap-1">
                        <Tag className="w-3 h-3" />{tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${featured.id}`} className="btn-primary inline-flex">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category filter */}
      <section className="py-6 bg-navy-950 sticky top-16 lg:top-20 z-30 border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === cat
                    ? "bg-brand-blue text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className={`flex flex-col p-6 rounded-2xl border ${post.border} bg-gradient-to-br ${post.gradient} hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="flex items-center gap-2 mb-4 text-xs">
                  <span className="font-semibold text-slate-300">{post.category}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-white font-bold leading-snug mb-3 flex-1 group-hover:text-blue-100 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xs font-medium text-white">{post.author}</p>
                    <p className="text-xs text-slate-500">{post.date}</p>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-1 text-xs text-slate-400 group-hover:text-white transition-colors"
                  >
                    Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
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
