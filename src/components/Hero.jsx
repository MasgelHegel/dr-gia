import React from 'react';
import { ArrowDown, Stethoscope, BookOpen, Film } from 'lucide-react';
import { storyData } from '../data/storyData';

const { meta, quickFacts, heroStats } = storyData;

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">

          {/* ── Left: Text Content ── */}
          <div className="hero-content">
            <div className="hero-tag-row">
              <span className="badge-tag gold">CASE STUDY 1 · SUCCESS</span>
              <span className="badge-tag outline">KEWIRAUSAHAAN 1</span>
            </div>

            <h1 id="hero-heading" className="hero-title">
              {meta.mainTitle.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="text-highlight">
                {meta.mainTitle.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            <p className="hero-tagline">{meta.tagline}</p>

            <p className="hero-desc">
              Sebuah studi kasus untuk mata kuliah Kewirausahaan 1 — mengulas perjalanan{' '}
              <strong>dr. Gia Pratama</strong>: dokter IGD aktif yang juga menulis 5 buku, dan novelnya
              diadaptasi menjadi film layar lebar oleh Falcon Pictures (2021).
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('#pengantar')}
              >
                <span>Baca Kisahnya</span>
                <ArrowDown size={17} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo('#karya')}
              >
                <BookOpen size={17} aria-hidden="true" />
                <span>Lihat Karya</span>
              </button>
            </div>

            {/* Hero Stats */}
            <div className="hero-stats-row" role="list" aria-label="Fakta singkat dr. Gia Pratama">
              {heroStats.map((s, i) => (
                <div key={i} className="hero-stat-card" role="listitem">
                  <span className="hero-stat-val">{s.value}</span>
                  <span className="hero-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Visual + Quick Facts ── */}
          <div className="hero-visual-wrapper">
            {/* Floating badge top */}
            <div className="floating-badge badge-top-left" aria-hidden="true">
              <div className="badge-icon-box teal"><BookOpen size={17} /></div>
              <div>
                <div className="badge-text-primary">5 Buku</div>
                <div className="badge-text-secondary">Debut 2018 · Garda Detak</div>
              </div>
            </div>

            {/* Main card */}
            <div className="hero-magazine-card">
              <div className="hero-image-container">
                <img
                  src="/image/dr.gia1.png"
                  alt="dr. Gia Pratama"
                  className="hero-image"
                  loading="eager"
                />
                <div className="hero-image-overlay">
                  <span className="hero-overlay-tag">Case Study · Kewirausahaan 1</span>
                  <h2 className="hero-overlay-name">dr. Gia Pratama</h2>
                  <p className="hero-overlay-role">
                    Dokter IGD · Penulis · Health Educator
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge bottom */}
            <div className="floating-badge badge-bottom-right" aria-hidden="true">
              <div className="badge-icon-box gold"><Film size={17} /></div>
              <div>
                <div className="badge-text-primary">Film 2021</div>
                <div className="badge-text-secondary">#BerhentiDiKamu · Disney+</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Quick Facts Bar ── */}
        <div className="quick-facts-bar" aria-label="Fakta Cepat dr. Gia Pratama">
          <div className="quick-facts-label">
            <Stethoscope size={16} aria-hidden="true" />
            <span>Quick Facts</span>
          </div>
          <div className="quick-facts-grid">
            <div className="qf-item">
              <span className="qf-key">Pendidikan</span>
              <span className="qf-val">{quickFacts.pendidikan}</span>
            </div>
            <div className="qf-item">
              <span className="qf-key">Profesi</span>
              <span className="qf-val">{quickFacts.profesi}</span>
            </div>
            <div className="qf-item">
              <span className="qf-key">Buku Pertama</span>
              <span className="qf-val">{quickFacts.bukuPertama}</span>
            </div>
            <div className="qf-item">
              <span className="qf-key">Adaptasi Film</span>
              <span className="qf-val">{quickFacts.adaptasiFilm}</span>
            </div>
            <div className="qf-item">
              <span className="qf-key">Media Sosial</span>
              <a
                href="https://instagram.com/giapratamamd"
                target="_blank"
                rel="noopener noreferrer"
                className="qf-val qf-link"
              >
                {quickFacts.mediaSosial}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
