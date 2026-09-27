import React from 'react';
import { BookOpen, Film, ExternalLink } from 'lucide-react';
import { storyData } from '../data/storyData';

const { works } = storyData;

const TYPE_STYLES = {
  'Novel — Diadaptasi Layar Lebar': { bg: '#FEF3C7', color: '#92400E', icon: Film },
  'Antologi':        { bg: '#CCFBF1', color: '#065F46', icon: BookOpen },
  'Buku':            { bg: '#EFF6FF', color: '#1E40AF', icon: BookOpen },
  'Buku Kesehatan':  { bg: '#F0FDF4', color: '#166534', icon: BookOpen },
};

export default function WorksSection() {
  return (
    <section id="karya" className="section-padding works-section" aria-labelledby="works-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-tag">03 / KARYA &amp; GAGASAN</span>
          <h2 id="works-heading" className="section-title">Karya dr. Gia Pratama</h2>
          <p className="section-subtitle">
            Lima buku karya dr. Gia Pratama — dari novel yang diadaptasi layar lebar,
            antologi cerita IGD, hingga buku kesehatan untuk masyarakat umum.
          </p>
          <div className="decorative-divider center" aria-hidden="true"></div>
        </div>

        <div className="works-grid">
          {works.map((work) => {
            const style   = TYPE_STYLES[work.type] ?? TYPE_STYLES['Buku'];
            const TypeIcon = style.icon;

            return (
              <article
                key={work.id}
                className="work-card"
                aria-label={`Karya: ${work.title}`}
              >
                {/* Cover */}
                <div className="work-cover">
                  {work.coverUrl ? (
                    <img
                      src={work.coverUrl}
                      alt={`Cover buku ${work.title}`}
                      className="work-cover-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="work-cover-placeholder" aria-hidden="true">
                      <TypeIcon size={36} color="#0F766E" />
                      <span className="work-cover-abbr">{work.coverFallback}</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="work-body">
                  <div
                    className="work-type-badge"
                    style={{ background: style.bg, color: style.color }}
                  >
                    <TypeIcon size={12} aria-hidden="true" />
                    <span>{work.type}</span>
                  </div>

                  <h3 className="work-title">{work.title}</h3>
                  {work.year !== '—' && (
                    <span className="work-year">{work.year}</span>
                  )}
                  <p className="work-desc">{work.description}</p>

                  {work.sourceUrl ? (
                    <a
                      href={work.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-source-link"
                      aria-label={`Baca sumber untuk ${work.title} (buka di tab baru)`}
                    >
                      <span>{work.sourceText}</span>
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="work-source-text">{work.sourceText}</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
