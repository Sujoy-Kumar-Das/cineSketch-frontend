"use client";
import clsx from "clsx";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IOptions {
  label: string;
  value: string;
}

interface IFilter {
  placeholder?: string;
  className?: string;
  options: IOptions[];
}

export default function Filter({ placeholder, options, className }: IFilter) {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={clsx(
          "bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 pr-8 text-sm appearance-none w-full",
          className
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
}
