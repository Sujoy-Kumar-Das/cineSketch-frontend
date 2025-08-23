"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const getParam = (key: string) => {
    const value = searchParams.get(key);
    return value ?? "";
  };

  const search = (queries: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(queries).forEach(([key, value]) => {
      if (value === "" || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    const newQueryString = params.toString();
    router.push(newQueryString ? `${pathName}?${newQueryString}` : pathName);
  };

  const deleteSearch = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    const newQueryString = params.toString();
    router.replace(newQueryString ? `${pathName}?${newQueryString}` : pathName);
  };

  const clearSearch = () => {
    router.push(pathName);
  };

  return { search, getParam, clearSearch, deleteSearch };
}
