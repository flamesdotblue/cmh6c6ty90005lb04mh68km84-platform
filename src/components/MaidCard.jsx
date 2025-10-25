import { Star, MapPin, Clock, DollarSign, BadgeCheck } from 'lucide-react';

export default function MaidCard({ maid }) {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-40 overflow-hidden">
        <img src={maid.image} alt={maid.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-white/90 text-slate-800 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
          <Star size={14} className="text-amber-500" fill="#f59e0b" />
          {maid.rating}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-1 text-slate-900 font-semibold">
              {maid.name}
              <BadgeCheck size={16} className="text-emerald-500" />
            </div>
            <div className="mt-1 text-xs text-slate-500 flex items-center gap-1">
              <MapPin size={14} className="text-rose-500" />
              Serves: {maid.areas.slice(0, 2).join(', ')}{maid.areas.length > 2 ? ' +' + (maid.areas.length - 2) : ''}
            </div>
          </div>
          <div className="text-right">
            <div className="text-slate-900 font-semibold inline-flex items-center"><DollarSign size={16} className="text-emerald-600" />{maid.ratePerHour}/hr</div>
            <div className="text-xs text-slate-500">{maid.experience} yrs exp.</div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {maid.services.map((s) => (
            <span key={s} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{s}</span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
          <Clock size={14} className="text-indigo-600" />
          Available: {maid.availability.join(', ')}
        </div>

        <div className="mt-2 text-xs text-slate-500">Languages: {maid.languages.join(', ')}</div>

        <button className="mt-4 w-full inline-flex justify-center items-center gap-2 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 active:bg-slate-950 transition-colors">
          Contact
        </button>
      </div>
    </div>
  );
}
