import { auth } from "../../../../auth";
import Logo from "../logo/Logo";
import NavMenu from "./NavMenu";

export default async function Navbar() {
  return (
    <header>
      <nav className="mx-auto max-w-7xl py-6 px-4 flex items-center  justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        <NavMenu />
        <button className="md:hidden bg-zinc-800 p-2 rounded-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
