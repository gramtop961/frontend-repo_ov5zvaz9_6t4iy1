export default function Hero() {
  return (
    <section className="py-16 sm:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
          Discover Iconic Manga Worlds
        </h1>
        <p className="mt-4 text-zinc-300 text-lg">
          Browse a curated collection of beloved series. Each world has its own
          dedicated section with a theme inspired by the story.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href="#one-piece"
            className="px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-zinc-900 font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-400/20 transition"
          >
            Start Exploring
          </a>
          <a
            href="#attack-on-titan"
            className="px-5 py-3 rounded-lg bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition"
          >
            Dark Epics
          </a>
        </div>
      </div>
    </section>
  );
}
