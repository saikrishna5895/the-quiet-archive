import type { Metadata } from "next";
import Link from "next/link";
import { getPostsBySection, formatShortDate } from "@/lib/posts";

export const revalidate = 3600; // revalidate every hour

export const metadata: Metadata = {
  title: "Fatherhood",
  description:
    "Intimate essays about life with a toddler — reflection, humor, and the daily wonder of watching someone learn to exist.",
};

export default function FatherhoodPage() {
  const posts = getPostsBySection("fatherhood");

  return (
    <div className="container">
      <section className="page-header">
        <span className="label">Fatherhood</span>
        <h1>On Being a Father</h1>
        <p className="lede">
          These are the small dispatches, from the floor, from bedtime, from
          the long afternoons when a toddler teaches you more than any book
          ever could.
        </p>
      </section>

      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug} className="post-card">
            <span className="post-meta">
              {formatShortDate(post.date)}&nbsp;·&nbsp;Fatherhood
            </span>
            <h2>
              <Link href={`/fatherhood/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="excerpt">{post.excerpt}</p>
            <Link href={`/fatherhood/${post.slug}`} className="read-more">
              Read More →
            </Link>
          </li>
        ))}
      </ul>

      <div className="ornament" style={{ marginTop: "3rem" }}>· · ·</div>
    </div>
  );
}
