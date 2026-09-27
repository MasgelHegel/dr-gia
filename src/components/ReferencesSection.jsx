import React from 'react';
import { ExternalLink, BookCheck } from 'lucide-react';
import { storyData } from '../data/storyData';

const { references } = storyData;

export default function ReferencesSection() {
  return (
    <section id="sumber" className="section-padding references-section" aria-labelledby="refs-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-tag">09 / SUMBER REFERENSI</span>
          <h2 id="refs-heading" className="section-title">Sumber Referensi</h2>
          <p className="section-subtitle">
            Daftar rujukan yang digunakan dalam penyusunan studi kasus ini. Setiap item
            dapat diklik dan membuka halaman sumber di tab baru.
          </p>
          <div className="decorative-divider center" aria-hidden="true"></div>
        </div>

        <div className="references-card">
          <div className="references-list" role="list">
            {references.map((item) => (
              <div key={item.no} className="reference-item" role="listitem">
                <span className="reference-num" aria-hidden="true">
                  {String(item.no).padStart(2, '0')}
                </span>

                <div className="reference-content">
                  <div className="reference-source-name">{item.source}</div>
                  <div className="reference-title-text">{item.title}</div>
                  {item.note && (
                    <div className="reference-note">{item.note}</div>
                  )}
                </div>

                <div className="reference-actions">
                  <span className="reference-type-tag">{item.type}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}
                    aria-label={`Baca sumber: ${item.title} (buka di tab baru)`}
                  >
                    <span>Baca Sumber</span>
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="references-footer-note" role="note">
            <BookCheck size={15} aria-hidden="true" />
            <span>
              Semua tautan di atas dapat diakses secara publik dan telah diverifikasi
              per September 2026. Akses ulang jika tautan berubah.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
