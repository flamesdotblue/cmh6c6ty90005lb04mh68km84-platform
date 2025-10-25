import MaidCard from './MaidCard';

export default function MaidGrid({ maids, query }) {
  if (!maids?.length) {
    return (
      <div className="text-center py-16 bg-white/60 border border-dashed border-slate-300 rounded-2xl">
        <div className="text-lg font-semibold text-slate-800">No maids found in "{query}"</div>
        <p className="mt-2 text-slate-500">Try a nearby area or a broader location name.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800">{query ? 'Available in: ' + query : 'Featured maids near you'}</h2>
        <span className="text-sm text-slate-500">{maids.length} result{maids.length === 1 ? '' : 's'}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {maids.map((m) => (
          <MaidCard key={m.id} maid={m} />
        ))}
      </div>
    </div>
  );
}
