
import { useEffect, useRef } from 'react'

const marqueeItems = [
  'BCI Systems',
  'Deepfake Detection',
  'Computer Vision',
  'Signal Processing',
  'Deep Learning',
  'PyTorch',
  'Real-Time Pipelines',
  'EEG Analysis',
  'Riemannian Geometry',
  'Transformer Models',
  'Full-Stack ML',
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('[data-stagger]')
    if (!els) return

    const timers = []

    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(32px)'

      const timer = setTimeout(() => {
        el.style.transition =
          'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100 + i * 120)

      timers.push(timer)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'calc(var(--nav-h) + 1rem)',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '60%',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(74,222,128,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top label row */}
      <div
        data-stagger
        className="hero-top-row"
        style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            minWidth: 0,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 7,
              height: 7,
              flexShrink: 0,
              borderRadius: '50%',
              background: 'var(--green)',
              boxShadow: '0 0 0 3px rgba(74,222,128,0.2)',
              animation: 'pulse 2s ease infinite',
            }}
          />

          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.72rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.08em',
            }}
          >
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <span
          className="hero-location"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.72rem',
            color: 'var(--text-dimmer)',
            letterSpacing: '0.06em',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          COIMBATORE, INDIA
        </span>
      </div>

      {/* Giant headline */}
      <div
        className="hero-main"
        style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          data-stagger
          style={{
            overflow: 'hidden',
            marginBottom: '0.3rem',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 800,
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              letterSpacing: '-0.05em',
              lineHeight: 0.92,
              color: 'var(--text)',
            }}
          >
            RISHI
          </h1>
        </div>

        {/* Surname: allow italic letterforms to extend naturally */}
        <div
          data-stagger
          style={{
            overflow: 'visible',
            marginBottom: '0.3rem',
          }}
        >
          <h1
            className="hero-surname"
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              paddingBottom: '0.08em',
              color: 'var(--text-dim)',
              overflowWrap: 'normal',
              whiteSpace: 'nowrap',
            }}
          >
            Karthigayan
          </h1>
        </div>

        <div
          data-stagger
          style={{
            overflow: 'visible',
            marginBottom: '2.5rem',
          }}
        >
          <div
            className="hero-title-row"
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 800,
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                letterSpacing: '-0.05em',
                lineHeight: 0.92,
                color: 'var(--text)',
              }}
            >
              S<span style={{ color: 'var(--amber)' }}>.</span>
            </h1>

            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                color: 'var(--amber)',
                border: '1px solid rgba(245,166,35,0.3)',
                padding: '0.35rem 0.8rem',
                borderRadius: '2px',
                alignSelf: 'center',
              }}
            >
              AI / ML ENGINEER
            </span>
          </div>
        </div>

        {/* Info row */}
        <div
          data-stagger
          className="hero-info"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            borderTop: '1px solid var(--border)',
            paddingTop: '2.5rem',
            maxWidth: 700,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.68rem',
                color: 'var(--text-dimmer)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.6rem',
              }}
            >
              Currently
            </p>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text)',
                lineHeight: 1.6,
              }}
            >
              M.Tech AI Graduate · Amrita Vishwa Vidyapeetham
              <br />
              <span style={{ color: 'var(--text-dim)' }}>
                Research: Deepfake Detection &amp; Localization
              </span>
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.68rem',
                color: 'var(--text-dimmer)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.6rem',
              }}
            >
              Background
            </p>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text)',
                lineHeight: 1.6,
              }}
            >
              2 published papers + 1 accepted
              <br />
              <span style={{ color: 'var(--text-dim)' }}>
                Springer · IOP · RECCAP 2026
              </span>
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          data-stagger
          className="hero-cta"
          style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'var(--amber)',
              color: 'var(--bg)',
              padding: '0.8rem 1.8rem',
              borderRadius: '2px',
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
          >
            View Work ↓
          </a>

          <a
            href="mailto:rishikarthigayan@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              padding: '0.8rem 1.8rem',
              borderRadius: '2px',
              fontFamily: 'var(--display)',
              fontWeight: 600,
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.background = 'var(--surface)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Marquee ticker */}
      <div
        data-stagger
        className="hero-marquee"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid var(--border)',
          overflow: 'hidden',
          padding: '0.9rem 0',
          background: 'var(--bg)',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'marquee 28s linear infinite',
            gap: 0,
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                color: 'var(--text-dimmer)',
                whiteSpace: 'nowrap',
                padding: '0 2.5rem',
                borderRight: '1px solid var(--border)',
              }}
            >
              {i % 2 === 0 ? (
                <span
                  style={{
                    color: 'var(--amber)',
                    marginRight: '0.5rem',
                  }}
                >
                  ✦
                </span>
              ) : null}
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 700px) {
          .hero-info {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .hero-top-row {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }

          .hero-main {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }

          .hero-top-row {
            margin-bottom: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-top-row {
            align-items: flex-start !important;
            flex-wrap: wrap !important;
            row-gap: 0.75rem !important;
          }

          .hero-top-row > div {
            flex: 1 1 100%;
          }

          .hero-location {
            margin-left: 1.3rem;
          }

          .hero-surname {
            font-size: clamp(2.8rem, 11vw, 3.5rem) !important;
          }

          .hero-title-row {
            gap: 0.8rem !important;
          }

          .hero-title-row > span {
            font-size: 0.68rem !important;
          }

          .hero-cta {
            gap: 0.75rem !important;
          }

          .hero-cta a {
            padding: 0.75rem 1rem !important;
          }
        }

        @media (max-height: 800px) and (min-width: 701px) {
          #hero {
            justify-content: flex-start !important;
            padding-top: calc(var(--nav-h) + 2rem) !important;
            padding-bottom: 5rem !important;
          }

          .hero-top-row {
            margin-bottom: 1.5rem !important;
          }

          .hero-info {
            padding-top: 1.5rem !important;
          }

          .hero-cta {
            margin-top: 1.5rem !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-marquee > div {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
