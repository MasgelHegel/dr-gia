import React from 'react';
import { PenLine } from 'lucide-react';
import { storyData } from '../data/storyData';

const { myTakeaway } = storyData;

export default function MyTakeawaySection() {
  return (
    <section id="refleksi" className="section-padding takeaway-section" aria-labelledby="takeaway-heading">
      <div className="container container-narrow">
        <div className="takeaway-card">
          <div className="takeaway-icon-row" aria-hidden="true">
            <div className="badge-icon-box teal" style={{ width: 48, height: 48 }}>
              <PenLine size={22} />
            </div>
          </div>

          <span className="badge-tag gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            {myTakeaway.badge}
          </span>

          <h2 id="takeaway-heading" className="takeaway-title">{myTakeaway.title}</h2>

          <div className="takeaway-body">
            {myTakeaway.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Visual accent */}
          <div className="takeaway-accent-bar" aria-hidden="true">
            <span>Refleksi Mahasiswa</span>
            <span>Kewirausahaan 1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
