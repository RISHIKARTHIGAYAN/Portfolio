import { useReveal } from './useReveal'

const stats = [
  { n: '92.83%', sub: 'BCI accuracy' },
  { n: '97.75%', sub: 'Deepfake detection' },
  { n: '3', sub: 'Publications' },
  { n: '0.117ms', sub: 'Inference latency' },
]

export default function About() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()

  return (
    <section id="about" style={{
      borderTop: '1px solid var(--border)',
      padding: '8rem 0 6rem',
    }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section label */}
        <div ref={r1} className="reveal" style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginBottom: '5rem',
        }}>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.15em',
            color: 'var(--amber)', textTransform: 'uppercase',
          }}>01 — About</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Main content grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '6rem', alignItems: 'start',
        }} className="about-grid">
          <div ref={r2} className="reveal">
            <h2 style={{
              fontFamily: 'var(--display)', fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.04em', lineHeight: 1.05,
              marginBottom: '2rem', color: 'var(--text)',
            }}>
              Building AI<br />
              <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--text-dim)' }}>
                that actually
              </span><br />
              ships.
            </h2>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              I'm a final-year M.Tech AI student at Amrita Vishwa Vidyapeetham, with a research internship at HutLabs where I built a 5-class Motor Imagery BCI system — one of the highest-accuracy implementations on comparable EEG datasets.
            </p>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: '2rem' }}>
              My work spans signal processing, computer vision, and large-scale streaming ML. I've published in Springer and IOP, and my M.Tech thesis on deepfake detection has been accepted at RECCAP 2026.
            </p>

            {/* Education cards */}
            {[
              { deg: 'M.Tech Artificial Intelligence', school: 'Amrita Vishwa Vidyapeetham', year: '2024–2026', grade: '8.11 CGPA' },
              { deg: 'B.Tech Artificial Intelligence', school: 'Amrita Vishwa Vidyapeetham', year: '2020–2024', grade: '8.21 CGPA' },
            ].map((e, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem 1.25rem',
                border: '1px solid var(--border)', borderRadius: '2px',
                marginBottom: '0.5rem',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              data-hover
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'var(--surface)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
              >
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 600, marginBottom: '0.2rem' }}>{e.deg}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-dimmer)' }}>{e.school}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-dimmer)', marginBottom: '0.2rem' }}>{e.year}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--amber)', fontWeight: 500 }}>{e.grade}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div ref={r3} className="reveal">
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1px', background: 'var(--border)',
              border: '1px solid var(--border)', borderRadius: '4px',
              overflow: 'hidden', marginBottom: '2rem',
            }}>
              {stats.map(({ n, sub }) => (
                <div key={sub} style={{
                  background: 'var(--bg2)', padding: '2rem 1.5rem',
                  transition: 'background 0.2s',
                }}
                data-hover
                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
                >
                  <p style={{
                    fontFamily: 'var(--display)', fontWeight: 800,
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    letterSpacing: '-0.04em', color: 'var(--amber)',
                    lineHeight: 1, marginBottom: '0.5rem',
                  }}>{n}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-dimmer)', letterSpacing: '0.06em' }}>{sub.toUpperCase()}</p>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: '↗ LinkedIn', href: 'https://www.linkedin.com/in/rishi-karthigayan-s-44b968215/' },
                { label: '↗ GitHub', href: 'https://github.com/RISHIKARTHIGAYAN' },
                { label: '↗ LeetCode', href: 'https://leetcode.com/u/RISHIKARTHIGAYAN/' },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.9rem 1.25rem',
                    border: '1px solid var(--border)', borderRadius: '2px',
                    fontFamily: 'var(--mono)', fontSize: '0.78rem',
                    color: 'var(--text-dim)', letterSpacing: '0.04em',
                    transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--amber)'; e.currentTarget.style.color = 'var(--amber)'; e.currentTarget.style.background = 'var(--amber-dim)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.background = 'transparent' }}
                >{label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
