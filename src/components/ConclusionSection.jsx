import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { storyData } from '../data/storyData';

const { conclusion } = storyData;

export default function ConclusionSection() {
  return (
    <section id="kesimpulan" className="section-padding conclusion-section" aria-labelledby="conclusion-heading">
      <div className="container container-narrow">
        <div className="conclusion-card">
          <div className="conclusion-badge-row">
            <span className="badge-tag gold">{conclusion.badge}</span>
          </div>

          <h2 id="conclusion-heading" className="conclusion-title">{conclusion.title}</h2>
          {conclusion.subtitle && (
            <p className="conclusion-subtitle-text">{conclusion.subtitle}</p>
          )}

          <div className="conclusion-body">
            {conclusion.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Callout */}
          <div className="conclusion-callout" role="note">
            <div className="conclusion-callout-icon" aria-hidden="true">
              <CheckCircle2 size={21} />
            </div>
            <p className="conclusion-callout-text">
              Konsistensi, kemampuan komunikasi, dan kemauan untuk berkarya dengan
              bahan yang sesungguhnya — tiga hal itu paling jelas terlihat dari perjalanan
              dr. Gia, dan ketiganya relevan di bidang apa pun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
