import { useEffect, useRef } from 'react'

const marqueeItems = [
  'BCI Systems', 'Deepfake Detection', 'Computer Vision', 'Signal Processing',
  'Deep Learning', 'PyTorch', 'Real-Time Pipelines', 'EEG Analysis',
  'Riemannian Geometry', 'Transformer Models', 'Full-Stack ML',
]

export default function Hero() {
  const containerRef = useRef()

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('[data-stagger]')
    if (!els) return
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(32px)'
      setTimeout(() => {
        el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)`
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100 + i * 120)
    })
  }, [])

  return (
    <section id="hero" ref={containerRef} style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', paddingTop: 'var(--nav-h)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '60%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', transform: 'translate(-50%, -50%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(74,222,128,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top label row */}
      <div data-stagger style={{
        maxWidth: 'var(--max)', margin: '0 auto', padding: '0 2rem',
        width: '100%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '3rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
            background: 'var(--green)',
            boxShadow: '0 0 0 3px rgba(74,222,128,0.2)',
            animation: 'pulse 2s ease infinite',
          }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
            OPEN TO OPPORTUNITIES
          </span>
        </div>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text-dimmer)', letterSpacing: '0.06em' }}>
          COIMBATORE, INDIA
        </span>
      </div>

      {/* Giant headline */}
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div data-stagger style={{ overflow: 'hidden', marginBottom: '0.3rem' }}>
          <h1 style={{
            fontFamily: 'var(--display)', fontWeight: 800,
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            letterSpacing: '-0.05em', lineHeight: 0.92,
            color: 'var(--text)',
          }}>RISHI</h1>
        </div>
        <div data-stagger style={{ overflow: 'hidden', marginBottom: '0.3rem' }}>
          <h1 style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            letterSpacing: '-0.03em', lineHeight: 0.92,
            color: 'var(--text-dim)',
          }}>Karthigayan</h1>
        </div>
        <div data-stagger style={{ overflow: 'hidden', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flexWrap: 'wrap' }}>
            <h1 style={{
              fontFamily: 'var(--display)', fontWeight: 800,
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              letterSpacing: '-0.05em', lineHeight: 0.92,
              color: 'var(--text)',
            }}>S<span style={{ color: 'var(--amber)' }}>.</span></h1>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '0.78rem', letterSpacing: '0.1em',
              color: 'var(--amber)', border: '1px solid rgba(245,166,35,0.3)',
              padding: '0.35rem 0.8rem', borderRadius: '2px',
              alignSelf: 'center',
            }}>AI / ML ENGINEER</span>
          </div>
        </div>

        {/* Info row */}
        <div data-stagger style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem',
          borderTop: '1px solid var(--border)', paddingTop: '2.5rem',
          maxWidth: 700,
        }} className="hero-info">
          <div>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--text-dimmer)',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem',
            }}>Currently</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6 }}>
              M.Tech AI @ Amrita Vishwa Vidyapeetham<br />
              <span style={{ color: 'var(--text-dim)' }}>Research: Deepfake Detection & Localization</span>
            </p>
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--text-dimmer)',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem',
            }}>Background</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6 }}>
              3 peer-reviewed publications<br />
              <span style={{ color: 'var(--text-dim)' }}>Springer · IOP · IEEE conferences</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div data-stagger style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'var(--amber)', color: 'var(--bg)',
            padding: '0.8rem 1.8rem', borderRadius: '2px',
            fontFamily: 'var(--display)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.04em',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >View Work ↓</a>
          <a href="mailto:rishikarthigayan@gmail.com" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            border: '1px solid var(--border)', color: 'var(--text)',
            padding: '0.8rem 1.8rem', borderRadius: '2px',
            fontFamily: 'var(--display)', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.04em',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'var(--surface)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
          >Get in touch</a>
        </div>
      </div>

      {/* Marquee ticker */}
      <div data-stagger style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        borderTop: '1px solid var(--border)',
        overflow: 'hidden', padding: '0.9rem 0',
        background: 'var(--bg)',
      }}>
        <div style={{
          display: 'flex', width: 'max-content',
          animation: 'marquee 28s linear infinite',
          gap: '0',
        }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.1em',
              color: 'var(--text-dimmer)', whiteSpace: 'nowrap',
              padding: '0 2.5rem',
              borderRight: '1px solid var(--border)',
            }}>
              {i % 2 === 0
                ? <span style={{ color: 'var(--amber)', marginRight: '0.5rem' }}>✦</span>
                : null
              }
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .hero-info { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
