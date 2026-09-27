import React, { useState } from 'react';
import { Calendar, MapPin, Camera, BookOpen, HeartPulse, Sparkles, Building2, Film } from 'lucide-react';
import { storyData } from '../data/storyData';

const { lifeJourney } = storyData;

const FALLBACK_ICONS = [Building2, HeartPulse, HeartPulse, BookOpen, Film];

export default function TimelineSection() {
  const [failedImages, setFailedImages] = useState({});

  return (
    <section id="perjalanan" className="section-padding timeline-section" aria-labelledby="timeline-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="badge-tag">{lifeJourney.badge}</span>
          <h2 id="timeline-heading" className="section-title">{lifeJourney.title}</h2>
          <p className="section-subtitle">{lifeJourney.subtitle}</p>
          <div className="decorative-divider center" aria-hidden="true"></div>
        </div>

        {/* Stage Cards */}
        <div className="timeline-cards-wrapper">
          {lifeJourney.stages.map((stage, idx) => {
            const isReverse   = idx % 2 !== 0;
            const isFailed    = !!failedImages[idx];
            const FallbackIcon = FALLBACK_ICONS[idx] ?? Sparkles;

            return (
              <article
                key={stage.number}
                className={`story-stage-card ${isReverse ? 'reverse' : ''}`}
                aria-label={`Babak ${stage.number}: ${stage.heading}`}
              >
                {/* Content column */}
                <div className="stage-content-col">
                  <div className="stage-number-badge" aria-hidden="true">
                    <span className="stage-num-big">{stage.number}</span>
                    <span className="stage-phase-label">{stage.stage}</span>
                  </div>

                  <h3 className="stage-heading">{stage.heading}</h3>

                  <div className="stage-meta-row">
                    <span className="stage-meta-item">
                      <Calendar size={13} color="#0D9488" aria-hidden="true" />
                      <span>{stage.period}</span>
                    </span>
                    <span className="stage-meta-item">
                      <MapPin size={13} color="#D97706" aria-hidden="true" />
                      <span>{stage.location}</span>
                    </span>
                  </div>

                  <p className="stage-narrative">{stage.narrative}</p>
                </div>

                {/* Media column */}
                <div className="stage-media-col">
                  <div className="stage-media-card">
                    {!isFailed ? (
                      <img
                        src={stage.image}
                        alt={stage.imageCaption}
                        className="stage-media-img"
                        loading="lazy"
                        onError={() => setFailedImages((p) => ({ ...p, [idx]: true }))}
                      />
                    ) : (
                      <div className="stage-media-fallback" aria-hidden="true">
                        <FallbackIcon size={48} color="#14B8A6" />
                        <span>{stage.heading}</span>
                      </div>
                    )}

                    <div className="stage-media-caption">
                      <p className="stage-caption-text">{stage.imageCaption}</p>
                      <span className="stage-caption-credit">
                        <Camera size={11} aria-hidden="true" />
                        <span>{stage.imageCredit}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Visual timeline connector — dihapus */}
      </div>
    </section>
  );
}
