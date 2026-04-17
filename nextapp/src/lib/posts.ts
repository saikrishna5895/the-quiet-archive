import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Category = "Essay" | "Reflection" | "Fatherhood" | "Data";

export interface PostMeta {
  title: string;
  date: string;
  category: Category;
  slug: string;
  section: string; // directory: essays | reflections | fatherhood
  excerpt: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

const SECTIONS = ["essays", "reflections", "fatherhood"];

// Get today's date in YYYY-MM-DD format for filtering future posts
const getToday = () => new Date().toISOString().split('T')[0];

function parsePost(section: string, filename: string): PostMeta {
  const filePath = path.join(CONTENT_DIR, section, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    title: data.title,
    date: data.date,
    category: data.category,
    slug: data.slug,
    section,
    excerpt: data.excerpt,
    readingTime: rt.text,
  };
}

export function getAllPosts(): PostMeta[] {
  const posts: PostMeta[] = [];

  for (const section of SECTIONS) {
    const sectionDir = path.join(CONTENT_DIR, section);
    if (!fs.existsSync(sectionDir)) continue;
    const files = fs.readdirSync(sectionDir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      posts.push(parsePost(section, file));
    }
  }

  const today = getToday();
  return posts
    .filter((post) => post.date <= today)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsBySection(section: string): PostMeta[] {
  return getAllPosts().filter((p) => p.section === section);
}

export function getPostBySlug(section: string, slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, section, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  
  // Prevent direct access to future posts
  if (data.date > getToday()) return null;

  const rt = readingTime(content);

  return {
    title: data.title,
    date: data.date,
    category: data.category,
    slug: data.slug,
    section,
    excerpt: data.excerpt,
    readingTime: rt.text,
    content,
  };
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatShortDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}

export function getYear(dateStr: string): string {
  return dateStr.slice(0, 4);
}
