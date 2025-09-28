import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: number;
  featured: boolean;
  published: boolean;
  content: string;
  excerpt: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  published?: boolean;
}

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/blog');

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function generateExcerpt(content: string, length: number = 160): string {
  const textContent = content.replace(/#{1,6}\s+/g, '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1');
  return textContent.length > length ? textContent.substring(0, length) + '...' : textContent;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  const posts = fileNames
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
    .map((name) => {
      const filePath = path.join(POSTS_DIRECTORY, name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      const slug = name.replace(/\.(md|mdx)$/, '');
      const readingTime = calculateReadingTime(content);
      const excerpt = generateExcerpt(content);

      return {
        slug,
        title: data.title || '',
        description: data.description || excerpt,
        date: data.date || new Date().toISOString(),
        author: data.author || 'Bill Jonathan',
        category: data.category || 'General',
        tags: data.tags || [],
        image: data.image || null,
        readingTime,
        featured: data.featured || false,
        published: data.published !== false,
        content,
        excerpt,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(POSTS_DIRECTORY, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      const mdxFilePath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
      if (!fs.existsSync(mdxFilePath)) {
        return null;
      }
      const fileContents = fs.readFileSync(mdxFilePath, 'utf8');
      const { data, content } = matter(fileContents);

      const readingTime = calculateReadingTime(content);
      const excerpt = generateExcerpt(content);

      return {
        slug,
        title: data.title || '',
        description: data.description || excerpt,
        date: data.date || new Date().toISOString(),
        author: data.author || 'Bill Jonathan',
        category: data.category || 'General',
        tags: data.tags || [],
        image: data.image || null,
        readingTime,
        featured: data.featured || false,
        published: data.published !== false,
        content,
        excerpt,
      };
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const readingTime = calculateReadingTime(content);
    const excerpt = generateExcerpt(content);

    return {
      slug,
      title: data.title || '',
      description: data.description || excerpt,
      date: data.date || new Date().toISOString(),
      author: data.author || 'Bill Jonathan',
      category: data.category || 'General',
      tags: data.tags || [],
      image: data.image || null,
      readingTime,
      featured: data.featured || false,
      published: data.published !== false,
      content,
      excerpt,
    };
  } catch (error) {
    return null;
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase()));
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map((post) => post.category);
  return [...new Set(categories)].sort();
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.tags);
  return [...new Set(tags)].sort();
}

export function markdownToHtml(markdown: string): string {
  return md.render(markdown);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts().filter((post) => post.slug !== currentPost.slug);

  // Score posts by relevance (same category, shared tags)
  const scoredPosts = allPosts.map((post) => {
    let score = 0;

    // Same category
    if (post.category === currentPost.category) {
      score += 10;
    }

    // Shared tags
    const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
    score += sharedTags.length * 5;

    return { post, score };
  });

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}
