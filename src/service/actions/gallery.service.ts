"use server";

import { tags } from "@/constants/tags";
import { fetchApi } from "@/lib/fetch-api/fetchApi";

export interface IGalleryPayload {
  title: string;
  description?: string;
  image: string;
  collection?: string;
  model: string;
}

export const saveToGalleryService = async (historyId: string) => {
  return await fetchApi({
    url: `/gallery/save/${historyId}`,
    cache: "no-store",
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

export const getAllGalleryImageByUserService = async () => {
  return await fetchApi({
    url: "/gallery",
    cache: "force-cache",
    method: "GET",
    tags: [tags.gallery],
  });
};

export const editGalleryService = async (
  id: string,
  payload: {
    title: string;
    description: string;
  }
) => {
  return await fetchApi({
    url: `/gallery/${id}`,
    cache: "no-store",
    body: payload,
    method: "PATCH",
    revalidateOnMutate: true,
    tags: [tags.gallery],
  });
};

export const deleteGalleryService = async (id: string) => {
  return await fetchApi({
    url: `/gallery/${id}`,
    cache: "no-store",
    method: "DELETE",
    revalidateOnMutate: true,
    tags: [tags.gallery],
  });
};
