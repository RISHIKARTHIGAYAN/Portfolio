import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        height: 'var(--nav-h)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'rgba(12,12,11,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s var(--ease)',
      }}>
        <div style={{
          maxWidth: 'var(--max)', margin: '0 auto', padding: '0 2rem',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="#hero" style={{
            fontFamily: 'var(--display)', fontWeight: 800, fontSize: '1rem',
            letterSpacing: '-0.03em', color: 'var(--text)',
          }}>
            RK<span style={{ color: 'var(--amber)' }}>.</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="nav-links">
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.06em',
                color: 'var(--text-dim)', transition: 'color 0.2s',
                textTransform: 'lowercase',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
              >{l.label}</a>
            ))}
            <a href="https://github.com/RISHIKARTHIGAYAN" target="_blank" rel="noreferrer"
              style={{
                fontFamily: 'var(--mono)', fontSize: '0.72rem',
                color: 'var(--amber)', border: '1px solid rgba(245,166,35,0.35)',
                padding: '0.4rem 0.9rem', borderRadius: '2px',
                letterSpacing: '0.06em',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--amber-dim)'; e.currentTarget.style.borderColor = 'var(--amber)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(245,166,35,0.35)' }}
            >GitHub ↗</a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)}
            style={{ display: 'none', background: 'none', border: 'none', padding: '4px', color: 'var(--text)' }}
            className="hamburger"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open
                ? <><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" /><line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" /></>
                : <><line x1="4" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" /><line x1="4" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" /></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, bottom: 0,
          background: 'rgba(12,12,11,0.97)', zIndex: 499,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '2rem', gap: '2rem',
          animation: 'fadeIn 0.2s ease',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--display)', fontWeight: 700, fontSize: '2.5rem',
                letterSpacing: '-0.04em', color: 'var(--text)',
                borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem',
              }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}
