import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navWrap">
      <nav className="nav">
        {/* BRAND */}
        <Link href="/" className="brand">
          <span className="brandText">Lara Alves</span>
        </Link>

        {/* LINKS */}
        <div className="navLinks">
          <Link href="/" className="navLink">
            Home
          </Link>
          <Link href="/#artigos" className="navLink">
            Artigos
          </Link>
          <Link href="/sobre" className="navLink">
            Sobre
          </Link>
        </div>
      </nav>
    </header>
  );
}
