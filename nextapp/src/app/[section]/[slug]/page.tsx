import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";

export const revalidate = 3600; // revalidate every hour
import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const SECTIONS = ["essays", "reflections", "fatherhood"];

interface Props {
  params: Promise<{ section: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ section: p.section, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, slug } = await params;
  const post = getPostBySlug(section, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { section, slug } = await params;

  if (!SECTIONS.includes(section)) notFound();

  const post = getPostBySlug(section, slug);
  if (!post) notFound();

  // Find prev/next in same section
  const { getAllPosts } = await import("@/lib/posts");
  const allPosts = getAllPosts();
  const idx = allPosts.findIndex(
    (p) => p.section === section && p.slug === slug
  );
  const prev = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const next = idx > 0 ? allPosts[idx - 1] : null;

  return (
    <article className="container">
      {/* ── Post Header ── */}
      <header className="post-header">
        <span className="category-tag">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="post-meta-bar">
          <span>{formatDate(post.date)}</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {/* ── Post Body ── */}
      <div className="prose-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* ── Post Navigation ── */}
      {(prev || next) && (
        <nav className="post-nav">
          {prev ? (
            <Link href={`/${prev.section}/${prev.slug}`}>
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/${next.section}/${next.slug}`}>
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  );
}
