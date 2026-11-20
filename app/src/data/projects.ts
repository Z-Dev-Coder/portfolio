export interface CaseStudy {
  overview: string;
  problemDetails: string;
  solutionDetails: string;
  contributions: string[];
  architecture: string[];
  architectureDiagram?: string;
  engineeringDecisions: string[];
  keyFeatures: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'backend' | 'frontend';
  categoryLabel: string;
  badge: string;
  tagline: string;
  problem: string;
  solution: string;
  highlights: string[];
  tags: string[];
  screenshot: string;
  githubUrl: string;
  liveUrl?: string;
  isFlagship: boolean;
  caseStudy: CaseStudy;
}

export const PROJECTS: Project[] = [
  {
    id: 'recap-studio',
    title: 'Recap Studio — AI Video & Narration Suite',
    category: 'ai',
    categoryLabel: 'AI / Desktop Multimedia',
    badge: 'Flagship Personal Project',
    tagline: 'Automated video summarization, bilingual scripting, and local neural voice synthesis.',
    problem: 'Creating multilingual video summaries and localized voiceovers requires hours of manual transcription, translation, voice recording, and video editing.',
    solution: 'Engineered a desktop automation suite linking Electron and a Python FastAPI backend to orchestrate Faster-Whisper transcription, Gemini LLM bilingual scripting, and local VoxCPM2 voice synthesis.',
    highlights: [
      'Multi-process architecture: Electron.js frontend communicating with a local Python FastAPI backend service via REST and WebSockets',
      'Audio extraction and automated speech-to-text transcription utilizing Faster-Whisper models locally',
      'Bilingual script generation (English & Burmese) and chapter summarization using structured Gemini prompt templates',
      'Automated FFmpeg multimedia pipeline for segment slicing, audio ducking, waveform normalization, and subtitle burning',
      'Local neural voice synthesis integration with CUDA PyTorch acceleration for $0 recurring API cost',
    ],
    tags: ['Python', 'Electron.js', 'FastAPI', 'Gemini AI', 'Faster-Whisper', 'FFmpeg', 'PyTorch'],
    screenshot: './projects/recap-studio.png',
    githubUrl: 'https://github.com/Z-Dev-Coder/recap-studio',
    isFlagship: true,
    caseStudy: {
      overview: 'Recap Studio is an automated desktop multimedia workbench built for content creators who need to generate bilingual video summaries, narration tracks, and sliced highlight clips from long-form video content.',
      problemDetails: 'Manually translating, rewriting scripts into conversational Burmese and English, generating clear voiceovers, and precisely syncing them with video cuts is tedious and requires multiple disconnected software tools.',
      solutionDetails: 'Designed an integrated desktop application combining an intuitive Electron UI with a robust local Python microservice. The user drops a video file, selects summarization parameters, and the system runs an automated pipeline from STT to video rendering.',
      contributions: [
        'Architected the local client-server separation between Electron.js and Python FastAPI',
        'Built background job queuing for long-running transcription and video rendering tasks',
        'Implemented bilingual prompt engineering workflows for structured script output',
        'Integrated FFmpeg subprocess execution with real-time progress parsing and error handling',
      ],
      architecture: [
        'Frontend UI: Electron.js with React & Tailwind for desktop interface controls',
        'API Gateway: Local FastAPI running on localhost with CORS restriction and process lifecycle hooks',
        'Speech Engine: Faster-Whisper local model inference for accurate timestamped transcripts',
        'LLM Layer: Gemini API structured response generation for chaptering and bilingual translation',
        'TTS & Render Engine: Local VoxCPM2 neural voice generation + FFmpeg multimedia composite pipeline',
      ],
      engineeringDecisions: [
        'Separated heavy PyTorch and FFmpeg dependencies into a standalone Python service rather than embedding in Electron to prevent UI thread freezing',
        'Implemented token-efficient chunking for long transcripts before feeding them into the LLM context window',
        'Adopted local STT and local TTS where possible to keep user media private and eliminate cloud computing costs',
      ],
      keyFeatures: [
        'Drag-and-drop video file ingestion with instant metadata extraction',
        'Automated timestamped transcript generation with word-level confidence',
        'Bilingual script drafting with side-by-side editing and preview',
        'One-click video highlight export with burned subtitles and audio ducking',
      ],
    },
  },
  {
    id: 'jumpstart',
    title: 'JumpStart AI Support Chatbot',
    category: 'ai',
    categoryLabel: 'AI / Backend / Agentic Systems',
    badge: 'HDSE Capstone Project',
    tagline: 'Autonomous multi-agent customer support with pgvector RAG and real-time human agent escalation.',
    problem: 'Standard rule-based chatbots fail on complex queries, while naive LLM bots hallucinate policy details and lack reliable human supervisor handover mechanisms.',
    solution: 'Designed an agentic support architecture using LangGraph state graphs for multi-step reasoning, PostgreSQL pgvector for semantic knowledge retrieval, and Django Channels for live human agent handover.',
    highlights: [
      'Multi-agent LangGraph workflow with deterministic state routing and tool invocation',
      'Domain grounding using PostgreSQL pgvector cosine similarity search on verified store policies',
      'Dynamic confidence scoring and sentiment analysis to trigger automated human handover',
      'Full-duplex real-time communication powered by Django Channels WebSockets',
    ],
    tags: ['Python', 'Django', 'LangGraph', 'pgvector', 'PostgreSQL', 'WebSockets', 'Django Channels'],
    screenshot: './projects/jumpstart-architecture.png',
    githubUrl: 'https://github.com/Z-Dev-Coder/JumpStart-AI-Supported-Chatbot',
    isFlagship: true,
    caseStudy: {
      overview: 'JumpStart is an enterprise-oriented customer service automation platform developed as an academic capstone project (HDSE-CPL). It blends autonomous agentic AI with human oversight for retail support operations.',
      problemDetails: 'Retail customer support requires both fast answers to common questions (order status, returns, warranty) and absolute accuracy. When customers become frustrated or present edge cases, an automated system must seamlessly transition to a live human agent without losing conversation history.',
      solutionDetails: 'Implemented a LangGraph state graph where each user message is classified, grounded against knowledge embeddings in pgvector, and evaluated. If confidence falls below threshold or sentiment indicates frustration, the system routes the session to a human agent dashboard via WebSockets.',
      contributions: [
        'Engineered the LangGraph state machine graph and prompt nodes',
        'Configured PostgreSQL with pgvector extension and chunking pipelines for policy documents',
        'Built Django Channels WebSocket consumers and authentication for customer and agent channels',
        'Implemented SQLite / PostgreSQL schema for conversation logging, support cases, and audit trails',
      ],
      architecture: [
        'Web Layer: Django 5 with Django Channels ASGI application server',
        'Agentic Graph: LangGraph state machine with conditional routing edges (FAQ, Order Lookup, Escalation)',
        'Vector Store: PostgreSQL with pgvector extension indexing chunked policy embeddings',
        'Handover System: WebSocket event bus notifying human staff with prioritized support ticket generation',
      ],
      architectureDiagram: './projects/jumpstart-workflow.png',
      engineeringDecisions: [
        'Utilized LangGraph instead of linear chains to enable cyclical loops, retry states, and explicit human-in-the-loop pause nodes',
        'Stored vector embeddings directly in PostgreSQL using pgvector rather than a separate vector database to simplify relational integrity and transactions',
        'Implemented session state serialization in PostgreSQL to allow human agents to read the complete preceding context before replying',
      ],
      keyFeatures: [
        'Semantic retrieval against store FAQs, return guidelines, and warranty terms',
        'Simulated order status and tracking query tools',
        'Automated sentiment and confidence analysis per turn',
        'Live staff dashboard with instant conversation takeover and response injection',
      ],
    },
  },
  {
    id: 'english-coach',
    title: 'English Coach AI EdTech Platform',
    category: 'ai',
    categoryLabel: 'AI / EdTech / Full Stack',
    badge: 'Applied AI Project',
    tagline: 'Adaptive CEFR-aligned language learning powered by local Ollama LLMs with $0 cloud API cost.',
    problem: 'Commercial language apps rely on generic multiple-choice questions or expensive cloud APIs, limiting personalized conversational feedback for price-sensitive learners.',
    solution: 'Built a full-stack educational web application evaluating learner inputs across an 8-skill CEFR diagnostic matrix, backed by a local Ollama LLM service for private, free inference.',
    highlights: [
      'Diagnostic evaluation across an 8-skill CEFR matrix (Grammar, Vocabulary, Reading, Speaking, etc.)',
      'Self-hosted Ollama local LLM integration providing real-time grammatical feedback at zero cloud cost',
      'Modular REST API architecture linking a responsive React + Tailwind frontend with a Django backend',
      'Automated personalized exercise generation targeting the learner’s weakest skill areas',
    ],
    tags: ['Python', 'Django REST', 'React', 'TypeScript', 'Tailwind CSS', 'Ollama', 'Local LLMs'],
    screenshot: './projects/english-coach.png',
    githubUrl: 'https://github.com/Z-Dev-Coder/english-coach',
    isFlagship: true,
    caseStudy: {
      overview: 'English Coach AI is an adaptive language learning platform designed to provide rigorous, personalized English practice through local open-weight language models.',
      problemDetails: 'Learners need actionable, sentence-by-sentence feedback on their grammar, phrasing, and vocabulary rather than repetitive flashcards. Running every student submission through commercial LLM APIs incurs high recurring costs.',
      solutionDetails: 'Designed an open architecture pairing a Django REST API backend with local Ollama inference instances (e.g. Mistral / LLaMA). A React frontend delivers interactive writing prompts, immediate grammar critique, and historical progress visualizations.',
      contributions: [
        'Built the complete Django REST Framework backend with custom learner assessment endpoints',
        'Developed the React frontend with responsive Tailwind CSS interface and exercise screens',
        'Implemented the Ollama local AI client with timeout fallback and output parsing routines',
        'Created learner profile models tracking historical skill metrics and exercise performance',
      ],
      architecture: [
        'Frontend: React 18, TypeScript, Tailwind CSS, Vite',
        'Backend: Django REST Framework with token-based authentication',
        'Inference Service: Local Ollama daemon running optimized quantized open-source models',
        'Database: Relational SQLite / PostgreSQL storing CEFR skill metrics, session logs, and exercises',
      ],
      architectureDiagram: './projects/english-coach-practice.png',
      engineeringDecisions: [
        'Enforced structured JSON output schema from local LLMs to guarantee predictable parsing for UI display',
        'Separated skill tracking into 8 independent dimensions rather than a single coarse CEFR grade to give learners precise improvement guidance',
        'Designed an abstract AIProvider interface allowing seamless switching between local Ollama models and cloud APIs',
      ],
      keyFeatures: [
        'Interactive sentence construction and writing exercises',
        'Instant grammar error detection with explanations and suggested corrections',
        'Personalized practice recommendations generated from the learner’s lowest scores',
        'Clean progress dashboard tracking CEFR level trajectories over time',
      ],
    },
  },
  {
    id: 'merrymeal',
    title: 'MerryMeal Charitable Logistics Platform',
    category: 'backend',
    categoryLabel: 'Full Stack / Social Impact',
    badge: 'Agile Team Capstone',
    tagline: 'Meals on Wheels coordination with role-based access, GIS delivery validation, and kitchen workflows.',
    problem: 'Charity food organizations face logistical bottlenecks coordinating donors, partner kitchens, volunteer drivers, and dietary requirements under strict food safety standards.',
    solution: 'Collaborated in an Agile Scrum team of 5 (Tech Titans) to build a Django web application managing member registrations, dietary profiles, meal preparation, and 10km geofenced deliveries.',
    highlights: [
      'Delivered through 3 structured Scrum sprint cycles with Jira tracking and daily stand-ups',
      'Granular Role-Based Access Control (Admin, Kitchen Staff, Volunteer Driver, Donor, Member)',
      '10km GIS geofenced delivery feasibility validation (hot meal vs frozen package distribution)',
      'Food safety compliance logging for temperature checks and delivery time windows',
    ],
    tags: ['Django', 'Python', 'SQLite', 'Agile / Scrum', 'Jira', 'GIS Logistics', 'RBAC'],
    screenshot: '',
    githubUrl: 'https://github.com/Z-Dev-Coder/MerryMeal',
    isFlagship: false,
    caseStudy: {
      overview: 'MerryMeal is a full-stack charitable logistics platform developed as an academic team capstone (HDSE-PMI / HDSE-DEA) to manage daily meal preparation and distribution for elderly and disabled community members.',
      problemDetails: 'The charity needed to coordinate multiple distinct user types: vulnerable members requesting meals, donors funding supplies, partner kitchens preparing food, and volunteer drivers delivering across geographic boundaries.',
      solutionDetails: 'Built a multi-portal Django application featuring strict role-based dashboards, automated eligibility validation based on distance from kitchen centers, and scheduling tools.',
      contributions: [
        'Implemented role-based permission checks and view dispatchers across user types',
        'Developed meal order workflows and dietary restriction filtering in Django models',
        'Participated in sprint planning, backlog grooming, and team code reviews in Jira',
        'Contributed to the project proposal report, architecture design documents, and user manuals',
      ],
      architecture: [
        'Application: Django full-stack MVC with Bootstrap 5 responsive templates',
        'Database: Relational SQLite / MySQL with normalized tables for members, meals, and dispatches',
        'Security: Django authentication with custom group-level permission decorators',
      ],
      engineeringDecisions: [
        'Implemented distance checking logic to route meals within 10km as freshly cooked hot meals, and beyond 10km as pre-packaged frozen food',
        'Structured modular Django apps (users, meals, logistics) to enable parallel feature development across the 5 team members',
      ],
      keyFeatures: [
        'Role-specific dashboards for members, caregivers, kitchens, and drivers',
        'Geofenced delivery calculation based on kitchen proximity',
        'Donor contribution tracking and transparent campaign metrics',
        'Kitchen food preparation batching and safety status logging',
      ],
    },
  },
  {
    id: 'dobu-martial-arts',
    title: 'DoBu Martial Arts Academy Portal',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    badge: 'Live Production Demo',
    tagline: 'Modern responsive martial arts portal with interactive training timetable and fee calculator.',
    problem: 'Fitness and martial arts academies struggle to communicate complex class timetables, discipline choices, and multi-tier fee structures to prospective students.',
    solution: 'Built a lightweight, high-performance responsive web portal with semantic HTML5, modern CSS3 (Flexbox/Grid), and client-side JavaScript for dynamic schedule filtering and real-time fee calculation.',
    highlights: [
      'Interactive tiered membership calculation engine with add-on equipment and personal tuition toggles',
      'Dynamic timetable schedule viewer with filterable martial arts disciplines (Judo, Karate, Jiu-Jitsu, Muay Thai)',
      '100% semantic HTML5 and clean CSS3 architecture with zero external framework dependencies',
      'Fully responsive mobile-first architecture deployed and verified live on GitHub Pages',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'GitHub Pages'],
    screenshot: '',
    githubUrl: 'https://github.com/Z-Dev-Coder/DoBuMartialArts',
    liveUrl: 'https://z-dev-coder.github.io/DoBuMartialArts/',
    isFlagship: false,
    caseStudy: {
      overview: 'DoBu Martial Arts Academy is a responsive web application designed for a martial arts fitness center to showcase course offerings, instructor profiles, and membership options.',
      problemDetails: 'Prospective students need to quickly discover which class fits their schedule and understand exact pricing based on membership tier, training frequency, and extra options without calling staff.',
      solutionDetails: 'Engineered a clean frontend application featuring an interactive JavaScript fee calculator, filterable schedule grids, and accessible enrollment forms deployed on GitHub Pages.',
      contributions: [
        'Authored 100% semantic HTML5 and custom modular CSS3 without heavy CSS frameworks',
        'Engineered client-side JavaScript calculation logic with live DOM state updates',
        'Designed mobile-friendly navigation and responsive touch-first timetables',
        'Configured repository and deployed live production site on GitHub Pages',
      ],
      architecture: [
        'Frontend: Semantic HTML5, CSS3 Grid/Flexbox, Vanilla JavaScript ES6+',
        'Hosting: GitHub Pages static site hosting with automated branch deployment',
      ],
      engineeringDecisions: [
        'Deliberately avoided heavy libraries (jQuery, React) to achieve sub-second load times and lightweight mobile performance',
        'Used CSS custom properties for unified brand theming and clean spacing tokens',
      ],
      keyFeatures: [
        'Live membership fee calculator with instant cost updates',
        'Interactive weekly timetable with category filtering by martial art',
        'Mobile-first responsive layout tested across multiple viewports',
        'Clean contact and registration forms with validation',
      ],
    },
  },
  {
    id: 'silent-library',
    title: 'Silent Library Management System',
    category: 'backend',
    categoryLabel: 'Backend Engineering',
    badge: 'Academic Project',
    tagline: 'Django-powered library catalog, book circulation tracking, automated fines, and email alerts.',
    problem: 'Small community and school libraries often rely on manual spreadsheets to track loans, leading to lost inventory, overdue disputes, and missed returns.',
    solution: 'Developed a relational library information system in Django featuring catalog search, borrow/return lifecycle tracking, automatic fine calculation for overdue items, and email notifications.',
    highlights: [
      'Complete book circulation lifecycle tracking (checkout, renewal, return, lost book states)',
      'Automated fine calculation algorithms calculating penalties based on daily overdue rates',
      'Role-based dashboards separating librarian administration from student patron views',
      'Integrated SMTP email dispatch for reservation confirmations, due-date reminders, and overdue alerts',
    ],
    tags: ['Django', 'Python', 'SQLite', 'SMTP Notifications', 'Bootstrap 5', 'RBAC'],
    screenshot: '',
    githubUrl: 'https://github.com/Z-Dev-Coder/silentlibrary',
    isFlagship: false,
    caseStudy: {
      overview: 'Silent Library is a full-stack library management system designed to automate book cataloging, patron memberships, book loans, and overdue handling.',
      problemDetails: 'Library staff need reliable tracking of who borrowed which book, when it is due, and automatic calculation of fines to prevent inventory shrinkage.',
      solutionDetails: 'Built a robust Django web application enforcing strict relational foreign key constraints, automated status transitions, and user email alerts.',
      contributions: [
        'Designed normalized relational database models for books, authors, patrons, and loan transactions',
        'Built administrative views for bulk book ingestion, ISBN validation, and inventory auditing',
        'Configured SMTP backend for automated patron notification emails',
        'Implemented security controls preventing unauthorized loan record modification',
      ],
      architecture: [
        'Framework: Django 5 MVC architecture with built-in ORM',
        'Database: Relational SQLite database with transactional integrity and indexing',
        'Frontend: Bootstrap 5 responsive UI with server-side Django template rendering',
      ],
      engineeringDecisions: [
        'Used Django model methods and signals to handle loan status transitions and overdue fine calculations deterministically',
        'Enforced strict database constraints to ensure a single physical book copy cannot be double-borrowed concurrently',
      ],
      keyFeatures: [
        'Book catalog search with genre, author, and availability filters',
        'One-click loan checkout and return processing for librarians',
        'Automatic overdue fine calculation per day past due date',
        'Patron loan history and automated email notifications',
      ],
    },
  },
  {
    id: 'math-quiz',
    title: 'Math Quiz Educational Mobile App',
    category: 'frontend',
    categoryLabel: 'Mobile / Android Java',
    badge: 'BTEC Unit 7 Project',
    tagline: 'Native Android mental arithmetic practice game with timed tiers and offline score tracking.',
    problem: 'Elementary arithmetic practice apps are often bloated with ads, require online connectivity, or lack progressive pacing to challenge learners appropriately.',
    solution: 'Developed a native Android application in Java (Android Studio) featuring randomized arithmetic generation, 3 progressive timed difficulty tiers, and local SQLite high score persistence.',
    highlights: [
      'Engineered with Android SDK, XML layout architectures, and object-oriented Java',
      '3 progressive difficulty tiers (Novice, Adept, Master) with dynamic countdown timer mechanics',
      'Local SQLite database persistence storing high scores and player analytics without internet requirement',
      'Accessible touch targets and immediate audio-visual feedback on answers',
    ],
    tags: ['Java', 'Android Studio', 'SQLite', 'Mobile Architecture', 'BTEC Unit 7'],
    screenshot: '',
    githubUrl: 'https://github.com/Z-Dev-Coder/Math-Quiz-Mobile-App',
    isFlagship: false,
    caseStudy: {
      overview: 'Math Quiz is a native Android mobile application developed as part of Pearson BTEC International Level 3 Diploma in IT (Unit 7: Mobile Apps Development).',
      problemDetails: 'Children need engaging, focused mental arithmetic practice with instant feedback, clear visual countdowns, and offline score records that work reliably on low-resource Android devices.',
      solutionDetails: 'Engineered a native Android app in Java utilizing Android Activity lifecycles, background timers, sound synthesis, and SQLite database storage.',
      contributions: [
        'Built native Java logic for dynamic non-negative question generation across addition, subtraction, multiplication, and division',
        'Designed XML layouts ensuring responsive display across varying Android screen sizes and densities',
        'Implemented SQLite database helper for saving high scores and tracking quiz history',
        'Handled Android activity lifecycle state saving to prevent data loss on screen rotation',
      ],
      architecture: [
        'Platform: Native Android SDK with Java OOP architecture',
        'UI: Native Android XML layouts with ConstraintLayout and responsive dimensions',
        'Storage: Local Android SQLite database helper for offline persistence',
      ],
      engineeringDecisions: [
        'Built randomized question generators with strict constraints (e.g. division results must be clean integers) to maintain pedagogical validity',
        'Decoupled game loop logic from the UI thread using Android CountDownTimer to ensure smooth UI responsiveness',
      ],
      keyFeatures: [
        'Three timed difficulty tiers (Untimed, 20-second, and 10-second blitz)',
        'Support for all four basic arithmetic operators with difficulty scaling',
        'Offline high score board persisted across app restarts',
        'Visual countdown progress bar and immediate answer feedback',
      ],
    },
  },
];
