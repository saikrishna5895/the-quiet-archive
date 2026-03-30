import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-copy">
          © {new Date().getFullYear()} Sai Krishna. Written with care.
        </span>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/writing">Writing</Link>
          <Link href="/fatherhood">Fatherhood</Link>
          <Link href="/archive">Archive</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </footer>
  );
}
