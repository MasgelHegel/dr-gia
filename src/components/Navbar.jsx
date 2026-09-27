import React, { useState, useEffect } from 'react';
import { Menu, X, Award, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Pengantar',     href: '#pengantar' },
  { label: 'Perjalanan',    href: '#perjalanan' },
  { label: 'Karya',         href: '#karya' },
  { label: 'Pelajaran',     href: '#pelajaran' },
  { label: 'Kewirausahaan', href: '#kewirausahaan' },
  { label: 'Refleksi',      href: '#refleksi' },
  { label: 'Kesimpulan',    href: '#kesimpulan' },
  { label: 'Sumber',        href: '#sumber' },
];

export default function Navbar({ onOpenRubric }) {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [readingPct, setReadingPct]     = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setReadingPct(Math.min(100, (window.scrollY / total) * 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''}`} role="banner">
      {/* Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${readingPct}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingPct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progres membaca: ${Math.round(readingPct)}%`}
      />

      <nav className="container nav-container" aria-label="Navigasi Utama">
        {/* Brand */}
        <a
          href="#home"
          className="nav-brand"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          aria-label="Ke halaman awal"
        >
          <div className="nav-logo-badge" aria-hidden="true">DG</div>
          <div className="nav-brand-text">
            <span className="brand-title">dr. Gia Pratama</span>
            <span className="brand-subtitle">Kewirausahaan 1</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu-desktop" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button
            type="button"
            className="nav-btn-rubric"
            onClick={onOpenRubric}
            title="Lihat pemenuhan kriteria rubrik tugas"
          >
            <Award size={15} aria-hidden="true" />
            <span>Rubrik 100%</span>
          </button>

          <button
            type="button"
            className="hamburger-btn"
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <nav
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        aria-label="Menu mobile"
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            tabIndex={mobileOpen ? 0 : -1}
          >
            <span>{link.label}</span>
            <ChevronRight size={16} color="#94A3B8" aria-hidden="true" />
          </a>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '0.5rem' }}
          onClick={() => { setMobileOpen(false); onOpenRubric(); }}
          tabIndex={mobileOpen ? 0 : -1}
        >
          <Award size={15} aria-hidden="true" />
          <span>Lihat Rubrik Penilaian</span>
        </button>
      </nav>
    </header>
  );
}
