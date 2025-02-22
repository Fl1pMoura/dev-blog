import BackButton from "@/app/_components/BackButton";
import { PostCard } from "@/components/PostCard";
import { getPostBySlug, getRecentPosts } from "@/mocks/MockData";
import console from "console";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";
import { ChevronRight, FileQuestion } from "lucide-react";
import MarkdownIt from "markdown-it";
import markdownItDeflist from "markdown-it-deflist";
import markdownItFootnote from "markdown-it-footnote";
import markdownItKatex from "markdown-it-katex";
import markdownItMark from "markdown-it-mark";
import markdownItTaskLists from "markdown-it-task-lists";
import Image from "next/image";
import Link from "next/link";
import { PostContent } from "./_components/PostContent";

// configuração do markdown
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (e) {
        console.error(e);
      }
    }
    return "";
  },
})
  .use(markdownItTaskLists)
  .use(markdownItFootnote)
  .use(markdownItDeflist)
  .use(markdownItMark)
  .use(markdownItKatex);

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  const recentPosts = getRecentPosts().slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pb-12">
        <div className="w-full h-96 relative">
          <Image
            src="/images/not-found.jpg"
            alt="Post não encontrado"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        <main className="max-w-5xl mx-auto px-4 -mt-32 relative">
          <BackButton />
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="min-h-[200px] flex flex-col items-center justify-center">
              <FileQuestion size={64} className="text-gray-400 mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Post não encontrado
              </h1>
              <p className="text-gray-600 mb-6 text-center">
                O post que você está procurando não existe ou foi removido.
              </p>
              <Link
                href="/posts"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver todos os posts
              </Link>
            </div>
          </div>

          {/* Seção de Posts Recentes */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Continue Lendo
              </h2>
              <Link
                href="/posts"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                Ver todos <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((recentPost) => (
                <PostCard
                  key={recentPost.id}
                  post={recentPost}
                  variant="compact"
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }

  const content = typeof post?.content === "string" ? post.content : "";
  const contentHtml = md.render(content);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
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

      <main className="max-w-5xl mx-auto px-4 -mt-32 relative">
        <BackButton />
        <PostContent post={post} contentHtml={contentHtml} />

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
              <PostCard
                key={recentPost.id}
                post={recentPost}
                variant="compact"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
