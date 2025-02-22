import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getRecentPosts } from "@/mocks/MockData";
import { Search, SlidersHorizontal } from "lucide-react";

export default async function PostsPage() {
  const posts = await getRecentPosts();

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
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Pesquisar posts..." className="pl-9" />
            </div>

            <div className="flex gap-2">
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mais recentes</SelectItem>
                  <SelectItem value="oldest">Mais antigos</SelectItem>
                  <SelectItem value="likes">Mais curtidos</SelectItem>
                  <SelectItem value="saves">Mais salvos</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mt-4">
            <Button variant="secondary" size="sm">
              Todos
            </Button>
            <Button variant="outline" size="sm">
              React
            </Button>
            <Button variant="outline" size="sm">
              TypeScript
            </Button>
            <Button variant="outline" size="sm">
              Next.js
            </Button>
            <Button variant="outline" size="sm">
              Backend
            </Button>
            <Button variant="outline" size="sm">
              Frontend
            </Button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            Carregar mais posts
          </Button>
        </div>
      </main>
    </div>
  );
}
