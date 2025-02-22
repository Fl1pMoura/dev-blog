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
    title: "Guia Completo de Markdown",
    excerpt:
      "Um guia abrangente sobre todos os elementos e sintaxe do Markdown.",
    content: `# Título Principal (H1)

## Subtítulo (H2)

### Seção (H3)

#### Subseção (H4)

##### Tópico (H5)

###### Subtópico (H6)

Parágrafo normal com **texto em negrito**, *texto em itálico*, e ***texto em negrito e itálico***. Você também pode usar __negrito__ e _itálico_ desta forma.

Você pode ~~tachar~~ palavras também.

## Links e Imagens

[Link para o Google](https://www.google.com)

![Imagem de exemplo](https://via.placeholder.com/800x400)

## Listas

### Lista não ordenada:
* Item 1
* Item 2
  * Sub-item 2.1
  * Sub-item 2.2
* Item 3

### Lista ordenada:
1. Primeiro item
2. Segundo item
   1. Sub-item 2.1
   2. Sub-item 2.2
3. Terceiro item

## Citações

> Esta é uma citação simples.
>
> Esta é uma citação com múltiplos parágrafos.
>
> > Esta é uma citação aninhada.

## Código

Código em linha: \`const exemplo = "código"\`

Bloco de código:

\`\`\`javascript
function exemplo() {
  const mensagem = "Olá, mundo!";
  console.log(mensagem);
  return mensagem;
}
\`\`\`

\`\`\`python
def exemplo():
    mensagem = "Olá, mundo!"
    print(mensagem)
    return mensagem
\`\`\`

## Tabelas

| Cabeçalho 1 | Cabeçalho 2 | Cabeçalho 3 |
|-------------|-------------|-------------|
| Célula 1    | Célula 2    | Célula 3    |
| Célula 4    | Célula 5    | Célula 6    |
| Célula 7    | Célula 8    | Célula 9    |

## Linha horizontal

---

## Task Lists

- [x] Tarefa concluída
- [ ] Tarefa pendente
- [ ] Outra tarefa pendente

## Notas de rodapé

Aqui está uma nota de rodapé[^1].

[^1]: Esta é a nota de rodapé.

## Definições

Termo
: Definição do termo
: Outra definição do termo

## Emoji

Você pode incluir emojis 🎉 ✨ 🚀

## Destaque

==Este texto está destacado==

## Detalhes/Sumário (HTML)

<details>
<summary>Clique para expandir</summary>

Este é o conteúdo que fica escondido até clicar.
</details>

## Matemática (usando LaTeX)

Equação em linha: $E = mc^2$

Equação em bloco:

$$
\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

---

Este é um exemplo de todos os elementos markdown mais comuns. Você pode usar este guia como referência para formatação.`,
    author: authors[0],
    coverImage: "/api/placeholder/800/400",
    likes: 256,
    savedCount: 189,
    createdAt: "2024-02-20",
    readingTime: 10,
    tags: ["Markdown", "Documentação", "Guia"],
    slug: "guia-completo-de-markdown",
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
