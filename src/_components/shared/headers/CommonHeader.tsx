interface CommonHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function CommonHeader({
  title,
  subtitle,
  className = "",
}: CommonHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-zinc-400 mb-8">{subtitle}</p>}
    </div>
  );
}
