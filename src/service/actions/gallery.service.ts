"use server";

import { tags } from "@/constants/tags";
import { fetchApi } from "@/lib/fetch-api/fetchApi";

export const saveToGalleryService = async (payload: {
  title: string;
  image: string;
}) => {
  return await fetchApi({
    url: "/gallery/save",
    cache: "no-store",
    body: payload,
    method: "POST",
    revalidateOnMutate: true,
    tags: [tags.gallery],
  });
};

export const publishToGalleryService = async (payload: {
  title: string;
  image: string;
}) => {
  return await fetchApi({
    url: "/gallery/publish",
    cache: "no-store",
    body: payload,
    method: "POST",
    revalidateOnMutate: true,
    tags: [tags.gallery],
  });
};
