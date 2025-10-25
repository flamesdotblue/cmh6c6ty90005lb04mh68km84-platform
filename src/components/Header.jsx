import { Home, Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-sm"><Home size={20} /></div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">HomeAid</div>
            <div className="text-xs text-slate-500">Hire trusted maids by your area</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-amber-500">
          <Star size={16} fill="currentColor" className="opacity-90" />
          <span className="text-sm font-medium text-slate-700">4.8 avg rating</span>
        </div>
      </div>
    </header>
  );
}
