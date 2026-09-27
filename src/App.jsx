import React, { useState } from 'react';
import Navbar               from './components/Navbar';
import Hero                 from './components/Hero';
import IntroSection         from './components/IntroSection';
import TimelineSection      from './components/TimelineSection';
import WorksSection         from './components/WorksSection';

import QuoteBanner          from './components/QuoteBanner';
import LessonsSection       from './components/LessonsSection';
import EntrepreneurshipSection from './components/EntrepreneurshipSection';
import MyTakeawaySection    from './components/MyTakeawaySection';
import ConclusionSection    from './components/ConclusionSection';
import AuthorCard           from './components/AuthorCard';
import ReferencesSection    from './components/ReferencesSection';
import Footer               from './components/Footer';
import RubricModal          from './components/RubricModal';
import './App.css';

export default function App() {
  const [rubricOpen, setRubricOpen] = useState(false);

  return (
    <>
      {/* Skip-to-content for accessibility */}
      <a href="#main-content" className="skip-link">Langsung ke konten utama</a>

      {/* Sticky Navbar + Reading Progress */}
      <Navbar onOpenRubric={() => setRubricOpen(true)} />

      {/* Main Content */}
      <main id="main-content">

        {/* 00 — Hero + Quick Facts */}
        <Hero />

        {/* 01 — Pengantar */}
        <IntroSection />

        {/* 02 — Perjalanan Hidup (5 Babak) */}
        <TimelineSection />

        {/* 03 — Karya & Buku */}
        <WorksSection />


        <QuoteBanner />

        {/* 05 — Pelajaran yang Diperoleh */}
        <LessonsSection />

        {/* 06 — Nilai Kewirausahaan */}
        <EntrepreneurshipSection />

        {/* 07 — Refleksi Pribadi / My Takeaway */}
        <MyTakeawaySection />

        {/* 08 — Kesimpulan */}
        <ConclusionSection />

        {/* 09 — Profil Penulis Tugas */}
        <AuthorCard />

        {/* Sumber Referensi */}
        <ReferencesSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Rubric Modal */}
      <RubricModal isOpen={rubricOpen} onClose={() => setRubricOpen(false)} />
    </>
  );
}
