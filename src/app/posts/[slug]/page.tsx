import BackButton from "@/app/_components/BackButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPostBySlug, getRecentPosts } from "@/mocks/MockData";
import { Bookmark, ChevronRight, Clock, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  const recentPosts = getRecentPosts().slice(0, 3);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section com imagem de capa */}
      {post.coverImage && (
        <div className="w-full h-96 relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      )}

      <main className="max-w-4xl mx-auto px-4 -mt-32 relative">
        <BackButton />
        <article className="bg-white rounded-xl shadow-lg p-8 mb-12">
          {/* Tags */}
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

          {/* Título */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Metadados do autor e post */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-gray-900">
                  {post.author.name}
                </h3>
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
              <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                <Share2 size={20} />
                <span>Compartilhar</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                <Bookmark size={20} />
                <span>Salvar</span>
              </button>
            </div>
          </div>

          {/* Conteúdo do Post */}
          <div className="typography-lg typography-slate max-w-none">
            {post.content}
          </div>

          {/* Estatísticas e ações do post */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                <Heart size={24} />
                <span>{post.likes} likes</span>
              </button>
              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={24} />
                <span>{post.readingTime} min de leitura</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Bookmark size={20} />
              <span>Salvar para ler depois</span>
            </button>
          </div>
        </article>

        {/* Seção de Posts Recentes */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Continue Lendo</h2>
            <Link
              href="/posts"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              Ver todos <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((recentPost) => (
              <Link
                href={`/posts/${recentPost.slug}`}
                key={recentPost.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                {recentPost.coverImage && (
                  <Image
                    src={recentPost.coverImage}
                    alt={recentPost.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    {recentPost.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {recentPost.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{recentPost.author.name}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{recentPost.readingTime} min</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
