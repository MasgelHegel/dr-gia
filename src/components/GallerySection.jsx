import React, { useState } from 'react';
import { ExternalLink, X, BookOpen, Film, HeartPulse, Mic } from 'lucide-react';
import { storyData } from '../data/storyData';

const { gallery } = storyData;

const FALLBACK_ICONS = {
  book:    <BookOpen  size={44} color="#14B8A6" aria-hidden="true" />,
  film:    <Film      size={44} color="#F59E0B" aria-hidden="true" />,
  clinic:  <HeartPulse size={44} color="#14B8A6" aria-hidden="true" />,
  seminar: <Mic       size={44} color="#F59E0B" aria-hidden="true" />,
};

export default function GallerySection() {
  const [active, setActive]         = useState(null);
  const [failedImgs, setFailedImgs] = useState({});

  const markFailed = (id) => setFailedImgs((p) => ({ ...p, [id]: true }));

  return (
    <section id="galeri" className="section-padding gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-tag">04 / DOKUMENTASI &amp; KONTEKS</span>
          <h2 id="gallery-heading" className="section-title">Galeri Kontekstual</h2>
          <p className="section-subtitle">
            Dokumentasi visual perjalanan dr. Gia Pratama — dari aktivitas klinis, karya tulis,
            hingga kehadiran publiknya di media digital.
          </p>
          <div className="decorative-divider center" aria-hidden="true"></div>
        </div>

        <div className="gallery-grid" role="list">
          {gallery.map((item) => {
            const failed = !!failedImgs[item.id];
            return (
              <div
                key={item.id}
                className="gallery-item-card"
                role="listitem"
                tabIndex={0}
                onClick={() => setActive(item)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActive(item); }}
                aria-label={`Lihat detail: ${item.title}`}
              >
                <div className="gallery-img-container">
                  {!failed ? (
                    <img
                      src={item.imageUrl}
                      alt={`Ilustrasi konteks: ${item.title}`}
                      className="gallery-img"
                      loading="lazy"
                      onError={() => markFailed(item.id)}
                    />
                  ) : (
                    <div className="gallery-img-fallback" aria-hidden="true">
                      {FALLBACK_ICONS[item.fallbackType] ?? <BookOpen size={44} color="#14B8A6" />}
                    </div>
                  )}
                  <span className="gallery-category-tag">{item.category}</span>
                </div>
                <div className="gallery-item-body">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-caption">{item.caption}</p>
                  <div className="gallery-item-footer">
                    <span className="gallery-source-name">Sumber: {item.sourceName}</span>
                    <span className="gallery-source-link" aria-hidden="true">Detail →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="lightbox-backdrop animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail: ${active.title}`}
          onClick={() => setActive(null)}
        >
          <div
            className="lightbox-content-box animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setActive(null)}
              aria-label="Tutup dialog"
            >
              <X size={19} aria-hidden="true" />
            </button>

            <div className="lightbox-img-wrap">
              {!failedImgs[active.id] ? (
                <img src={active.imageUrl} alt={`Ilustrasi konteks: ${active.title}`} />
              ) : (
                <div className="lightbox-img-fallback" aria-hidden="true">
                  {FALLBACK_ICONS[active.fallbackType] ?? <BookOpen size={52} color="#14B8A6" />}
                </div>
              )}
            </div>

            <div className="lightbox-body">
              <span className="badge-tag gold" style={{ fontSize: '0.72rem' }}>{active.category}</span>
              <h3 className="lightbox-title">{active.title}</h3>
              <p className="lightbox-caption">{active.caption}</p>
              <div className="lightbox-footer">
                <span className="lightbox-source-label">
                  Sumber: <strong>{active.sourceName}</strong>
                </span>
                <a
                  href={active.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}
                  aria-label={`Buka sumber ${active.sourceName} (tab baru)`}
                >
                  <span>Buka Sumber</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
