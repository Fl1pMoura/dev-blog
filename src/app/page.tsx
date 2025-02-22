import { PostCard } from "@/components/PostCard";
import { featuredPosts, recentPosts } from "@/mocks/MockData";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">DevBlog</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer">
                Login
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all cursor-pointer">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Posts Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Posts em Destaque
            </h2>
            <Link
              href="/posts"
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              Ver todos <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Posts Recentes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} variant="compact" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
