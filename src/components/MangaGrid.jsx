import { Star } from 'lucide-react';

function Card({ manga }) {
  return (
    <a
      href={`#${manga.id}`}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 transition ring-1 ${manga.theme.ring}`}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={manga.cover}
          alt={`${manga.title} cover`}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute inset-0 ${manga.theme.overlay} opacity-70`} />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold tracking-tight">{manga.title}</h3>
          <Star className="w-4 h-4 text-amber-400" />
        </div>
        <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{manga.tagline}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className={`inline-block h-2 w-2 rounded-full ${manga.theme.accent}`} />
          <span className="text-xs text-zinc-400">Jump to section</span>
        </div>
      </div>
    </a>
  );
}

export default function MangaGrid({ mangas }) {
  return (
    <section aria-label="Manga Collection">
      <h2 className="text-2xl font-bold tracking-tight mb-4">Featured Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mangas.map((m) => (
          <Card key={m.id} manga={m} />
        ))}
      </div>
    </section>
  );
}
