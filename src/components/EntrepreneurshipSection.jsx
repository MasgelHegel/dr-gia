import React from 'react';
import { Briefcase, Lightbulb, Rocket, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { storyData } from '../data/storyData';

const { entrepreneurship } = storyData;

const PILLAR_ICONS = {
  'value-creation':  <Lightbulb  size={20} color="#D97706" aria-hidden="true" />,
  'opportunity':     <Rocket     size={20} color="#0D9488" aria-hidden="true" />,
  'branding':        <ShieldCheck size={20} color="#D97706" aria-hidden="true" />,
  'diversification': <TrendingUp size={20} color="#0D9488" aria-hidden="true" />,
  'resilience':      <Briefcase  size={20} color="#D97706" aria-hidden="true" />,
  'social-impact':   <Users      size={20} color="#0D9488" aria-hidden="true" />,
};

export default function EntrepreneurshipSection() {
  return (
    <section id="kewirausahaan" className="section-padding entrepreneurship-section" aria-labelledby="entre-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="badge-tag">{entrepreneurship.badge}</span>
          <h2 id="entre-heading" className="section-title">{entrepreneurship.title}</h2>
          <p className="section-subtitle">{entrepreneurship.subtitle}</p>
          <div className="decorative-divider center" aria-hidden="true"></div>
        </div>

        {/* Lead disclaimer box */}
        <div className="entrepreneurship-lead-card" role="note">
          <div className="entrepreneur-lead-icon" aria-hidden="true">
            <Briefcase size={24} />
          </div>
          <div className="entrepreneur-lead-text">
            <p>{entrepreneurship.lead}</p>
          </div>
        </div>

        {/* 6 Pillars */}
        <div className="pillars-grid">
          {entrepreneurship.pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <div className="pillar-card-header">
                <span className="pillar-number" aria-hidden="true">{pillar.number}</span>
                {PILLAR_ICONS[pillar.id]}
              </div>

              <h3 className="pillar-title">{pillar.title}</h3>
              <span className="pillar-concept">{pillar.concept}</span>
              <p className="pillar-explanation">{pillar.explanation}</p>

              <div className="pillar-application-box">
                {pillar.application}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
