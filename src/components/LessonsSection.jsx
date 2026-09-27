import React from 'react';
import { Clock, ShieldCheck, MessageCircle, TrendingUp, Sparkles, BookOpenCheck } from 'lucide-react';
import { storyData } from '../data/storyData';

const { lessons } = storyData;

const ICONS = {
  Clock:          <Clock size={22} aria-hidden="true" />,
  ShieldCheck:    <ShieldCheck size={22} aria-hidden="true" />,
  MessageCircle:  <MessageCircle size={22} aria-hidden="true" />,
  TrendingUp:     <TrendingUp size={22} aria-hidden="true" />,
  Sparkles:       <Sparkles size={22} aria-hidden="true" />,
};

export default function LessonsSection() {
  return (
    <section id="pelajaran" className="section-padding lessons-section" aria-labelledby="lessons-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="badge-tag gold">{lessons.badge}</span>
          <h2 id="lessons-heading" className="section-title">{lessons.title}</h2>
          <p className="section-subtitle">{lessons.subtitle}</p>
          <div className="decorative-divider center" aria-hidden="true"></div>
        </div>

        {/* Narrative — 4 paragraf (melampaui syarat minimal 2) */}
        <div className="lessons-narrative-box">
          <div className="lessons-narrative-header">
            <div className="badge-icon-box teal" aria-hidden="true">
              <BookOpenCheck size={19} />
            </div>
            <h3>Refleksi atas Perjalanan dr. Gia Pratama</h3>
          </div>
          {lessons.narrativeParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 5 Insight Cards */}
        <div className="insight-cards-grid" role="list">
          {lessons.cards.map((card) => (
            <div key={card.number} className="insight-card" role="listitem">
              <div className="insight-card-top">
                <span className="insight-num" aria-hidden="true">{card.number}</span>
                <div className="insight-icon-box">
                  {ICONS[card.iconName] ?? <Sparkles size={22} aria-hidden="true" />}
                </div>
              </div>
              <h4 className="insight-title">{card.title}</h4>
              <span className="insight-subtitle">{card.subtitle}</span>
              <p className="insight-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
