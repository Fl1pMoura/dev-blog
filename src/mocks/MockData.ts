import { Author } from "@/entities/Author";
import { Post } from "@/entities/Post";

export const authors: Author[] = [
  {
    id: "1",
    name: "João Silva",
    avatar: "/api/placeholder/40/40",
    bio: "Desenvolvedor Full Stack apaixonado por tecnologia e inovação",
  },
  {
    id: "2",
    name: "Maria Santos",
    avatar: "/api/placeholder/40/40",
    bio: "DevOps Engineer | Cloud Architect",
  },
  {
    id: "3",
    name: "Pedro Costa",
    avatar: "/api/placeholder/40/40",
    bio: "Frontend Developer especializado em React e UI/UX",
  },
];

export const featuredPosts: Post[] = [
  {
    id: "1",
    title: "Construindo uma API REST com Django e Django REST Framework",
    excerpt:
      "Um guia completo sobre como criar uma API RESTful utilizando Django e Django REST Framework com as melhores práticas.",
    content: "# Conteúdo completo virá aqui em formato markdown",
    author: authors[0],
    coverImage: "/api/placeholder/800/400",
    likes: 156,
    savedCount: 89,
    createdAt: "2024-02-19",
    readingTime: 8,
    tags: ["Django", "API", "Backend"],
    slug: "construindo-uma-api-rest-com-django-e-django-rest-framework",
  },
  {
    id: "2",
    title: "Next.js 14: O que há de novo?",
    excerpt:
      "Explore as novas funcionalidades do Next.js 14 e como elas podem melhorar seu desenvolvimento.",
    content: "# Conteúdo completo virá aqui em formato markdown",
    author: authors[1],
    coverImage: "/api/placeholder/800/400",
    likes: 203,
    savedCount: 167,
    createdAt: "2024-02-18",
    readingTime: 6,
    tags: ["Next.js", "Frontend", "React"],
    slug: "nextjs-14-o-que-ha-de-novo",
  },
];

export const recentPosts: Post[] = [
  {
    id: "3",
    title: "Typescript: Dicas e truques para melhorar seu código",
    excerpt:
      "Aprenda técnicas avançadas de TypeScript para escrever código mais seguro e maintível.",
    content: "# Conteúdo completo virá aqui em formato markdown",
    author: authors[2],
    likes: 98,
    savedCount: 45,
    createdAt: "2024-02-17",
    readingTime: 5,
    tags: ["TypeScript", "JavaScript", "Programming"],
    slug: "typescript-dicas-e-truques-para-melhorar-seu-codigo",
    coverImage: "/api/placeholder/800/400",
  },
  {
    id: "4",
    title: "Tailwind CSS: Construindo interfaces modernas",
    excerpt:
      "Um overview sobre como utilizar Tailwind CSS para criar interfaces modernas e responsivas.",
    content: "# Conteúdo completo virá aqui em formato markdown",
    author: authors[0],
    coverImage: "/api/placeholder/800/400",
    likes: 145,
    savedCount: 78,
    createdAt: "2024-02-16",
    readingTime: 7,
    tags: ["CSS", "Tailwind", "Frontend"],
    slug: "tailwind-css-construindo-interfaces-modernas",
  },
  {
    id: "5",
    title: "Clean Architecture em aplicações Python",
    excerpt:
      "Implementando Clean Architecture em projetos Python para melhor manutenibilidade.",
    content: "# Conteúdo completo virá aqui em formato markdown",
    author: authors[1],
    likes: 167,
    savedCount: 92,
    createdAt: "2024-02-15",
    readingTime: 10,
    tags: ["Python", "Architecture", "Backend"],
    slug: "clean-architecture-em-aplicacoes-python",
    coverImage: "/api/placeholder/800/400",
  },
];

export const getMostLikedPosts = () => {
  return [...featuredPosts, ...recentPosts]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 2);
};

export const getRecentPosts = () => {
  return recentPosts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
};

export const getPostsByAuthor = (authorId: string) => {
  return [...featuredPosts, ...recentPosts].filter(
    (post) => post.author.id === authorId,
  );
};

export const getPostsByTag = (tag: string) => {
  return [...featuredPosts, ...recentPosts].filter((post) =>
    post.tags.includes(tag),
  );
};

export const getPostBySlug = (slug: string) => {
  return [...featuredPosts, ...recentPosts].find((post) => post.slug === slug);
};
