import { useReveal } from './useReveal'

const socials = [
  { label: 'Email', handle: 'rishikarthigayan@gmail.com', href: 'mailto:rishikarthigayan@gmail.com' },
  { label: 'Phone', handle: '+91 8825966221', href: 'tel:+918825966221' },
  { label: 'LinkedIn', handle: 'rishi-karthigayan-s', href: 'https://www.linkedin.com/in/rishi-karthigayan-s-44b968215/' },
  { label: 'GitHub', handle: 'RISHIKARTHIGAYAN', href: 'https://github.com/RISHIKARTHIGAYAN' },
  { label: 'LeetCode', handle: 'RISHIKARTHIGAYAN', href: 'https://leetcode.com/u/RISHIKARTHIGAYAN/' },
]

export default function Contact() {
  const label = useReveal()
  const cta = useReveal()
  const links = useReveal()

  return (
    <>
      <section id="contact" style={{
        borderTop: '1px solid var(--border)', padding: '8rem 0 6rem',
        background: 'var(--bg2)',
      }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={label} className="reveal" style={{
            display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem',
          }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--amber)', textTransform: 'uppercase' }}>06 — Contact</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '6rem', alignItems: 'start',
          }} className="contact-grid">
            <div ref={cta} className="reveal">
              <h2 style={{
                fontFamily: 'var(--display)', fontWeight: 800,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                letterSpacing: '-0.05em', lineHeight: 1,
                marginBottom: '1.5rem',
              }}>
                Let's build<br />
                <span style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  color: 'var(--amber)',
                }}>something</span><br />
                together.
              </h2>

              <p style={{
                fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.9,
                maxWidth: 380, marginBottom: '2.5rem',
              }}>
                I'm actively looking for research or engineering roles where I can build AI systems at scale. Got a project, opportunity, or just want to talk signal processing and ML? My inbox is open.
              </p>

              <a href="mailto:rishikarthigayan@gmail.com"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                  background: 'var(--amber)', color: 'var(--bg)',
                  padding: '0.9rem 2rem', borderRadius: '2px',
                  fontFamily: 'var(--display)', fontWeight: 700,
                  fontSize: '0.85rem', letterSpacing: '0.03em',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Say hello ↗
              </a>
            </div>

            <div ref={links} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {socials.map(({ label, handle, href }, i) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.25rem 0',
                    borderBottom: '1px solid var(--border)',
                    borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                    transition: 'color 0.2s',
                    color: 'var(--text-dim)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--amber)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-dim)' }}
                >
                  <div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dimmer)', marginBottom: '0.25rem' }}>{label}</p>
                    <p style={{ fontSize: '0.88rem', color: 'inherit' }}>{handle}</p>
                  </div>
                  <span style={{ fontSize: '1rem', transition: 'transform 0.2s' }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)', padding: '1.5rem 2rem',
        background: 'var(--bg)',
      }}>
        <div style={{
          maxWidth: 'var(--max)', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem',
        }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-dimmer)', letterSpacing: '0.06em' }}>
            RISHI KARTHIGAYAN S © {new Date().getFullYear()}
          </p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-dimmer)', letterSpacing: '0.06em' }}>
            BUILT WITH REACT + VITE
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  )
}
