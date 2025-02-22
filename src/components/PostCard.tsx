import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/entities/Post";
import { cn } from "@/lib/utils";
import { Bookmark, Clock, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  variant?: "default" | "compact";
}

export function PostCard({ post, variant = "default" }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all"
    >
      {variant === "default" && post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-48 object-cover"
        />
      )}
      <div
        className={cn(
          "p-6 flex flex-col h-full",
          variant === "compact" && "p-4 h-full",
        )}
      >
        <div className="flex gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3
          className={cn(
            "font-semibold mb-2 text-gray-900",
            variant === "compact" && "text-lg",
          )}
        >
          {post.title}
        </h3>
        <p
          className={cn(
            "text-gray-600 flex-1 pb-4",
            variant === "compact" && "text-sm pb-4",
          )}
        >
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-700">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <div className="flex items-center gap-1">
              <Heart size={variant === "compact" ? 14 : 16} />
              <span className="text-sm">{post.likes}</span>
            </div>
            {variant === "default" && (
              <div className="flex items-center gap-1">
                <Bookmark size={16} />
                <span className="text-sm">{post.savedCount}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock size={variant === "compact" ? 14 : 16} />
              <span className="text-sm">{post.readingTime} min</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
