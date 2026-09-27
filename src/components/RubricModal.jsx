import React from 'react';
import { X, CheckCircle2, Award, FileText, Smartphone, Layout, ExternalLink } from 'lucide-react';

export default function RubricModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const criteria = [
    {
      title: "1. Judul yang Menarik dan Singkat",
      weight: "15%",
      status: "Lengkap (100%)",
      detail: "Judul 'Dokter Gia Pratama' dengan subtitle inspiratif 'Perjalanan, Perjuangan, dan Pelajaran dari Seorang Dokter yang Menginspirasi', ringkas dan berdaya pikat tinggi."
    },
    {
      title: "2. Perjalanan Hidup (Minimal 4 Paragraf)",
      weight: "35%",
      status: "Lengkap (100%)",
      detail: "Disajikan dalam 4 babak storytelling: 01 Panggilan Nurani, 02 Ujian IGD RSUD Garut, 03 Terbitnya Bestseller & Film Falcon Pictures, 04 Dampak Edukasi Kesehatan Holistik."
    },
    {
      title: "3. Pelajaran yang Diperoleh (Minimal 2 Paragraf Narasi)",
      weight: "30%",
      status: "Lengkap (100%)",
      detail: "Memuat 2 paragraf narasi esensial mengenai integritas proses dan diversifikasi potensi, dilengkapi 4 kartu insight interaktif."
    },
    {
      title: "4. Kesimpulan (Minimal 1 Paragraf Narasi)",
      weight: "20%",
      status: "Lengkap (100%)",
      detail: "Memuat 2 paragraf narasi reflektif autentik gaya mahasiswa kewirausahaan mengenai makna sukses sejati dan orientasi dampak sosial."
    }
  ];

  const additionalPoints = [
    { icon: <Layout size={16} />, text: "Konsep Desain: Digital Magazine & Storytelling Modern" },
    { icon: <Smartphone size={16} />, text: "Mobile-First Responsive Design (Desktop, Tablet, Smartphone)" },
    { icon: <FileText size={16} />, text: "Faktual & Terverifikasi: Dilengkapi 6 Sumber Referensi Asli" },
    { icon: <Award size={16} />, text: "Section Khusus: 6 Pilar Entrepreneurial Mindset" }
  ];

  return (
    <div 
      className="lightbox-backdrop animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="lightbox-content-box animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px', padding: '2.25rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div className="badge-icon-box teal">
              <Award size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', margin: 0 }}>Rubrik Penilaian Tugas 100%</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Kewirausahaan 1 • Case Study 1: Success
              </span>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            style={{ 
              background: '#F1F5F9', 
              borderRadius: 'var(--radius-full)', 
              width: '36px', 
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)'
            }}
            aria-label="Tutup modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* 4 Rubric Criteria */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
          {criteria.map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FAFAFA',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.2rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#0D9488" />
                  <strong style={{ fontSize: '0.95rem' }}>{item.title}</strong>
                </div>
                <span className="badge-tag gold" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>
                  Bobot {item.weight}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Quality Checklist */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
          <h4 style={{ fontSize: '0.92rem', marginBottom: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Kualitas & Nilai Tambah Desain:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
            {additionalPoints.map((pt, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-teal)' }}>{pt.icon}</span>
                <span>{pt.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={onClose}
            style={{ padding: '0.55rem 1.4rem' }}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
