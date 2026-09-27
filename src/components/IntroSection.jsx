import React from 'react';
import { Lightbulb, BookOpen } from 'lucide-react';
import { storyData } from '../data/storyData';

const { introduction } = storyData;

export default function IntroSection() {
  return (
    <section id="pengantar" className="section-padding intro-section" aria-labelledby="intro-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-tag">{introduction.badge}</span>
          <h2 id="intro-heading" className="section-title">{introduction.title}</h2>
          <p className="section-subtitle">{introduction.subtitle}</p>
          <div className="decorative-divider center" aria-hidden="true"></div>
        </div>

        <div className="intro-grid">
          {/* Highlight editorial card */}
          <aside className="intro-highlight-card" aria-label="Relevansi kewirausahaan">
            <blockquote className="intro-quote">
              "Pengabdi Kemanusiaan. Penulis cerita. Pujangga dalam jiwa."
            </blockquote>
            <p className="intro-quote-source">
              — Bio resmi dr. Gia Pratama di seluruh platform media sosialnya
              <br />
              <small>Sumber: <a href="https://linktr.ee/drgiapratama" target="_blank" rel="noopener noreferrer">linktr.ee/drgiapratama</a></small>
            </p>

            <div className="intro-meta-box">
              <div className="badge-icon-box teal" aria-hidden="true">
                <Lightbulb size={19} />
              </div>
              <div className="intro-meta-text">
                <strong>Relevansi Kewirausahaan 1</strong>
                <span>
                  Case Study 1: Success — Entrepreneurial mindset, value creation,
                  dan dampak sosial dari seorang profesional.
                </span>
              </div>
            </div>

            <div className="intro-meta-box" style={{ marginTop: '0.75rem' }}>
              <div className="badge-icon-box gold" aria-hidden="true">
                <BookOpen size={19} />
              </div>
              <div className="intro-meta-text">
                <strong>Catatan Metodologi</strong>
                <span>
                  Artikel ini membedakan secara eksplisit antara{' '}
                  <strong>[FAKTA]</strong> yang bersumber dari referensi terverifikasi
                  dan <strong>[INTERPRETASI PENULIS]</strong> yang merupakan
                  analisis mahasiswa.
                </span>
              </div>
            </div>
          </aside>

          {/* Narrative */}
          <div className="intro-narrative">
            {introduction.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
