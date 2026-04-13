"use client";

import { useEffect, useState } from "react";

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function SidebarTOC({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Quick markdown parser for headings
  useEffect(() => {
    const headingLines = content.split('\n').filter(line => line.startsWith('##'));
    const parsed = headingLines.map(line => {
      const level = line.match(/^#+/)?.[0].length || 2;
      const text = line.replace(/^#+\s/, '').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return { id, text, level };
    });
    setHeadings(parsed);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return <aside className="sidebar-toc empty" />;

  return (
    <aside className="sidebar-toc">
      <div className="toc-track">
        {headings.map((heading) => (
          <div 
            key={heading.id} 
            className={`toc-item ${activeId === heading.id ? 'active' : ''}`}
          >
            <div className="toc-node" />
            <a href={`#${heading.id}`} className="toc-link">
              {heading.text}
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
}
