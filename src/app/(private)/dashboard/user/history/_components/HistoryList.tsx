export default async function HistoryList() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div class="group relative rounded-lg overflow-hidden border border-zinc-700/50 aspect-square">
        <img
          src="https://source.unsplash.com/random/600x600/?fantasy"
          class="w-full h-full object-cover"
          alt="AI Generated Art"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
          <p class="text-xs text-zinc-300 mb-2 truncate">
            "Majestic fantasy castle in the clouds, digital art"
          </p>
          <div class="flex justify-between items-center">
            <span class="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded">
              SDXL
            </span>
            <div class="flex gap-2">
              <button class="w-7 h-7 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 rounded-full">
                <i class="fas fa-download text-xs"></i>
              </button>
              <button class="w-7 h-7 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 rounded-full">
                <i class="fas fa-heart text-xs"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="absolute top-2 left-2 text-xs bg-zinc-900/80 text-zinc-300 px-2 py-1 rounded">
          2 days ago
        </div>
      </div>
    </div>
  );
}
