import { BookOpen, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/80 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="p-2 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-zinc-900">
            <BookOpen className="w-5 h-5" />
          </span>
          <div>
            <p className="text-sm leading-tight text-zinc-300">Manga Library</p>
            <p className="text-lg font-semibold tracking-tight">Arcadia</p>
          </div>
        </a>
        <div className="hidden sm:flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search titles..."
              className="pl-9 pr-3 py-2 bg-zinc-800/80 border border-zinc-700 rounded-md text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
              onChange={() => {}}
            />
          </div>
          <a
            href="#one-piece"
            className="text-sm px-3 py-2 rounded-md bg-zinc-800/70 hover:bg-zinc-700/70 transition"
          >
            Explore
          </a>
        </div>
      </div>
    </header>
  );
}
