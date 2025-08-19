import Link from "next/link";
import { FaRocket } from "react-icons/fa";
import { navItemsArray } from "./nav-items";

export default function NavMenu() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navItemsArray.map((item) => (
        <Link
          className="text-zinc-400 hover:text-white transition-colors hover:underline hover:underline-offset-8"
          key={item.id}
          href={item.link}
        >
          {item.title}
        </Link>
      ))}

      <Link
        href="./app.html"
        className="bg-zinc-800 hover:bg-zinc-700 px-6 py-2.5 rounded-full transition-colors flex items-center gap-2"
      >
        <FaRocket />
        Launch App
      </Link>
    </div>
  );
}
