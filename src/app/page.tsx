export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            My Developer Blog
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Thoughts, stories and ideas about software development
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Blog post card */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Getting Started with Next.js
              </h2>
              <p className="text-gray-600 mb-4">
                Learn how to build modern web applications with Next.js, React,
                and TypeScript.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <time>March 20, 2024</time>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </div>
          </article>

          {/* Another blog post card */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Best Practices for TypeScript Development
              </h2>
              <p className="text-gray-600 mb-4">
                Explore essential TypeScript patterns and practices for building
                maintainable applications.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <time>March 18, 2024</time>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
