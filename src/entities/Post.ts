import { Author } from "./Author";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  coverImage?: string;
  likes: number;
  savedCount: number;
  createdAt: string;
  readingTime: number;
  tags: string[];
}
