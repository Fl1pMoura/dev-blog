import { featuredPosts, recentPosts } from "@/mocks/MockData";
import { Bookmark, ChevronRight, Clock, Heart } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">DevBlog</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                Login
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
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
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              Ver todos <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
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
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-700">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart size={16} />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bookmark size={16} />
                        <span className="text-sm">{post.savedCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span className="text-sm">{post.readingTime} min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
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
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="p-6">
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-gray-700">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span className="text-sm">{post.readingTime} min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
