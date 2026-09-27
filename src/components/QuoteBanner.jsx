import React from 'react';
import { Quote, ExternalLink } from 'lucide-react';
import { storyData } from '../data/storyData';

const { quoteSection } = storyData;

export default function QuoteBanner() {
  return (
    <section
      id="quote-refleksi"
      className="quote-banner-section"
      aria-label="Kutipan resmi dr. Gia Pratama"
    >
      <div className="container">
        <div className="quote-box">
          <Quote className="quote-icon-top" aria-hidden="true" />

          <blockquote className="quote-text" cite="https://linktr.ee/drgiapratama">
            "{quoteSection.quote}"
          </blockquote>

          <div className="quote-attribution">
            <span className="quote-attribution-name">{quoteSection.attribution}</span>
            <span className="quote-attribution-note">{quoteSection.note}</span>
            <a
              href="https://linktr.ee/drgiapratama"
              target="_blank"
              rel="noopener noreferrer"
              className="quote-source-link"
              aria-label="Verifikasi sumber bio resmi dr. Gia Pratama (buka di tab baru)"
            >
              <span>Verifikasi sumber</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
