import type { Metadata } from "next";
import Link from "next/link";
import { getPostsBySection, formatShortDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and reflections on ideas, professional life, and the examined life. Long-form writing by Sai Krishna.",
};

export default function WritingPage() {
  const essays = getPostsBySection("essays");
  const reflections = getPostsBySection("reflections");
  const allPosts = [...essays, ...reflections].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    <div className="container">
      <section className="page-header">
        <span className="label">Writing</span>
        <h1>Essays & Reflections</h1>
        <p className="lede">
          Long-form writing on ideas, professional life, and the quieter
          questions that don't fit anywhere else.
        </p>
      </section>

      <ul className="post-list">
        {allPosts.map((post) => (
          <li key={post.slug} className="post-card">
            <span className="post-meta">
              {formatShortDate(post.date)}&nbsp;·&nbsp;{post.category}
            </span>
            <h2>
              <Link href={`/${post.section}/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="excerpt">{post.excerpt}</p>
            <Link href={`/${post.section}/${post.slug}`} className="read-more">
              Continue Reading →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
