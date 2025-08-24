export default function TableData() {
  return (
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10 rounded-lg overflow-hidden">
          <img
            src="{item.image}"
            alt="{item.title}"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium">{item.title}</div>
          <div className="text-xs text-zinc-400 truncate w-40">
            {item.description}
          </div>
        </div>
      </div>
    </td>
  );
}
