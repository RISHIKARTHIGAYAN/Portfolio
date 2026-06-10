import { useReveal } from './useReveal'

const projects = [
  {
    num: '01',
    title: 'Deepfake Detection & Localization',
    type: 'Research · M.Tech Thesis',
    desc: 'Dual-component forensic pipeline on Celeb-DF v2 (6,229 videos). Enhanced Hybrid CNN-RNN achieved 97.75% accuracy, Precision 1.000, F1 0.9874, AUC 0.9997. FCN-ResNet50 for pixel-level localization: IoU 0.6283, Dice 0.7653. Accepted at RECCAP 2026.',
    tags: ['PyTorch', 'EfficientNet', 'CNN-RNN', 'U-Net', 'FCN-ResNet50', 'SSIM'],
    color: '#f5a623',
  },
  {
    num: '02',
    title: 'Motor Imagery BCI System',
    type: 'Research · HutLabs',
    desc: '5-class Brain-Computer Interface using Riemannian geometry + SVM. 92.83% cross-validated accuracy (Kappa 0.911) over 3,750 EEG trials from 10 subjects. 0.117ms inference. 98.23% real-time accuracy via LOSO cross-session evaluation.',
    tags: ['EEG', 'Riemannian Geometry', 'SVM', 'ICA', 'OpenBCI', 'Arduino'],
    color: '#4ade80',
  },
  {
    num: '03',
    title: 'Real-Time Stock Streaming Pipeline',
    type: 'Engineering',
    desc: 'Fault-tolerant streaming pipeline processing 10,000+ records/sec at sub-second latency (PySpark + Kafka). Random Forest + Linear Regression for 82% directional price accuracy. Real-time MongoDB Atlas dashboards, 99.5% uptime over 72h.',
    tags: ['PySpark', 'Kafka', 'MongoDB Atlas', 'Scikit-learn', 'Tableau'],
    color: '#60a5fa',
  },
  {
    num: '04',
    title: 'UPI Fraud Detection System',
    type: 'Engineering',
    desc: 'Ensemble model (RF, SVM, CNN, LSTM, GBM) on 500,000+ imbalanced transactions. 96.3% precision, 94.1% recall. SMOTE + threshold tuning improved recall by 22%. Deployed as Flask web app.',
    tags: ['Scikit-learn', 'CNN', 'LSTM', 'GBM', 'SMOTE', 'Flask'],
    color: '#f472b6',
  },
  {
    num: '05',
    title: 'GenAI Resume Intelligence Assistant',
    type: 'Generative AI',
    desc: 'Built an end-to-end RAG-powered resume intelligence platform leveraging LangChain, FAISS, and open-source LLMs for semantic resume-job matching, ATS scoring, skill-gap analysis, and automated candidate evaluation.',
    tags: ['Python', 'LangChain', 'FAISS', 'RAG', 'Hugging Face'],
    color: '#10b981',
  },
  {
    num: '06',
    title: 'Pancreatic Tumour Classification',
    type: 'Research · Medical AI',
    desc: 'Novel Bayesian U-Net with Monte Carlo Dropout on 400+ 3D CT scans. Unsupervised tumour stage classification without time-consuming manual labelling — enabling rapid clinical analysis.',
    tags: ['PyTorch', 'Bayesian U-Net', 'Monte Carlo Dropout', 'Medical Imaging'],
    color: '#f5a623',
  },
]

export default function Projects() {
  const label = useReveal()

  return (
    <section id="projects" style={{
      borderTop: '1px solid var(--border)', padding: '8rem 0',
    }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 2rem' }}>
        <div ref={label} className="reveal" style={{
          display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem',
        }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--amber)', textTransform: 'uppercase' }}>03 — Projects</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--border)',
          border: '1px solid var(--border)',
        }} className="proj-grid">
          {projects.map((p) => (
            <ProjectCard key={p.num} p={p} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ p }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{
      background: 'var(--bg)', padding: '2rem',
      transition: 'background 0.3s',
      position: 'relative', overflow: 'hidden',
    }}
    data-hover
    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg2)'}
    onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
    >
      {/* Accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: p.color, opacity: 0.6,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.12em',
          color: 'var(--text-dimmer)',
        }}>{p.num}</span>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.05em',
          color: p.color, opacity: 0.8,
        }}>{p.type}</span>
      </div>

      <h3 style={{
        fontFamily: 'var(--display)', fontWeight: 700,
        fontSize: '1.05rem', letterSpacing: '-0.02em',
        lineHeight: 1.25, marginBottom: '0.85rem',
        color: 'var(--text)',
      }}>{p.title}</h3>

      <p style={{
        fontSize: '0.82rem', color: 'var(--text-dimmer)', lineHeight: 1.8,
        marginBottom: '1.5rem',
      }}>{p.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {p.tags.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.04em',
            color: 'var(--text-dimmer)', background: 'var(--surface)',
            border: '1px solid var(--border)',
            padding: '0.22rem 0.55rem', borderRadius: '2px',
          }}>{t}</span>
        ))}
      </div>
    </div>
  )
}
