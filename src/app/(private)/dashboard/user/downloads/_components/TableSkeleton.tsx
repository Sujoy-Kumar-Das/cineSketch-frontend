export default function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, index) => (
        <tr key={index} className="animate-pulse hover:bg-zinc-800/10">
          {/* Image + Info */}
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-zinc-700 rounded-lg" />
              <div className="flex flex-col gap-1">
                <div className="h-3 w-32 bg-zinc-700 rounded" />
                <div className="h-2 w-40 bg-zinc-600 rounded" />
              </div>
            </div>
          </td>

          {/* Model */}
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-3 w-20 bg-indigo-700/50 rounded" />
          </td>

          {/* Size */}
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-3 w-12 bg-zinc-700 rounded" />
          </td>

          {/* Downloaded */}
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="h-3 w-10 bg-zinc-700 rounded" />
          </td>

          {/* Actions */}
          <td className="px-6 py-4 whitespace-nowrap text-right">
            <div className="flex gap-2 justify-end">
              <div className="h-6 w-6 bg-indigo-700/50 rounded-full" />
              <div className="h-6 w-6 bg-rose-700/50 rounded-full" />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
