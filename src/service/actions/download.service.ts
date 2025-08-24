"use server";

import { tags } from "@/constants/tags";
import { fetchApi } from "@/lib/fetch-api/fetchApi";

export const downloadImageFromHistoryService = async (historyId: string) => {
  return await fetchApi({
    url: `/download/history/${historyId}`,
    method: "POST",
    revalidateOnMutate: true,
    tags: [tags.download],
    cache: "no-store",
  });
};

export const downloadImageFromGalleryService = async (galleryId: string) => {
  return await fetchApi({
    url: `/download/gallery/${galleryId}`,
    method: "POST",
    revalidateOnMutate: true,
    tags: [tags.download],
    cache: "no-store",
  });
};
