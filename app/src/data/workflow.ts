export interface WorkflowStepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  focusArea: string;
  visualType: 'problem' | 'architecture' | 'backend' | 'ai' | 'testing' | 'delivery';
  keyChecks: string[];
}

export const WORKFLOW_STEPS: WorkflowStepItem[] = [
  {
    id: 'step-1',
    stepNumber: '01',
    title: 'Understand the Problem',
    description:
      'Start by clarifying user friction, edge cases, core inputs, and explicit success criteria before writing any code.',
    focusArea: 'Requirement Scoping & Constraint Analysis',
    visualType: 'problem',
    keyChecks: [
      'Identify target user pain points and operational bottlenecks',
      'Define clear input/output expectations and data contracts',
      'Establish technical constraints (privacy, latency, cloud budget)',
    ],
  },
  {
    id: 'step-2',
    stepNumber: '02',
    title: 'Plan the Architecture',
    description:
      'Organize system boundaries, database schemas, component hierarchies, and API endpoints before writing implementation code.',
    focusArea: 'System Schemas & Service Boundaries',
    visualType: 'architecture',
    keyChecks: [
      'Design relational schemas (PostgreSQL / SQLite) with strict constraints',
      'Map REST API endpoint contracts and HTTP status semantics',
      'Isolate heavy processing (multimedia, vector indexing) into async services',
    ],
  },
  {
    id: 'step-3',
    stepNumber: '03',
    title: 'Build the Backend Core',
    description:
      'Develop backend services using Python, Django, or FastAPI with robust serialization, transactional integrity, and clean service logic.',
    focusArea: 'Data Models, Serializers & APIs',
    visualType: 'backend',
    keyChecks: [
      'Implement ORM models, validation routines, and migrations',
      'Construct secure endpoints with token authentication & role checks',
      'Stream real-time updates via WebSockets where latency matters',
    ],
  },
  {
    id: 'step-4',
    stepNumber: '04',
    title: 'Integrate Applied AI',
    description:
      'Incorporate LLM workflows, RAG knowledge retrieval, or local models where they genuinely automate complex manual tasks.',
    focusArea: 'LangGraph, pgvector RAG & Local LLMs',
    visualType: 'ai',
    keyChecks: [
      'Construct deterministic LangGraph state graphs with tool calling',
      'Ground outputs in pgvector embeddings to prevent hallucinations',
      'Leverage local Ollama / Faster-Whisper models for $0 compute cost',
    ],
  },
  {
    id: 'step-5',
    stepNumber: '05',
    title: 'Test and Refine',
    description:
      'Verify application behavior against real-world inputs, debug corner cases, profile performance bottlenecks, and refine error handling.',
    focusArea: 'Validation, Exception Handling & Profiling',
    visualType: 'testing',
    keyChecks: [
      'Validate JSON schemas and handle unexpected user payloads cleanly',
      'Simulate failure states, network timeouts, and model fallbacks',
      'Refine UI feedback states, loading indicators, and toast alerts',
    ],
  },
  {
    id: 'step-6',
    stepNumber: '06',
    title: 'Deliver and Document',
    description:
      'Package the application for deployment, author clear technical documentation, structure commit logs, and maintain system health.',
    focusArea: 'Git Workflow, Documentation & Deployment',
    visualType: 'delivery',
    keyChecks: [
      'Document architecture diagrams, environment configurations, and APIs',
      'Package for production (Vite build, Dockerless service setup, CI/CD)',
      'Conduct code reviews and maintain clean, atomic Git commit histories',
    ],
  },
];
