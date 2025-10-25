import { useMemo, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MaidGrid from './components/MaidGrid';

const MAIDS = [
  {
    id: 'm1',
    name: 'Asha Patel',
    rating: 4.8,
    experience: 6,
    ratePerHour: 6,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    areas: ['Andheri East', 'Powai', 'Marol'],
    services: ['Cleaning', 'Cooking', 'Laundry'],
    availability: ['Morning', 'Afternoon'],
    languages: ['English', 'Hindi', 'Marathi'],
  },
  {
    id: 'm2',
    name: 'Neha Sharma',
    rating: 4.6,
    experience: 4,
    ratePerHour: 5,
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    areas: ['Bandra West', 'Khar', 'Santacruz'],
    services: ['Cleaning', 'Baby Care'],
    availability: ['Afternoon', 'Evening'],
    languages: ['Hindi', 'Marathi'],
  },
  {
    id: 'm3',
    name: 'Sunita Yadav',
    rating: 4.9,
    experience: 8,
    ratePerHour: 7,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
    areas: ['Thane', 'Mulund'],
    services: ['Cooking', 'Cleaning'],
    availability: ['Morning'],
    languages: ['Hindi'],
  },
  {
    id: 'm4',
    name: 'Pooja Nair',
    rating: 4.5,
    experience: 3,
    ratePerHour: 4,
    image: 'https://images.unsplash.com/photo-1558222217-b5bff6f743b4?q=80&w=800&auto=format&fit=crop',
    areas: ['Goregaon', 'Malad'],
    services: ['Cleaning', 'Laundry'],
    availability: ['Evening'],
    languages: ['English', 'Hindi'],
  },
  {
    id: 'm5',
    name: 'Rita D’Souza',
    rating: 4.7,
    experience: 5,
    ratePerHour: 6,
    image: 'https://images.unsplash.com/photo-1542382257-80dedb725088?q=80&w=800&auto=format&fit=crop',
    areas: ['Bandra East', 'BKC', 'Mahim'],
    services: ['Cooking'],
    availability: ['Morning', 'Evening'],
    languages: ['English', 'Hindi', 'Marathi'],
  },
  {
    id: 'm6',
    name: 'Lakshmi Iyer',
    rating: 4.3,
    experience: 2,
    ratePerHour: 4,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop',
    areas: ['Powai', 'Vikhroli'],
    services: ['Cleaning', 'Elderly Care'],
    availability: ['Afternoon'],
    languages: ['Hindi', 'Marathi', 'Tamil'],
  },
  {
    id: 'm7',
    name: 'Priya Verma',
    rating: 4.4,
    experience: 3,
    ratePerHour: 5,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    areas: ['Colaba', 'Cuffe Parade'],
    services: ['Baby Care', 'Cleaning'],
    availability: ['Morning', 'Afternoon'],
    languages: ['English', 'Hindi'],
  },
  {
    id: 'm8',
    name: 'Meena Gupta',
    rating: 4.2,
    experience: 2,
    ratePerHour: 4,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
    areas: ['Borivali', 'Dahisar'],
    services: ['Cleaning', 'Laundry'],
    availability: ['Evening'],
    languages: ['Hindi', 'Gujarati'],
  },
];

export default function App() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MAIDS;
    return MAIDS.filter((m) =>
      m.areas.some((a) => a.toLowerCase().includes(q)) || m.name.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mt-6 sm:mt-10">
          <SearchBar onSearch={setQuery} />
        </section>
        <section className="mt-6 sm:mt-10">
          <MaidGrid maids={filtered} query={query} />
        </section>
      </main>
      <footer className="mt-12 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} HomeAid — Find trusted help near you
      </footer>
    </div>
  );
}
