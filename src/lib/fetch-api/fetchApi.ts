/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { auth } from "../../../auth";

interface ApiOptions {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  tags?: string[];
  revalidateOnMutate?: boolean; // revalidate tags on mutation
  revalidatePaths?: string[]; // optional path revalidation
  revalidate?: number | false; // ISR (in seconds) or disable
  cache?: "default" | "force-cache" | "no-store" | "only-if-cached" | undefined; // caching behavior
}

export const fetchApi = async ({
  url,
  method = "GET",
  body,
  tags = [],
  revalidateOnMutate = false,
  revalidatePaths = [],
  revalidate = 0,
  cache = "force-cache",
}: ApiOptions): Promise<any> => {
  const session = await auth();
  const token = session?.user.accessToken;

  const res = await fetch(`${process.env.BACKEND_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    cache,
    next: {
      tags,
      revalidate,
    },
  });

  if (revalidateOnMutate) {
    if (tags.length > 0) tags.forEach((tag) => revalidateTag(tag));
    if (revalidatePaths.length > 0)
      revalidatePaths.forEach((path) => revalidatePath(path));
  }

  return res.json();
};
