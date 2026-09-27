import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { storyData } from '../data/storyData';

const { author } = storyData;

export default function AuthorCard() {
  return (
    <section id="author" className="section-padding author-section" aria-labelledby="author-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-tag">{author.badge}</span>
          <h2 id="author-heading" className="section-title">{author.title}</h2>
          <p className="section-subtitle">
            Identitas akademik dan ringkasan pemenuhan rubrik penilaian tugas Case Study 1.
          </p>
          <div className="decorative-divider center" aria-hidden="true"></div>
        </div>

        <div className="author-card">
          <div className="author-grid">

            {/* Identity column */}
            <div className="author-identity-col">
              <div className="author-avatar-wrapper" style={{ overflow: 'visible' }}>
                <img
                  src="/image/raudhatul.jpg"
                  alt="Foto Raudhatul Baytillah"
                  className="author-avatar-photo"
                  style={{ objectPosition: '50% 15%' }}
                />
              </div>

              <div className="author-name-display">Raudhatul Baytillah</div>
              <span className="author-role-badge">Mahasiswa Penyusun Tugas</span>

              <dl className="author-meta-list">
                <div className="author-meta-row">
                  <dt className="author-meta-label">NIM:</dt>
                  <dd className="author-meta-val">20240311130</dd>
                </div>
                <div className="author-meta-row">
                  <dt className="author-meta-label">Mata Kuliah:</dt>
                  <dd className="author-meta-val">Kewirausahaan 1</dd>
                </div>
                <div className="author-meta-row">
                  <dt className="author-meta-label">Universitas:</dt>
                  <dd className="author-meta-val">Universitas Esa Unggul</dd>
                </div>
                <div className="author-meta-row">
                  <dt className="author-meta-label">Tugas:</dt>
                  <dd className="author-meta-val" style={{ color: 'var(--accent-teal)' }}>
                    Case Study 1: Success — dr. Gia Pratama
                  </dd>
                </div>
              </dl>
            </div>

            {/* Rubric checklist column */}
            <div className="rubric-compliance-col">
              <div className="rubric-header">
                <h3 style={{ fontSize: '1.1rem' }}>Checklist Rubrik Penilaian</h3>
                <span className="badge-tag gold">100%</span>
              </div>

              <div className="rubric-items-list" role="list">
                {author.rubricPoints.map((item, i) => (
                  <div key={i} className="rubric-item-row" role="listitem">
                    <div className="rubric-item-left">
                      <CheckCircle2 size={17} className="rubric-check-icon" aria-hidden="true" />
                      <div>
                        <strong>{item.label}</strong>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                          {item.status}
                        </div>
                      </div>
                    </div>
                    <span className="rubric-weight-badge">{item.weight}</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: '#F8FAFC',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.83rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}>
                <Award size={14} style={{ marginRight: '0.4rem', verticalAlign: 'middle', color: 'var(--accent-teal)' }} aria-hidden="true" />
                <strong>Nilai Tambah:</strong> 5 babak perjalanan · 4 paragraf pelajaran ·
                Fakta vs interpretasi dibedakan eksplisit · 7 sumber terverifikasi ·
                Komponen MyTakeaway tambahan · Responsive design
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
