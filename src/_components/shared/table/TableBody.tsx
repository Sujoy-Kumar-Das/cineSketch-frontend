import { ReactElement } from "react";

export default function TableBody({ children }: { children: ReactElement }) {
  return <tbody className="divide-y divide-zinc-700/50">{children}</tbody>;
}
