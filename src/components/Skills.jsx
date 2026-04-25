import { useReveal } from './useReveal'

const groups = [
  { label: 'Languages', items: ['Python', 'Java', 'C++', 'SQL', 'JavaScript', 'Scala', 'HTML/CSS'] },
  { label: 'AI / ML', items: ['CNN', 'LSTM', 'RNN', 'Transformers', 'Computer Vision', 'Signal Processing', 'Deep Learning', 'RL'] },
  { label: 'Frameworks', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'ReactJS', 'Flask', 'OpenCV', 'PySpark'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'MongoDB Atlas'] },
  { label: 'Data & Viz', items: ['Pandas', 'NumPy', 'Tableau', 'Power BI', 'Matplotlib', 'Apache Spark'] },
  { label: 'Tools & Platforms', items: ['Git', 'GitHub', 'Jupyter', 'Google Colab', 'AWS', 'Linux', 'VS Code'] },
]

export default function Skills() {
  const label = useReveal()

  return (
    <section id="skills" style={{
      borderTop: '1px solid var(--border)', padding: '8rem 0',
    }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 2rem' }}>
        <div ref={label} className="reveal" style={{
          display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem',
        }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--amber)', textTransform: 'uppercase' }}>05 — Skills</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {groups.map((g, i) => <SkillRow key={g.label} g={g} i={i} last={i === groups.length - 1} />)}
        </div>
      </div>
    </section>
  )
}

function SkillRow({ g, i, last }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{
      display: 'grid', gridTemplateColumns: '160px 1fr',
      gap: '2rem', alignItems: 'center',
      padding: '1.5rem 0',
      borderTop: '1px solid var(--border)',
      borderBottom: last ? '1px solid var(--border)' : 'none',
    }} className="skill-row reveal">
      <p style={{
        fontFamily: 'var(--mono)', fontSize: '0.68rem',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'var(--text-dimmer)',
      }}>{g.label}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {g.items.map(item => (
          <span key={item} style={{
            fontFamily: 'var(--mono)', fontSize: '0.75rem',
            color: 'var(--text-dim)',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            padding: '0.35rem 0.8rem', borderRadius: '2px',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          data-hover
          onMouseEnter={e => { e.target.style.borderColor = 'var(--amber)'; e.target.style.color = 'var(--amber)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-dim)' }}
          >{item}</span>
        ))}
      </div>
      <style>{`
        @media (max-width: 560px) {
          .skill-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
        }
      `}</style>
    </div>
  )
}
