import { useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MangaGrid from './components/MangaGrid.jsx';
import MangaSection from './components/MangaSection.jsx';

function App() {
  const mangas = useMemo(
    () => [
      {
        id: 'one-piece',
        title: 'One Piece',
        tagline: 'Set sail with the Straw Hat Pirates',
        description:
          'Follow Monkey D. Luffy and his crew on a grand adventure across treacherous seas in search of the legendary treasure: the One Piece.',
        cover:
          'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1887&auto=format&fit=crop',
        theme: {
          from: 'from-yellow-400',
          to: 'to-red-500',
          text: 'text-yellow-50',
          ring: 'ring-yellow-300/70',
          accent: 'bg-yellow-400',
          overlay: 'bg-gradient-to-br from-yellow-400/30 to-red-500/30',
        },
      },
      {
        id: 'naruto',
        title: 'Naruto',
        tagline: 'Believe it! Ninja way of the leaf',
        description:
          'Witness Naruto Uzumaki grow from mischievous ninja to hero, forging bonds and protecting his village against formidable foes.',
        cover:
          'https://images.unsplash.com/photo-1520974735194-7ca0c3f38398?q=80&w=1887&auto=format&fit=crop',
        theme: {
          from: 'from-orange-500',
          to: 'to-amber-600',
          text: 'text-orange-50',
          ring: 'ring-orange-300/70',
          accent: 'bg-orange-500',
          overlay: 'bg-gradient-to-br from-orange-500/30 to-amber-600/30',
        },
      },
      {
        id: 'attack-on-titan',
        title: 'Attack on Titan',
        tagline: 'Humanity fights for survival',
        description:
          'Behind towering walls, humanity faces ruthless Titans. Dark secrets unravel as freedom comes at a heavy cost.',
        cover:
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1932&auto=format&fit=crop',
        theme: {
          from: 'from-slate-700',
          to: 'to-rose-700',
          text: 'text-slate-100',
          ring: 'ring-rose-300/60',
          accent: 'bg-rose-600',
          overlay: 'bg-gradient-to-br from-slate-800/40 to-rose-700/30',
        },
      },
      {
        id: 'demon-slayer',
        title: 'Demon Slayer',
        tagline: 'Breath of the Sun',
        description:
          'Tanjiro Kamado joins the Demon Slayer Corps to avenge his family and cure his sister, wielding breathtaking sword forms.',
        cover:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1887&auto=format&fit=crop',
        theme: {
          from: 'from-emerald-500',
          to: 'to-rose-500',
          text: 'text-emerald-50',
          ring: 'ring-emerald-300/70',
          accent: 'bg-emerald-500',
          overlay: 'bg-gradient-to-br from-emerald-500/30 to-rose-500/30',
        },
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <MangaGrid mangas={mangas} />
        <div className="h-10" />
        {mangas.map((m) => (
          <MangaSection key={m.id} manga={m} />
        ))}
        <div className="pb-16" />
      </main>
    </div>
  );
}

export default App;
