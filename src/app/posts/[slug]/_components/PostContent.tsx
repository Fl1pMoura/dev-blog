"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Bookmark,
  BookmarkCheck,
  BookmarkPlus,
  Clock,
  Heart,
  HeartCrack,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ShareButton } from "./ShareButton";

interface PostContentProps {
  post: {
    title: string;
    tags: string[];
    author: {
      name: string;
      avatar: string;
    };
    createdAt: string;
    likes: number;
    readingTime: number;
  };
  contentHtml: string;
}

export function PostContent({ post, contentHtml }: PostContentProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <article className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex gap-2 mb-6">
        {post.tags.map((tag) => (
          <Link
            href={`/tag/${tag}`}
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition"
          >
            {tag}
          </Link>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

      <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium text-gray-900">{post.author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <ShareButton
            title={post.title}
            url={typeof window !== "undefined" ? window.location.href : ""}
          />
          <button
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => setIsSaved(!isSaved)}
          >
            <Bookmark size={20} className={isSaved ? "fill-current" : ""} />
            <span>{isSaved ? "Salvo" : "Salvar"}</span>
          </button>
        </div>
      </div>

      <div
        className="typography max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
        <div className="flex items-center gap-8">
          <button
            onClick={handleLike}
            className={cn(
              "flex items-center gap-2 transition-colors cursor-pointer",
              isLiked
                ? "text-red-500 hover:text-red-600"
                : "text-gray-500 hover:text-gray-700",
            )}
          >
            {isLiked ? <Heart size={24} /> : <HeartCrack size={24} />}
            <span>{likesCount} likes</span>
          </button>
          <div className="flex items-center gap-2 text-gray-500">
            <Clock size={24} />
            <span>{post.readingTime} min de leitura</span>
          </div>
        </div>
        <button
          onClick={handleSave}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer",
            isSaved
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white",
          )}
        >
          {isSaved ? <BookmarkCheck size={20} /> : <BookmarkPlus size={20} />}
          <span>{isSaved ? "Salvo" : "Salvar para ler depois"}</span>
        </button>
      </div>
    </article>
  );
}
