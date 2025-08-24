import { tags } from "@/constants/tags";
import { fetchApi } from "@/lib/fetch-api/fetchApi";

export const getAllHistoryByUser = async () => {
  return fetchApi({
    url: "/history",
    cache: "force-cache",
    method: "GET",
    tags: [tags.history, tags.image, tags.recent_image],
  });
};
