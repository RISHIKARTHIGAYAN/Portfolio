
import { useReveal } from './useReveal'

const groups = [
  {
    label: 'Languages',
    items: [
      'Python',
      'Java',
      'C++',
      'SQL',
      'JavaScript',
      'Scala',
      'HTML/CSS',
      'Dart',
    ],
  },
  {
    label: 'AI / ML',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'NLP',
      'CNN',
      'RNN',
      'LSTM',
      'Transformers',
      'Reinforcement Learning',
      'Signal Processing',
    ],
  },
  {
    label: 'Generative AI',
    items: [
      'LLMs',
      'Generative AI',
      'Prompt Engineering',
      'RAG',
      'Embeddings',
      'LangChain',
      'LangGraph',
      'LLM Evaluation',
      'AI Guardrails',
      'Agentic AI',
      'Hugging Face Transformers',
    ],
  },
  {
    label: 'Frameworks',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'ReactJS',
      'Flask',
      'FastAPI',
      'OpenCV',
      'PySpark',
      'REST APIs',
    ],
  },
  {
    label: 'Databases',
    items: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'MongoDB Atlas',
      'FAISS',
      'ChromaDB',
      'Vector Databases',
    ],
  },
  {
    label: 'Data & Viz',
    items: [
      'Pandas',
      'NumPy',
      'Apache Spark',
      'Tableau',
      'Power BI',
      'Matplotlib',
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'Jupyter',
      'Google Colab',
      'AWS (Basics)',
      'Linux',
      'VS Code',
      'Docker',
      'Ollama',
      'Bash / Shell Scripting',
    ],
  },
  {
    label: 'CS Fundamentals',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Software Testing',
      'Debugging',
    ],
  },
  {
    label: 'Design & Dev',
    items: [
      'Blender',
      '3D Modelling',
      'Texturing',
      'Rendering',
      'Animation',
      'Flutter',
    ],
  },
]

export default function Skills() {
  const label = useReveal()

  return (
    <section
      id="skills"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '8rem 0',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max)',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        {/* Section heading */}
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
            05 — Skills
          </span>

          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'var(--border)',
            }}
          />
        </div>

        {/* Skill categories */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          {groups.map((g, i) => (
            <SkillRow
              key={g.label}
              g={g}
              last={i === groups.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Responsive layout for mobile */}
      <style>{`
        @media (max-width: 560px) {
          .skill-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  )
}

function SkillRow({ g, last }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="skill-row reveal"
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 1fr',
        gap: '2rem',
        alignItems: 'center',
        padding: '1.5rem 0',
        borderTop: '1px solid var(--border)',
        borderBottom: last ? '1px solid var(--border)' : 'none',
      }}
    >
      {/* Category label */}
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-dimmer)',
          margin: 0,
        }}
      >
        {g.label}
      </p>

      {/* Skill tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        {g.items.map((item) => (
          <span
            key={item}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '0.35rem 0.8rem',
              borderRadius: '2px',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            data-hover
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--amber)'
              e.currentTarget.style.color = 'var(--amber)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-dim)'
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
