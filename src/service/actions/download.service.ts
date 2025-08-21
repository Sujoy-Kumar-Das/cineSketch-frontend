"use server";

import { tags } from "@/constants/tags";
import { fetchApi } from "@/lib/fetch-api/fetchApi";

export const downloadImageService = async (payload: {
  image: string;
  name: string;
}) => {
  return await fetchApi({
    url: "/download",
    body: payload,
    method: "POST",
    revalidateOnMutate: true,
    tags: [tags.download],
    cache: "no-store",
  });
};
