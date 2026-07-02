import Link from "next/link";
import { ArrowLeft, Brain } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="relative text-center px-4">
        <div className="text-8xl sm:text-9xl font-black gradient-text opacity-20 mb-6 select-none">
          404
        </div>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center mx-auto mb-6">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-400 max-w-sm mx-auto mb-8">
          Our AI couldn&apos;t locate this page. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
