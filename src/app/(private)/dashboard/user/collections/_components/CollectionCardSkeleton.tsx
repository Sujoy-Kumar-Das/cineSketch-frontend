export default function CollectionCardSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="relative" key={i}>
          <div className="group block">
            {/* Image grid placeholder */}
            <div className="aspect-square rounded-lg bg-zinc-800/50 border border-zinc-700/50 overflow-hidden relative animate-pulse">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full h-full bg-zinc-700/50" />
                ))}
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="h-5 w-24 bg-zinc-600 rounded" />
              </div>
            </div>

            {/* Text placeholders */}
            <div className="mt-2 space-y-2">
              <div className="h-4 w-32 bg-zinc-700 rounded animate-pulse" />
              <div className="h-3 w-40 bg-zinc-800 rounded animate-pulse" />
            </div>
          </div>

          {/* Menu button placeholder */}
          <div className="absolute top-2 right-2">
            <div className="w-7 h-7 rounded-full bg-zinc-700 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
