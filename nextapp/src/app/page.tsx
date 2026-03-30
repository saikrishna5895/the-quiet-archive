import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatShortDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Sai Krishna",
  description:
    "A personal blog on writing, ideas, and fatherhood. Essays, reflections, and notes from a life examined.",
};

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <div className="container">
      {/* ── Hero ── */}
      <section className="home-hero">
        <p className="intro">
          I write to understand.<br />
          These pages hold what I am still working out —<br />
          about ideas, about fatherhood, about being alive and paying attention.
        </p>
        <p className="byline">Sai Krishna · Essays, reflections, fatherhood</p>
      </section>

      <hr />

      {/* ── Recent Writing ── */}
      <span className="section-label">Recent Writing</span>
      <ul className="post-list">
        {recentPosts.map((post) => (
          <li key={post.slug} className="post-card">
            <span className="post-meta">
              {formatShortDate(post.date)}&nbsp;·&nbsp;{post.category}
            </span>
            <h2>
              <Link href={`/${post.section}/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="excerpt">{post.excerpt}</p>
            <Link href={`/${post.section}/${post.slug}`} className="read-more">
              Read More →
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Link href="/archive" className="read-more">
          View All Writing →
        </Link>
      </div>

      <div className="ornament" style={{ marginTop: "3rem" }}>· · ·</div>
    </div>
  );
}
