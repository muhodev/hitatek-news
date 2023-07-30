import type { Author } from "./Author";

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: Author;
  thumbnail: string;
  createdAt: string;
};
