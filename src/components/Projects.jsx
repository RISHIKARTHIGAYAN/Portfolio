import { useReveal } from './useReveal'


const projects = [
  {
    num: '01',
    title: 'Enterprise AI Agent',
    type: 'Agentic AI',
    desc: 'Built a local-first enterprise AI agent using LangGraph to route requests across RAG, SQL, and calculator tools. Supports TXT, PDF, and DOCX ingestion, semantic chunking, ChromaDB retrieval, and source-grounded responses. Implemented prompt-injection guardrails, safe AST-based calculations, request-level tracing, and structured logging, achieving 100% accuracy across 18 evaluation cases and passing 37/37 automated tests.',
    tags: ['Python', 'LangGraph', 'LangChain', 'Ollama', 'ChromaDB', 'Sentence Transformers', 'FastAPI', 'SQLite', 'Pytest'],
    color: '#a78bfa',
  },
  {
    num: '02',
    title: 'Deepfake Detection & Localization',
    type: 'Research · M.Tech Project',
    desc: 'Developed a dual-component forensic pipeline on Celeb-DF v2 (6,229 videos, 59 subjects). The enhanced Hybrid CNN-RNN achieved 97.75% accuracy, 1.0000 precision, 0.9874 F1-score, and 0.9997 AUC. FCN-ResNet50 achieved 0.6283 IoU, 0.7653 Dice, and 0.983 temporal consistency for pixel-level localization.',
    tags: ['Python', 'PyTorch', 'EfficientNet', 'CNN-LSTM', 'CNN-RNN', 'U-Net', 'FCN-ResNet50', 'SSIM'],
    color: '#f5a623',
  },
  {
    num: '03',
    title: 'GenAI Resume Intelligence Assistant',
    type: 'Generative AI',
    desc: 'Built a role-aware GenAI Resume Intelligence Assistant using RAG, semantic search, hybrid scoring, and agentic decision workflows for resume-job matching, skill-gap analysis, ATS-oriented resume optimization, and recruiter-style candidate evaluation using open-source LLMs.',
    tags: ['Python', 'LangChain', 'FAISS', 'Sentence Transformers', 'Streamlit', 'Hugging Face Transformers', 'RAG'],
    color: '#10b981',
  },
  {
    num: '04',
    title: 'Motor Imagery BCI System',
    type: 'Research · HutLabs',
    desc: 'Built an end-to-end 5-class Motor Imagery Brain-Computer Interface using Riemannian geometry and SVM across 3,750 EEG trials from 10 subjects and 3 sessions, achieving 92.83% mean cross-validated accuracy and 0.117 ms inference latency. Integrated OpenBCI Cyton with Arduino and achieved 98.23% simulation accuracy.',
    tags: ['Python', 'EEG', 'Riemannian Geometry', 'SVM', 'Signal Processing', 'OpenBCI', 'Arduino'],
    color: '#4ade80',
  },
  {
    num: '05',
    title: 'Real-Time Stock Streaming Analytics Pipeline',
    type: 'Data Engineering · ML',
    desc: 'Architected a fault-tolerant streaming pipeline processing 10,000+ records/sec at sub-second latency using PySpark and Kafka. Integrated Random Forest and Linear Regression for price trend prediction, achieving 82% directional accuracy and maintaining 99.5% uptime over 72-hour runs.',
    tags: ['Python', 'Apache Spark', 'PySpark', 'Kafka', 'MongoDB Atlas', 'Scikit-learn', 'Tableau'],
    color: '#60a5fa',
  },
  {
    num: '06',
    title: 'UPI Fraud Detection System',
    type: 'Applied ML',
    desc: 'Developed an end-to-end fraud detection pipeline for highly imbalanced UPI transaction data, applying preprocessing, feature engineering, SMOTE-based class balancing, threshold tuning, and classification evaluation using precision, recall, F1-score, and confusion matrices. Deployed the detection workflow as a Flask web application.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SMOTE', 'Flask'],
    color: '#f472b6',
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
