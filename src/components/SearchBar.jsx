import { useEffect, useState } from 'react';
import { MapPin, Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const id = setTimeout(() => onSearch?.(value), 200);
    return () => clearTimeout(id);
  }, [value, onSearch]);

  return (
    <div className="bg-white/70 border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-sm">
      <label className="block text-sm font-medium text-slate-700 mb-2">Search by area or neighborhood</label>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-500" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g., Bandra, Powai, Thane, Colaba"
            className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
          />
        </div>
        <button
          onClick={() => onSearch?.(value)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          <Search size={18} />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-500">Tip: Start typing your locality. Results update automatically.</p>
    </div>
  );
}
