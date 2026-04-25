import { useReveal } from './useReveal'

const pubs = [
  {
    year: '2026',
    status: 'Accepted',
    title: 'DeepFake Detection and Localization for Video Content',
    venue: 'RECCAP 2026 — International Conference on Recent Trends in Computing, Communication and Applied Physics',
    doi: null,
    highlight: true,
  },
  {
    year: '2024',
    status: 'Published',
    title: 'Video Anomaly Detection using Liquid Neural Networks',
    venue: 'ICICCT 2024 (8th International Conference) — Springer',
    doi: 'https://doi.org/10.1007/978-981-97-7710-5_13',
    highlight: false,
  },
  {
    year: '2022',
    status: 'Published',
    title: 'Steepest Descent vs Non-Linear Conjugate Gradient for Binding Energy Minimization of Organic Molecules',
    venue: 'Journal of Physics: Conference Series, Vol. 2484 — ICMMT 2022, Indore (IOP Publishing)',
    doi: 'https://iopscience.iop.org/article/10.1088/1742-6596/2484/1/012004',
    highlight: false,
  },
]

export default function Publications() {
  const label = useReveal()

  return (
    <section
      id="publications"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '8rem 0',
        background: 'var(--bg2)',
      }}
    >
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 2rem' }}>
        <div
          ref={label}
          className="reveal"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              color: 'var(--amber)',
              textTransform: 'uppercase',
            }}
          >
            04 — Publications
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {pubs.map((p, i) => (
          <PubRow key={i} p={p} i={i} last={i === pubs.length - 1} />
        ))}
      </div>
    </section>
  )
}

function PubRow({ p, i, last }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto',
        gap: '2.5rem',
        alignItems: 'start',
        padding: '2rem 0',
        borderTop: '1px solid var(--border)',
        borderBottom: last ? '1px solid var(--border)' : 'none',
        transition: 'background 0.2s',
      }}
      data-hover
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = 'rgba(255,255,255,0.015)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = 'transparent')
      }
      className="pub-row reveal"
    >
      {/* Left: Year + Status */}
      <div>
        <p
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 800,
            fontSize: '2rem',
            letterSpacing: '-0.05em',
            color: p.highlight ? 'var(--amber)' : 'var(--text-dimmer)',
            lineHeight: 1,
          }}
        >
          {p.year}
        </p>
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            color: p.highlight
              ? 'rgba(245,166,35,0.6)'
              : 'var(--text-dimmer)',
            letterSpacing: '0.08em',
            marginTop: '0.3rem',
          }}
        >
          {p.status.toUpperCase()}
        </p>
      </div>

      {/* Middle: Title + Venue */}
      <div>
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 600,
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.35,
            color: p.highlight ? 'var(--text)' : 'var(--text-dim)',
            marginBottom: '0.5rem',
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.7rem',
            color: 'var(--text-dimmer)',
            lineHeight: 1.6,
          }}
        >
          {p.venue}
        </p>
      </div>

      {/* Right: DOI / Status */}
      <div style={{ paddingTop: '0.2rem' }}>
        {p.doi ? (
          <a
            href={p.doi}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.05em',
              color: 'var(--amber)',
              border: '1px solid rgba(245,166,35,0.25)',
              padding: '0.4rem 0.8rem',
              borderRadius: '2px',
              whiteSpace: 'nowrap',
              display: 'block',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--amber-dim)'
              e.currentTarget.style.borderColor = 'var(--amber)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor =
                'rgba(245,166,35,0.25)'
            }}
          >
            DOI ↗
          </a>
        ) : (
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.05em',
              color: 'var(--green)',
              border: '1px solid rgba(74,222,128,0.2)',
              padding: '0.4rem 0.8rem',
              borderRadius: '2px',
              whiteSpace: 'nowrap',
              display: 'block',
            }}
          >
            Accepted
          </span>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .pub-row {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </div>
  )
}
