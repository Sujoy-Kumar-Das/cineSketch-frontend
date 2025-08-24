import { tags } from "@/constants/tags";
import { fetchApi } from "@/lib/fetch-api/fetchApi";

export const createCollectionService = async (payload: { title: string }) => {
  return await fetchApi({
    url: "/collection",
    method: "POST",
    body: payload,
    cache: "no-store",
    revalidateOnMutate: true,
    tags: [tags.collection],
  });
};

export const addImageToCollectionService = async (
  imageId: string,
  payload: { collectionId: string }
) => {
  return await fetchApi({
    url: `/collection/${imageId}`,
    method: "POST",
    body: payload,
    cache: "no-store",
    revalidateOnMutate: true,
    tags: [tags.collection, tags.gallery],
  });
};

export const getAllCollectionByUserService = async () => {
  return await fetchApi({
    url: "/collection",
    method: "GET",
    cache: "force-cache",
    tags: [tags.collection],
  });
};

export const deleteCollectionService = async (id: string) => {
  return await fetchApi({
    url: `/collection/${id}`,
    method: "DELETE",
    cache: "no-store",
    revalidateOnMutate: true,
    tags: [tags.collection],
  });
};

export const editCollectionService = async (
  id: string,
  payload: { title: string }
) => {
  return await fetchApi({
    url: `/collection/${id}`,
    method: "PATCH",
    body: payload,
    cache: "no-store",
    revalidateOnMutate: true,
    tags: [tags.collection],
  });
};
