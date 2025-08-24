export default function TableHeader({ items }: { items: string[] }) {
  return (
    <thead className="bg-zinc-700/10">
      <tr>
        {items.map((head) => (
          <th
            key={head}
            className={`px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wider ${
              head === "Actions" ? "text-right" : "text-left"
            }`}
          >
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
}
