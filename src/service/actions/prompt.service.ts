/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { tags } from "@/constants/tags";
import { fetchApi } from "@/lib/fetch-api/fetchApi";
import { revalidateTag } from "next/cache";
import { auth } from "../../../auth";

export interface IGenerateImageData {
  prompt: string;
  style: "cinematic" | "realistic" | "oil painting" | "digital art" | "cartoon";
  mode: "flux" | "kontext" | "turbo";
  quantity: "low" | "medium" | "high" | "ultra" | "max";
  size: {
    height: number;
    width: number;
  };
}

export const generateImageService = async (data: IGenerateImageData) => {
  const session = await auth();
  const token = session?.user.accessToken;

  const res = await fetch(`${process.env.BACKEND_URL}/prompt/generate-image`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (res.ok) {
    revalidateTag(tags.image);
    revalidateTag(tags.recent_image);
  }

  return res.json();
};

export const getAllImageHistoryByUserService = async () => {
  return await fetchApi({
    url: "/prompt/history",
    method: "GET",
    tags: [tags.image, tags.recent_image],
  });
};
