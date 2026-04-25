import { useState } from 'react'
import { useReveal } from './useReveal'

const jobs = [
  {
    role: 'Research Intern',
    company: 'HutLabs',
    short: 'HutLabs',
    period: 'Jul 2025 – Feb 2026',
    location: 'Kollam, On-site',
    bullets: [
      'Built a 5-class Motor Imagery BCI (Forward/Backward/Left/Right/Stop) using Riemannian geometry + SVM — 92.83% cross-validated accuracy, Cohen\'s Kappa 0.911 across 3,750 EEG trials from 10 subjects.',
      'Engineered full EEG preprocessing pipeline: bandpass 1–40 Hz, ICA artifact removal, Surface Laplacian spatial filtering. Feature fusion combining Riemannian covariance with PLV connectivity — 0.117ms inference latency.',
      'Designed 4-layer modular software architecture (Signal Acquisition → Classification → Command Translation → Hardware Control), interfacing OpenBCI Cyton with Arduino. 98.23% real-time simulation accuracy via LOSO cross-session eval.',
    ],
    tags: ['EEG', 'BCI', 'Riemannian Geometry', 'SVM', 'ICA', 'OpenBCI', 'Signal Processing'],
  },
  {
    role: 'AI Intern',
    company: 'Pantech Solutions',
    short: 'Pantech / AI',
    period: 'Apr – Sep 2021',
    location: 'Remote',
    bullets: [
      'Built CNN-based real-time facial recognition (92% accuracy, 24+ fps) and YOLO object detection pipelines.',
      'Deployed MNIST digit classifier (99.1% accuracy) as a production Flask REST API endpoint.',
    ],
    tags: ['CNN', 'YOLO', 'Flask', 'Computer Vision', 'Python', 'OpenCV'],
  },
  {
    role: 'ML Intern',
    company: 'Pantech Solutions',
    short: 'Pantech / ML',
    period: 'Sep 2021 – Feb 2022',
    location: 'Remote',
    bullets: [
      'Designed LSTM/RNN sentiment classifiers achieving 88% F1-score on 50,000+ reviews.',
      'Built Q-learning and policy gradient RL agents converging to optimal policy in 300 episodes within custom OpenAI Gym environments.',
    ],
    tags: ['LSTM', 'RNN', 'Reinforcement Learning', 'NLP', 'PyTorch', 'OpenAI Gym'],
  },
  {
    role: 'Data Analytics Intern',
    company: 'Pantech Solutions',
    short: 'Pantech / Data',
    period: 'Mar – Aug 2021',
    location: 'Remote',
    bullets: [
      'Performed EDA, hypothesis testing, and statistical analysis on 100,000+ row datasets.',
      'Built Tableau KPI dashboards across 3 business units — reduced manual reporting effort by 60%.',
    ],
    tags: ['Tableau', 'EDA', 'Statistics', 'Python', 'Data Analytics', 'Power BI'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const label = useReveal()
  const body = useReveal()
  const job = jobs[active]

  return (
    <section id="experience" style={{
      borderTop: '1px solid var(--border)', padding: '8rem 0',
      background: 'var(--bg2)',
    }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 2rem' }}>
        <div ref={label} className="reveal" style={{
          display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem',
        }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--amber)', textTransform: 'uppercase' }}>02 — Experience</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div ref={body} className="reveal exp-grid" style={{
          display: 'grid', gridTemplateColumns: '220px 1fr', gap: '4rem',
        }}>
          {/* Tab list */}
          <div>
            {jobs.map((j, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display: 'block', width: '100%', background: active === i ? 'var(--amber-dim)' : 'transparent',
                border: 'none',
                textAlign: 'left', padding: '0.9rem 1.1rem',
                borderLeft: `2px solid ${active === i ? 'var(--amber)' : 'var(--border)'}`,
                transition: 'all 0.25s var(--ease)',
                marginBottom: '2px',
              }}>
                <p style={{
                  fontFamily: 'var(--mono)', fontSize: '0.76rem',
                  color: active === i ? 'var(--amber)' : 'var(--text-dimmer)',
                  letterSpacing: '0.04em', transition: 'color 0.2s',
                  marginBottom: '0.2rem',
                }}>{j.short}</p>
                <p style={{
                  fontFamily: 'var(--mono)', fontSize: '0.65rem',
                  color: active === i ? 'rgba(245,166,35,0.5)' : 'var(--text-dimmer)',
                  letterSpacing: '0.04em',
                }}>{j.period}</p>
              </button>
            ))}
          </div>

          {/* Content */}
          <div key={active} style={{ animation: 'fadeUp 0.35s var(--ease)' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontFamily: 'var(--display)', fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                letterSpacing: '-0.03em', marginBottom: '0.5rem',
              }}>
                {job.role}
                <span style={{ color: 'var(--text-dimmer)', fontWeight: 400 }}> @ </span>
                <span style={{ color: 'var(--amber)' }}>{job.company}</span>
              </h3>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text-dimmer)', letterSpacing: '0.06em' }}>
                {job.period} · {job.location}
              </p>
            </div>

            <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
              {job.bullets.map((b, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '1rem', marginBottom: '1rem',
                  padding: '1rem 1.25rem',
                  border: '1px solid var(--border)', borderRadius: '2px',
                  fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.8,
                  transition: 'border-color 0.2s',
                }}
                data-hover
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <span style={{ color: 'var(--amber)', flexShrink: 0 }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {job.tags.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.05em',
                  color: 'var(--text-dimmer)', background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  padding: '0.3rem 0.7rem', borderRadius: '2px',
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
