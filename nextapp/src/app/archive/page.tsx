import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatShortDate, getYear } from "@/lib/posts";

export const revalidate = 3600; // revalidate every hour

export const metadata: Metadata = {
  title: "Archive",
  description:
    "All writing by Sai Krishna, grouped by year in reverse chronological order.",
};

export default function ArchivePage() {
  const posts = getAllPosts();

  // Group by year
  const byYear: Record<string, typeof posts> = {};
  for (const post of posts) {
    const year = getYear(post.date);
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(post);
  }
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="container">
      <section className="page-header">
        <span className="label">All Writing</span>
        <h1>Archive</h1>
        <p className="lede">
          Every piece published here, in reverse chronological order.{" "}
          {posts.length} {posts.length === 1 ? "piece" : "pieces"} so far.
        </p>
      </section>

      {years.map((year) => (
        <div key={year} className="archive-year">
          <h2>{year}</h2>
          <ul className="archive-list">
            {byYear[year].map((post) => (
              <li key={post.slug} className="archive-item">
                <span className="date">{formatShortDate(post.date)}</span>
                <Link href={`/${post.section}/${post.slug}`}>
                  {post.title}
                </Link>
                <span className="category">{post.category}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="ornament">· · ·</div>
    </div>
  );
}
