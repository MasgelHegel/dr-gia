import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';

const NAV_SECTIONS = [
  { label: 'Home',           href: '#home' },
  { label: '01 Pengantar',   href: '#pengantar' },
  { label: '02 Perjalanan',  href: '#perjalanan' },
  { label: '03 Karya',       href: '#karya' },
  { label: '04 Pelajaran',   href: '#pelajaran' },
];

const NAV_ACADEMIC = [
  { label: '05 Kewirausahaan', href: '#kewirausahaan' },
  { label: '06 Refleksi',      href: '#refleksi' },
  { label: '07 Kesimpulan',    href: '#kesimpulan' },
  { label: '08 Sumber',        href: '#sumber' },
  { label: 'Profil Penulis',   href: '#author' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleLink = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h2 className="footer-brand-title">
              Success Story — dr. Gia Pratama
            </h2>
            <p>
              "Antara Ruang IGD dan Halaman Pertama" — studi kasus perjalanan dokter IGD
              yang juga menulis 5 buku dan novelnya diadaptasi layar lebar.
            </p>
            <a
              href="https://instagram.com/giapratamamd"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram resmi dr. Gia Pratama (buka di tab baru)"
            >
              <span>@giapratamamd</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>

          {/* Story Nav */}
          <div>
            <h3 className="footer-heading">Isi Artikel</h3>
            <ul className="footer-links" role="list">
              {NAV_SECTIONS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={(e) => handleLink(e, href)}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Nav */}
          <div>
            <h3 className="footer-heading">Analisis &amp; Akademik</h3>
            <ul className="footer-links" role="list">
              {NAV_ACADEMIC.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={(e) => handleLink(e, href)}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>
            <span>© 2026 · Raudhatul Baytillah </span>
            <span className="footer-disclaimer">
              · Website pribadi milik Raudhatul Baytillah Universitas Esa Unggul
            </span>
          </div>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Kembali ke bagian atas halaman"
          >
            <span>Ke Atas</span>
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
