export interface IGallery {
  _id: string;
  title: string;
  description?: string;
  model: "flux" | "kontext" | "turbo";
  image: string;
  publish?: boolean;
  publishDate?: string;
  createdAt: string;
  updatedAt: string;
}
