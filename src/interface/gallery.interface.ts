export interface IGallery {
  _id: string;
  title: string;
  description?: string;
  model: string;
  prompt: string;
  image: string;
  size: string;
  imageStorage: string;
  publish?: boolean;
  publishDate?: string;
  createdAt: string;
  updatedAt: string;
}
