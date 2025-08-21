import clsx from "clsx";
import { ReactNode } from "react";

export default function Container({
  id,
  className,
  containerClass,
  children,
}: {
  id?: string;
  className?: string;
  containerClass?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={clsx("py-20", containerClass)}>
      <div className={clsx(`max-w-7xl mx-auto px-4 `, className)}>
        {children}
      </div>
    </section>
  );
}
