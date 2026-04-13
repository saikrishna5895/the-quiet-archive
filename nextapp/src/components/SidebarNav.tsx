import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function SidebarNav() {
  const posts = getAllPosts();

  // Group by section
  const sections = posts.reduce((acc, post) => {
    if (!acc[post.section]) acc[post.section] = [];
    acc[post.section].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  return (
    <nav className="sidebar-nav">
      <Link href="/" className="sidebar-title">
        THE QUIET ARCHIVE
      </Link>
      <div className="sidebar-sections">
        {Object.entries(sections).map(([section, sectionPosts]) => (
          <div key={section} className="sidebar-group">
            <h3 className="section-header">{section}</h3>
            <ul className="section-list">
              {sectionPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/${section}/${post.slug}`}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
