"use server";

import { tags } from "@/constants/tags";
import { fetchApi } from "@/lib/fetch-api/fetchApi";

export const addToFavoriteService = async (galleryId: string) => {
  return await fetchApi({
    url: `/favorite/${galleryId}`,
    cache: "no-store",
    method: "POST",
    revalidateOnMutate: true,
    tags: [tags.favorite],
  });
};
