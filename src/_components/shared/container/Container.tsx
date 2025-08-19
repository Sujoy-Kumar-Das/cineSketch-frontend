import { ReactNode } from "react";

export default function Container({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20">
      <div className={`max-w-7xl mx-auto px-4 ${className}`}>{children}</div>
    </section>
  );
}
