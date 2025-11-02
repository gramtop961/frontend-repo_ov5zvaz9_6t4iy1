export default function MangaSection({ manga }) {
  return (
    <section id={manga.id} className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 mb-10">
      <div className={`absolute inset-0 bg-gradient-to-br ${manga.theme.from} ${manga.theme.to} opacity-10 pointer-events-none`} />

      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-72 md:h-full">
          <img
            src={manga.cover}
            alt={`${manga.title} scenic art`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/20 to-transparent" />
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300">
            <span className={`inline-block h-2 w-2 rounded-full ${manga.theme.accent}`} />
            Themed Section
          </div>
          <h3 className="mt-3 text-3xl font-bold tracking-tight">{manga.title}</h3>
          <p className="mt-2 text-zinc-300">{manga.description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#top"
              className="px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition text-sm"
            >
              Back to top
            </a>
            <button
              type="button"
              className={`px-4 py-2 rounded-md text-sm font-medium text-zinc-900 bg-gradient-to-r ${manga.theme.from} ${manga.theme.to}`}
              onClick={() => alert(`${manga.title} added to your favorites!`)}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
