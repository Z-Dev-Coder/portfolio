export type Project = {
  id: string;
  title: string;
  category: 'ai' | 'backend' | 'frontend';
  badge: string;
  badgeColor: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  accent: string;
};

export const PROJECTS: Project[] = [
export type Project = {
  id: string;
  title: string;
  category: 'ai' | 'backend' | 'frontend';
  badge: string;
  badgeColor: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'recap-studio',
    title: 'Recap Studio — AI Video & Narration Suite',
    category: 'ai',
    badge: 'Flagship AI Suite',
    badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    subtitle: 'Automated Video Summarization, Bilingual Scripting & Voice Cloning Suite',
    description: 'Production‑grade desktop multimedia automation platform converting raw video into comprehensive social media posting kits: automated Whisper transcription, Gemini LLM bilingual script generation (English & Burmese), intelligent FFmpeg highlight cuts, and zero‑cost VoxCPM2 neural voice cloning.',
    highlights: [
      'Electron.js frontend + FastAPI microservice architecture',
      'Faster‑Whisper STT + Gemini bilingual script generation',
      'Automated FFmpeg pipeline for slicing & subtitles',
      'Self‑hosted VoxCPM2 voice cloning (CUDA‑accelerated)',
    ],
    tags: ['Python 3.12','Electron.js','FastAPI','Gemini AI','Whisper','VoxCPM2','FFmpeg','PyTorch'],
    githubUrl: 'https://github.com/Z-Dev-Coder/recap-studio',
    accent: 'from-purple-500/30 via-pink-500/20 to-transparent',
  },
  {
    id: 'jumpstart',
    title: 'JumpStart AI Support Chatbot',
    category: 'ai',
    badge: 'HDSE Capstone Project',
    badgeColor: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    subtitle: 'Autonomous LangGraph & RAG Customer Support System',
    description: 'Enterprise‑grade multi‑agent support platform utilizing LangGraph state‑machine graphs for dynamic workflow routing, RAG with pgvector embeddings for domain knowledge retrieval, and real‑time WebSocket human‑agent handover.',
    highlights: [
      'LangGraph orchestration with persisted state',
      'pgvector semantic search',
      'Confidence‑threshold escalation to human agents',
      'Django Channels WebSockets for bidirectional chat',
    ],
    tags: ['Python','Django','LangGraph','pgvector','WebSockets','PostgreSQL'],
    githubUrl: 'https://github.com/Z-Dev-Coder/JumpStart-AI-Supported-Chatbot',
    accent: 'from-blue-500/30 via-indigo-500/20 to-transparent',
  },
  {
    id: 'english-coach',
    title: 'English Coach AI EdTech Platform',
    category: 'ai',
    badge: 'AI Language Learning',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    subtitle: 'Adaptive CEFR‑Aligned Language Learning with Local LLMs',
    description: 'Adaptive educational app evaluating learners across an 8‑skill CEFR matrix. Uses local Ollama LLM inference for instant grammar correction and personalized practice at zero cloud cost.',
    highlights: [
      '8‑skill CEFR diagnostic matrix & level tracking',
      'Self‑hosted Ollama for $0 inference',
      'Real‑time grammar correction & feedback loops',
      'REST API linking React frontend with Django backend',
    ],
    tags: ['React','Django REST','Ollama','Local LLMs','Tailwind CSS','Python'],
    githubUrl: 'https://github.com/Z-Dev-Coder/english-coach',
    accent: 'from-emerald-500/30 via-teal-500/20 to-transparent',
  },
  // Additional projects (shorter cards)
  {
    id: 'merrymeal',
    title: 'MerryMeal Charitable Logistics Platform',
    category: 'backend',
    badge: 'Agile Team Capstone',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    subtitle: 'Meals‑on‑Wheels Management with Role‑Based Access & GIS',
    description: 'Full‑stack charity logistics web app built by a 5‑member Agile Scrum team. Handles donor registrations, kitchen workflows, and volunteer delivery dispatch.',
    highlights: [
      'Scrum sprint cycles with Jira tracking',
      'RBAC (admin, kitchen, donor, volunteer)',
      'GIS‑based 10 km delivery feasibility validation',
      'Dynamic hot‑meal vs frozen‑package distribution',
    ],
    tags: ['Django','Python','GIS Logistics','RBAC','Scrum','SQLite'],
    githubUrl: 'https://github.com/Z-Dev-Coder/MerryMeal',
    accent: 'from-amber-500/30 via-orange-500/20 to-transparent',
  },
  {
    id: 'dobu-martial-arts',
    title: 'DoBu Martial Arts Academy Portal',
    category: 'frontend',
    badge: 'Live Production Demo',
    badgeColor: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    subtitle: 'Responsive Multi‑Page Academy Site with Fee Calculator',
    description: 'Responsive web portal for a martial‑arts academy. Includes timetable viewer and interactive membership‑fee calculator.',
    highlights: [
      'Tiered fee calculation engine',
      'Filterable timetable viewer',
      'Mobile‑first architecture on GitHub Pages',
      'Zero external framework dependencies',
    ],
    tags: ['JavaScript','HTML5','CSS3','Responsive Design','GitHub Pages'],
    githubUrl: 'https://github.com/Z-Dev-Coder/DoBuMartialArts',
    liveUrl: 'https://z-dev-coder.github.io/DoBuMartialArts/',
    accent: 'from-rose-500/30 via-red-500/20 to-transparent',
  },
  {
    id: 'silent-library',
    title: 'Silent Library Management System',
    category: 'backend',
    badge: 'Academic Enterprise LMS',
    badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    subtitle: 'Django‑Powered Circulation & Catalog Management',
    description: 'Robust library information system with catalog search, borrow/return lifecycle, automated fine calculation, and email notifications.',
    highlights: [
      'Full circulation lifecycle tracking',
      'Role‑based dashboards (librarian vs patron)',
      'SMTP email alerts for reservations',
      'Strict relational integrity and filtering',
    ],
    tags: ['Django','Python','SQLite','SMTP','Bootstrap 5'],
    githubUrl: 'https://github.com/Z-Dev-Coder/silentlibrary',
    accent: 'from-cyan-500/30 via-blue-500/20 to-transparent',
  },
  {
    id: 'math-quiz',
    title: 'Math Quiz Educational Mobile App',
    category: 'frontend',
    badge: 'BTEC Unit 7 MAD',
    badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    subtitle: 'Native Android Mental Arithmetic Practice Game',
    description: 'Android app built with Java. Features progressive difficulty tiers, countdown timers, random arithmetic generation, and offline score persistence.',
    highlights: [
      'Java OOP architecture with Android SDK',
      'Three timed difficulty tiers',
      'SQLite persistence for high scores',
      'Audio‑visual feedback for correct/incorrect answers',
    ],
    tags: ['Android Studio','Java','SQLite','Mobile Architecture','BTEC Unit 7'],
    githubUrl: 'https://github.com/Z-Dev-Coder/Math-Quiz-Mobile-App',
    accent: 'from-purple-500/30 via-violet-500/20 to-transparent',
  },
];
