import { useState } from 'react';
import {
  ExternalLink,
  Mail,
  Copy,
  Check,
  Download,
  FileText,
  Sparkles,
  ArrowRight,
  Server,
  Smartphone,
  GitBranch,
  Bot,
  Zap,
  Globe,
  BookOpen,
  Briefcase,
  ChevronUp,
  Menu,
  X,
  MapPin,
  ChevronRight,
} from 'lucide-react';

// GitHub icon SVG component
function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// Project Data
interface Project {
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
}

const PROJECTS: Project[] = [
  {
    id: 'jumpstart',
    title: 'JumpStart AI Support Chatbot',
    category: 'ai',
    badge: 'HDSE Capstone Project',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    subtitle: 'Autonomous LangGraph & RAG Customer Support System',
    description:
      'Enterprise-grade multi-agent support platform utilizing LangGraph state machine graphs for dynamic workflow routing, RAG with pgvector embeddings for domain knowledge retrieval, and real-time WebSocket human agent handover.',
    highlights: [
      'Multi-agent LangGraph orchestration with state persistence',
      'Contextual semantic search via pgvector vector embeddings',
      'Dynamic confidence threshold triggering real-time human agent escalation',
      'Django Channels WebSockets for instant bidirectional agent-user chat',
    ],
    tags: ['Python', 'Django', 'LangGraph', 'pgvector', 'WebSockets', 'PostgreSQL'],
    githubUrl: 'https://github.com/Z-Dev-Coder/JumpStart-AI-Supported-Chatbot',
    accent: 'from-blue-600/20 via-indigo-600/10 to-transparent',
  },
  {
    id: 'english-coach',
    title: 'English Coach AI EdTech Platform',
    category: 'ai',
    badge: 'AI Language Learning',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    subtitle: 'Adaptive CEFR-Aligned Language Learning with Local LLMs',
    description:
      'Adaptive educational application evaluating learner responses across an 8-skill CEFR matrix. Leverages local Ollama LLM inference to provide instant, personalized grammar correction and customized practice exercises at zero recurring cloud API cost.',
    highlights: [
      'Comprehensive 8-skill CEFR diagnostic matrix & level tracking',
      'Self-hosted Ollama integration delivering $0 cloud inference costs',
      'Real-time automated grammar correction & contextual feedback loops',
      'Modular REST API architecture linking React frontend with Django backend',
    ],
    tags: ['React', 'Django REST', 'Ollama', 'Local LLMs', 'Tailwind CSS', 'Python'],
    githubUrl: 'https://github.com/Z-Dev-Coder/english-coach',
    accent: 'from-emerald-600/20 via-teal-600/10 to-transparent',
  },
  {
    id: 'merrymeal',
    title: 'MerryMeal Charitable Logistics Platform',
    category: 'backend',
    badge: 'Agile Team Capstone',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    subtitle: 'Meals on Wheels Management with Role-Based Access & GIS',
    description:
      'Full-stack charity logistics web application delivered by a 5-member Agile Scrum team (Tech Titans). Coordinates member registrations, donor contributions, kitchen meal preparation workflows, and volunteer delivery dispatching.',
    highlights: [
      'Delivered through 3 structured Scrum sprint cycles with Jira tracking',
      'Granular Role-Based Access Control (Admin, Kitchen, Donor, Volunteer)',
      'Automated 10km GIS geofenced delivery feasibility validation',
      'Dynamic hot-meal vs frozen-package distribution logistics',
    ],
    tags: ['Django', 'Python', 'GIS Logistics', 'RBAC', 'Scrum / Agile', 'SQLite'],
    githubUrl: 'https://github.com/Z-Dev-Coder/MerryMeal',
    accent: 'from-amber-600/20 via-orange-600/10 to-transparent',
  },
  {
    id: 'dobu-martial-arts',
    title: 'DoBu Martial Arts Academy Portal',
    category: 'frontend',
    badge: 'Live Production Demo',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    subtitle: 'Responsive Multi-Page Academy Site with Fee Calculator',
    description:
      'Modern, high-performance responsive web portal for a martial arts fitness academy. Built with semantic HTML5, modern CSS3 styling, and client-side JavaScript for dynamic training schedules and an interactive membership calculator.',
    highlights: [
      'Interactive tiered membership fee calculation engine with add-on options',
      'Dynamic timetable schedule viewer with filterable martial arts disciplines',
      'Fully responsive mobile-first architecture deployed on GitHub Pages',
      '100% semantic structure with zero external framework dependencies',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages', 'Responsive Design'],
    githubUrl: 'https://github.com/Z-Dev-Coder/DoBuMartialArts',
    liveUrl: 'https://z-dev-coder.github.io/DoBuMartialArts/',
    accent: 'from-rose-600/20 via-red-600/10 to-transparent',
  },
  {
    id: 'silent-library',
    title: 'Silent Library Management System',
    category: 'backend',
    badge: 'Academic Enterprise LMS',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    subtitle: 'Django-Powered Circulation & Catalog Management',
    description:
      'Robust library information system featuring catalog search, borrow/return lifecycle tracking, automatic fine calculation for overdue titles, reader book reviews, and automated email reminder notifications.',
    highlights: [
      'Complete circulation lifecycle tracking with automated fine calculators',
      'Role-based dashboard for librarians vs student patrons',
      'Integrated SMTP email dispatch for reservation confirmations and alerts',
      'Strict database relational integrity and search filtering',
    ],
    tags: ['Django', 'Python', 'SQLite', 'SMTP Notifications', 'Bootstrap 5'],
    githubUrl: 'https://github.com/Z-Dev-Coder/silentlibrary',
    accent: 'from-cyan-600/20 via-blue-600/10 to-transparent',
  },
  {
    id: 'math-quiz',
    title: 'Math Quiz Educational Mobile App',
    category: 'frontend',
    badge: 'BTEC Unit 7 MAD',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    subtitle: 'Native Android Mental Arithmetic Practice Game',
    description:
      'Native Android mobile application built with Java in Android Studio. Features 3 progressive difficulty tiers (Novice, Adept, Master), real-time countdown timer mechanics, randomized arithmetic generation, and offline score persistence.',
    highlights: [
      'Engineered with Android SDK, XML layout architectures, and Java OOP',
      '3 timed tiers with dynamic countdown timer and visual progress bars',
      'SQLite database persistence storing high scores and game performance analytics',
      'Instant audio-visual feedback and error-handling routines',
    ],
    tags: ['Android Studio', 'Java', 'SQLite', 'Mobile Architecture', 'BTEC Unit 7'],
    githubUrl: 'https://github.com/Z-Dev-Coder/Math-Quiz-Mobile-App',
    accent: 'from-purple-600/20 via-violet-600/10 to-transparent',
  },
];

// Technical Skills Categories
const SKILL_CATEGORIES = [
  {
    title: 'AI & Agentic Systems',
    icon: Bot,
    color: 'text-indigo-400',
    borderColor: 'hover:border-indigo-500/40',
    bgGlow: 'group-hover:bg-indigo-500/10',
    description:
      'Building intelligent multi-agent systems, contextual retrieval pipelines, and private LLM workflows.',
    skills: [
      { name: 'LangGraph', level: 'Advanced' },
      { name: 'RAG Architectures', level: 'Proficient' },
      { name: 'pgvector / Vector DBs', level: 'Proficient' },
      { name: 'Ollama / Local LLMs', level: 'Proficient' },
      { name: 'Prompt Engineering', level: 'Advanced' },
      { name: 'AI-Assisted Dev (VibeCoding)', level: 'Expert' },
    ],
  },
  {
    title: 'Backend Engineering',
    icon: Server,
    color: 'text-blue-400',
    borderColor: 'hover:border-blue-500/40',
    bgGlow: 'group-hover:bg-blue-500/10',
    description:
      'Designing robust RESTful APIs, relational databases, security access controls, and real-time sockets.',
    skills: [
      { name: 'Python 3.12', level: 'Advanced' },
      { name: 'Django & DRF', level: 'Advanced' },
      { name: 'PostgreSQL & SQLite', level: 'Proficient' },
      { name: 'Django Channels (WebSockets)', level: 'Intermediate' },
      { name: 'RBAC & Auth Systems', level: 'Advanced' },
      { name: 'FastAPI Fundamentals', level: 'Intermediate' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    icon: Smartphone,
    color: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/40',
    bgGlow: 'group-hover:bg-emerald-500/10',
    description:
      'Crafting clean, interactive user interfaces with modern component design and native mobile layouts.',
    skills: [
      { name: 'React 19 & Vite', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'TypeScript / JavaScript ES6+', level: 'Proficient' },
      { name: 'Android Java (SDK)', level: 'Intermediate' },
      { name: 'HTML5 Semantic UI & CSS3', level: 'Advanced' },
      { name: 'Responsive Web Design', level: 'Advanced' },
    ],
  },
  {
    title: 'SDLC & Engineering Practice',
    icon: GitBranch,
    color: 'text-amber-400',
    borderColor: 'hover:border-amber-500/40',
    bgGlow: 'group-hover:bg-amber-500/10',
    description:
      'Structured software methodologies, professional version control, and disciplined team delivery.',
    skills: [
      { name: 'Git & GitHub Workflows', level: 'Advanced' },
      { name: 'Agile & Scrum Sprints', level: 'Proficient' },
      { name: 'System Documentation & SDD', level: 'Advanced' },
      { name: 'Unit Testing & Debugging', level: 'Proficient' },
      { name: 'Docker Fundamentals', level: 'Intermediate' },
      { name: 'Jira / Project Tracking', level: 'Proficient' },
    ],
  },
];

export function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'backend' | 'frontend'>('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('zawmyotun.kl@gmail.com');
    setCopiedEmail(true);
    showToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 flex flex-col relative selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-900/95 border border-zinc-700/80 text-white shadow-2xl backdrop-blur-md animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <p className="text-sm font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
        <nav className="glass-panel rounded-full px-5 py-3 flex items-center justify-between shadow-2xl">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-sm font-bold tracking-tight text-white group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-mono text-xs font-black shadow-md group-hover:scale-105 transition-transform">
              Z
            </div>
            <span className="font-semibold text-base tracking-tight">
              Zaw Myo Tun<span className="text-blue-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Background
            </a>
            <a href="#downloads" className="hover:text-white transition-colors">
              Downloads
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="./Zaw_Myo_Tun_Portfolio.pdf"
              download="Zaw_Myo_Tun_Portfolio.pdf"
              onClick={() => showToast('Downloading PDF Resume...')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 text-zinc-200 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              CV (PDF)
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-3 shadow-2xl md:hidden animate-fade-in border border-zinc-800">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              About Me
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Technical Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Featured Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Education & Experience
            </a>
            <a
              href="#downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Download CV / Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Contact Me
            </a>
            <div className="pt-2 border-t border-zinc-800 flex gap-2">
              <a
                href="./Zaw_Myo_Tun_Portfolio.pdf"
                download="Zaw_Myo_Tun_Portfolio.pdf"
                className="flex-1 text-center py-2 rounded-lg text-xs font-semibold bg-zinc-800 text-zinc-200"
              >
                Download PDF
              </a>
              <a
                href="./Zaw_Myo_Tun_Portfolio.docx"
                download="Zaw_Myo_Tun_Portfolio.docx"
                className="flex-1 text-center py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white"
              >
                Download DOCX
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 z-10 pt-28 pb-16">
        {/* HERO SECTION */}
        <section id="hero" className="max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column: Text & CTAs */}
            <div className="flex-1 text-left space-y-6">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Junior Developer & AI Engineering Roles
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Hi, I'm <span className="text-gradient-primary">Zaw Myo Tun</span>.
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-zinc-300">
                  Junior Software Developer & AI Solutions Builder
                </p>
              </div>

              {/* Bio summary */}
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                Graduated with <strong className="text-zinc-200">Merit in Higher National Diploma in Software Engineering</strong> and currently advancing to a <strong className="text-zinc-200">BSc in Computing</strong>. I specialize in building robust backend architectures with <span className="text-blue-400 font-medium">Python & Django</span>, intelligent multi-agent pipelines with <span className="text-indigo-400 font-medium">LangGraph & RAG</span>, and modern interactive web experiences through disciplined <span className="text-emerald-400 font-medium">AI-assisted Agile development (VibeCoding)</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                >
                  Explore My Projects
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="./Zaw_Myo_Tun_Portfolio.pdf"
                  download="Zaw_Myo_Tun_Portfolio.pdf"
                  onClick={() => showToast('Downloading PDF Resume...')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 transition-all hover:border-zinc-500"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  Resume (PDF)
                </a>

                <a
                  href="https://github.com/Z-Dev-Coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/40 hover:bg-zinc-800/60 border border-zinc-800 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>

              {/* Location & Quick Contact tag */}
              <div className="flex flex-wrap items-center gap-5 pt-2 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  Mandalay, Myanmar (Remote & Relocation Friendly)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  zawmyotun.kl@gmail.com
                </span>
              </div>
            </div>

            {/* Right Column: Portrait Card with Glow */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-30 group-hover:opacity-60 blur-xl transition duration-500" />
              <div className="relative rounded-3xl p-3 bg-zinc-900/90 border border-zinc-800/90 shadow-2xl backdrop-blur-xl">
                <div className="w-72 sm:w-80 h-96 rounded-2xl overflow-hidden relative bg-zinc-950">
                  <img
                    src="./zaw_myo_tun.jpg"
                    alt="Zaw Myo Tun portrait"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {/* Bottom glass overlay with quick role title */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-zinc-950/95 via-zinc-950/70 to-transparent flex flex-col justify-end">
                    <p className="text-white font-bold text-base">Zaw Myo Tun</p>
                    <p className="text-xs text-blue-400 font-mono">BSc Computing Candidate · Python Dev</p>
                  </div>
                </div>

                {/* Floating pill badge on photo */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-zinc-700/80 text-xs font-medium text-indigo-300 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  LangGraph & RAG
                </div>

                <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-zinc-700/80 text-xs font-medium text-emerald-300 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  Agile / VibeCoding
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics Counters (lakyar.com inspired) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-zinc-800/80">
            <div className="glass-panel p-5 rounded-2xl border border-zinc-800/80">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">6+</div>
              <div className="text-xs text-zinc-400 mt-1 font-medium">Software & AI Projects</div>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-zinc-800/80">
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400">HND</div>
              <div className="text-xs text-zinc-400 mt-1 font-medium">Software Engineering (Merit)</div>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-zinc-800/80">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">BSc</div>
              <div className="text-xs text-zinc-400 mt-1 font-medium">Computing Candidate</div>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-zinc-800/80">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">100%</div>
              <div className="text-xs text-zinc-400 mt-1 font-medium">Agile Delivery Track Record</div>
            </div>
          </div>
        </section>

        {/* INFINITE MARQUEE TICKER */}
        <section className="py-6 border-y border-zinc-800/70 bg-zinc-950/50 overflow-hidden relative">
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono tracking-wider text-zinc-400 uppercase">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Python 3.12</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Django & DRF</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>LangGraph</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>pgvector RAG</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>React 19 & Vite</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Tailwind CSS</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Ollama Local LLMs</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>WebSockets</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Android Java</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>Agile Scrum</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>VibeCoding</span>
            <span className="text-zinc-600">/</span>

            {/* Duplicate for seamless infinite loop */}
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Python 3.12</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Django & DRF</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>LangGraph</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>pgvector RAG</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>React 19 & Vite</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Tailwind CSS</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Ollama Local LLMs</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>WebSockets</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Android Java</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>Agile Scrum</span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>VibeCoding</span>
            <span className="text-zinc-600">/</span>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
              Profile Overview
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Disciplined Software with an AI Advantage
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              My software engineering journey unites solid academic rigor from the Higher National Diploma in Software Engineering with an ambitious pursuit of cutting-edge AI architectures. Coming from a background in civil engineering and high-volume retail management, I bring a unique discipline in planning, precision, stakeholder communication, and deadline execution to every codebase I touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Backend Fundamentals</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Structured Django model design, ORM optimization, granular role-based access control, relational database schema integrity, and real-time WebSocket communication pipelines.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">AI Agent Architectures</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Practical integration of stateful multi-agent systems via LangGraph, RAG retrieval using PostgreSQL vector embeddings (pgvector), and local Ollama zero-cost model deployment.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Agile & AI-Driven Delivery</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Proven experience in 5-member Agile Scrum teams delivering high-impact sprints, paired with rapid iteration using modern AI developer tooling ("VibeCoding") for 5x delivery velocity.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
          <div className="text-left space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills, Frameworks & Tooling
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              Categorized core competencies gained through academic software coursework, team-based sprint deliverables, and independent AI engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel p-6 sm:p-7 rounded-2xl border border-zinc-800/80 group transition-all duration-300 ${cat.borderColor}`}
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center ${cat.color} ${cat.bgGlow} transition-colors`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{cat.title}</h3>
                      <p className="text-xs text-zinc-400">{cat.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs"
                      >
                        <span className="font-medium text-zinc-200">{skill.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
                Featured Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Engineered Projects & Systems
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                Explore practical applications ranging from multi-agent RAG support bots to Agile charity distribution platforms and native mobile apps.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start md:self-auto overflow-x-auto max-w-full">
              {(
                [
                  { id: 'all', label: 'All Projects' },
                  { id: 'ai', label: 'AI & Agents' },
                  { id: 'backend', label: 'Full Stack' },
                  { id: 'frontend', label: 'Frontend / Mobile' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-zinc-800/90 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle card top gradient accent */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${project.accent}`}
                />

                <div className="space-y-4">
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
                    >
                      {project.badge}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-400 mt-1">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider font-mono">
                      Key Capabilities:
                    </p>
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-zinc-800/80">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-100 transition-all border border-zinc-700/60"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source Code
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/20"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Live Preview
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Education Track */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
                  Academic Milestones
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  Education & Qualifications
                </h3>
              </div>

              <div className="space-y-4">
                {/* Degree 1 */}
                <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 relative pl-6 border-l-4 border-l-blue-500">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-blue-400 font-semibold uppercase">
                      2025 — Present
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      In Progress
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">BSc (Hons) in Computing</h4>
                  <p className="text-xs text-zinc-400">EduCLaaS Academy</p>
                  <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                    Advanced software development curriculum focusing on software architecture, distributed systems, machine learning fundamentals, and enterprise computing systems.
                  </p>
                </div>

                {/* Degree 2 */}
                <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 relative pl-6 border-l-4 border-l-indigo-500">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                      2023 — 2025
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                      Merit Awarded
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">
                    Higher National Diploma in Software Engineering (HDSE)
                  </h4>
                  <p className="text-xs text-zinc-400">EduCLaaS Academy</p>
                  <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                    Intensive coursework in Object-Oriented Programming (Java, Python), Relational Database Management, Web Application Development (Django), Mobile Application Development (Android), Agile Scrum Project Management, and Software Design Documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Engineering & Professional Experience */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                  Transferable Discipline
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-emerald-400" />
                  Professional Background
                </h3>
              </div>

              <div className="space-y-4">
                {/* Role 1 */}
                <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 relative pl-6 border-l-4 border-l-emerald-500">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                      Engineering Coordination
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                      Technical Oversight
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">Site Engineer</h4>
                  <p className="text-xs text-zinc-400">Myat Min Construction</p>
                  <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                    Managed physical engineering blueprint compliance, conducted daily quality assurance checks, and coordinated multi-trade contractor schedules. Instilled strict problem-solving discipline and structural thinking directly transferable to software architecture.
                  </p>
                </div>

                {/* Role 2 */}
                <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 relative pl-6 border-l-4 border-l-amber-500">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                      Client Communication
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                      Stakeholder Relations
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">
                    Senior Sales Executive & Project Lead
                  </h4>
                  <p className="text-xs text-zinc-400">Family Retail Business</p>
                  <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                    Directed customer relationship workflows, resolved client conflict with high emotional intelligence, and tracked inventory turnover. Developed empathy for end-user requirements and practical business value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOAD RESUME & PORTFOLIO ARTIFACTS SECTION */}
        <section id="downloads" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-zinc-800 relative overflow-hidden bg-gradient-to-b from-zinc-900/80 to-zinc-950">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-left max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
                  Verified Documentation
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Download Full Portfolio & CV
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Need an offline copy for HR review or technical hiring managers? Grab the formatted PDF or editable DOCX version containing comprehensive project specs, transcripts, and verified credentials.
                </p>
              </div>

              {/* Two Download Action Cards */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                {/* PDF Download Card */}
                <a
                  href="./Zaw_Myo_Tun_Portfolio.pdf"
                  download="Zaw_Myo_Tun_Portfolio.pdf"
                  onClick={() => showToast('Downloading PDF Portfolio...')}
                  className="w-full sm:w-64 p-5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-blue-500/60 transition-all flex items-center gap-4 group shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      Portfolio PDF
                    </p>
                    <p className="text-xs text-zinc-400">PDF Format (~812 KB)</p>
                    <span className="text-[11px] text-blue-400 font-medium inline-flex items-center gap-1 mt-1">
                      Download PDF <Download className="w-3 h-3" />
                    </span>
                  </div>
                </a>

                {/* DOCX Download Card */}
                <a
                  href="./Zaw_Myo_Tun_Portfolio.docx"
                  download="Zaw_Myo_Tun_Portfolio.docx"
                  onClick={() => showToast('Downloading DOCX CV...')}
                  className="w-full sm:w-64 p-5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-blue-500/60 transition-all flex items-center gap-4 group shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                    <Download className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      Resume Word (DOCX)
                    </p>
                    <p className="text-xs text-zinc-400">Word Doc (~77 KB)</p>
                    <span className="text-[11px] text-blue-400 font-medium inline-flex items-center gap-1 mt-1">
                      Download DOCX <Download className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Something Meaningful
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              I am actively seeking junior software developer, full-stack Python/Django, and AI engineering opportunities. Reach out directly and let's discuss how I can contribute to your team.
            </p>
          </div>

          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
                    Direct Email Address
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white select-all">
                    zawmyotun.kl@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={copyEmail}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/80 transition-all active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      Copy Email
                    </>
                  )}
                </button>

                <a
                  href="mailto:zawmyotun.kl@gmail.com"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4" />
                  Send Mail
                </a>
              </div>
            </div>

            {/* Quick Credentials & Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-zinc-800/80 text-left">
              <div className="space-y-1">
                <p className="text-xs text-zinc-500 font-mono uppercase">GitHub Profile</p>
                <a
                  href="https://github.com/Z-Dev-Coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  github.com/Z-Dev-Coder
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-zinc-500 font-mono uppercase">Current Status</p>
                <p className="text-sm font-semibold text-emerald-400 inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-zinc-500 font-mono uppercase">Location</p>
                <p className="text-sm font-semibold text-zinc-200">Mandalay, Myanmar</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="z-10 border-t border-zinc-800/80 bg-zinc-950/80 py-8 text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-300">Zaw Myo Tun</span>
            <span>·</span>
            <span>© 2026 All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span>Crafted with React 19, Tailwind CSS & Vite</span>
            <a
              href="#hero"
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
