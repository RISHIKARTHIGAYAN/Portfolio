import { useReveal } from './useReveal'

const projects = [
  {
    num: '01',
    title: 'Deepfake Detection & Localization',
    type: 'Research · M.Tech Thesis',
    desc: 'Dual-component forensic pipeline on Celeb-DF v2 (6,229 videos). Enhanced Hybrid CNN-RNN achieved 97.75% accuracy, Precision 1.000, F1 0.9874, AUC 0.9997. FCN-ResNet50 achieved IoU 0.6283 and Dice 0.7653 for pixel-level localization.',
    tags: ['PyTorch', 'EfficientNet', 'CNN-RNN', 'U-Net', 'FCN-ResNet50', 'SSIM'],
    color: '#f5a623',
  },
  {
    num: '02',
    title: 'Motor Imagery BCI System',
    type: 'Research · HutLabs',
    desc: 'Developed a 5-class Brain-Computer Interface using Riemannian Geometry and SVM, achieving 92.83% cross-validated accuracy across 3,750 EEG trials with 0.117 ms inference latency.',
    tags: ['EEG', 'Riemannian Geometry', 'SVM', 'ICA', 'OpenBCI', 'Arduino'],
    color: '#4ade80',
  },
  {
    num: '03',
    title: 'GenAI Resume Intelligence Assistant',
    type: 'Generative AI',
    desc: 'Built an end-to-end RAG-powered resume intelligence platform leveraging LangChain, FAISS, and open-source LLMs for semantic resume-job matching, ATS scoring, skill-gap analysis, and automated candidate evaluation.',
    tags: ['Python', 'LangChain', 'FAISS', 'RAG', 'Hugging Face'],
    color: '#10b981',
  },
  {
    num: '04',
    title: 'Real-Time Stock Streaming Pipeline',
    type: 'Engineering',
    desc: 'Architected a fault-tolerant streaming analytics pipeline processing 10,000+ records/sec using PySpark and Kafka, achieving sub-second latency and 82% directional stock trend prediction accuracy.',
    tags: ['PySpark', 'Kafka', 'MongoDB Atlas', 'Scikit-learn', 'Tableau'],
    color: '#60a5fa',
  },
  {
    num: '05',
    title: 'UPI Fraud Detection System',
    type: 'Engineering',
    desc: 'Built an ensemble fraud detection framework combining RF, SVM, CNN, LSTM, and GBM models, achieving 96.3% precision and 94.1% recall on 500,000+ transactions.',
    tags: ['Scikit-learn', 'CNN', 'LSTM', 'GBM', 'SMOTE', 'Flask'],
    color: '#f472b6',
  },
  {
    num: '06',
    title: 'Pancreatic Tumour Classification',
    type: 'Research · Medical AI',
    desc: 'Designed a Bayesian U-Net based framework with Monte Carlo Dropout for unsupervised pancreatic tumour stage classification on 400+ CT scans.',
    tags: ['PyTorch', 'Bayesian U-Net', 'Monte Carlo Dropout', 'Medical Imaging'],
    color: '#f87171',
  },
]

export default function Projects() {
  const label = useReveal()

  return (
    <section
      id="projects"
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
            03 — Projects
          </span>

          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'var(--border)',
            }}
          />
        </div>

        <div
          className="proj-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.num} p={p} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 540px) {
          .proj-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ p }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: 'var(--bg)',
        padding: '2rem',
        transition: 'background 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg)')}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: p.color,
          opacity: 0.6,
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1.25rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: 'var(--text-dimmer)',
          }}
        >
          {p.num}
        </span>

        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.05em',
            color: p.color,
            opacity: 0.8,
          }}
        >
          {p.type}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 700,
          fontSize: '1.05rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
          marginBottom: '0.85rem',
        }}
      >
        {p.title}
      </h3>

      <p
        style={{
          fontSize: '0.82rem',
          color: 'var(--text-dimmer)',
          lineHeight: 1.8,
          marginBottom: '1.5rem',
        }}
      >
        {p.desc}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.35rem',
        }}
      >
        {p.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.04em',
              color: 'var(--text-dimmer)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '0.22rem 0.55rem',
              borderRadius: '2px',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
