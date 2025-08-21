"use client";
import { fetchApi } from "@/lib/fetch-api/fetchApi";
import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ApiOptions {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  tags?: string[];
  revalidateOnMutate?: boolean;
}

interface State<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useLoadData<T = any>(options: ApiOptions) {
  const [state, setState] = useState<State<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });

      try {
        const data: any = await fetchApi({
          ...options,
        });

        if (!controller.signal.aborted) {
          if (data?.success === false) {
            setState({ data: null, loading: false, error: data.message });
          } else {
            setState({ data, loading: false, error: null });
          }
        }
      } catch (err: any) {
        if (!controller.signal.aborted) {
          setState({
            data: null,
            loading: false,
            error: err.message || "Error",
          });
        }
      } finally {
        if (!controller.signal.aborted) {
          setState((prev) => ({ ...prev, loading: false }));
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [options.url, options.method, options.revalidateOnMutate, options]);

  return state;
}
