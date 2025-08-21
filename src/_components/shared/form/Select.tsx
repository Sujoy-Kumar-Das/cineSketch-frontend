"use client";
import { ChangeEvent, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TSelectProps {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  className?: string;
}

const Select = ({
  name,
  label,
  options,
  placeholder,
  size = "small",
  icon,
  onChange,
  value,
  className,
}: TSelectProps) => {
  const { control } = useFormContext();

  // Adjust padding based on size
  const sizeClasses =
    size === "small"
      ? "px-3 py-2 text-sm"
      : size === "medium"
      ? "px-4 py-3 text-base"
      : "px-5 py-4 text-lg";

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
          field.onChange(e);
          onChange?.(e);
        };

        return (
          <div className={className}>
            {label && (
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                {label}
              </label>
            )}
            <div className="relative">
              {icon && (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {icon}
                </div>
              )}
              <select
                {...field}
                value={value || field.value}
                onChange={handleChange}
                className={`w-full bg-zinc-900/50 border border-zinc-700/50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                ${icon ? "pl-11" : "pl-4"} ${sizeClasses} text-zinc-200`}
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
            </div>
            {error && (
              <p className="text-xs text-red-500 mt-1">{error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};

export default Select;
