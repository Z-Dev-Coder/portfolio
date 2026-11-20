export interface SkillCategory {
  id: string;
  title: string;
  tagline: string;
  iconName: 'server' | 'bot' | 'layout' | 'gitBranch';
  skills: { name: string; note?: string }[];
  principles: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    tagline: 'Reliable API architectures, relational modeling, and business logic',
    iconName: 'server',
    skills: [
      { name: 'Python 3.11+' },
      { name: 'Django 5' },
      { name: 'Django REST Framework' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'SQLite' },
      { name: 'REST API Design' },
      { name: 'JWT & Token Auth' },
      { name: 'WebSockets (Channels)' },
    ],
    principles: [
      'Model validation and database integrity at the ORM layer',
      'Clean separation between serializers, services, and viewsets',
      'Stateless API endpoint contracts with clear HTTP status codes',
    ],
  },
  {
    id: 'ai-engineering',
    title: 'Applied AI Engineering',
    tagline: 'Stateful agentic graphs, vector retrieval, and local inference',
    iconName: 'bot',
    skills: [
      { name: 'LangGraph' },
      { name: 'RAG Pipelines' },
      { name: 'pgvector' },
      { name: 'Ollama (Local LLMs)' },
      { name: 'Groq Cloud APIs' },
      { name: 'Prompt Engineering' },
      { name: 'Faster-Whisper (STT)' },
      { name: 'FFmpeg Automation' },
    ],
    principles: [
      'Deterministic state routing over fragile single-prompt chains',
      'Strict domain grounding with vector retrieval to curb hallucinations',
      'Local model deployment for $0 recurring compute and user privacy',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    tagline: 'Responsive client interfaces, component state, and modern styling',
    iconName: 'layout',
    skills: [
      { name: 'React 18 / 19' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 Semantic' },
      { name: 'CSS3 Grid & Flexbox' },
      { name: 'Vite Build Tooling' },
      { name: 'Mobile-First Design' },
    ],
    principles: [
      'Mobile-first responsive architecture without horizontal overflow',
      'Explicit component contracts and predictable unidirectional data flow',
      'Accessible focus states and high text-contrast standards',
    ],
  },
  {
    id: 'practices',
    title: 'Software Engineering Practice',
    tagline: 'Disciplined SDLC delivery, team collaboration, and documentation',
    iconName: 'gitBranch',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Agile & Scrum' },
      { name: 'Jira Task Tracking' },
      { name: 'Relational Database Design' },
      { name: 'Technical Documentation' },
      { name: 'Debugging & Logging' },
      { name: 'VS Code & CLI Tools' },
    ],
    principles: [
      'Atomic Git commit habits with clear conventional messages',
      'Sprint cadence with structured backlogs and retrospective reviews',
      'Thorough documentation linking user stories to technical deliverables',
    ],
  },
];
