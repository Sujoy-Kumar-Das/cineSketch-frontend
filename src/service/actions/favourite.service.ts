"use server";

import { tags } from "@/constants/tags";
import { fetchApi } from "@/lib/fetch-api/fetchApi";

export const addToFavoriteService = async (payload: { image: string }) => {
  return await fetchApi({
    url: "/favorite",
    body: payload,
    cache: "no-store",
    method: "POST",
    revalidateOnMutate: true,
    tags: [tags.favorite],
  });
};
