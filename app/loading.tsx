export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-brand-blue/20" />
          <div className="absolute inset-0 rounded-full border-2 border-t-brand-blue border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 animate-pulse" />
        </div>
        <p className="text-slate-400 text-sm animate-pulse">Loading…</p>
      </div>
    </div>
  );
}
